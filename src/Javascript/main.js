// IMPORTANT GLOBALS
const pc = 1;
const MEM_OFFSET = 64;
// IMPORTANT GLOBALS

function main() {
    let address = generateAddress(pc);
    let instruction = mem[address];

}

function instructionHandler() {
}

function initGUI() {
}

function verifyFile() {
    // Verify correct file type
    console.clear();
    console.log("Verifying File '" + asmFile.name + "'");
    let extension = asmFile.name.toLowerCase().substr((asmFile.name.lastIndexOf('.') + 1));
    if (!/(asm|txt)$/ig.test(extension)) {
        alert('Please upload a ".txt" or ".asm" file');
        return;
    }
    customTxt.innerHTML = asmFile.name;

    // Begin reading file
    const reader = new FileReader();
    reader.readAsText(asmFile);
    let fullFile = "";
    reader.onload = function () {
        // TODO: Clear memory and label map on new file upload
        fullFile += reader.result.replace(/,/g, ';').split('\n');
        const lines = fullFile.split(',');

        let memoryAddress = 1;
        let fileLine = 1;
        let dataArea = false;
        for (let i = 0; i < lines.length; i++) {
            // Parse instruction and generate memory address for instruction
            let instruction = parseInstruction(lines[i]);
            if (instruction.length > 0) console.log(instruction);
            let address = generateAddress(memoryAddress);

            // Verify instruction
            if (dict.has(instruction[0])) {
                write(address, instruction);
            } else if (instruction.length === 0 || instruction[0] === null || instruction[0].match(/^ *$/) !== null) {
                memoryAddress--;
            } else if (instruction[0].indexOf(':') > -1) {
                // Label found: Make sure ':' is the last character of the label
                // If not, user didn't put space before instruction
                if (instruction[0].indexOf(':') !== (instruction[0].length - 1)) {
                    let temp = instruction[0].split(':');
                    let newInstruction = [];
                    newInstruction.push(temp[0] + ':');
                    newInstruction.push(temp[1]);
                    for (let j = 1; j < instruction.length; j++) newInstruction.push(instruction[j]);
                    instruction = newInstruction;
                }

                // Add label to label map
                labels.set(instruction[0].replace(':', ''), address);

                // Get instruction if it is on the same line as the label and add it to memory
                if(instruction.length > 1) {
                    let tempInstruction = [];
                    for (let j = 1; j < instruction.length; j++) tempInstruction.push(instruction[j]);
                    //console.log(tempInstruction);
                    write(address, tempInstruction);
                } else {
                    memoryAddress--;
                }
            } else if (!dict.has(instruction[0]) && dataArea) {
                if (instruction[0] === '.end'){
                    break;
                }
                write(address, instruction);
            }else if (instruction[0].indexOf('.') === 0 && !dataArea) {
                //console.log('Line is a heading: ' + instruction[0]);
                if(instruction[0] === '.data'){
                    //console.log('Found .data heading');
                    dataArea = true;
                }
                memoryAddress--;
            } else if (instruction[0].indexOf('#') === 0) {
                    memoryAddress--;
            } else {
                alert('(Line ' + fileLine + '): \'' + instruction[0] + '\' is not a proper instruction');
                break;
            }
            memoryAddress++;
            fileLine++;
        }
        console.log(labels);
        console.log(mem);
    };
}

function parseInstruction(line) {
    line = line.replace(/;/g, ',').trim();
    line = line.replace(/\t/g, ',');
    line = line.replace(/ /g, ',');
    line = line.replace(/\(/g, ',');
    line = line.replace(/\)/g, '');
    const tempArr = line.split(',');
    const instruction = [];
    for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j].indexOf('#') === 0 || tempArr.indexOf('//') === 0) {
            break;
        } else if (tempArr[j] === null || tempArr[j].match(/^ *$/) !== null) {
            continue;
        }
        instruction.push(tempArr[j]);
    }
    return instruction;
}

function generateAddress(memoryAddress) {
    let address = null;
    if (memoryAddress === 1){
        address = '0x' + (MEM_OFFSET).toString(16);
    } else {
        address = '0x' + (MEM_OFFSET + memoryAddress - 1).toString(16);
    }
    return address;
}

function setPC(hexAddress) {
    return parseInt(hexAddress) - MEM_OFFSET;
}
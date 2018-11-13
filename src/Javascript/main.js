// IMPORTANT GLOBALS
const pc = 1;
const memoryOffset = 64;
// IMPORTANT GLOBALS

function main() {
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
        fullFile += reader.result.replace(/,/g, ';').split('\n');
        const lines = fullFile.split(',');

        let memoryAddress = 1;
        let fileLine = 1;
        for (let i = 0; i < lines.length; i++) {
            // Parse instruction and generate memory address for instruction
            let instruction = parseInstruction(lines[i]);
            if (instruction.length > 0) console.log(instruction);
            let address = generateAddress(memoryAddress);

            // Verify instruction
            if (dict.has(instruction[0])) {
                write(address, instruction);
            } else if (instruction.length === 0 || instruction[0] === null || instruction[0].match(/^ *$/) !== null) {
                // Line is empty
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
                labels.set(instruction[0], address);

                // Get instruction if it is on the same line as the label and add it to memory
                if(instruction.length > 1) {
                    let tempInstruction = [];
                    for (let j = 1; j < instruction.length; j++) tempInstruction.push(instruction[j]);
                    //console.log(tempInstruction);
                    write(address, tempInstruction);
                } else {
                    memoryAddress--;
                }
            } else if (instruction[0].indexOf('.') === 0) {
                //console.log('Line is a heading: ' + instruction[0]);
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
        if (tempArr[j] === '#') {
            break;
        } else if (tempArr[j] === null || tempArr[j].match(/^ *$/) !== null) {
            // Array entry empty: Do nothing
        } else {
            instruction.push(tempArr[j]);
        }
    }
    return instruction;
}

function generateAddress(memoryAddress) {
    let address = null;
    if (memoryAddress === 1){
        address = '0x' + (memoryOffset).toString(16);
    } else {
        address = '0x' + (memoryOffset + memoryAddress - 1).toString(16);
    }
    return address;
}

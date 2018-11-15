// IMPORTANT GLOBALS
let pc = 0x40;
const MEM_OFFSET = 0x40;
// IMPORTANT GLOBALS


let checkPause = 0;
let runState = 'run';
function main() {
    if (runState === 'pause') {
        return;
    } else if (runState === 'run') {
        let tempVal = executeInstruction(pc);
        if (isNaN(tempVal)) {
            if (tempVal === 'break' || tempVal === 'finished') {
                updateMemoryTable();
                updateRegisterTable();
                return;
            }
            else {
                alert('Error at 0x' + pc.toString(16) + ': ' + tempVal);
                return;
            }
        } else {
            if (tempVal === 1) pc++;
            else pc = tempVal;
        }
        checkPause++;
        if (checkPause >= 100) {
            setTimeout(() => {
                checkPause = 0;
                main();
            }, 500);
        } else {
            main()
        }
    }
}

function pauseExecution() {
    runState = 'pause';
    setTimeout(() => {
        updateRegisterTable();
        updateMemoryTable();
    },700)
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

        let memoryAddress = MEM_OFFSET, fileLine = 1;
        let dataArea = false;
        for (let i = 0; i < lines.length; i++) {
            // Parse instruction and generate memory address for instruction
            let instruction = parseInstruction(lines[i]);
            if (instruction.length > 0) console.log(instruction);

            // Check if space is available in memory
            if (memoryAddress > (MEMORY_SIZE - MEM_OFFSET)) {
                alert('Total instruction count exceeds memory limit: ' + MEMORY_SIZE - MEM_OFFSET + ' blocks');
                break;
            }

            // Verify and add instruction to memory
            if (dict.has(instruction[0])) {
                write(memoryAddress, instruction);
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
                labels.set(instruction[0].replace(':', ''), memoryAddress);

                // Get instruction if it is on the same line as the label and add it to memory
                if(instruction.length > 1) {
                    let tempInstruction = [];
                    for (let j = 1; j < instruction.length; j++) tempInstruction.push(instruction[j]);
                    //console.log(tempInstruction);
                    write(memoryAddress, tempInstruction);
                } else {
                    memoryAddress--;
                }
            } else if (!dict.has(instruction[0]) && dataArea) {
                if (instruction[0] === '.end'){
                    break;
                }
                write(memoryAddress, instruction);
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
    line = line.replace('/*', ' /* ');
    line = line.replace('*/', ' */ ');
    line = line.replace(/\t/g, ',');
    line = line.replace(/ /g, ',');
    line = line.replace(/\(/g, ',');
    line = line.replace(/\)/g, '');
    const tempArr = line.split(',');
    const instruction = [];
    for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j] === '*/') {
            blockComment = false;
        }
        if (!blockComment) {
            if (tempArr[j].indexOf('#') === 0 || tempArr[j].indexOf('//') === 0 || tempArr[j] === '/*') {
                if (tempArr[j] === '/*') {
                    blockComment = true;
                }
                break;
            } else if (tempArr[j] === null || tempArr[j].match(/^ *$/) !== null) {
                continue;
            }
            if (tempArr[j] !== '*/') {
                instruction.push(tempArr[j]);
            }
        }
    }
    return instruction;
}
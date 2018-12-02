// IMPORTANT GLOBALS
let pc = 0x40;
const MEM_OFFSET = 0x40;
// IMPORTANT GLOBALS

let newUpload = false, blockComment = false, fileUploaded = false;

function main() {
    let tempVal = executeInstruction(pc);
    if (isNaN(tempVal)) {
        if (tempVal === 'break' || tempVal === 'finished') {
            // This is an exit status from the instruction execution
            tempVal = 'end program';
        } else {
            alert('Error at 0x' + pc.toString(16) + ': ' + tempVal);
        }
        paused = true;
        programRunning = false;
        clearInterval(interval);
        return tempVal;
    } else {
        if (tempVal === 1) pc++;
        else pc = tempVal;
    }
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
        newUpload = true;
        // Don't upload new file if program is currently running
        if (programRunning){
            newUpload = false;
            alert('Please pause the program to upload a new file');
            return;
        }
        runButton.innerHTML = 'Run';
        pauseButton.innerHTML = 'Pause';
        resetGui();
        fullFile += reader.result.replace(/,/g, ';').split('\n');
        const lines = fullFile.split(',');

        let memoryAddress = MEM_OFFSET, fileLine = 1;
        let dataArea = false;
        for (let i = 0; i < lines.length; i++) {
            // Parse instruction and generate memory address for instruction
            let instruction = parseInstruction(lines[i]);
            if (instruction.indexOf('Unknown Register') > -1) {
                alert('Line ' + fileLine + ': ' + instruction);
                break;
            }
            if (instruction.length > 0) console.log(instruction);

            // Check if space is available in memory
            if (memoryAddress > (MEMORY_SIZE - MEM_OFFSET)) {
                alert('Total instruction count exceeds memory limit: ' + MEMORY_SIZE + ' blocks');
                return;
            }

            // Verify and add instruction to memory
            if (dict.has(instruction[0])) {
                write(memoryAddress, instruction);
            }else if (instruction.length === 0 || instruction[0] === null || instruction[0].match(/^ *$/) !== null) {
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
                if (instruction.length > 1) {
                    let tempInstruction = [];
                    for (let j = 1; j < instruction.length; j++) tempInstruction.push(instruction[j]);
                    //console.log(tempInstruction);
                    write(memoryAddress, tempInstruction);
                } else {
                    memoryAddress--;
                }
            } else if (!dict.has(instruction[0]) && dataArea) {
                if (instruction[0] === '.end') {
                    break;
                }
                write(memoryAddress, instruction);
            }else if (instruction[0].indexOf('.') === 0 && !dataArea) {
                //console.log('Line is a heading: ' + instruction[0]);
                if (instruction[0] === '.data') {
                    //console.log('Found .data heading');
                    dataArea = true;
                }
                memoryAddress--;
            } else if (instruction[0].indexOf('#') === 0) {
                memoryAddress--;
            } else {
                alert('(Line ' + fileLine + '): \'' + instruction[0] + '\' is not a proper instruction');
                return;
            }
            memoryAddress++;
            fileLine++;
        }
        fileUploaded = true;
        newUpload = false;
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
    let tempArr = line.split(',');
    tempArr = tempArr.filter(function (value) {
        return value !== '';
    });

    let instruction = [];
    for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j] === '*/') {
            blockComment = false;
        }

        if (!blockComment) {
            // Check if user accesses register by its other name
            tempArr[j] = registerCheck(tempArr[j]);
            // Check if line has a comment
            if (tempArr[j].indexOf('#') === 0 || tempArr[j] === '/*') {
                if (tempArr[j] === '/*') {
                    blockComment = true;
                }
                break;
            } else if (tempArr[j].indexOf('Unknown Register') > -1) {
                return tempArr[j];
            }
            if (tempArr[j] !== '*/') {
                instruction.push(tempArr[j]);
            }
        }
    }
    return instruction;
}

function registerCheck(operand) {
    // Invalid register exception
    if (operand.indexOf('r') === 0) {
        let value = operand.replace('r', '');
        if (parseInt(value) > 31 && value !== 'a') {
            return 'Unknown Register ' + operand;
        }
    }
    // Convert register names
    if (operand === 'et') operand = 'r24';
    else if (operand === 'bt') operand = 'r25';
    else if (operand === 'gp') operand = 'r26';
    else if (operand === 'sp') operand = 'r27';
    else if (operand === 'fp') operand = 'r28';
    else if (operand === 'ea') operand = 'r29';
    else if (operand === 'sstatus') operand = 'r30';
    else if (operand === 'ra') operand = 'r31';
    return operand;
}

function setSliderSwitch(sliderNumber) {
    // mem[0xFFFF] for slider swtiches, last 4 bits are the only ones used
    if (sliderNumber === 0) {
        mem[0xFFFF] = mem[0xFFFF] | 0x1;
    } else if (sliderNumber === 1) {
        mem[0xFFFF] = mem[0xFFFF] | 0x2;
    } else if (sliderNumber === 2) {
        mem[0xFFFF] = mem[0xFFFF] | 0x4;
    } else if (sliderNumber === 3) {
        mem[0xFFFF] = mem[0xFFFF] | 0x8;
    }
}
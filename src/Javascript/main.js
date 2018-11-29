// IMPORTANT GLOBALS
let pc = 0;
const MEM_OFFSET = 0x40;
// IMPORTANT GLOBALS

let newUpload = false, blockComment = false, fileUploaded = false;

function main() {
    // Execute instruction given current PC
    let value = executeInstruction(pc + MEM_OFFSET);

    // Check for exit status else increment PC based on return value
    if (isNaN(value)) {
        // Check if program is exiting due to completion or error
        if (value === 'break' || value === 'finished') {
            value = 'end program';
        } else {
            alert('Error at 0x' + pc.toString(16) + ': ' + value);
        }
        paused = true;
        programRunning = false;
        clearInterval(interval);
        interval = null;
        return value;
    } else {
        // Increment or set PC based on value returned
        if (value === 1) pc++;
        else pc = value;
    }
}

function verifyFile() {
    // Verify correct file type by extension
    if (asmFile === undefined) return;
    console.clear();
    console.log("Verifying File '" + asmFile.name + "'");
    let extension = asmFile.name.toLowerCase().substr((asmFile.name.lastIndexOf('.') + 1));
    if (!/(asm|txt)$/ig.test(extension)) {
        alert('Please upload a ".txt" or ".asm" file');
        return;
    }

    // Begin reading file
    const reader = new FileReader();
    reader.readAsText(asmFile);
    let fullFile = "";
    reader.onload = function () {
        // Don't run verification if program is running or reader doesn't get a file
        if (reader.result === null) return;
        else if (programRunning) {
            alert('Please pause the program to upload a new file');
            return;
        }

        // Set temp variables in the event the verification fails
        let tempMem = mem;
        let tempLabels = labels;

        // Begin parsing new file by clearing GUI and tables
        newUpload = true;
        resetGui();
        fullFile += reader.result.replace(/,/g, ';').split('\n');
        const lines = fullFile.split(',');

        let memoryAddress = MEM_OFFSET, fileLine = 1;
        let dataArea = false, finishedVerify = false;
        for (let i = 0; i < lines.length; i++) {
            // Parse instruction in each line
            let instruction = parseInstruction(lines[i]);
            if (instruction.indexOf('Unknown Register') > -1) {
                // Current instruction set contains a register greater than 31 or an invalid register
                alert('Line ' + fileLine + ': ' + instruction);
                mem = tempMem;
                labels = tempLabels;
                newUpload = false;
                return;
            }
            if (instruction.length > 0) console.log(instruction);

            // Check if space is available in memory
            if (memoryAddress > (MEMORY_SIZE - MEM_OFFSET)) {
                alert('Total instruction count exceeds memory limit: ' + MEMORY_SIZE + ' blocks');
                mem = tempMem;
                labels = tempLabels;
                newUpload = false;
                return;
            }

            // Verify and add instruction to memory
            if (dict.has(instruction[0])) {
                // Dictionary has instruction
                //let bin = opcode(instruction);
                //instruction.append(bin);
                write(memoryAddress, instruction);
            }else if (instruction.length === 0) {
                // Parsed line is empty
                console.log(instruction);
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
                    finishedVerify = true;
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
                // Instruction in file is incorrect or does not exist
                alert('Line ' + fileLine + ': \'' + instruction[0] + '\' is not a proper instruction');
                mem = tempMem;
                labels = tempLabels;
                newUpload = false;
                return;
            }

            // increment values until EOF
            memoryAddress++;
            fileLine++;
            if (i+1 === lines.length) finishedVerify = true;
        }
        if (finishedVerify) {
            customTxt.innerHTML = asmFile.name;
            fileUploaded = true;
        }
        if (!debug) runButton.innerHTML = 'Run';
        newUpload = false;
        console.log(labels);
        console.log(mem);
    };
}

function parseInstruction(line) {
    // Replace certain characters with ',' and separate comments
    line = line.replace(/;/g, ',').trim();
    line = line.replace('/*', ' /* ');
    line = line.replace('*/', ' */ ');
    line = line.replace(/\t/g, ',');
    line = line.replace(/ /g, ',');
    line = line.replace(/\(/g, ',');
    line = line.replace(/\)/g, '');
    let tempArr = line.split(',');

    // Remove any empty array indexes
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
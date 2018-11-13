// IMPORTANT GLOBALS
const pc = 1;
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

        let lineNumber = 1;
        for (let i = 0; i < lines.length; i++) {
            const instruction = parseInstruction(lines[i]);
            if (instruction.length > 0) console.log(instruction);

            // Create address for instruction
            let address = null;
            if (lineNumber === 1){
                address = (64).toString(16);
            } else {
                address = (64 + lineNumber - 1).toString(16);
            }

            // Verify instruction
            if (dict.has(instruction[0])) {
                // Line has a proper instruction: add to memory
            } else if (instruction.length === 0 || instruction[0] === null || instruction[0].match(/^ *$/) !== null){
                //console.log('Line ' + lineNumber + ' is empty!');
                lineNumber--;
            } else if (instruction[0].indexOf(':') > -1) {
                // Line has a label: add to label map
                console.log('Label Address: 0x' + address + ', Line: ' + lineNumber);
                labels.set(instruction[0], address);

                // Get instruction if it is on the same line as the label
                if(instruction.length > 1){
                    let tempInstruction = [];
                    for (let j = 1; j < instruction.length; j++) {
                        tempInstruction.push(instruction[j]);
                    }
                    console.log(tempInstruction);
                    // Add instruction to memory
                } else {
                    lineNumber--;
                }
            } else if (instruction[0].indexOf('.') === 0) {
                console.log('Line is a heading: ' + instruction[0]);
                lineNumber--;
            }
            lineNumber++;
        }
        console.log(labels);
    };

    console.log(customTxt.innerHTML);
}

function parseInstruction(line){
    line = line.replace(/;/g, ',').trim();
    line = line.replace(/\t/g, ',');
    line = line.replace(/ /g, ',');
    line = line.replace(/\(/g, ',');
    line = line.replace(/\)/g, '');
    const tempArr = line.split(',');
    const instruction = [];
    for (let j = 0; j < tempArr.length; j++){
        if(tempArr[j] !== ''){
            instruction.push(tempArr[j]);
        }
    }
    return instruction;
}

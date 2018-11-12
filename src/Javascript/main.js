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
    //console.log('Correct file type uploaded');
    customTxt.innerHTML = asmFile.name;

    // Begin reading file
    const reader = new FileReader();
    let fullFile = "";
    reader.onload = function () {
        //console.log(reader.result.split('\n'));
        fullFile += reader.result.replace(/,/g, ';').split('\n');
        const lines = fullFile.split(',');
        let k = 1;
        for (let i = 0; i < lines.length; i++) {
            const instruction = parseInstruction(lines[i]);
            //console.log("i-Val: "+  i + "|" + lines[i]);
            console.log(instruction);
            // Verify line in file
            if (dict.has(instruction[0])) {
                // Line has a proper instruction
            } else if (instruction.length === 0 || instruction[0] === null || instruction[0].match(/^ *$/) !== null){
                console.log('Line ' + k + ' is empty!');
            } else if (instruction[0].indexOf(':') > -1) {
                //Add label to label map
                labels.set(instruction[0], k);
            } else if (instruction[0].indexOf('.') === 0) {
                console.log('Line is a heading: ' + instruction[0]);
            }
            k++;
        }
        console.log(labels);
    };

    reader.readAsText(asmFile);
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

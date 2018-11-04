// This file will handle execution of instructions

var testOperand = 'r1, r2, r3';
var testInstruction = 'add';
var immediatePresent = false;
var immediate = null;

// identifyIntruction(testInstruction, testOperand);

function identifyIntruction(instruction, operands) {  //this function will identify an instruction and pass it


    console.log('Instruction: ' + instruction);
    console.log('Operands: ' + operands);


    var instructionStatus = verifyInstruction(instruction);
    var operandsStatus = verifyOperands(operands);
    if (instruction && operandsStatus) {
        console.log('Executing Instruction');
        executeInstruction(instruction, operands);
    } else if (instructionStatus && !operandsStatus) {
        console.log('Instruction is valid, operands were not');
    } else if (!instructionStatus && operandsStatus) {
        console.log('Valid operands, invalid instruction');
    } else {
        console.log('Invalid instruction and invalid operands');
    }
}

function verifyInstruction(instruction) {

    if(1) {
        console.log('Successfully verified instruction');
        return true;
    } else {
        return false;
    }

}

function verifyOperands(operands){
    if(1) {
        console.log('Successfully verified Operands');
        return true;
    } else {
        return false;
    }
}

function executeInstruction() {
    // will need to return the executed instructions values to the memory component


}
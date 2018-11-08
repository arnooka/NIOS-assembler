// This file will handle execution of instructions
// Instruction Documentation: https://www.intel.com/content/www/us/en/programmable/documentation/iga1420498949526.html#iga1409764012031
// Omit wrctl, rdctl, eret, trap, wrprs, *io, possibly rdprs

var allInstructions = [
    'add', 'and', 'break', 'bret', 'callr', 'cmpeq', 'cmpgei', 'cmpgeu', 'cmplt', 'cmpltu',
    'cmpne', 'custom', 'div', 'divu', 'jmp', 'mov', 'mul', 'mulxss', 'mulxsu',
    'mulxuu', 'nextpc', 'nor', 'or', 'ret', 'rol', 'roli', 'ror', 'sll', 'slli', 'sra', 'srai', 'srl', 'srli',
    'sub', 'sync', 'xor', 'addi', 'andhi', 'andi', 'beq', 'bge', 'bgeu', 'bgt', 'bgtu', 'ble', 'bleu', 'blt', 'bltu', 'bne', 'br',
    'cmpeqi','cmpge', 'cmpgeui', 'cmpgt', 'cmpgti', 'cmpgtu', 'cmpgtui', 'cmple', 'cmplei', 'cmpleu',
    'cmpleui','cmplti', 'cmpltui', 'cmpnei', 'ldb', 'ldbu', 'ldh', 'ldhu',
    'ldw', 'movhi', 'movi', 'movia', 'movui', 'muli', 'orhi', 'ori', 'stb', 'sth', 'stw', 'subi', 'xorhi', 'xori', 'call', 'jmpi', 'nop'
];

/* R TYPE INSTRUCTIONS
6-bit opcode field
Three 5-bit register fields A, B, and C
11-bit opcode-extension field OPX
Instructions marked with * are pseudo-Instructions
39 Instructions:
add, and, break, bret, callr, cmpeq, cmpgei, cmpgeu, cmplt, cmpltu,
cmpne, custom, div, divu, jmp, *mov, mul, mulxss, mulxsu,
mulxuu, nextpc, nor, or, ret, rol, roli?, ror, sll, slli?, sra, srai?, srl, srli?,
sub, sync, xor,
 */
function executeRType(Rinstruction) {

    if(!Rinstruction || Rinstruction === '') {
        console.log('No instruction passed to execute R Type, stopping execution');
        return;
    }

    // var intstructionSize =  instructionArr.length;

  // identify instruction
    if (Rinstruction === 'add') {        // add rB and rC, and store in rA

    } else if (Rinstruction === 'and') {

    } else if (Rinstruction === 'break') {

    } else if (Rinstruction === 'bret') {

    } else if (Rinstruction === 'callr') {

    } else if (Rinstruction === 'cmpeq') {

    } else if (Rinstruction === 'cmpgei') {

    } else if (Rinstruction === 'cmpgeu') {

    } else if (Rinstruction === 'cmplt') {

    } else if (Rinstruction === 'cmpltu') {

    } else if (Rinstruction === 'cmpne') {

    } else if (Rinstruction === 'custom') {

    } else if (Rinstruction === 'div') {

    } else if (Rinstruction === 'divu') {

    } else if (Rinstruction === 'jmp') {

    } else if (Rinstruction === 'mov') {

    } else if (Rinstruction === 'mul') {

    } else if (Rinstruction === 'mulxss') {

    } else if (Rinstruction === 'mulxsu') {

    } else if (Rinstruction === 'mulxuu') {

    } else if (Rinstruction === 'nextpc') {

    } else if (Rinstruction === 'nor') {

    } else if (Rinstruction === 'or') {

    } else if (Rinstruction === 'ret') {

    } else if (Rinstruction === 'rol') {

    } else if (Rinstruction === 'roli') {

    } else if (Rinstruction === 'ror') {

    } else if (Rinstruction === 'sll') {

    } else if (Rinstruction === 'slli') {

    } else if (Rinstruction === 'sra') {

    } else if (Rinstruction === 'srai') {

    } else if (Rinstruction === 'srl') {

    } else if (Rinstruction === 'srli') {

    } else if (Rinstruction === 'sub') {

    } else if (Rinstruction === 'sync') {

    } else if (Rinstruction === 'xor') {

    } else {
        console.error('R type Execution was called, but it did not match any of the instructions');
    }

}


/* I TYPE INSTRUCTIONS
6-bit opcode field
Two 5-bit register fields A and B
A 16-bit immediate data field IMM16
Instructions marked with * are pseudo-Instructions
50 Instructions:
addi, andhi, andi, beq, bge, bgeu, *bgt, *bgtu, *ble, *bleu, blt, bltu, bne, br,
cmpeqi,cmpge, cmpgeui, *cmpgt, *cmpgti, *cmpgtu, *cmpgtui, *cmple, *cmplei, *cmpleu,
*cmpleui,cmplti, cmpltui, cmpnei, ldb, ldbu, ldh, ldhu,
 ldw, *movhi, *movi, *movia,  *movui, muli, orhi, ori, stb, sth, stw, *subi, xorhi, xori,
 */
function executeIType(Iinstruction, operands) {

    if(!Iinstruction) {
        console.log('No instruction passed to execute I Type');
        return;
    }

    if (Iinstruction === 'addi') {

    } else if (Iinstruction === 'andhi') {

    } else if (Iinstruction === 'andi') {

    } else if (Iinstruction === 'beq') {

    } else if (Iinstruction === 'bge') {

    } else if (Iinstruction === 'bgeu') {

    } else if (Iinstruction === 'bgt') {

    } else if (Iinstruction === 'bgtu') {

    } else if (Iinstruction === 'ble') {

    } else if (Iinstruction === 'bleu') {

    } else if (Iinstruction === 'blt') {

    } else if (Iinstruction === 'bltu') {

    } else if (Iinstruction === 'bne') {

    } else if (Iinstruction === 'br') {

    } else if (Iinstruction === 'cmpeqi') {

    } else if (Iinstruction === 'cmpge') {

    } else if (Iinstruction === 'cmpgeui') {

    } else if (Iinstruction === 'cmpgt') {

    } else if (Iinstruction === 'cmpgti') {

    } else if (Iinstruction === 'cmpgtu') {

    } else if (Iinstruction === 'cmpgtui') {

    } else if (Iinstruction === 'cmple') {

    } else if (Iinstruction === 'cmplei') {

    } else if (Iinstruction === 'cmpleu') {

    } else if (Iinstruction === 'cmpleui') {

    } else if (Iinstruction === 'cmplti') {

    } else if (Iinstruction === 'cmpltui') {

    } else if (Iinstruction === 'cmpnei') {

    } else if (Iinstruction === 'ldb') {

    } else if (Iinstruction === 'ldbu') {

    } else if (Iinstruction === 'ldh') {

    } else if (Iinstruction === 'ldhu') {

    } else if (Iinstruction === 'ldw') {

    } else if (Iinstruction === 'movhi') {

    } else if (Iinstruction === 'movi') {

    } else if (Iinstruction === 'movia') {

    } else if (Iinstruction === 'movui') {

    } else if (Iinstruction === 'muli') {

    } else if (Iinstruction === 'orhi') {

    } else if (Iinstruction === 'ori') {

    } else if (Iinstruction === 'stb') {

    } else if (Iinstruction === 'sth') {

    } else if (Iinstruction === 'stw') {

    } else if (Iinstruction === 'subi') {

    } else if (Iinstruction === 'xorhi') {

    } else if (Iinstruction === 'xori') {

    } else {
        console.error('I type Execution was called, but it did not match any of the instructions');
    }

}


/* J TYPE INSTRUCTIONS
6-bit opcode field
26 bit immediate field
Instructions:
call, jmpi,
 */
function executeJType(Jinstruction, operands) {
    if (!Jinstruction) {
        console.log('No instruction passed to execute J Type');
        return;
    }

    if (Jinstruction === 'call') {

    } else if (Jinstruction === 'jmpi') {

    } else  {
        console.error('J type Execution was called, but it did not match any of the instructions');
    }

}

/* Might be used to deal with instructions that don't fit the types or for pseudo-Instructions
Instructions:
nop,
* */
function executeOther(Oinstruction, operands) {
    if (!Oinstruction) {
        console.log('No instruction passed to execute other');
        return;
    }

    if (Oinstruction === 'nop') {
        // do nothing?
    }
}
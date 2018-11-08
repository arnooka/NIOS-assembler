// This file will handle execution of instructions
// Instruction Documentation: https://www.intel.com/content/www/us/en/programmable/documentation/iga1420498949526.html#iga1409764012031
// Omit wrctl, rdctl, eret, trap, wrprs, *io, possibly rdprs
var testOperand = 'r1, r2, r3';
var testInstruction = 'add';
var immediatePresent = false;
var immediate = null;


/* R TYPE INSTRUCTIONS
6-bit opcode field
Three 5-bit register fields A, B, and C
11-bit opcode-extension field OPX
Instructions marked with * are pseudo-Instructions
39 Instructions:
add, and, break, bret, callr, cmpeq, cmpgei, cmpgeu, cmplt, cmpltu,
cmpne, custom, div, divu, flushi?, flushp, initi?, jmp, *mov, mul, mulxss, mulxsu,
mulxuu, nextpc, nor, or, ret, rol, roli?, ror, sll, slli?, sra, srai?, srl, srli?,
sub, sync, xor,
 */
function executeRType(instruction, operands) {

    if(!instruction) {
        console.log('No instruction passed to execute R Type');
        return;
    }

  // identify instruction
    if (instruction == 'add') {

    } else if (instruction == 'and') {

    } else if (instruction == 'break') {

    } else if (instruction == 'bret') {

    } else if (instruction == 'callr') {

    } else if (instruction == 'cmpeq') {

    } else if (instruction == 'cmpgei') {

    } else if (instruction == 'cmpgeu') {

    } else if (instruction == 'cmplt') {

    } else if (instruction == 'cmpltu') {

    } else if (instruction == 'cmpne') {

    } else if (instruction == 'custom') {

    } else if (instruction == 'div') {

    } else if (instruction == 'divu') {

    } else if (instruction == 'flushi') {

    } else if (instruction == 'flushp') {

    } else if (instruction == 'initi') {

    } else if (instruction == 'jmp') {

    } else if (instruction == 'mov') {

    } else if (instruction == 'mul') {

    } else if (instruction == 'mulxss') {

    } else if (instruction == 'mulxsu') {

    } else if (instruction == 'mulxuu') {

    } else if (instruction == 'nextpc') {

    } else if (instruction == 'nor') {

    } else if (instruction == 'or') {

    } else if (instruction == 'ret') {

    } else if (instruction == 'rol') {

    } else if (instruction == 'roli') {

    } else if (instruction == 'ror') {

    } else if (instruction == 'sll') {

    } else if (instruction == 'slli') {

    } else if (instruction == 'sra') {

    } else if (instruction == 'srai') {

    } else if (instruction == 'srl') {

    } else if (instruction == 'srli') {

    } else if (instruction == 'sub') {

    } else if (instruction == 'sync') {

    } else if (instruction == 'xor') {

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
*cmpleui,cmplti, cmpltui, cmpnei, flushd, flushda, initd, initda, ldb, ldbu, ldh, ldhu,
 ldw, *movhi, *movi, *movia,  *movui, muli, orhi, ori, stb, sth, stw, *subi, xorhi, xori,
 */
function executeIType(instruction, operands) {

    if(!instruction) {
        console.log('No instruction passed to execute I Type');
        return;
    }

    if (instruction === 'addi') {

    } else if (instruction == 'andhi') {

    } else if (instruction == 'andi') {

    } else if (instruction == 'beq') {

    } else if (instruction == 'bge') {

    } else if (instruction == 'bgeu') {

    } else if (instruction == 'bgt') {

    } else if (instruction == 'bgtu') {

    } else if (instruction == 'ble') {

    } else if (instruction == 'bleu') {

    } else if (instruction == 'blt') {

    } else if (instruction == 'bltu') {

    } else if (instruction == 'bne') {

    } else if (instruction == 'br') {

    } else if (instruction == 'cmpeqi') {

    } else if (instruction == 'cmpge') {

    } else if (instruction == 'cmpgeui') {

    } else if (instruction == 'cmpgt') {

    } else if (instruction == 'cmpgti') {

    } else if (instruction == 'cmpgtu') {

    } else if (instruction == 'cmpgtui') {

    } else if (instruction == 'cmple') {

    } else if (instruction == 'cmplei') {

    } else if (instruction == 'cmpleu') {

    } else if (instruction == 'cmpleui') {

    } else if (instruction == 'cmplti') {

    } else if (instruction == 'cmpltui') {

    } else if (instruction == 'cmpnei') {

    } else if (instruction == 'flushd') {

    } else if (instruction == 'flushda') {

    } else if (instruction == 'initd') {

    } else if (instruction == 'initda') {

    } else if (instruction == 'ldb') {

    } else if (instruction == 'ldbu') {

    } else if (instruction == 'ldh') {

    } else if (instruction == 'ldhu') {

    } else if (instruction == 'ldw') {

    } else if (instruction == 'movhi') {

    } else if (instruction == 'movi') {

    } else if (instruction == 'movia') {

    } else if (instruction == 'movui') {

    } else if (instruction == 'muli') {

    } else if (instruction == 'orhi') {

    } else if (instruction == 'ori') {

    } else if (instruction == 'stb') {

    } else if (instruction == 'sth') {

    } else if (instruction == 'stw') {

    } else if (instruction == 'subi') {

    } else if (instruction == 'xorhi') {

    } else if (instruction == 'xori') {

    }

}


/* J TYPE INSTRUCTIONS
6-bit opcode field
26 bit immediate field
Instructions:
call, jmpi,
 */
function executeJType(instruction, operands) {
    if (!instruction) {
        console.log('No instruction passed to execute J Type');
        return;
    }

    if (instruction == 'call') {

    } else if (instruction == 'jmpi') {

    }

}

/* might be used to deal with instructions that don't fit the types or for pseudo-Instructions
Instructions:
nop,
* */
function executeOther(instruction, operands) {
    if (!instruction) {
        console.log('No instruction passed to execute other');
        return;
    }

    if (instruction == 'nop') {
        return;
    }
}
// This file will handle execution of instructions
// Instruction Documentation: https://www.intel.com/content/www/us/en/programmable/documentation/iga1420498949526.html#iga1409764012031
// Omit wrctl, rdctl, eret, trap, wrprs, *io, possibly rdprs

let allInstructions = [
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

    // return 1 if no branch or call
    // let intstructionSize =  instructionArr.length;
    // r0 0x0
    // r1 0x1
    // r10 0xA
    // r11 0xB
    // r31 0x1F
    // mem[2][1]

    // identify/execute instruction
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

    // return 1 if no branch or call
    // mem{
    // [x010], [add,r1,r2,r3]
    // }


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
*/
function executeOther(Oinstruction, operands) {
    if (!Oinstruction) {
        console.log('No instruction passed to execute other');
        return;
    } if (Oinstruction === 'nop') {
        // do nothing?
    }
}

function executeInstruction(address) {

    let instruction = read(address);

    if (instruction[1] === 'r0') {
        return 'Cannot write to r0';
    }
    let currentInstruction = instruction[0];
    let a = (instruction[1]);
    let b = null;
    let c = null;
    let unsignedA = (read(parseOutReg(a)) << 1) >> 1;  // for unsigned operations
    let unsignedB = (read(parseOutReg(b)) << 1) >> 1;  // for unsigned operations
    let unsignedC = (read(parseOutReg(c)) << 1) >> 1;  // for unsigned operations
    if(instruction[2]) {
        b = (instruction[2]);
        console.log("b: " + b);
    }
    if (instruction[3]) {
        c = parseOutReg(instruction[3]);
        console.log("c: " + c);
    }

    if (!currentInstruction) {
        console.error('Failure to retrieve instruction from address in InstructionHandler');
    }

    //R types ---------------------------------------------------------------------------
    if (currentInstruction === 'add') {
        // mem[parseOutReg(a)] = mem[parseOutReg(b)] + mem[parseOutReg(c)];
        let result = read(parseOutReg(b)) + read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'and') {
        let result = read(parseOutReg(b)) & read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'break') {
        return 'break';
    } else if (currentInstruction === 'bret') {
        //breakpoint return, so resume execution?
        return 1;
    } else if (currentInstruction === 'callr') {
        mem['0x1f'] = pc + 1;
        return read(parseOutReg(a));
    } else if (currentInstruction === 'cmpeq') {
        if (read(parseOutReg(b)) === read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpgei') {
        if (read(parseOutReg(b)) >= read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpgeu') {
        if (unsignedB >= unsignedC) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmplt') {
        if (read(parseOutReg(b)) <= read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpltu') {

        if (unsignedB <= unsignedC) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpne') {
        if (read(parseOutReg(b)) != read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'custom') {
        return 1;
    } else if (currentInstruction === 'div') {
        if (read(parseOutReg(c)) == 0) {
            return 'Divide by 0 error'
        }
        write(parseOutReg(a), read(parseOutReg(b)) / read(parseOutReg(c)));
        return 1;
    } else if (currentInstruction === 'divu') {
        if (unsignedB == 0) {
            return 'Divide by 0 error'
        }
        write(parseOutReg(a), unsignedB / unsignedC);
        return 1;
    } else if (currentInstruction === 'jmp') {
        return read(parseOutReg(a));
    } else if (currentInstruction === 'mov') {
        write(parseOutReg(a), parseOutReg(b))
    } else if (currentInstruction === 'mul') {
        let result = read(parseOutReg(b)) * read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'mulxss') {
        let result = read(parseOutReg(b)) * read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'mulxsu') {
        let result = read(parseOutReg(b)) * read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'mulxuu') {
        let result = unsignedB * unsignedC;
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'nextpc') {
        // puts the address of the next instruction in the register;
         write(parseOutReg(a), pc+1);
    } else if (currentInstruction === 'nor') {
        let result = read(parseOutReg(b)) | read(parseOutReg(c));
        result = ~result;
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'or') {
        let result = read(parseOutReg(b)) | read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'ret') {
        // return to address at r31
        return read(31);
    } else if (currentInstruction === 'rol') {

    } else if (currentInstruction === 'roli') {

    } else if (currentInstruction === 'ror') {

    } else if (currentInstruction === 'sll') {
        let result = read(parseOutReg(b)) << read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'slli') {
        let result = read(parseOutReg(b)) << parseInt(c);
        write(parseOutReg(a), result);
        return 1;
    } else if (currentInstruction === 'sra') {
        write(parseOutReg(a), read(parseOutReg(b)) >>> read(parseOutReg(c)));
        return 1;
    } else if (currentInstruction === 'srai') {

    } else if (currentInstruction === 'srl') {
        write(parseOutReg(a), read(parseOutReg(b)) >> read(parseOutReg(c)));
        return 1;
    } else if (currentInstruction === 'srli') {

    } else if (currentInstruction === 'sub') {
        write(parseOutReg(a), read(parseOutReg(b)) - read(parseOutReg(c)));
        return 1;
    } else if (currentInstruction === 'sync') {
        return 1;
    } else if (currentInstruction === 'xor') {
        write(parseOutReg(a), read(parseOutReg(b)) ^ read(parseOutReg(c)));
        return 1;
    }
    // I TYPES ------------------------------------------------------------------------------------------------------------
    else if (currentInstruction === 'addi') {
        write(parseOutReg(a), read(parseOutReg(b)) + parseInt(c));
    } else if (currentInstruction === 'andhi') {

    } else if (currentInstruction === 'andi') {
        write(parseOutReg(a), read(parseOutReg(b)) & parseInt(c));
    } else if (currentInstruction === 'beq') {
        if (read(parseOutReg(a)) == read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'bge') {
        if (read(parseOutReg(a)) >= read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'bgeu') {
        if (read(parseOutReg(a)) >= read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'bgt') {
        if (read(parseOutReg(a)) > read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'bgtu') {
        if (unsignedA > unsignedB) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'ble') {
        if (read(parseOutReg(a)) <= read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'bleu') {
        if (unsignedA <= unsignedB) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'blt') {
        if (read(parseOutReg(a)) < read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'bltu') {
        if (unsignedA < unsignedB) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'bne') {
        if(read(parseOutReg(a)) != read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (currentInstruction === 'br') {
        if(isNaN(parseInt(a))) {
            return parseInt(labels.get(a));
        }
        return parseInt(a);
    } else if (currentInstruction === 'cmpeqi') {
        if(read(parseOutReg(b) == parseInt(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpge') {
        if (read(parseOutReg(b)) >= read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpgeui') {
        if (read(parseOutReg(b)) >= parseInt(c)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpgt') {
        if (read(parseOutReg(b)) > read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpgti') {
        if (read(parseOutReg(b)) > parseInt(c)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpgtu') {

    } else if (currentInstruction === 'cmpgtui') {

    } else if (currentInstruction === 'cmple') {
        if (mem[rB][0] <= mem[rC][0]) {
            mem[rA][0] = 1;
        } else {
            mem[rA][0] = 0;
        }
    } else if (currentInstruction === 'cmplei') {

    } else if (currentInstruction === 'cmpleu') {

    } else if (currentInstruction === 'cmpleui') {

    } else if (currentInstruction === 'cmplti') {

    } else if (currentInstruction === 'cmpltui') {

    } else if (currentInstruction === 'cmpnei') {

    } else if (currentInstruction === 'ldb') {

    } else if (currentInstruction === 'ldbu') {

    } else if (currentInstruction === 'ldh') {

    } else if (currentInstruction === 'ldhu') {

    } else if (currentInstruction === 'ldw') {

    } else if (currentInstruction === 'movhi') {

    } else if (currentInstruction === 'movi') {
        b = c;

    } else if (currentInstruction === 'movia') {

    } else if (currentInstruction === 'movui') {

    } else if (currentInstruction === 'muli') {

    } else if (currentInstruction === 'orhi') {

    } else if (currentInstruction === 'ori') {

    } else if (currentInstruction === 'stb') {

    } else if (currentInstruction === 'sth') {

    } else if (currentInstruction === 'stw') {

    } else if (currentInstruction === 'subi') {

    } else if (currentInstruction === 'xorhi') {

    } else if (currentInstruction === 'xori') {

    }
    // J Types --------------------------------------------------------------------------------------------
    else if (currentInstruction === 'call') {
        // Use map to return address of label in instruction, set r31 to pc + 1;
        mem[0x1F][0] = pc+1;
        // TODO: get label from map
    } else if (currentInstruction === 'jmpi') {
            return jImmediate;
    } else if (currentInstruction === 'nop') {
        return 1;
    } else {
        console.error('Instruction was not able to be identified by the instruction handler');
    }

    // write(address,);
}

function parseOutReg(register) {

    register = register.replace('r','');
    let parsed = parseInt(register);

    if (isNaN(parsed)) {
        console.error('Register conversion in parseOutReg function failed, register is not a number. Current PC is: ' + pc);
        return register;
    }


    // if (parsed === 10) {parsed = 'a'}
    // else if (parsed === 11) {parsed = 'b'}
    // else if (parsed === 12) {parsed = 'c'}
    // else if (parsed === 13) {parsed = 'd'}
    // else if (parsed === 14) {parsed = 'e'}
    // else if (parsed === 15) {parsed = 'f'}
    // else if (parsed === 16) {parsed = '10'}
    // else if (parsed === 17) {parsed = '11'}
    // else if (parsed === 18) {parsed = '12'}
    // else if (parsed === 19) {parsed = '13'}
    // else if (parsed === 20) {parsed = '14'}
    // else if (parsed === 21) {parsed = '15'}
    // else if (parsed === 22) {parsed = '16'}
    // else if (parsed === 23) {parsed = '17'}
    // else if (parsed === 24) {parsed = '18'}
    // else if (parsed === 25) {parsed = '19'}
    // else if (parsed === 26) {parsed = '1a'}
    // else if (parsed === 27) {parsed = '1b'}
    // else if (parsed === 28) {parsed = '1c'}
    // else if (parsed === 29) {parsed = '1d'}
    // else if (parsed === 30) {parsed = '1e'}
    // else if (parsed === 31) {parsed = '1f'}
    // parsed = '0x' + parsed;
    // return parseInt(parsed);;

    return parsed;
}

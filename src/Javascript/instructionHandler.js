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
/* J TYPE INSTRUCTIONS
6-bit opcode field
26 bit immediate field
Instructions:
call, jmpi,
 */

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
    console.log('address: ' + address);
    let instruction = read(address);
    // console.log(labels);
    // console.log(mem);
    let a = null, b = null, c = null;
    let unsignedA = null, unsignedB = null, unsignedC = null;

    if(instruction[1]) {
        a = instruction[1];
        if (a.indexOf('r') == 0) {
            unsignedA = (read(parseOutReg(a)) << 1) >> 1;
        }
    }
    if (instruction[1] === 'r0') {
        return 'Cannot write to r0';
    }
    let currentInstruction = instruction[0];
    if(instruction[2]) {
        b = instruction[2];
        if (b.indexOf('r') == 0) {
            unsignedB = (read(parseOutReg(b)) << 1) >> 1;
        }
    }
    if (instruction[3]) {
        c = instruction[3];
        if(c.indexOf('r') === 0) {
            unsignedC = (read(parseOutReg(c)) << 1) >> 1;
        }
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
        mem['0x1f'] = address + 1;
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
        if (unsignedC === 0) {
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
         write(parseOutReg(a), address+1);
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
        return 1;
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
            if (address === parseInt(labels.get(a))) {
                return 'finished';
            }
            return parseInt(labels.get(a));
        }
        if (address === parseInt(a)) {
            return 'finished';
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
        if (unsignedB > unsignedC) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpgtui') {
        if (unsignedB > unsignedC) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
    } else if (currentInstruction === 'cmple') {
        if (read(parseOutReg(b)) <= read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmplei') {
        if (read(parseOutReg(b)) <= parseInt(c)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpleu') {
        if (unsignedB <= unsignedC) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpleui') {
        if (unsignedB <= parseInt(unsignedC)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmplti') {
        if (read(parseOutReg(b)) < parseInt(c)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpltui') {
        if (unsignedB < parseInt(unsignedC)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'cmpnei') {
        if (unsignedB < parseInt(unsignedC)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (currentInstruction === 'ldb') {

    } else if (currentInstruction === 'ldbu') {

    } else if (currentInstruction === 'ldh') {

    } else if (currentInstruction === 'ldhu') {

    } else if (currentInstruction === 'ldw') {
        if (isNaN(b)) {
            c = b;
            b = 0;
        }
        let value = read(parseOutReg(c) + parseInt(b));
        write(parseOutReg(a), value)
        return 1;
    } else if (currentInstruction === 'movhi') {

    } else if (currentInstruction === 'movi' || currentInstruction === 'movia') {
        write(parseOutReg(a), parseInt(b));
        return 1;
    } else if (currentInstruction === 'movui') {
        write(parseOutReg(a), parseInt(unsignedB));
        return 1;
    } else if (currentInstruction === 'muli') {
        let value = read(parseOutReg(b)) * parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    } else if (currentInstruction === 'orhi') {

    } else if (currentInstruction === 'ori') {
        let value = read(parseOutReg(b)) | parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    } else if (currentInstruction === 'stb') {

    } else if (currentInstruction === 'sth') {

    } else if (currentInstruction === 'stw') {
        if (isNaN(b)) {
            c = b;
            b = 0;
        }
        write(parseOutReg(c) + parseInt(b), a);
        return 1;
    } else if (currentInstruction === 'subi') {
        let value = read(parseOutReg(b)) - parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    } else if (currentInstruction === 'xorhi') {

    } else if (currentInstruction === 'xori') {
        let value = read(parseOutReg(b)) ^ parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    }
    // J Types --------------------------------------------------------------------------------------------
    else if (currentInstruction === 'call') {
        // Use map to return address of label in instruction, set r31 to pc + 1;
        write(31, address+1);
        return labels.get(a);
    } else if (currentInstruction === 'jmpi') {
            return labels.get(a);
    } else if (currentInstruction === 'nop') {
        return 1;
    } else {
        console.error('Instruction was not able to be identified by the instruction handler');
    }

    // write(address,);
}

function parseOutReg(register) {
    if (register) {
        register = register.replace('r', '');
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
}

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

let arr32 = new Uint32Array(1);
let arr16 = new Uint16Array(1);
let arr8 = new Uint8Array(1);
function executeInstruction(address) {
    let data = read(address);
    if (data === undefined) {
        return 'Undefined memory';
    }
    let a = null, b = null, c = null;
    let unsignedA32 = null, unsignedB32 = null, unsignedC32 = null;
    let unsignedA16 = null, unsignedB16 = null, unsignedC16 = null;
    let unsignedA8 = null, unsignedB8 = null, unsignedC8 = null;
    let instruction = data[0];

    if (data[1] === 'r0') {
        return 'Cannot write to r0';
    }

    if (data[1]) {
        a = data[1];
        if (a.indexOf('r') === 0) {
            arr32[0] = read(parseOutReg(a));
            arr16[0] = read(parseOutReg(a));
            arr8[0]  = read(parseOutReg(a));
        } else if (!isNaN(a)) {
            arr32[0] = parseInt(a);
            arr16[0] = parseInt(a);
            arr8[0]  = parseInt(a);
        }
        unsignedA32 = arr32[0];
        unsignedA16 = arr16[0];
        unsignedA8  = arr8[0];
    }
    if (data[2]) {
        b = data[2];
        if (b.indexOf('r') === 0) {
            arr32[0] = read(parseOutReg(b));
            unsignedB32 = arr32[0];
            unsignedB16 = arr16[0];
            unsignedB8  = arr8[0];
        } else if (!isNaN(b)) {
            arr32[0] = parseInt(b);
            arr16[0] = parseInt(b);
            arr8[0]  = parseInt(b);
        }
        unsignedB32 = arr32[0];
        unsignedB16 = arr16[0];
        unsignedB8  = arr8[0];
    }
    if (data[3]) {
        c = data[3];
        if (c.indexOf('r') === 0) {
            arr32[0] = read(parseOutReg(c));
            arr16[0] = read(parseOutReg(c));
            arr8[0]  = read(parseOutReg(c));
        } else if (!isNaN(c)) {
            arr32[0] = parseInt(c);
            arr16[0] = parseInt(c);
            arr8[0]  = parseInt(c);
        }
        unsignedC32 = arr32[0];
        unsignedC16 = arr16[0];
        unsignedC8  = arr8[0];
    }

    if (!instruction) {
        return 'Failure to retrieve instruction from address in InstructionHandler';
    }

    //R types ---------------------------------------------------------------------------
    if (instruction === 'add') {
        let result = read(parseOutReg(b)) + read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (instruction === 'and') {
        let result = read(parseOutReg(b)) & read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (instruction === 'break') {
        return 'break';
    } else if (instruction === 'bret') {
        //breakpoint return, so resume execution?
        return 1;
    } else if (instruction === 'callr') {
        write(31, address + 1);
        return read(parseOutReg(a));
    } else if (instruction === 'cmpeq') {
        if (read(parseOutReg(b)) === read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpgei') {
        if (read(parseOutReg(b)) >= parseInt(c)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpgeu') {
        if (unsignedB32 >= unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmplt') {
        if (read(parseOutReg(b)) <= read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpltu') {
        if (unsignedB32 <= unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpne') {
        if (read(parseOutReg(b)) !== read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'custom') {
        return 1;
    } else if (instruction === 'div') {
        if (read(parseOutReg(c)) === 0) {
            write(parseOutReg(a), undefined);
        } else {
            let value = read(parseOutReg(b)) / read(parseOutReg(c));
            write(parseOutReg(a), value);
        }
        return 1;
    } else if (instruction === 'divu') {
        if (unsignedC32 === 0) {
            write(parseOutReg(a), undefined);
        } else {
            let value = unsignedB32 / unsignedC32;
            write(parseOutReg(a), value);
        }
        return 1;
    } else if (instruction === 'jmp') {
        return read(parseOutReg(a));
    } else if (instruction === 'mov') {
        write(parseOutReg(a), parseOutReg(b));
        return 1;
    } else if (instruction === 'mul') {
        let value = read(parseOutReg(b)) * read(parseOutReg(c));
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'mulxss') {
        let value = read(parseOutReg(b)) * read(parseOutReg(c));
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'mulxsu') {
        let value = read(parseOutReg(b)) * unsignedC32;
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'mulxuu') {
        let value = unsignedB32 * unsignedC32;
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'nextpc') {
        // puts the address of the next instruction in the register;
         write(parseOutReg(a), address+1);
         return 1;
    } else if (instruction === 'nor') {
        let value = ~(read(parseOutReg(b)) | read(parseOutReg(c)));
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'or') {
        let value = read(parseOutReg(b)) | read(parseOutReg(c));
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'ret') {
        // return to address at r31
        return read(31);
    } else if (instruction === 'rol') {

    } else if (instruction === 'roli') {

    } else if (instruction === 'ror') {

    } else if (instruction === 'sll') {
        let result = read(parseOutReg(b)) << read(parseOutReg(c));
        write(parseOutReg(a), result);
        return 1;
    } else if (instruction === 'slli') {
        let result = read(parseOutReg(b)) << parseInt(c);
        write(parseOutReg(a), result);
        return 1;
    } else if (instruction === 'sra') {
        write(parseOutReg(a), read(parseOutReg(b)) >>> unsignedC32); // TODO: Double check
        return 1;
    } else if (instruction === 'srai') {
        write(parseOutReg(a), read(parseOutReg(b)) >>> unsignedC32); // TODO: Double check
        return 1;
    } else if (instruction === 'srl') {
        write(parseOutReg(a), unsignedB32 >>> unsignedC32); // TODO: Double check
        return 1;
    } else if (instruction === 'srli') {
        write(parseOutReg(a), unsignedB32 >>> unsignedC32); // TODO: Double check
        return 1;
    } else if (instruction === 'sub') {
        let value = read(parseOutReg(b)) - read(parseOutReg(c));
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'sync') {
        return 1;
    } else if (instruction === 'xor') {
        write(parseOutReg(a), read(parseOutReg(b)) ^ read(parseOutReg(c)));
        return 1;
    }
    // I TYPES ------------------------------------------------------------------------------------------------------------
    else if (instruction === 'addi') {
        let value = read(parseOutReg(b)) + parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'andhi') {

    } else if (instruction === 'andi') {
        let value = read(parseOutReg(b)) & parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'beq') {
        if (read(parseOutReg(a)) === read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'bge') {
        if (read(parseOutReg(a)) >= read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'bgeu') {
        if (unsignedA32 >= unsignedB32) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'bgt') {
        if (read(parseOutReg(a)) > read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'bgtu') {
        if (unsignedA32 > unsignedB32) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'ble') {
        if (read(parseOutReg(a)) <= read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'bleu') {
        if (unsignedA32 <= unsignedB32) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'blt') {
        if (read(parseOutReg(a)) < read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'bltu') {
        if (unsignedA32 < unsignedB32) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'bne') {
        if (read(parseOutReg(a)) !== read(parseOutReg(b))) {
            return labels.get(c);
        } else {
            return 1;
        }
    } else if (instruction === 'br') {
        if (isNaN(parseInt(a))) {
            if (address === parseInt(labels.get(a))) {
                return 'finished';
            }
            return parseInt(labels.get(a));
        } else if (address === parseInt(a)) {
            return 'finished';
        }
        return parseInt(a);
    } else if (instruction === 'cmpeqi') {
        if (read(parseOutReg(b) === parseInt(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpge') {
        if (read(parseOutReg(b)) >= read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpgeui') {
        if (unsignedB32 >= unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpgt') {
        if (read(parseOutReg(b)) > read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpgti') {
        if (read(parseOutReg(b)) > parseInt(c)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpgtu') {
        if (unsignedB32 > unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpgtui') {
        if (unsignedB32 > unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
    } else if (instruction === 'cmple') {
        if (read(parseOutReg(b)) <= read(parseOutReg(c))) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmplei') {
        if (read(parseOutReg(b)) <= parseInt(c)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpleu') {
        if (unsignedB32 <= unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpleui') {
        if (unsignedB32 <= unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmplti') {
        if (read(parseOutReg(b)) < parseInt(c)) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpltui') {
        if (unsignedB32 < unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'cmpnei') {
        if (unsignedB32 < unsignedC32) {
            write(parseOutReg(a), 1);
        } else {
            write(parseOutReg(a), 0);
        }
        return 1;
    } else if (instruction === 'ldb') {

    } else if (instruction === 'ldbu') {

    } else if (instruction === 'ldh') {

    } else if (instruction === 'ldhu') {

    } else if (instruction === 'ldw') {
        if (isNaN(b)) {
            c = b;
            b = 0;
        }
        let value =  parseInt(b) + read(parseOutReg(c));
        write(parseOutReg(a), read(value));
        return 1;
    } else if (instruction === 'movhi') {

    } else if (instruction === 'movi') {
        write(parseOutReg(a), parseInt(b));
        return 1;
    } else if (instruction === 'movia') {
        if (labels.has(b)) {
            let value = parseInt(labels.get(b));
            write(parseOutReg(a), value);
        } else {
            write(parseOutReg(a), parseInt(b));
        }
        return 1;
    } else if (instruction === 'movui') {
        write(parseOutReg(a), unsignedB32);
        return 1;
    } else if (instruction === 'muli') {
        let value = read(parseOutReg(b)) * parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'orhi') {

    } else if (instruction === 'ori') {
        let value = read(parseOutReg(b)) | parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'stb') {

    } else if (instruction === 'sth') {

    } else if (instruction === 'stw') {
        if (isNaN(b)) {
            c = b;
            b = 0;
        }
        write(parseOutReg(c) + parseInt(b), a);
        return 1;
    } else if (instruction === 'subi') {
        let value = read(parseOutReg(b)) - parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    } else if (instruction === 'xorhi') {

    } else if (instruction === 'xori') {
        let value = read(parseOutReg(b)) ^ parseInt(c);
        write(parseOutReg(a), value);
        return 1;
    }
    // J Types --------------------------------------------------------------------------------------------
    else if (instruction === 'call') {
        // Use map to return address of label in data, set r31 to pc + 1;
        write(31, address + 1);
        return labels.get(a);
    } else if (instruction === 'jmpi') {
        return labels.get(a);
    } else if (instruction === 'nop') {
        return 1;
    } else {
        return 'Instruction \'' + instruction + '\' was not able to be identified by the instruction handler'
    }
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

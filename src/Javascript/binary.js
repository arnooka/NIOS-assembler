function opcode(data) {
    let instruction = data[0];
    let binary = '0b', A = '', B = '', C = '', IMM16 = '', IMM5 = '', zeros = '';

    //R types ---------------------------------------------------------------------------
    if (instruction === 'add') {
        A = regToBin(data[2]);
        B = regToBin(data[3]);
        C = regToBin(data[1]);
        let x31 = binCap(0x31, 'bin', 6);
        let x3A = binCap(0x3A, 'bin', 6);
        binary += A + B + C + x31 + '00000' + x3A;
    } else if (instruction === 'and') {
        A = regToBin(data[2]);
        B = regToBin(data[3]);
        C = regToBin(data[1]);
        let x0E = binCap(0x0E, 'bin', 6);
        let x3A = binCap(0x3A, 'bin', 6);
        binary += A + B + C + x0E + '00000' + x3A;
    } else if (instruction === 'break') {
        let x1E = binCap(0x1E, 'bin', 6);
        let x34 = binCap(0x34, 'bin', 6);
        IMM5 = binCap(parseInt(data[1]), 'bin', 6);
        let x3A = binCap(0x3A, 'bin', 6);
        binary += '00000' + '00000' + x1E + x34 + IMM5 + x3A;
    } else if (instruction === 'bret') {

    } else if (instruction === 'callr') {

    } else if (instruction === 'cmpeq') {

    } else if (instruction === 'cmpgei') {

    } else if (instruction === 'cmpgeu') {

    } else if (instruction === 'cmplt') {

    } else if (instruction === 'cmpltu') {

    } else if (instruction === 'cmpne') {

    } else if (instruction === 'custom') {

    } else if (instruction === 'div') {

    } else if (instruction === 'divu') {

    } else if (instruction === 'jmp') {

    } else if (instruction === 'mov') {

    } else if (instruction === 'mul') {

    } else if (instruction === 'mulxss') {

    } else if (instruction === 'mulxsu') {

    } else if (instruction === 'mulxuu') {

    } else if (instruction === 'nextpc') {

    } else if (instruction === 'nor') {

    } else if (instruction === 'or') {

    } else if (instruction === 'ret') {

    } else if (instruction === 'rol') {

    } else if (instruction === 'roli') {

    } else if (instruction === 'ror') {

    } else if (instruction === 'sll') {

    } else if (instruction === 'slli') {

    } else if (instruction === 'sra') {

    } else if (instruction === 'srai') {

    } else if (instruction === 'srl') {

    } else if (instruction === 'srli') {

    } else if (instruction === 'sub') {

    } else if (instruction === 'sync') {

    } else if (instruction === 'xor') {

    }
    // I TYPES ------------------------------------------------------------------------------------------------------------
    else if (instruction === 'addi') {
        A = regToBin(data[2]);
        B = regToBin(data[1]);
        IMM16 = binCap(parseInt(data[3]), 'bin', 16);
        let x04 = binCap(0x04, 'bin', 6);
        binary += A + B + IMM16 + x04;
    } else if (instruction === 'andhi') {
        A = regToBin(data[2]);
        B = regToBin(data[1]);
        IMM16 = binCap(parseInt(data[3]), 'bin', 16);
        let x0C = binCap(0x0C, 'bin', 6);
        binary += A + B + IMM16 + x0C;
    } else if (instruction === 'andi') {
        A = regToBin(data[2]);
        B = regToBin(data[1]);
        IMM16 = binCap(parseInt(data[3]), 'bin', 16);
        let x0C = binCap(0x0C, 'bin', 6);
        binary += A + B + IMM16 + x0C;
    } else if (instruction === 'beq') {

    } else if (instruction === 'bge') {

    } else if (instruction === 'bgeu') {

    } else if (instruction === 'bgt') {

    } else if (instruction === 'bgtu') {

    } else if (instruction === 'ble') {

    } else if (instruction === 'bleu') {

    } else if (instruction === 'blt') {

    } else if (instruction === 'bltu') {

    } else if (instruction === 'bne') {

    } else if (instruction === 'br') {

    } else if (instruction === 'cmpeqi') {

    } else if (instruction === 'cmpge') {

    } else if (instruction === 'cmpgeui') {

    } else if (instruction === 'cmpgt') {

    } else if (instruction === 'cmpgti') {

    } else if (instruction === 'cmpgtu') {

    } else if (instruction === 'cmpgtui') {

    } else if (instruction === 'cmple') {

    } else if (instruction === 'cmplei') {

    } else if (instruction === 'cmpleu') {

    } else if (instruction === 'cmpleui') {

    } else if (instruction === 'cmplti') {

    } else if (instruction === 'cmpltui') {

    } else if (instruction === 'cmpnei') {

    } else if (instruction === 'ldb') {

    } else if (instruction === 'ldbu') {

    } else if (instruction === 'ldh') {

    } else if (instruction === 'ldhu') {

    } else if (instruction === 'ldw') {

    } else if (instruction === 'movhi') {

    } else if (instruction === 'movi') {

    } else if (instruction === 'movia') {

    } else if (instruction === 'movui') {

    } else if (instruction === 'muli') {

    } else if (instruction === 'orhi') {

    } else if (instruction === 'ori') {

    } else if (instruction === 'stb') {

    } else if (instruction === 'sth') {

    } else if (instruction === 'stw') {

    } else if (instruction === 'subi') {

    } else if (instruction === 'xorhi') {

    } else if (instruction === 'xori') {

    }
    // J Types --------------------------------------------------------------------------------------------
    else if (instruction === 'call') {

    } else if (instruction === 'jmpi') {

    } else if (instruction === 'nop') {

    } else {
        alert('Instruction \'' + instruction + '\' was not able to be identified by the opcode handler');
    }
    let value = parseInt(binary);
    let hex = value.toString(16);
    for (let i = 0; i < 8 - hex.length; i++) zeros += '0';
    return '0x' + zeros + hex;
}

// Converts register to binary of length 5
function regToBin(register) {
    // Convert register number to binary value
    let value = parseInt(register.replace('r', ''));
    let bin = value.toString(2);

    // Pad binary to proper length
    let zeros = '';
    for (let i = 0; i < 5 - bin.length; i++) zeros += '0';
    bin = zeros + bin;

    return bin;
}

/* Returns binary or integer as either signed or unsigned formats
 * Type inputs: ubin, bin, uint, int
 */
function binCap(value, type = 'int', length = 32) {
    // Convert value to 32 bit binary
    let bin = '';
    if (type.indexOf('u') === 0) {
        bin = (Math.abs(value) >>> 0).toString(2);
    } else bin = (value >>> 0).toString(2);

    // Cut binary if greater than
    if (bin.length > length) {
        bin = bin.substr(length - bin.length, bin.length);
    }

    // Return binary string or literal value
    if (type.indexOf('int') !== -1) {
        return parseInt(bin, 2) >> 0;
    } else if (type === 'bin' || type === 'ubin') {
        return bin;
    }
}
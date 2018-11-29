function opcode(data) {
    let instruction = data[0];

    //R types ---------------------------------------------------------------------------
    if (instruction === 'add') {

    } else if (instruction === 'and') {

    } else if (instruction === 'break') {

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

    } else if (instruction === 'andhi') {

    } else if (instruction === 'andi') {

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
        return 'Instruction \'' + instruction + '\' was not able to be identified by the instruction handler'
    }
}

// Converts register to required binary
function regToBin(register) {
    let value = parseInt(register.replace('r', ''));
    let bin = value.toString(2);
    let zeros = '';
    if (bin.length < 5) {
        for (let i = 0; i < 5 - bin.length; i++){
            zeros += '0';
        }
        bin = zeros + bin;
    }
    return bin;
}

/* Returns binary or integer as either signed or unsigned formats
 * Type inputs: u, bin, uint, int
 */
function binOrValue(value, type = 'int', length = 32) {
    // Convert value to binary
    // Method sets binary length to 32 bits
    let bin = '';
    if (type === 'u' || type === 'uint') {
        bin = (Math.abs(value) >>> 0).toString(2);
    } else bin = (value >>> 0).toString(2);

    // Cut binary if greater than
    if (bin.length > length) {
        bin = bin.substr(length - bin.length, bin.length);
    }

    if (type.indexOf('int') !== -1) {
        return parseInt(bin, 2) >> 0;
    } else if (type === 'bin' || type === 'u') {
        return bin;
    }
}

//console.log(bin);
//console.log(-Math.pow(2, 31));
//console.log(binOrValue(-2, 'bin', 32));
//console.log(binOrValue(-2147483649, 'bin', 32));
//console.log((Math.abs(2147483647) >>> 0).toString(2));
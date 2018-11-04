// This file will handle all basic memory operations


// Mmory will be represented as a dictionary where key values will be hexadecimal 16 bit addresses
var mem = {};

/* set up function of the memory */
function memoryInit() {
    console.log("This function will run setup for the memory to operate");
}

/* function used for writing to memory
 will be able to write instruction classes, data,
 and all other things
 */
function write(memAddress, data) {
    console.log("This function writes to memory");
}

/* this function is used for reading memory and
 will return what is read.
 */
function read(memAddress) {
    console.log("this function reads memory");
    return mem[memAddress];
}

/* this functions shows what is inside register */
function peek(register) {
    var data;
    console.log("This function allows you to see inside a register");
    return data;
}

/* returns how much free space is left in bytes */
function spaceFree() {
    var data;
    console.log("returns how much memory is free and not being used");
    return data;
}
/* This file will handle all basic memory operations

                Design of Memory
     _______________________________________________
     |                                             |
     |                 R0                          |       0x00
     |_____________________________________________|
     |                                             |
     |                 R1                          |       0x01
     |_____________________________________________|
     |                                             |
     |                 R2                          |       0x02
     |_____________________________________________|
     |                                             |
     |                                             |
                        .
                        .
                        .
     |                                             |
     |_____________________________________________|
     |                                             |
     |                 R30                         |       0x1E
     |_____________________________________________|
     |                                             |
     |                 R31                         |       0x1F
     |_____________________________________________|
     |                                             |
     |                                             |
                        .
                        .
                        .
     |                                             |
     |_____________________________________________|
     |                                             |
     |         Start of Instructions               |       0x40
     |_____________________________________________|
     |                                             |
     |                                             |
                        .
                        .
                        .
     |                                             |
     |_____________________________________________|
     |                                             |
     |             End of Memory                   |       0xFFFF
     |_____________________________________________|                */

/* Memory is represented in a 65,536 byte array. */
const MEMORY_SIZE = 65536;
let mem = [];

/* set up function of the memory */
function memoryInit() {
    console.log('memory Init called');
    /*Initializing all registers in memory to zero
    * Ex. mem[1] = r1 mem[2] = r2 ... mem[25] = r25 */
    mem = [];
    for (let i = 0; i < 26; i++) mem[i] = 0;

    // Declare Special Registers
    // TODO: find what these should be initialized as
    mem[26] = 0;    // Global Pointer
    mem[27] = 0;    // Stack Pointer
    mem[28] = 0;    // Frame Pointer
    mem[29] = 0;    // Exception Return Address
    mem[30] = 0;    // Status Register
    mem[31] = 0;    // Return Address

    pc = 0x40;
}

/* Writes data to memory at a certain address */
function write(memAddress, data) {
    mem[memAddress] = data;
}

/* Reads array by address and return whats at that address */
function read(memAddress) {
    return mem[memAddress];
}

/* returns how much free space is left in bytes */
function spaceFree() {
    let count = 0;
    for (let i = 0; i < MEMORY_SIZE; i++) {
        if (mem[i] !== undefined) count++;
    }
    return MEMORY_SIZE - count;
}

memoryInit();

//For testing
/*
var i;

var arr = ["andi", "r1", "r2", "100"]
memoryInit();

for(i = 0; i < 10; i++){
    write(i, i*i);
}
write(i, arr);

for(i = 0; i < 40; i++){
    console.log(read(i));
}
var arr2 = read(10);
console.log("\nInstruction: " + arr2[0] + "\nRegister: " + arr2[1] + "\nRegister: " + arr2[2] + "\nImmediate: " + arr2[3] + "\n");

console.log(spaceFree());
*/
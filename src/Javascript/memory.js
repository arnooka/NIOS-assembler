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
var mem = [];

/* set up function of the memory */
function memoryInit(){

    mem['0x0'] = 0;  // r0 should never change
    mem['0x1'] = 0;
    mem['0x2'] = 0;
    mem['0x3'] = 0;
    mem['0x4'] = 0;
    mem['0x5'] = 0;
    mem['0x6'] = 0;
    mem['0x7'] = 0;
    mem['0x8'] = 0;
    mem['0x9'] = 0;
    mem['0xa'] = 0;
    mem['0xb'] = 0;
    mem['0xc'] = 0;
    mem['0xd'] = 0;
    mem['0xe'] = 0;
    mem['0xf'] = 0;
    mem['0x10'] = 0;
    mem['0x11'] = 0;
    mem['0x12'] = 0;
    mem['0x13'] = 0;
    mem['0x14'] = 0;
    mem['0x15'] = 0;
    mem['0x16'] = 0;
    mem['0x17'] = 0;
    mem['0x18'] = 0;
    mem['0x19'] = 0;
    mem['0x1a'] = 0;
    mem['0x1b'] = 0;     // Global Pointer
    mem['0x1c'] = 0;     // Stack Pointer
    mem['0x1d'] = 0;     // Frame Pointer
    mem['0x1e'] = 0;     // Exception Return Address
    mem['0x1f'] = 0;     // Status Register



    // Declare Special Registers
    // TODO: find what these should be initialized as
    // mem[26] = 0;            // Global Pointer
    // mem[27] = 0;            // Stack Pointer
    // mem[28] = 0;            // Frame Pointer
    // mem[29] = 0;            // Exception Return Address
    // mem[30] = 0;            // Status Register
    // mem[31] = 0x40;         // Return Address

}

/* Writes data to memory at a certain address */
function write(memAddress, data) {

    mem[memAddress] = data;
    console.log("MEM[MEMORYADDRESS] = data: " + mem[memAddress]);
}

/* Reads array by address and return whats at that address */
function read(memAddress) {
    return mem[memAddress];
}

/* returns how much free space is left in bytes */
function spaceFree() {
    var count = 0, i;
    for(i = 0; i < MEMORY_SIZE; i++){
        if(mem[i] != undefined) {
            count++;
        }
    }
    return MEMORY_SIZE - count;
}

//For testing

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

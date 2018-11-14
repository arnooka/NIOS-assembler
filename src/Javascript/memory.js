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
    /*Initializing all registers in memory to zero
    * Ex. mem[1] = r1 mem[2] = r2 ... mem[25] = r25 */
    for (let i = 0; i < 26; i++){
        let address = '0x' + (i).toString(16);
        mem[address] = 0;
        // console.log("i val: " + i);
        // console.log("mem[" + i + "]: " + mem[i]);
    }
    // Declare Special Registers
    // TODO: find what these should be initialized as
    //mem['0x1a'] = 0;    // r26: Global Pointer
    //mem['0x1b'] = 0;    // r27: Stack Pointer
    //mem['0x1c'] = 0;    // r28: Frame Pointer
    //mem['0x1d'] = 0;    // r29: Exception Return Address
    //mem['0x1e'] = 0;    // r30: Status Register
    //mem['0x1f'] = 0;    // r31: Return Address
}

/* Writes data to memory at a certain address */
function write(memAddress, data) {
    mem[memAddress] = data;
   //console.log("MEM[MEMORYADDRESS] = data: " + mem[memAddress]);
}

/* Reads array by address and return whats at that address */
function read(memAddress) {
    return mem[memAddress];
}

/* returns how much free space is left in bytes */
function spaceFree() {
    let count = 0;
    for (let i = 0; i < MEMORY_SIZE; i++) {
        let address = '0x' + (i).toString(16);
        if (mem[address] !== undefined) count++;
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
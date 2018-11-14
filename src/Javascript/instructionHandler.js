// This file will handle execution of instructions
// Instruction Documentation: https://www.intel.com/content/www/us/en/programmable/documentation/iga1420498949526.html#iga1409764012031
// Omit wrctl, rdctl, eret, trap, wrprs, *io, possibly rdprs

var allInstructions = [
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
    // var intstructionSize =  instructionArr.length;
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
    }

    if (Oinstruction === 'nop') {
        // do nothing?
    }
}

function executeInstruction(address) {
    var r = "";
    var i;
    // var startLoop = "";
    // var startAddress = 0;
    // if (labels.get('forloop:')){
    //     if(startAddress == 0) {
    //         startLoop = address;
    //         console.log("startLoop: " + startLoop);
    //         startAddress = 1;
    //     }
    // }
    // most r types: mem[PC][1] mem[x] = {0x111, [add, r1,r2,r3]}, access 'add' by  mem[PC][1][0]
    // Get Instruction from mem by going to PC
    console.log("---------------------------------------");
    console.log("ADDRESS: " + address);
    instruction = read(address);

    //console.log("INSTRH_INSTRUCTION: " + instruction);
   // var currentInstruction = instruction[pc][1][0];
    var currentInstruction = instruction[0];
    var specialCase = 0;
    var c;

// possible temp for reg a
    var rA = instruction[1];

    console.log("rA: " + rA);
    var a = instruction[1];
    var b = instruction[2];
    if (instruction[3]) {
        c = instruction[3];
        console.log("c: " + c);
    }
    console.log("a: " + a);
    console.log("b: " + b);

    for (i = 1; i < 32; i++){
        r = "r";
        r += i;
       // console.log("R val: " + r);
        if (a == r){
            console.log("a = " + a + " | Reg. val = " + r);
            a = mem[i];

            console.log("After setting val, a = " + a );
        }
        if (b == r){
            console.log("b = " + b + " | Reg. val = " + r);
            b = mem[i];

            console.log("After setting val, b = " + b );
        }
        if (instruction[3]) {
            if (c == r) {
                console.log("c = " + c + " | Reg. val = " + r);
                c = mem[i];
                c = parseInt(c,10);
                rC = instruction[3];
                console.log("After setting val, c = " + c );
            }
            // if (instruction[3] == "forloop"){
            //
            //     c = "forloop";
            // }
            // if (instruction[3] == "dowhile"){
            //
            //     c = "dowhile";
            // }
            //console.log("c-val: " + c);
        }
    }
    a = parseInt(a,10);
    b = parseInt(b,10);
    if (instruction[3] != "forloop" && instruction[3] != "dowhile") {
        c = parseInt(c, 10);
    }


    //var currentInstruction = instruction[0];

    console.log("CURRENT INSTRUCTION: " + currentInstruction);
    if (!currentInstruction) {
        console.log('Failure to retrieve instruction from memory in InstructionHandler');
    }

    // Basic R type vars
    // var rA = toHex(mem[pc][1][1]);
    // var rB = toHex(mem[pc][1][2]);
    // var rC = toHex(mem[pc][1][3]);
    // J type
   // var jImmediate = mem[pc][1][1];
    //I Type
//    var iImmediate = mem[pc][1][3];

    //R types ---------------------------------------------------------------------------
    if (currentInstruction === 'add') {        // add rB and rC, and store in rA

        a = b + c;
        console.log("add executed. " + rA + " is now = " + a);
       // mem[rA][0] = mem[rB][0] + mem[rC][0];

    } else if (currentInstruction === 'and') {
        // mem[rA][0] = mem[rB][0]&mem[rC][0];
        return 1;
    } else if (currentInstruction === 'break') {
        // stop execution?
    } else if (currentInstruction === 'bret') {
        //breakpoint return, so resume execution?
    } else if (currentInstruction === 'callr') {
        // mem[0x1f][0] = pc + 1;
        return rA;
    } else if (currentInstruction === 'cmpeq') {
        // if (mem[rB][0] == mem[rC][0]) {
        //     mem[rA][0] = 1;
        // } else {
        //     mem[rA][0] = 0;
        // }
    } else if (currentInstruction === 'cmpgei') {

    } else if (currentInstruction === 'cmpgeu') {

    } else if (currentInstruction === 'cmplt') {
        // if (mem[rB][0] < mem[rC][0]) {
        //     mem[rA][0] = 1;
        // } else {
        //     mem[rA][0] = 0;
        // }
    } else if (currentInstruction === 'cmpltu') {

    } else if (currentInstruction === 'cmpne') {
        // if (mem[rB][0] != mem[rC][0]) {
        //     mem[rA][0] = 1;
        // } else {
        //     mem[rA][0] = 0;
        // }
    } else if (currentInstruction === 'custom') {

    } else if (currentInstruction === 'div') {
        // if(mem[rC][0] === 0) { //can't divide by 0
        //     // TODO: need to return some sort of error status
        // }
        // mem[rA][0] = mem[rB][0] / mem[rC][0];
        return 1;
    } else if (currentInstruction === 'divu') {

    } else if (currentInstruction === 'jmp') {
        //
        // return mem[rA][0];
    } else if (currentInstruction === 'mov') {
        // mem[rA][0] = mem[rB][0];
    } else if (currentInstruction === 'mul') {
        // mem[rA][0] = mem[rB][0] * mem[rC][0];
    } else if (currentInstruction === 'mulxss') {

    } else if (currentInstruction === 'mulxsu') {

    } else if (currentInstruction === 'mulxuu') {

    } else if (currentInstruction === 'nextpc') {
        // puts the address of the next instruction in rA;
        // mem[rA][0] = toHex(pc+1);
    } else if (currentInstruction === 'nor') {
        // mem[rA][0] = mem[rB][0] | mem[rC][0];
        // mem[rA][0] = ~mem[rA][0];
        return 1;
    } else if (currentInstruction === 'or') {
        // mem[rA][0] = mem[rB][0] | mem[rC][0];
        return 1;
    } else if (currentInstruction === 'ret') {
        // return to address at r31
        return 1;
        // return mem[0x1F][0];
    } else if (currentInstruction === 'rol') {

    } else if (currentInstruction === 'roli') {

    } else if (currentInstruction === 'ror') {

    } else if (currentInstruction === 'sll') {
        // mem[rA][0] = mem[rB][0] << mem[rC][0];
        return 1;
    } else if (currentInstruction === 'slli') {

    } else if (currentInstruction === 'sra') {
        // mem[rA][0] = mem[rB][0] >> mem[rC][0];
    } else if (currentInstruction === 'srai') {

    } else if (currentInstruction === 'srl') {
        // mem[rA][0] = mem[rB][0] >> mem[rC][0];
        return 1;
    } else if (currentInstruction === 'srli') {

    } else if (currentInstruction === 'sub') {
        // mem[rA][0] = mem[rB][0] - mem[rC][0];
        return 1;
    } else if (currentInstruction === 'sync') {

    } else if (currentInstruction === 'xor') {
        // mem[rA][0] = mem[rB][0] ^ mem[rC][0];
        return 1;
    }
    // I TYPES ------------------------------------------------------------------------------------------------------------
    else if (currentInstruction === 'addi') {

        a = b + c;
        console.log("addi executed. " + rA + " is now = " + a);
    } else if (currentInstruction === 'andhi') {

    } else if (currentInstruction === 'andi') {

    } else if (currentInstruction === 'beq') {
        // if (mem[rA][0] == mem[rB][0]) {
        //     // TODO Return address of Label from map
        // } else {
            return 1;
       // }
    } else if (currentInstruction === 'bge') {

    } else if (currentInstruction === 'bgeu') {

    } else if (currentInstruction === 'bgt') {
        // if(mem[rA][0] >= mem[rB][0]) {
        //     //TODO: set pc to label from map
        // } else {
            return 1;
       // }
    } else if (currentInstruction === 'bgtu') {

    } else if (currentInstruction === 'ble') {
        var startLoop;
        i = 0;
        console.log("----c value---- " + c );

    if (c == "forloop") {
        while (a <= b) {


           // console.log("a-val: " + a + " | b-val: " + b);
            startLoop = labels.get('forloop:');
            i++;
            executeInstruction(startLoop);

           // console.log("a-val: " + a + " | b-val: " + b);
            var increment = startLoop.slice(2, 4);
            increment = parseInt(increment, 10);
           // console.log("increment: " + increment);
            increment += 1;
           // console.log("increment: " + increment);
            var nextAddress = "0x";
            nextAddress += increment;
            console.log("nextAddress: " + nextAddress);
            i++;
            for (i = 1; i < 26; i++) {
                r = "r";
                r += i;
                // console.log("R val: " + r);
                if (rA == r) {
                  //  console.log("a = " + a + " | Reg. val = " + r);
                    a = mem[i];

                    console.log("After setting val, a = " + a);
                }
                if (b == r) {
                   // console.log("b = " + b + " | Reg. val = " + r);
                    b = mem[i];

                    console.log("After setting val, b = " + b);
                }
            }
            executeInstruction(nextAddress);
            for (i = 1; i < 26; i++) {
                r = "r";
                r += i;
                // console.log("R val: " + r);
                if (rA == r) {
                   // console.log("a = " + a + " | Reg. val = " + r);
                    a = mem[i];

                    console.log("After setting val, a = " + a);
                }
                if (b == r) {
                 //   console.log("b = " + b + " | Reg. val = " + r);
                    b = mem[i];

                    console.log("After setting val, b = " + b);
                }
            }

          //  console.log("a-val: " + a + " | b-val: " + b);
            i++;


        }
        return;
    }
           // }


            // DOWHILE


            if (c == "dowhile") {
                var begin = 0;
                while (a <= b) {
                    if (begin == 0) {
                        console.log("a-val: " + a + " | b-val: " + b);
                        startLoop = labels.get('dowhile:');
                        console.log("startLoop address: " + startLoop);
                        i++;

                        executeInstruction(startLoop);
                        var increment2 = startLoop.slice(2, 4);
                        increment2 = parseInt(increment2, 10);
                        //increment += 1;
                        begin = 1;
                    }


                   // console.log("a-val: " + a + " | b-val: " + b);

                  //  console.log("increment: " + increment);
                    nextAddress = "0x";
                    nextAddress += increment2;
                    if (nextAddress == "0x48"){
                        begin = 0;
                    }
                    console.log("nextAddress: " + nextAddress);
                    i++;
                    for (i = 1; i < 26; i++) {
                        r = "r";
                        r += i;
                        // console.log("R val: " + r);
                        if (rA == r) {
                        //    console.log("a = " + a + " | Reg. val = " + r);
                            a = mem[i];

                            console.log("After setting val, a = " + a);
                        }
                        if (b == r) {
                          //  console.log("b = " + b + " | Reg. val = " + r);
                            b = mem[i];

                            console.log("After setting val, b = " + b);
                        }
                    }
                    executeInstruction(nextAddress);
                    for (i = 1; i < 26; i++) {
                        r = "r";
                        r += i;
                        // console.log("R val: " + r);
                        if (rA == r) {
                           // console.log("a = " + a + " | Reg. val = " + r);
                            a = mem[i];

                          //  console.log("After setting val, a = " + a);
                        }
                        if (b == r) {
                           // console.log("b = " + b + " | Reg. val = " + r);
                            b = mem[i];

                           // console.log("After setting val, b = " + b);
                        }
                    }

                   // console.log("a-val: " + a + " | b-val: " + b);
                    i++;
                    increment2 = nextAddress.slice(2, 4);
                    increment2 = parseInt(increment2, 10);
                      console.log("increment2: " + increment2);
                    increment2 += 1;
                }
            }


        // if(mem[rA][0] <= mem[rB][0]) {
        //     //TODO: set pc to label from map
        // } else {
            //return 1;
       // }
    //}

    //     // if(mem[rA][0] <= mem[rB][0]) {
    //     //     //TODO: set pc to label from map
    //     // } else {
    //     //return 1;
    //     // }
    // } else if (currentInstruction === 'bleu') {

    } else if (currentInstruction === 'blt') {
        // if(mem[rA][0] < mem[rB][0]) {
        //     //TODO: set pc to label from map
        // } else {
            return 1;
       // }
    } else if (currentInstruction === 'bltu') {

    } else if (currentInstruction === 'bne') {
        // if(mem[rA][0] != mem[rB][0]) {
        //     //TODO: return label from map
        // } else {
            return 1;
     //   }
    } else if (currentInstruction === 'br') {
        // TODO: get label from map and return it
    } else if (currentInstruction === 'cmpeqi') {

    } else if (currentInstruction === 'cmpge') {
        // if (mem[rB][0] >= mem[rC][0]) {
        //     mem[rA][0] = 1;
        // } else {
        //     mem[rA][0] = 0;
        // }
        return 1;
    } else if (currentInstruction === 'cmpgeui') {

    } else if (currentInstruction === 'cmpgt') {

    } else if (currentInstruction === 'cmpgti') {

    } else if (currentInstruction === 'cmpgtu') {

    } else if (currentInstruction === 'cmpgtui') {

    } else if (currentInstruction === 'cmple') {
        // if (mem[rB][0] <= mem[rC][0]) {
        //     mem[rA][0] = 1;
        // } else {
        //     mem[rA][0] = 0;
        // }
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
        a = b;
        console.log("a-val After movi: " + a);

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
        // mem[0x1F][0] = pc+1;
        // TODO: get label from map
    } else if (currentInstruction === 'jmpi') {
        return 1;
           // return jImmediate;
    } else if (currentInstruction === 'nop') {
        return 1;
    } else {
        console.error('Instruction was not able to be identified by the instruction handler');
    }

    console.log("SETTING MEMORY VALUE");
    for (var i = 1; i < 32; i++){
        r = "r";
        r += i;
        if (rA == r){
            console.log("Writing memory: " + "mem["  + i + "]" +  " With value: " + a);
            mem[i] = a;
            console.log("mem["  + i + "] = " + mem[i]);
        }
    }
    console.log("---------------------------------------");
   // write(address,);
}

function toHex(register) {
    if (register.includes('r') && register !== undefined){


        register = register.replace('r','');
        }
    var parsed = parseInt(register);

    if (isNaN(parsed)) {
        console.error('Register conversion in toHex function failed, register is not a numer. Current PC is: ' + pc);
        return register;
    }
    if (parsed === 10) {parsed = 'A'}
    else if (parsed === 11) {parsed = 'B'}
    else if (parsed === 12) {parsed = 'C'}
    else if (parsed === 13) {parsed = 'D'}
    else if (parsed === 14) {parsed = 'E'}
    else if (parsed === 15) {parsed = 'F'}
    else if (parsed === 16) {parsed = '10'}
    else if (parsed === 17) {parsed = '11'}
    else if (parsed === 18) {parsed = '12'}
    else if (parsed === 19) {parsed = '13'}
    else if (parsed === 20) {parsed = '14'}
    else if (parsed === 21) {parsed = '15'}
    else if (parsed === 22) {parsed = '16'}
    else if (parsed === 23) {parsed = '17'}
    else if (parsed === 24) {parsed = '18'}
    else if (parsed === 25) {parsed = '19'}
    else if (parsed === 26) {parsed = '1A'}
    else if (parsed === 27) {parsed = '1B'}
    else if (parsed === 28) {parsed = '1C'}
    else if (parsed === 29) {parsed = '1D'}
    else if (parsed === 30) {parsed = '1E'}
    else if (parsed === 31) {parsed = '1F'}


    parsed = '0x' + parsed;

    return parsed;
}

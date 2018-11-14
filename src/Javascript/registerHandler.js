var r0 = 0;
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;
var r6 = 0;
var r7 = 0;
var r8 = 0;
var r9 = 0;
var r10 = 0;
var r11 = 0;
var r12 = 0;
var r13 = 0;
var r14 = 0;
var r15 = 0;
var r16 = 0;
var r17 = 0;
var r18 = 0;
var r19 = 0;
var r20 = 0;
var r21 = 0;
var r22 = 0;
var r23 = 0;
var r24 = 0;
var r25 = 0;
var r26 = 0; // Global pointer
var r27 = 0; // Stack pointer
var r28 = 0; // Frame pointer
var r29 = 0; // Exception return address
var r30 = 0; // Status register
var r31 = 0; // return address




var i,j;

var regArr = [33];



function afterFile() {
    console.log("---TEST REGHANDLER--- " + nameArr[0]);
    console.log("---TEST REGHANDLER--- " + nameArr[0]);
    console.log("---TEST REGHANDLER--- " + nameArr[0]);
    console.log("---TEST REGHANDLER--- " + nameArr[0]);
    console.log("---TEST REGHANDLER--- " + nameArr[0]);
}

function addRow() {
    var clist = $("#registerValues"); // This reference speeds up the run time
    $("#registerValues").html("");


    // console.log("address: " + address);
    instruction = read("0x41");
    console.log("REGH_INSTRUCTION: " + instruction);
    // for (var i = 0; i < MEMORY_SIZE; i++){
    //     if (mem[i] != undefined){
    //         console.log("mem[" + i + "]: " + mem[i]);
    //         console.log("INSTRUCTION" + instruction[i]);
    //     }
    // }
    if (instruction == "add") {
        executeInstruction();
    }


// language=HTML
    var i;
    clist.append(
        `<tr style = " background-color : darkgray "><th>PC</th><th>0</th></tr>` +
        "<tr><th>" + "Register" + "</th><th>" + "Value" + "</th></tr>"
    )
    for (i = 0; i < 32; i++) {
        var r = "r";
        r += i;

        clist.append(
            `<tr><td >${r}</td>` + "<td>" + mem[i] + "</tr></td>"
        );
    }

    updateMemoryTable();
}



function updateMemoryTable(){
    var memAddress = "0x40";
    var nextAddress = "0x";
    var readVal = read(memAddress);
    var increment = 1;

    var clist = $("#memoryValues"); // This reference speeds up the run time
    $("#memoryValues").html("");
    clist.append(
        `<tr style = " background-color : lightgray "><th>Memory Table</th><td></td><td></td></tr>` +
        `<tr style = " background-color : darkgray "><th>Memory Location</th><th>Value</th><td></td></tr>`
    )

    for (i = 0; i < 16; i++) {
        readVal = read(memAddress);
        nextAddress = "0x";


        clist.append(
            `<tr id = "tableRow + ${i}"><td >${memAddress}</td>` + "<td>" + memoryCheck(memAddress) +  "</td>" + `<td> <button  id = "memoryButton"  type="button"
                 class="btn btn-default btn-md" onclick= "memoryButton(0)"> Select Memory Location</button> </td></tr>`
        );

        memAddress = memAddress.slice(2, 4);
        memAddress = parseInt(memAddress, 10);
        memAddress = memAddress + increment;
        nextAddress += memAddress;
        memAddress = nextAddress;
        console.log("MEM TABLE " + nextAddress);


    }
}

function memoryCheck(memAddress){
    var verify = read(memAddress);
    if(verify != undefined){
        return verify[0];
    }
    else{
        return "undefined";
    }
}

function memoryButton(i){
    var txt;
    var person = prompt("Enter memory address:", "0x46");

    // if (person == null || person == "") {
    //     txt = "User cancelled the prompt.";
    // } else {
    //     txt = "Hello " + person + "! How are you today?";
    // }
    document.getElementById(`tableRow + ${i}`).cells[0].innerHTML = person;
    document.getElementById(`tableRow + ${i}`).cells[1].innerHTML = memoryCheck(person);
}

function restartButton(){
    var clist = $("#registerValues"); // This reference speeds up the run time
    $("#registerValues").html("");
    clist.append(
        `<tr style = " background-color : darkgray "><th>PC</th><th>0</th></tr>` +
        "<tr><th>" + "Register" + "</th><th>" + "Value" + "</th></tr>"
    )
}
// for (i = 0; i < 33; i++) {
//     for (j = 0; j < 33; j++) {
//         registers[i][j] = 1;
//         console.log(registers[i][j]);
//
//     }
// }
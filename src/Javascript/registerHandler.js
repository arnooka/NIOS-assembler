function afterFile() {
    console.log("---Test REGHANDLER--- " + nameArr[0]);
    console.log("---Test REGHANDLER--- " + nameArr[0]);
    console.log("---Test REGHANDLER--- " + nameArr[0]);
    console.log("---Test REGHANDLER--- " + nameArr[0]);
    console.log("---Test REGHANDLER--- " + nameArr[0]);
}

function updateRegisterTable() {
    let clist = $("#registerValues"); // This reference speeds up the run time
    $("#registerValues").html("");
    clist.append(
        '<tr style = " background-color : darkgray "><th>PC</th><th>' + pc * 4 + '</th></tr>' +
        '<tr><th>Register</th><th>Value</th></tr>'
    );
    for (let i = 0; i < 32; i++) {
        let r = "r";
        r += i;
        clist.append(
            `<tr><td >${r}</td>` + "<td>" + reg[i] + "</tr></td>"
        );
    }
}

function updateMemoryTable() {
    let clist = $("#memoryValues"); // This reference speeds up the run time
    $("#memoryValues").html("");
    clist.append(
        '<tr style="background-color: lightgray"><th align="center">Memory Table</th><td></td><td></td></tr>' +
        '<tr style="background-color: darkgray "><th>Memory Location</th><th>Value</th><td></td></tr>'
    );

    let memAddress = 0;
    for (let i = 0; i < 16; i++) {
        let hex = '0x' + memAddress.toString(16);
        clist.append(
            '<tr id="tableRow + ${i}"><td>' + hex + '</td><td>' + memoryCheck(memAddress) + '</td><td>' +
            '<button id="${i}" type="button" class="btn btn-default btn-md" onclick= "memoryButton(id)">' +
            'Select Memory Location</button> </td></tr>'
        );
        memAddress++;
    }
}

function memoryCheck(memAddress) {
    let verify = memRead(memAddress);
    if (verify !== undefined) {
        return verify; // TODO: format instruction somehow?
    } else {
        return "No Data";
    }
}

function memoryButton(id) {
    let address = prompt("Enter memory address:", "0x");
    if (address.indexOf('0x') !== -1){
        alert('Address must have \'0x\' leading value');
        return;
    }
    document.getElementById(`tableRow + ${id}`).cells[0].innerHTML = address;
    document.getElementById(`tableRow + ${id}`).cells[1].innerHTML = memoryCheck(parseInt(address));
}
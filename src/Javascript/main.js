// Main Class
function main() {
    console.log("Hello World!");
}

function instructionHandler() {
    console.log("Handle Instructions...");
}

function initGUI() {
    console.log("Initialize GUI");
}

function verifyFile() {
    // Verify correct file type
    console.log("Verifying File '" + asmFile.name + "'");
    let extension = asmFile.name.toLowerCase().substr((asmFile.name.lastIndexOf('.') + 1));
    if (!/(asm|txt)$/ig.test(extension)) {
        console.log('Incorrect file type uploaded');
        alert('Please upload a ".txt" or ".asm" file');
        return;
    }
    console.log('Correct file type uploaded');
    customTxt.innerHTML = asmFile.name;

    // Begin reading file
    const reader = new FileReader();
    var name = "";
    reader.onload = function () {
        console.log(reader.result.split('\n'));
        name += reader.result.replace(/,/g, ';').split('\n');
        var nameArr = name.split(',');
        for (var i = 0; i < nameArr.length; i++) {
            nameArr[i] = nameArr[i].replace(/;/g, ',').trim();
            nameArr[i] = nameArr[i].replace(/\t/g, ',');
            nameArr[i] = nameArr[i].replace(/ /g, '');
            console.log("i-Val: "+  i + "|" + nameArr[i]);
            var instruction = nameArr[i].split(',');
            // find instruction here
        }
    };

    reader.readAsText(asmFile);
    console.log(customTxt.innerHTML);
}

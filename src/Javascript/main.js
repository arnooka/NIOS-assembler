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

    console.log("Verifying File '" + asmFile.name + "'");
    let extension = asmFile.name.toLowerCase().substr((asmFile.name.lastIndexOf('.') + 1));
    if (!/(asm|txt)$/ig.test(extension)) {
        console.log('Incorrect file type uploaded');
        alert('Please upload a ".txt" or ".asm" file');
        return;
    }
    console.log('Correct file type uploaded');
    customTxt.innerHTML = asmFile.name;

    const reader = new FileReader();
    var name = "";
    reader.onload = function () {
        console.log(reader.result.split('\n'));
        name += reader.result.split('\n');
        alert("hello");
        var nameArr = name.split('\t');
            nameArr = name.split(',');
        for (var i = 0; i < 36; i++) {
            console.log("i-Val: "+  i + "|" + nameArr[i]);
        }
    }


    reader.readAsText(asmFile);

    console.log(customTxt.innerHTML);


}

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
    console.log("Verifying File '" + file.name + "'");
    var extension = file.name.toLowerCase().substr((file.name.lastIndexOf('.') + 1));
    if (!/(asm|txt)$/ig.test(extension)) {
        console.log('Incorrect file type uploaded');
        alert('Please upload a ".txt" or ".asm" file');
        return;
    }
    console.log('Correct file type uploaded');
    customTxt.innerHTML = file.name;
}
// Main Class
var nameArr = [];
var tempArr = [];
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
    var name2 = "";
    reader.onload = function () {
        console.log(reader.result.replace(/\s/g, ' ').split(' '));
        name2 += reader.result.replace(/\s/g, ' ').split(' ');
        tempArr = name2.split(',');
        var temp = tempArr.filter(function (el) {
            return el != null;
        });
        //tempArr = name2.split('');
        console.log("HELLBITCH" + temp);
        name += reader.result.split('\n');
        alert("hello");
            nameArr = name.split('\t');
            nameArr = name.split(',');
        for (var i = 0; i < tempArr.length; i++) {
            if (tempArr[i] == "") {
                tempArr.splice(i, 1);
                i--;
            }

        }
        for (var i = 0; i < tempArr.length; i++) {

            console.log("i-Val: "+  i + "|" + tempArr[i]);
        }
        afterFile();
    }


    reader.readAsText(asmFile);

    console.log(customTxt.innerHTML);


}

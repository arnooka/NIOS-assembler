/* This file will provide the functionality of the GUI
 for displaying updated register values, memory values,
 and any related the to GUI */

// Boolean logic
let paused = true;
let programRunning = false;
let runPressed = false;
let interval = null;
const INTERVAL_LENGTH = 5;

const runButton = document.getElementById('runBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('restartBtn');

// Button event listeners
runButton.addEventListener('click', function() {
    if (!fileUploaded) {
        alert('Please upload a file to begin execution');
        return;
    }
    if (paused && interval === null) {
        paused = false;
        programRunning = true;
        runPressed = true;
        pauseButton.innerHTML = 'Pause';
        runButton.innerHTML = 'Running';
        runProgram();
    }
});

pauseButton.addEventListener('click', function() {
    if (!paused) {
        paused = true;
        programRunning = false;
    } else return;
    if (paused) {
        if (interval !== null) {
            clearInterval(interval);
            interval = null;
        }
        pauseButton.innerHTML = 'Paused';
        runButton.innerHTML = 'Resume';
        updateMemoryTable();
        updateRegisterTable();
        alert('Program paused');
    }
});

resetButton.addEventListener('click', function() {
    paused = false;
    programRunning = true;
    runButton.innerHTML = 'Running';
    pauseButton.innerHTML = 'Pause';
    resetGui();
    if (interval === null) {
        runProgram();
    } else {
        if (interval !== null) {
            clearInterval(interval);
            interval = null;
        }
        runProgram();
    }
});

// Main gui functions
function runProgram() {
    interval = setInterval(function () {
        let string = main();
        if (string === 'end program') {
            clearInterval(interval);
            interval = null;
            runButton.innerHTML = 'Run';
            pc = 0x40;
            alert('Program Execution Complete');
        }
        updateMemoryTable();
        updateRegisterTable();
    }, INTERVAL_LENGTH);
}

function resetGui() {
    let clist = $("#registerValues"); // This reference speeds up the run time
    $("#registerValues").html("");
    clist.append(
        `<tr style = " background-color : darkgray "><th>PC</th><th>0</th></tr>` +
        "<tr><th>" + "Register" + "</th><th>" + "Value" + "</th></tr>"
    );
    memoryInit();
    if (newUpload) {
        labels.clear();
    }
}
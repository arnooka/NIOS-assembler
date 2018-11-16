/* This file will provide the functionality of the GUI
 for displaying updated register values, memory values,
 and any related the to GUI */

// Boolean logic
let paused = true;
let programRunning = false;
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
        pauseButton.innerHTML = 'Pause';
        runButton.innerHTML = 'Running';
        runProgram();
    } else {
        alert('Please press restart to begin the program again');
    }
});

pauseButton.addEventListener('click', function() {
    paused = !paused;
    programRunning = !paused;
    if (paused) {
        clearInterval(interval);
        pauseButton.innerHTML = 'Continue';
        updateMemoryTable();
        updateRegisterTable();
        alert('Program paused');
    } else {
        pauseButton.innerHTML = 'Pause';
        runButton.innerHTML = 'Running';
        runProgram();
    }
});

resetButton.addEventListener('click', function() {
    paused = false;
    programRunning = true;
    pauseButton.innerHTML = 'Pause';
    runButton.innerHTML = 'Running';
    resetGui();
    if (interval === null) {
        runProgram();
    } else {
        clearInterval(interval);
        runProgram();
    }
});

// Main gui functions
function runProgram() {
    interval = setInterval(function () {
        let string = main();
        if (string === 'end program'){
            clearInterval(interval);
            runButton.innerHTML = 'Run';
            updateMemoryTable();
            updateRegisterTable();
            alert('Program Execution Complete');
        }
    },INTERVAL_LENGTH);
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
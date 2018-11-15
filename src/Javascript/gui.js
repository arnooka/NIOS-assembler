/* This file will provide the functionality of the GUI
 for displaying updated register values, memory values,
 and any related the to GUI */

// Boolean logic
let paused = false;
let reset = false;
let blockComment = false;

const runButton = document.getElementById('runBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('restartBtn');

runButton.addEventListener('click', function() {
    memoryInit();
    main();
});

pauseButton.addEventListener('click', function() {
    paused = true;
});

resetButton.addEventListener('click', function() {
    reset = true;
});
var asmFile = null;

// Object instances in main document
const hiddenInput = document.getElementById('hidden-input');
const customDz = document.getElementById('myDropzone');
const customTxt = document.getElementById('custom-text');

// Dropzone functions
customDz.onload = function () {
    // Browser API exception check
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // All the File APIs are supported.
    } else {
        customTxt.innerHTML = 'This browser does not support the required APIs';
    }
};

customDz.ondrop = function (event) {
    event.preventDefault();
    this.className = 'dropzone';
    customTxt.style = 'color: #ccc';
    upload(event.dataTransfer.files);
};

customDz.ondragover = function () {
    this.className = 'dropzone dragover';
    customTxt.style = 'color: black';
    return false;
};

customDz.ondragleave = function () {
    this.className = 'dropzone';
    customTxt.style = 'color: #ccc';
    return false;
};

// File upload functions
var upload = function (files) {
    var formData = new FormData(), xhr = new XMLHttpRequest(), x;
    if (files.length > 1){
        alert('Please upload one file at a time');
        console.log('Too many files uploaded at once');
        return;
    } else {
        asmFile = files[0];
    }
    verifyFile();
};

// Event listeners
customDz.addEventListener('click', function() {
    hiddenInput.click();
});

hiddenInput.addEventListener('change', function() {
    var files = hiddenInput.files;
    asmFile = files[0];
    verifyFile();
});
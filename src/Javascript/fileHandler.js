var asmFile = document.querySelector('input[type="file"]');

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
    //customTxt.style = 'color: crimson';
    return false;
};

customDz.ondragleave = function () {
    this.className = 'dropzone';
    customTxt.style = 'color: #ccc';
    return false;
};

// File upload functions
var upload = function (files) {
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
    let files = hiddenInput.files;
    //reader.readAsText(asmFile.files[0]);
    asmFile = files[0];
   //  let files = hiddenInput.files;
    // const reader = new FileReader();
    // var name = "";
    // reader.onload = function () {
    //     console.log(reader.result.split('\n'));
    //     name += reader.result.split('\n');
    //     var nameArr = name.split('\n');
    //     for (var i = 0; i < 36; i++) {
    //         console.log("i-Val: "+  i + "|" + nameArr[i]);
    //     }
    // }
    //
    //asmFile = files[0];
    // reader.readAsText(asmFile.files[0]);
    verifyFile();
});




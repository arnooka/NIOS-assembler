var r0 = 0;
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;
var r6 = 0;
var r7 = 0;
var r8 = 0;
var r9 = 0;
var r10 = 0;
var r11 = 0
var r12 = 0;
var r13 = 0;
var r14 = 0;
var r15 = 0;
var r16 = 0;
var r17 = 0;
var r18 = 0;
var r19 = 0;
var r20 = 0;
var r21 = 0;
var r22 = 0;
var r23 = 0;
var r24 = 0;
var r25 = 0;
var r26 = 0;
var r27 = 0;
var r28 = 0;
var r29 = 0;
var r30 = 0;
var r31 = 0;



var i,j;




console.log(r1);

function addRow() {
    var clist = $("#registerValues"); // This reference speeds up the run time
// language=HTML
    var i;
    for (i = 0; i  < 33; i++) {
        clist.append(
            `<tr><td >register</td>` + "<td>" + 0 + "</tr></td>"
        );
    }
}
// for (i = 0; i < 33; i++) {
//     for (j = 0; j < 33; j++) {
//         registers[i][j] = 1;
//         console.log(registers[i][j]);
//
//     }
// }
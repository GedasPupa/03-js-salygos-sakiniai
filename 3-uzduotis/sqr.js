let a  = 1;
let b = 2;
let c = 1;
let x, x1, x2, disk;

let elA = document.getElementById('input-a');
let elB = document.getElementById('input-b');
let elC = document.getElementById('input-c');
let output3 = document.getElementById('output-3');

function getResult() {
    if (a != 0 && b != 0 && c != 0) {
        disk = b*b - 4 * a * c;
        console.log(disk);
        if (disk > 0) {
            x1 = (-b + Math.sqrt(disk)) / (2*a);
            x2 = (-b - Math.sqrt(disk)) / (2*a);
            console.log("Galimi du sprendiniai! - x1: " + x1 + " /// x2: " + x2);
        } else if (disk == 0) {
            x = (-b) / (2*a);
            console.log("Sprendinys x: " + x);
        } else {
            x1 = (-b)/(2*a) + Math.sqrt(Math.abs(disk))/(2*a);
            x2 = (-b)/(2*a) - Math.sqrt(Math.abs(disk))/(2*a);
            console.log("Galimi du sprendiniai (kompleksiniai skaiciai, i=1)! x1: " + x1 + " /// x2: " + x2);
        } 
    } else if ((a != 0 && b != 0 && c == 0)) {
        x1 = 0;
        x2 = -b / a;
        console.log("Sprendinys x lygus " + x1 + " arba x lygus " + x2);
    } else {
        console.log("ERROR: a ir b turi būti ne lygus 0!");
        output3.innerHTML = "ERROR: a ir b turi būti ne lygus 0!";
        return;
    }
    if (x == undefined) {
        output3.innerHTML = "Galimi du sprendiniai! - x1: " + x1 + " /// x2: " + x2;
    } else {
        output3.innerHTML = "Sprendinys x: " + x;
    }
}
getResult();

function onSubmit3() {
    event.preventDefault();
    a = elA.value;
    b = elB.value;
    c = elC.value;
    getResult();
}


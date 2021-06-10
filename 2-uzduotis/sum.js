"use strict"

let inputNumb = 996;
let sum, average, product;

let element2 = document.getElementById('input-2');
let output2 = document.getElementById('output-2');

function getNumbers() {
    if (inputNumb >= 100 && inputNumb < 1000) {
        let stringNumb = inputNumb.toString();
        let arr1 = Array.from(String(stringNumb), Number);
        console.log(arr1);
            sum = arr1.reduce((acc, curr) => acc + curr);
            average = sum / 3;
            product = arr1.reduce((acc, curr) => acc * curr);
    } else {
        console.log("Please enter number between 100 and 999!");
    }
    console.log("Suma: " + sum + " Vidurkis: " + average + " Sandauga: " + product);
    output2.innerHTML = "Suma: " + sum + " Vidurkis: " + average + " Sandauga: " + product;
}
getNumbers();

function onSubmit2() {
    inputNumb = element2.value;
    getNumbers();
    // output2.innerHTML = "Suma: " + sum + " Vidurkis: " + average + " Sandauga: " + product;
}

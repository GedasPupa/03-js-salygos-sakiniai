"use strict"

let totalSecs = 0;
let seconds = "00";
let minutes = "00";
let hours = "00";

let element = document.getElementById('input');
let outputEl = document.getElementById('output');

function getTime() {
    if (totalSecs <= 60) { // ---------------------------------------- seconds go here
        seconds = totalSecs;
        if (totalSecs < 10) {
            seconds = "0" + totalSecs;
        }
        console.log("'00:00:" + seconds +"'");
    } else if (totalSecs <= 3600) { // ------------------------------- minutes go here
        minutes = Math.floor(totalSecs / 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        seconds = totalSecs % 60;
        console.log("'00:" + minutes + ":" + seconds +"'");
    } else if (totalSecs <= 86400) { // ------------------------------ hours go here
        hours = Math.floor(totalSecs / 3600);
        if (hours < 10) {
            hours = "0" + hours;
        }
        minutes = Math.floor((totalSecs % 3600) / 60);
        seconds = (totalSecs % 3600) % 60;
        console.log("'" + hours + ":" + minutes + ":" + seconds +"'");
    } else { // ------------------------------------------------------- ERROR - to big input
        console.log("ERROR: Please enter less then 86 400 seconds - format is only '24 h 00 minutes 00 seconds!'");
    }
    outputEl.innerHTML = "'" + hours + ":" + minutes + ":" + seconds + "'";
}
getTime(); // for first render

function onSubmit() {
    totalSecs = element.value;
    getTime(); // for input render
    // outputEl.innerHTML = "'" + hours + ":" + minutes + ":" + seconds + "'";
}

// how to stop page reloading???  <input onchange="func()"> ???

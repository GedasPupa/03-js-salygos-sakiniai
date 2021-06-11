"use strict"
let divs = document.getElementById('divs');
let divOne = [];
for (let i=0; i<40; i++) {
    i += 1;
    let k = i + 1;
    divOne.push("<div class=\"divOne\">" + i + "</div><div class=\"divTwo\">" + k + "</div>");
}
divs.innerHTML = divOne.join('');



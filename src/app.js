/*
* File: app.js
* Author: Laczkó Bálint
* Copyright: 2023, Laczkó Bálint
* Group: Szoft I-2-N
* Date: 2021-02-23
* Github: https://github.com/Balint0429/
* Licenc: GNU GPL
*/
var baseInput = document.querySelector('#base');
var heightInput = document.querySelector('#height');
var areaInput = document.querySelector('#area');
var calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', () => {
    inputCon();
});

function inputCon() {
    let base = Number(baseInput.value);
    let height = Number(heightInput.value);
    let area = calcTriangleArea(base, height);
    areaInput.value = area + " cm²";
}

function calcTriangleArea(base, height) {
    return base * height / 2;
}
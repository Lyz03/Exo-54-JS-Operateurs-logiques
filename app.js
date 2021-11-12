let x = 1;
let y = 4;
let z = -1;

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');

if (x < 2) {
    p1.innerText = "x est inférieur à 2";
}
else {
    p1.innerText = "x n'est pas inférieur à 2";
}


if (y > 3) {
    p2.innerText = "y est supérieur à 3";
}
else {
    p2.innerText = "y n'est pas supérieur à 3";
}


if (z <= 0) {
    p3.innerText = "z est inférieur ou égale à 0";
}
else {
    p3.innerText = "z n'est pas inférieur ou égale à 0";
}


if (x < 2 && y > 3 && z <= 0){
    p4.innerText = "x est inférieur à 2 et y est supérieur à 3 et z est inférieur ou égale à 0";
}
else {
    p4.innerText = "x n'est pas inférieur à 2 et /ou y n'est pas supérieur à 3 et / ou z n'est pas inférieur ou égale à 0";
}


if (x < 2 && y > 3 || z === -1){
    p5.innerText = "x est inférieur à 2 et y est supérieur à 3 ou z est strictement égale à -1";
}
else {
    p5.innerText = "x n'est pas inférieur à 2 et / ou y n'est pas supérieur à 3 et z n'est pas strictement égale à -1";
}
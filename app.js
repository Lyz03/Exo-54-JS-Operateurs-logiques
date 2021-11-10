let x = 1;
let y = 4;
let z = -1;

let p1 = document.getElementById('p1');

if (x < 2) {
    p1.innerText = "x est inférieur à 2";
}
else {
    p1.innerText = "x n'est pas inférieur à 2";
}


if (y > 3) {
    p1.innerText = "y est supérieur à 3";
}
else {
    console.log("false")
}


if (z <= 0) {
    console.log("true")
}
else {
    console.log("false")
}


if (x < 2 && y > 3 && z <= 0){
    console.log("true")
}
else {
    console.log("false")
}


if (x < 2 && y > 3 || z === -1){
    console.log("true")
}
else {
    console.log("false")
}
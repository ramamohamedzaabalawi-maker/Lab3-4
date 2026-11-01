let h2 = document.getElementById("h2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let quantity = 0;
btn1.addEventListener("click", myfunc1);
btn2.addEventListener("click", myfunc2);
btn3.addEventListener("click", myfunc3);
btn4.addEventListener("click", myfunc4);
btn5.addEventListener("click", myfunc5);
function myfunc1() {
    h2.textContent = quantity;
}
function myfunc2() {
    quantity++;
}
function myfunc3() {
    quantity = quantity + 2;
}
function myfunc4() {
    quantity = quantity + 3;
}
function myfunc5() {
    quantity = 0;
    h2.textContent = quantity;
}

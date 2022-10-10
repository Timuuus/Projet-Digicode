let screen = document.querySelector("#screen");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn0 = document.querySelector(".btn0");
let btnClear = document.querySelector(".btn-clear");
let btnEnter = document.querySelector(".btn-enter");

btn1.addEventListener("click", ()=> {
    screen.innerText += "1";
})

btn2.addEventListener("click", ()=> {
    screen.innerText += "2";
})

btn3.addEventListener("click", ()=> {
    screen.innerText += "3";
})

btn4.addEventListener("click", ()=> {
    screen.innerText += "4";
})

btn5.addEventListener("click", ()=> {
    screen.innerText += "5";
})

btn6.addEventListener("click", ()=> {
    screen.innerText += "6";
})

btn7.addEventListener("click", ()=> {
    screen.innerText += "7";
})

btn8.addEventListener("click", ()=> {
    screen.innerText += "8";
})

btn9.addEventListener("click", ()=> {
    screen.innerText += "9";
})

btn0.addEventListener("click", ()=> {
    screen.innerText += "0";
})

btnEnter.addEventListener("click", ()=> {
if (screen.innerText === "1234"){
        screen.style.background = "green";
}
else if (screen.innerText.length === 4){
        screen.style.background = "red";
}    
})

btnClear.addEventListener("click", ()=> {
    screen.innerText = "";
    screen.style.background = "rgb(172,172,172)"
})

nummberOfNumber = screen.innerText.length

if (nummberOfNumber > 4){
    screen.maxLength = 0
}






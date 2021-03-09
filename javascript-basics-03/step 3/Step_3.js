const green = document.querySelector(".green");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const text1 = document.querySelector("p");

const change1 =(id)=>{
    if(id == "green"){
        text1.style.color= 'green';
    }
    if(id == "red"){
        text1.style.color= 'red';
    }
    if(id == "blue"){
        text1.style.color= 'blue';
    }
}


green.addEventListener("click", ()=>{change1("green");});
red.addEventListener("click", ()=>{change1("red");});
blue.addEventListener("click", ()=>{change1("blue");});
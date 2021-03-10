
const pass = document.querySelector('#password');
const conf = document.querySelector('#confirmation');
const test = document.querySelector('button');

test.addEventListener("click", ()=>{
    if(pass.value != conf.value){
        conf.style.border = "3px solid red";
    }
})
var div1 = document.querySelector("#text");
var div2 = document.querySelector("#name");


div2.addEventListener("blur", function swap1(){
    var newtext = div2.value  ;
    div1.innerHTML = newtext ;
    newtext.innerHTML = " ";  
})

var button = document.querySelector("button");
var name1 = document.querySelector("#name");
var surname = document.querySelector("#surname");
var city = document.querySelector("#city");

button.addEventListener("click", function reset(){
    var t = confirm("Do you want to clear all fields ?!");
    if(t == true){
        name1.value  = "";
        surname.value = "";
        city.value = "";
    }
})
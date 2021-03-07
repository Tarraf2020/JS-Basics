function remainder(){
    var n1 = document.getElementById("first_number").value;
    var n2 = document.getElementById("second_number").value;
    var n = n1 % n2;
    var answer  = "The remainder of " + n1 + " and " + n2 + " is : " + n;
    alert(answer);
}
let input = document.getElementById("myInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
let button = document.getElementsById("myBtn");

function createElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}
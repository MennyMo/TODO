let input = document.getElementById("myInput");
let button = document.getElementsById("myBtn");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");


function createElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

input.addEventListener('click', createElement());
let input = document.getElementById("myInput");
let button = document.getElementById("myBtn");
let ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}
function addButton(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
button.addEventListener("click", function(){
    if(inputLength() > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
})
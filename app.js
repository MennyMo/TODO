let input = document.getElementById("myInput");
let button = document.getElementById("myBtn");
let ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}
function createListElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function Completed(){
        li.classList.toggle("done");
    }
    li.addEventListener("click", Completed);

    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", deleteAfterClick);

    function deleteAfterClick(){
        
    }
}
function addListAfterClick(){
        if (inputLength() > 0) {
            createListElement();
        }
    }

function addListAfterEnter(event){
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
} 

input.addEventListener("keypress", addListAfterEnter);
button.addEventListener("click", addListAfterClick);
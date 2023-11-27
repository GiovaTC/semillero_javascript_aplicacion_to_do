windows.addEventListener("click", function() {
    console.log("Hello World")
})

//Eventos y nodos del DOM

var button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("button clicked.")
});

function once(){
    console.log("click once")
    button.removeEventListener("click", once);
}

button.addEventListener("click", once);


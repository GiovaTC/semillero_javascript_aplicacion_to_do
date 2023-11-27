function createNode(type, child){
    var node = document.createElement(type);

    var text = document.createTextNode(child);
    
    node.appendChild(text);

    return node;
}

console.log(createNode('h1', 'hello world'))

// anidar nodos con la misma funcion

function createNodo2(type, child){
    var node = document.createElement(type);

    if(typeof child === "string"){
       
        var text = document.createTextNode(child);   
        node.appendChild(text);
    } else {
        node.appendChild(child);
    }

    return node;
}

document.getElementById("quote")
.appendChild(
    createNodo2("footer", createNodo2("strong", "- karl Popper"))
)

console.log(createNodo2('h1',  createNodo2('strong','Hello World')));



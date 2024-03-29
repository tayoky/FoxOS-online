alert('test');
const emptyWindow = document.createDocumentFragment;
emptyWindow.appendChild(document.createElement("div").appendChild(
    document.createElement("div"),
    document.createElement("div")
))


document.getElementById("display").appendChild(document.createElement("div"));
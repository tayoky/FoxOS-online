const FPS = 30;
setInterval(update, 1000 / FPS);

// Récupérez vos éléments de fenêtre ici (par exemple, par ID ou classe)
let windows = document.getElementsByClassName("window");

let selectwindow = -1;
let selectwindowOffsetX = 0;
let selectwindowOffsetY = 0;

document.onmouseup = releaseMouse;
window.onmousemove = mouseMove;

function toolbarClick(Select) {
    // Utilisez l'objet event passé en argument
    let event = window.event;
    selectwindow = Select;
    selectwindowOffsetX = event.pageX - windows[Select].offsetLeft;
    selectwindowOffsetY = event.pageY - windows[Select].offsetTop;
}

function releaseMouse() {
    selectwindow = -1;
}

function update() {
    // Mettez à jour l'état de vos fenêtres ici
    // Par exemple, redimensionnez-les, mettez à jour leur contenu, etc.
}

function mouseMove(event) {
    if (selectwindow !== -1) {
        windows[selectwindow].style.left = event.x - selectwindowOffsetX + "px";
        windows[selectwindow].style.top = event.y - selectwindowOffsetY + "px";
    }
}

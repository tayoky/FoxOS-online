//modules pour gerer les fenetre

const FPS = 30;
setInterval(update, 1000 / FPS);

// Récupérez vos éléments de fenêtre ici (par exemple, par ID ou classe)
let windows = document.getElementsByClassName("window");
let taskbar = document.getElementById("taskbar");

let selectwindow = -1;
let selectwindowOffsetX = 0;
let selectwindowOffsetY = 0;

//rajoute les evenement
document.addEventListener("mouseup", (e) =>{
    releaseMouse();
})


document.addEventListener("mousemove",e => {
    mouseMove(e);
})





function toolbarClick(Select) {
    // Utilisez l'objet event passé en argument
    let tevent = window.event;
    selectwindow = Select;
    selectwindowOffsetX = tevent.pageX - parseInt(windows[Select].style.left);
    selectwindowOffsetY = tevent.pageY - parseInt(windows[Select].style.top);
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


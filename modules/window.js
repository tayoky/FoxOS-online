//modules pour gerer les fenetre

//const FPS = 30;
//setInterval(update, 1000 / FPS);

// Récupérez vos éléments de fenêtre ici (par exemple, par ID ou classe)
let windows = document.getElementsByClassName("window");
//let taskbar = document.getElementById("taskbar");

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


//generic function fuction utilisé par d'autre module et kes programmes
function createWindow(x,y,width,height,inner,title){
    
    let windowDIV = document.createElement("div");
    windowDIV.classList.add("window");

    // Position
    windowDIV.style.left = x ; 
    windowDIV.style.top = y ;
    windowDIV.style.width = width ;
    windowDIV.style.height = height ;

    windowDIV.num = windows.length;
    // Événement onmousedow
    windowDIV.addEventListener("mousedown", function() {
        toolbarClick(this.num);
    });

    // Barre d'outils
    const toolbar = document.createElement("div");
    toolbar.classList.add("toolbar");
    toolbar.innerHTML = title + '<button class="closebtn" onclick="closeWindow(' + windowDIV.num+');">X</button>';
    windowDIV.appendChild(toolbar);

    // Ajoutez le contenu interne s'il existe
    if (inner !== null) {
        windowDIV.innerHTML += inner;
    }

    // Ajoutez la fenêtre à l'affichage
    const display = document.getElementById("display"); // Assurez-vous que "display" est correctement défini
    display.appendChild(windowDIV);

    // Mettez à jour la liste des fenêtres
    windows = document.getElementsByClassName("window")
}

function closeWindow(num){
    windows[num].remove();
    updateWindowList();
    for (let index = 0 ; index < windows.length; index++) {
        windows[index].num = index;
        windows[index].children[0].children[0].onclick = "closeWindow(" + windows[index].num + ");"
    }
}

function updateWindowList(){
    windows = document.getElementsByClassName("window")
}
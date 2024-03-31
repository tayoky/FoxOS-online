const FPS = 30;
setInterval(update, 1000 / FPS);

// Récupérez vos éléments de fenêtre ici (par exemple, par ID ou classe)
let windows = document.getElementsByClassName("window");
let apps;

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


//on recupre les apps
let appslist = [];
fetch("/app.json")
.then(res => res.json())
.then(data => {
    apps = data;
})
.catch(error => {
    console.log("load apps failed error : ",error);
})

//pour udpate la liste des appps
udapteAppsList();





function udapteAppsList(){
    //on range les app dans un liste

    //onrenitialise
    appslist = [];
    for (const appName in apps.apps){
        appslist.push(apps.apps[appName]);
    }
}







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


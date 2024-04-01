//import les modules todo
//import * as windowJS from './modules/window.js' ;

const FPS = 30;
setInterval(update, 1000 / FPS);

// Récupérez vos éléments de fenêtre ici (par exemple, par ID ou classe)
//let windows = document.getElementsByClassName("window");
let taskbar = document.getElementById("taskbar");
let apps = {};

/*let selectwindow = -1;
let selectwindowOffsetX = 0;
let selectwindowOffsetY = 0;





//rajoute les evenement
document.addEventListener("mouseup", (e) =>{
    releaseMouse();
})


document.addEventListener("mousemove",e => {
    windowJS.mouseMove(e);
})*/


//on recupre les apps
let appslist = [];
fetch("https://tayoky.github.io/FoxOSonline/apps/app.json")
.then(res => res.json())
.then(data => {
    apps = data;
    console.log('succeful load app : ',apps);
    //pour udpate la liste des apps
    console.log(apps);
    updateAppsList();
})
.catch(error => {
    console.log("load apps failed error : ",error);
});






function updateAppsList(){
    //on range les app dans un liste

    //onrenitialise
    appslist = [];
    taskbar.replaceChildren();
    for (const appName in apps.apps){
        appslist.push(apps.apps[appName]);
        
        let appbutton = document.createElement("div");
        appbutton.classList.add("taskbarbtn");
        appbutton.appendChild(document.createElement("img"));
        appbutton.children[0].src = apps.apps[appName].url +"/logo.png";
        appbutton.children[0].classList.add("taskbarimg");
        taskbar.appendChild(appbutton);
    }
}







/*
function toolbarClick(Select) {
    // Utilisez l'objet event passé en argument
    let tevent = window.event;
    selectwindow = Select;
    selectwindowOffsetX = tevent.pageX - parseInt(windows[Select].style.left);
    selectwindowOffsetY = tevent.pageY - parseInt(windows[Select].style.top);
}

function releaseMouse() {
    selectwindow = -1;
}*/

function update() {
    // Mettez à jour l'état de vos fenêtres ici
    // Par exemple, redimensionnez-les, mettez à jour leur contenu, etc.
} /*

function mouseMove(event) {
    if (selectwindow !== -1) {
        windows[selectwindow].style.left = event.x - selectwindowOffsetX + "px";
        windows[selectwindow].style.top = event.y - selectwindowOffsetY + "px";
    }
}*/


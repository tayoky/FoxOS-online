//import les modules todo
//import * as windowJS from './modules/window.js' ;

const FPS = 30;
setInterval(update, 1000 / FPS);

// Récupérez vos éléments de fenêtre ici (par exemple, par ID ou classe)
//let windows = document.getElementsByClassName("window");
let taskbar = document.getElementById("taskbar");
let display = document.getElementById("display"); 
let apps = {};







//on recupre les apps
let appslist = [];
fetch("https://raw.githubusercontent.com/tayoky/FoxOS-online/main/apps/app.json")
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

        // Créez l'élément image
        let img = document.createElement("img");
        img.src = apps.apps[appName].url + "/logo.png";
        img.classList.add("taskbarimg");

        // Ajoutez le gestionnaire d'événements onclick à l'image
        img.addEventListener("click", function() {
            taskbarbtn(apps.apps[appName]);
        });

        // Ajoutez l'image à l'élément div
        appbutton.appendChild(img);

        // Ajoutez l'élément div à la barre des tâches
        taskbar.appendChild(appbutton);
    }
}





function update() {
    // Mettez à jour l'état de vos fenêtres ici
    // Par exemple, redimensionnez-les, mettez à jour leur contenu, etc.
} 





const FPS = 30;
setInterval(update, 1000 / FPS);
let windows = document.getElementsByClassName("window");

let selectwindow = -1;
let selectwindowOffsetX = 0;
let selectwindowOffsetY = 0;

document.onmouseup = releaseMouse;

function toolbarClick(Select) {
    tevent = window.Event;
    selectwindow = Select;
    selectwindowOffsetX = Tevent.pageX - windows[Select].getAttribute("left");
    selectwindowOffsetY = Tevent.pageY - windows[Select].getAttribute("top");
}

function releaseMouse() {
    selectwindow = -1;
}

function update() {
    windows = document.getElementsByClassName("window");

    for (let index = 0; index < windows.length; index++) {
        // Faites quelque chose avec chaque élément de la liste "windows"
        // Par exemple : windows[index].style.backgroundColor = "red";
    }
}

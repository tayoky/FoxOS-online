const FPS = 30;
setInterval(update, 1000 / FPS);
let windows = document.getElementsByClassName("window");

let selectwindow = -1;
let selectwindowOffsetX = 0;
let selectwindowOffsetY = 0;

document.onmouseup = releaseMouse;
window.onmousemove = mouseMove;

function toolbarClick(Select) {
    alert("test");
    let tevent = window.event;
    selectwindow = Select;
    selectwindowOffsetX = Tevent.pageX - windows[Select].getAttribute("left");
    selectwindowOffsetY = Tevent.pageY - windows[Select].getAttribute("top");
}

function releaseMouse() {
    selectwindow = -1;
}

function update() {
    windows = document.getElementsByClassName("window");


}

function mouseMove(event){
    if(selectwindow !== -1){
        windows[selectwindow].setAttribute("left",event.x - selectwindowOffsetX);
        windows[selectwindow].setAttribute("top" ,event.y - selectwindowOffsetY);
    }
}


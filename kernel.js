const FPS = 30;
setInterval(udapte,1000/FPS);

const selectwindow = -1;
document.onmouseup = releasemouse;


function toolbarclick(Select){
    selectwindow = Select;
}

function releasemouse(){
    selectwindow = -1;
}

function udapte(){
    let windows = document.getElementsByClassName("window");

    for (let index = 0; index < windows.length; index++) {
        index[index]
    }
}
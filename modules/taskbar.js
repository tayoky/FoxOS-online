//module de la barre des taches
function taskbarbtn(app){
    if(app.sandbox ){
        createWindow("20px","20px","50%","50%","<iframe class='iframewin'src='" + app.url +"'></iframe>",app.title);
    }
    else{
        createWindow("20px","20px","50%","50%","comming soon","test-window created by the test program");
    }
}
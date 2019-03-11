'use strict'	
function learnJS(lang, callback){
    console.log("Я учю " + lang);
    callback;
}
function done(){
    cnsole.log("Я прошел 3й урок");
}
learnJS("javaScript", done);
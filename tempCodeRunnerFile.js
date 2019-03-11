function learnJS(lang, callback){
    console.log("Я учю " + lang);
    callback();
}
function done(){
    console.log("Я прошел 3й урок");
}
learnJS("javaScript", done);
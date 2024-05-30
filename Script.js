var SIB = document.getElementById("SIB")
var COPUP = document.getElementById("COPUP")
var COPUPC = document.getElementById("COPUPC")




SIB.onmousedown = function(){
    COPUP.classList.add("show")
    COPUP.style.animationName = "show"
    COPUPC.classList.add("show")
    COPUPC.style.animationName = "show"
}
COPUP.onmousedown = function(){
    COPUP.style.animationName = "hide"
    COPUPC.style.animationName = "hide"
    setTimeout(() => {
        COPUP.classList.remove("show")
        COPUPC.classList.remove("show")
    }, 1000);
}



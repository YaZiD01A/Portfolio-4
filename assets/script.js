var startBtn = document.getElementById("startBtn")
var question = document.getElementById("question")


startBtn.addEventListener("click", clearPg)

function clearPg (){

   document.getElementById("startPg").style.display = "none"

}

document.getElementById("qPg").style.display = "none"

if(startBtn.addEventListener("click", clearPg)){

   document.getElementById("qPg").style.display = "!none"

}

question.addEventListener("click", clearPgQ)

function clearPgQ (){

   document.getElementById("question").style.display = "none"

}
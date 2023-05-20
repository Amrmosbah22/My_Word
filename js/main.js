var text = document.getElementById("text")


var center = document.getElementById("center")
center.addEventListener("click", function(){
    // text.style.textAlign = "center"
    text.classList.toggle("center")
})


var big = document.getElementsByClassName("big")[0]
var size = 16
big.addEventListener("click" , function(){
    size = size + 1
    text.style.fontSize = size+"px"
})

var smoll = document.getElementsByClassName("smoll")[0]
smoll.addEventListener("click" , function(){
    size = size - 1
    text.style.fontSize = size+"px"
})


var right = document.getElementById("right")
right.addEventListener("click", function(){
    text.classList.toggle("right")
})

var left = document.getElementById("left")
left.addEventListener("click", function(){
    text.classList.toggle("left")
})

var italic = document.getElementById("italic")
italic.addEventListener('click' , function(){
    text.classList.toggle('italic')
})

var underLine = document.getElementById('underLine')
underLine.addEventListener('click' , function(){
    text.classList.toggle('underLine')
})

var bold = document.getElementById('bold')
bold.addEventListener('click' , function(){
    text.classList.toggle('bold')
})
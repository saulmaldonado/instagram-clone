var slideIndex = 0
var slide = document.getElementsByClassName("iphone-image")

setInterval(function(){
    if(slideIndex > slide.length - 1){
        slideIndex = 0
    }
    for (let i = 0; i < slide.length; i++){
        slide[i].style.opacity = 0
    }
    slide[slideIndex].style.opacity = 1
    slideIndex++
}, 3000)

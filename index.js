var slideIndex = 0

console.log(document)

setInterval(function(){
    var slide = document.getElementsByClassName("iphone-image")
    for (let i = 0; i < slide.length; i++){
        slide[i].style.opacity = 0
    }
    if(slideIndex > slide.length - 1){
        slideIndex = 0
    }
    slide[slideIndex].style.opacity = 1
    slideIndex++
}, 3000)

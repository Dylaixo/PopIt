//Change to red
changeColor = () =>{
    let changeButton = document.getElementById("content-btn")
    console.log(changeButton)
    // changeButton.classList.toggle("")
}
changeImage = () =>{
    let changeImage = document.getElementById("content-img");
    let changeBackground = document.getElementById("ending-backgroud")
    let changeNav = document.getElementById("nav-change")
    changeImage.src = "images/background2.png"
    changeBackground.style.backgroundImage = "url(/images/bg-grid2.png)";
    changeNav.style.backgroundColor = "#FC2E20"
}
change = () =>{
    changeColor();
    changeImage();
}
//Slider funcionality
let arrowIconLeft = '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="50px" id="Layer_1" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 512 512" width="50px" color="#fff" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>';
let slides = document.querySelectorAll('.slide-ana div');
let slideSayisi = slides.length;
let slide1 = document.getElementById("1st-slide")
let slide2 = document.getElementById("2nd-slide")
let slide3 = document.getElementById("3rd-slide")
let slide4 = document.getElementById("4th-slide")
slide1.style.backgroundImage = "url('https://cdn.teachstarter.com/fileserver/2021/04/Pop-It-Multiplication-1200x900.jpg')"
slide2.style.backgroundImage = "url('https://a.allegroimg.com/original/118942/56f8300a4f75b24aa67040524f7e/Puzzle-Ukladanka-Tetris-Block-Popit-Fidget-Zabawka-Bohater-brak')"
slide3.style.backgroundImage = "url('https://a.allegroimg.com/original/11f496/c980fca64d07ae5b4a5bf8c32a80/2x-Bubble-Pop-It-Zabawka-SENSORYCZNA-ANTYSTRESOWA-Marka-Pop-It')"
slide4.style.backgroundImage = " url('https://i.ytimg.com/vi/381rCNPL52c/maxresdefault.jpg')"
let prev = document.getElementById('prev');
let next = document.getElementById('next');
prev.innerHTML = arrowIconLeft;
next.innerHTML = arrowIconLeft;
next.querySelector('svg').style.transform = 'rotate(180deg)';

//Moving slides
for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
}
let loop = 0 + 1000*slideSayisi;
//Next slide
function goNext(){
    loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
            }
}
//Previous slide
function goPrev(){
    loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
            }
}

next.addEventListener('click',goNext);
prev.addEventListener('click',goPrev);
//Moving slider after clicking at the right and left key on the keyboard
document.addEventListener('keydown',function(e){
    if(e.code === 'ArrowRight'){
        goNext();
    }else if(e.code === 'ArrowLeft'){
        goPrev();
    }
});


///////////////////////////   NAVBAR  ////////////////////////////

// sidebar open close 
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let cross = document.querySelector(".bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener('click', ()=>{
    navLinks.style.left="0";
    menuOpenBtn.style.visibility="hidden";
});

closeOpenBtn.addEventListener('click', ()=>{
    navLinks.style.left="-100%";
    menuOpenBtn.style.visibility="visible"
});

// sidebar sub menu open close js code=
let arrow = document.querySelector(".bx-chevron-down");
arrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});


///////////////////////////   CAROUSEL  ////////////////////////////
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';        
    }
    slideIndex++;
    if (slideIndex > slides.length) {
       slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000);

    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace("active", "");        
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " active";
}

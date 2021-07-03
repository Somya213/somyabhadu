// Hamburger
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.contianer');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

menuItem.forEach(item=>{
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
});
// End of Hamburger

// scrollbar
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
//end of scrollbar


// Slideshow
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
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// End of Sldieshow

// More Projects
var knowMore = document.querySelector('.knowMore');
var text = document.querySelector('.all-projects');

knowMore.addEventListener('click', (e)=>{
  text.classList.toggle('showMore');
  if(knowMore.innerText === 'Know More'){
    knowMore.innerText = 'Know Less';
  }else{
    knowMore.innerText = 'Know More';
  }
});
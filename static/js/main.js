window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const links =document.getElementsByClassName('link');
  console.log(links);
  if(this.scrollY <=280)
  {
    nav.className = '';
    for(let i=0;i<links.length;i++)
    {
      if(!(links[i].className.match("glow")))
      {
        links[i].className +=" glow";
      }
    }
  }
  else
  {
    nav.className = 'scroll';
    for(let i=0;i<links.length;i++)
    links[i].className = links[i].className.replace(" glow", "");
  }
};

var slideIndex =1;
var prevIndex=1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
  slides[prevIndex-1].style.display = "none";
  slides[slideIndex-1].style.display = "block";
  prevIndex=slideIndex;
  dots[slideIndex-1].className += " active";
}
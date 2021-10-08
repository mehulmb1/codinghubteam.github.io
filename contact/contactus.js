
function openNav() {
    document.getElementById("navbar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("navbar").style.width = "0";
  }


  
  function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
        var ul=document.getElementsByTagName('ul')
        ul.style.color="black"

    } else {
        navbar.classList.add('BgColour');
    }
}

window.addEventListener('scroll', scrollValue);

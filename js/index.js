const header_dropdown = document.querySelector('.header');
let mybutton = document.getElementById("scroll_top");
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
const mediaQuery = window.matchMedia('(max-width: 700px)');

window.onscroll = function() {

  //TOP BUTTON APPEARS
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    mybutton.style.display = "block";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.display = "none";
    mybutton.style.opacity = "0";
  }
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header_dropdown.style.top = "var(--padding)";
    //header_dropdown.style.opacity = "1";
 
  } else {
    header_dropdown.style.top = "calc(0px - var(--header-height) - var(--padding) )";
   // header_dropdown.style.opacity = "0";
    //IF PAGE TITLE EXISTS
  }
  prevScrollpos = currentScrollPos;
}
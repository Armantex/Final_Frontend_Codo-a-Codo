let hololulu = document.getElementById("card-left")
let text_banner = document.getElementById("text_banner")

const mediaQuery = window.matchMedia('(max-width: 767px)');
const mediaQuery_min = window.matchMedia('(min-width: 766px)');

mediaQuery.addEventListener('change', myFunction);

function myFunction(mediaQuery) {
    if (mediaQuery.matches) { // If media query matches
        hololulu.classList.remove("border-start")
        text_banner.classList.remove("banner-child")
        text_banner.classList.add("banner-child-sm")
    } else {
        hololulu.classList.add("border-start")
        text_banner.classList.remove("banner-child-sm")
        text_banner.classList.add("banner-child")
    }
  }
  
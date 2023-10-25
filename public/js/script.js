window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".links");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


ScrollReveal({ duration: 2500, reset: true, distance: '60px', delay: 400})

ScrollReveal().reveal('.vision', {origin: 'left'})
ScrollReveal().reveal('.mission', { delay: 300, origin:'bottom' })
ScrollReveal().reveal('.motto', { delay: 200, origin:'left' })
ScrollReveal().reveal('.deans_remark', { delay: 300, origin:'right' })
ScrollReveal().reveal('.core_values', { delay: 400, origin: 'right'})

const getyear = new Date()
let year = getyear.getFullYear()
document.getElementById('copy').innerHTML=`copy &copy; right @ ${year} Dr Kiano Boys High School.`
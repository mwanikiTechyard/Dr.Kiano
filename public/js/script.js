const closeBtn = document.getElementById("close");

const sideNav = document.querySelector(".side-nav");

const navToggle = document.querySelector(".nav-toggle");

closeBtn.addEventListener("click", () => {
  sideNav.classList.add("close");
  sideNav.classList.remove("open-close");
});

navToggle.addEventListener("click", () => {
  sideNav.classList.remove("close");
  sideNav.classList.toggle("open-close");
});

window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector(".links");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

ScrollReveal({ duration: 2500, reset: true, distance: "60px", delay: 300 });

ScrollReveal().reveal(".vision", { origin: "left" });
ScrollReveal().reveal(".mission", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".motto", { delay: 200, origin: "left" });
ScrollReveal().reveal(".deans_remark", { delay: 200, origin: "right" });
ScrollReveal().reveal(".core_values", { delay: 300, origin: "right" });


// date for the footer
const getyear = new Date();
let year = getyear.getFullYear();
document.getElementById("copy").innerHTML = `copy &copy; right @ ${year} Dr Kiano Boys High School.`;


// Bar chart from chart js.

let examChart = document.getElementById("myChart").getContext("2d");
const barColors = ["red", "green", "blue"];
const candColors = ["brown", "yellow", "purple"];

new Chart(examChart, {
  type: "bar",
  data: {
    labels: [2020, 2021, 2022],
    datasets: [{ backgroundColor: barColors, label: "MSS", data: [3.465, 3.638, 4.401] }]
  },
  options: {
    scales: {
      y: {
        grid: { display: false },
        ticks: { min: 0 }
      }
    },
    legend: { display: false },
    title: { display: true, text: "Mean Standard Score", fontSize: 25 },
  }
});

new Chart(candidateCharts, {
  type: "bar",
  data: {
    labels: [2020, 2021, 2022],
    datasets: [
      {
        backgroundColor: candColors,
        label: "Candidates with C+ and above",
        data: [8, 10, 14],
      }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Candidate with C+ and above",
      fontSize: 25,
    }
  }
});

import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "./path/to/swiper-bundle.min.js";
// ..
AOS.init();
var btn = document.getElementById("btn");
var nav = document.getElementById("menu");
if (btn && nav) {
  btn.addEventListener("click", function () {
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  });
}
const typingText = "Junior Full Stack Developer & Graphic Designer.";
const typingElement = document.getElementById("typing");
let typingIndex = 0;

typingElement.innerHTML = "";

function typeLetter() {
  if (typingIndex < typingText.length) {
    typingElement.innerHTML += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeLetter, 150); // Adjust typing speed
  }
}

// Start typing effect after a delay
setTimeout(typeLetter, 500); // Delay before starting

// Initialize Swiper for testimonials
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// Scroll
document.getElementById("scrollToNext").addEventListener("click", function () {
  // Get the current section by finding the closest section above the current scroll position
  let scrollPosition = window.pageYOffset;
  let sections = document.querySelectorAll("section");
  let currentSectionIndex = Array.from(sections).findIndex(
    (section) => section.offsetTop > scrollPosition
  );

  // If there's a next section, scroll to it; otherwise, scroll to the top
  if (currentSectionIndex >= 0 && currentSectionIndex < sections.length - 1) {
    let nextSection = sections[currentSectionIndex + 1];
    window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top if it's the last section or none are found
  }
});

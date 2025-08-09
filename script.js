const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
const navLinksItems = document.querySelectorAll("#nav-links a");
navLinksItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
const scrollToTopButton = document.getElementById("scroll-to-top");

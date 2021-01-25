const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

const navChangeY = 100;

function fixNav() {
  if (window.scrollY > nav.offsetHeight + navChangeY) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

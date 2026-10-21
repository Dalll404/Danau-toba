const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

const closeMenu = () => {
  navbar.classList.remove("active");
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Buka menu");
};

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
    return;
  }

  navbar.classList.add("active");
  hamburger.classList.add("active");
  navLinks.classList.add("active");
  hamburger.setAttribute("aria-expanded", "true");
  hamburger.setAttribute("aria-label", "Tutup menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 24);
});

navbar.classList.toggle("scrolled", window.scrollY > 24);

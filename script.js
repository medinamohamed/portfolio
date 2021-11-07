// https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.querySelector(".nav-header");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle nav
  mobileMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navSlide();

const headerEl = document.querySelector(".header");
const btnEl = document.querySelector(".btn-mobile-nav");

btnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  })
);

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

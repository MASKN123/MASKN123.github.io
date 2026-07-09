// ============================================================
// ✏️ EDIT: The rotating job titles shown in the hero section.
// Add, remove or reword freely — keep the quotes and commas.
// ============================================================
const ROLES = [
  "an AI & Data Scientist",
  "a Machine Learning Engineer",
  "a Data Storyteller",
  "a Problem Solver",
];

// ------------------------------------------------------------
// Everything below makes the site work — no need to edit it.
// ------------------------------------------------------------

// Typed effect for the hero role line
(function typedEffect() {
  const el = document.getElementById("typedRole");
  if (!el || ROLES.length === 0) return;
  let roleIdx = 0, charIdx = ROLES[0].length, deleting = false;

  function tick() {
    const current = ROLES[roleIdx];
    el.textContent = current.slice(0, charIdx);

    let delay = deleting ? 40 : 75;
    if (!deleting && charIdx === current.length) {
      delay = 2200; // pause on the full phrase
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % ROLES.length;
      delay = 400;
    }
    charIdx += deleting ? -1 : 1;
    setTimeout(tick, delay);
  }
  setTimeout(tick, 2200);
})();

// Light/dark theme toggle (remembers the visitor's choice)
(function themeToggle() {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
})();

// Mobile menu
(function mobileMenu() {
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      links.classList.remove("open");
    })
  );
})();

// Fade-in sections as they scroll into view
(function scrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();

// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

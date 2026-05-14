document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------------
       MOBILE NAVIGATION
    --------------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("#nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !expanded);
      navMenu.classList.toggle("open");
    });
  }

  /* ---------------------------------------------
       CONTACT FORM
    --------------------------------------------- */
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset();
      feedback.hidden = false;
    });
  }

  /* ---------------------------------------------
       ACTIVE NAV LINK
    --------------------------------------------- */
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------------
       MOBILE NAVIGATION
    --------------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("#nav-menu");

  if (navToggle && navMenu) {
    // Toggle menu on button click
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !expanded);
      navMenu.classList.toggle("show");
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("show");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("show");
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("show");
      }
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
      if (feedback) {
        feedback.hidden = false;
      }
    });
  }

  /* ---------------------------------------------
       ACTIVE NAV LINK
    --------------------------------------------- */
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

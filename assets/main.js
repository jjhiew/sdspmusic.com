'use strict';

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Swim Dads site is ready!");

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle menu when hamburger is clicked
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling to body
    navMenu.classList.toggle("show");
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("show") && !navMenu.contains(e.target)) {
      navMenu.classList.remove("show");
    }
  });

  // Optional: Close menu when a nav link is clicked
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });

});

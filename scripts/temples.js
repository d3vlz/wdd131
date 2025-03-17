"use strict";

window.addEventListener("load", () => {
  // Botón hamburguesa y nav
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const primaryNav = document.getElementById("primaryNav");

  // Toggle del menú en mobile/mediana
  hamburgerBtn.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
  });

  // Año actual en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Última modificación
  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }
});
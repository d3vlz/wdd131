// scripts/getdates.js
// Dinamismo para el footer: año actual y última modificación del documento.

(function() {
    "use strict";
  
    // Obtener y mostrar el año actual
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }
  
    // Obtener y mostrar la última fecha de modificación del documento
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
      lastModifiedParagraph.textContent = `Última modificación: ${document.lastModified}`;
    }
  })();
  
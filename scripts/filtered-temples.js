"use strict";

window.addEventListener("load", () => {
  // MENÚ HAMBURGUESA
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const primaryNav = document.getElementById("primaryNav");

  hamburgerBtn.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
  });

  // FOOTER AÑO Y MODIFICACIÓN
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }

  // TEMPLOS
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Ejemplos agregados
    {
      templeName: "Arequipa Peru",
      location: "Arequipa, Peru",
      dedicated: "2019, December, 15",
      area: 30000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-32869.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8454.jpg"
    },
    {
      templeName: "Santiago Chile",
      location: "Santiago, Chile",
      dedicated: "1983, September, 15",
      area: 20831,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7559.jpg"
    }
  ];

  const container = document.querySelector(".grid-container");

  function clearTemples() {
    container.innerHTML = "";
  }

  function displayTemples(list) {
    clearTemples();

    list.forEach(t => {
      const card = document.createElement("figure");

      const img = document.createElement("img");
      img.src = t.imageUrl;
      img.alt = t.templeName;
      img.loading = "lazy";

      const caption = document.createElement("figcaption");
      caption.innerHTML = `<strong>${t.templeName}</strong><br>${t.location}<br>Dedicated: ${t.dedicated}<br>Area: ${t.area.toLocaleString()} ft²`;

      card.appendChild(img);
      card.appendChild(caption);
      container.appendChild(card);
    });
  }

  function filterTemples(category) {
    let filtered = [];

    switch (category) {
      case "Old":
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        break;
      case "New":
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        break;
      case "Large":
        filtered = temples.filter(t => t.area > 90000);
        break;
      case "Small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      default:
        filtered = temples;
    }

    displayTemples(filtered);
  }

  // Manejo del clic en navegación
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const category = link.textContent.trim();
      filterTemples(category);
    });
  });

  // Mostrar todos por defecto
  displayTemples(temples);
});

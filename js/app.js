"use strict";

const properties = [
  {
    id: 1,
    title: "Modern Villa",
    status: "sale",
    location: "sajjad",
    type: "villa",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    price: "12.5 Billion Toman",
    image: "assets/images/cart1.webp",
    imageWidth: 900,
    imageHeight: 600,
  },
  {
    id: 2,
    title: "Luxury Apartment",
    status: "rent",
    location: "ahmadabad",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 1,
    area: 110,
    price: "25 Million Toman / Month",
    image: "assets/images/cart2.webp",
    imageWidth: 900,
    imageHeight: 600,
  },
  {
    id: 3,
    title: "Family House",
    status: "sale",
    location: "vakilabad",
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    price: "8.9 Billion Toman",
    image: "assets/images/cart3.webp",
    imageWidth: 900,
    imageHeight: 600,
  },
  {
    id: 4,
    title: "Skyline Penthouse",
    status: "sale",
    location: "elahiyeh",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 200,
    price: "15 Billion Toman",
    image: "assets/images/card4.webp",
    imageWidth: 900,
    imageHeight: 600,
  },
  {
    id: 5,
    title: "Cozy Apartment",
    status: "rent",
    location: "ghasemabad",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
    price: "18 Million Toman / Month",
    image: "assets/images/card5.webp",
    imageWidth: 900,
    imageHeight: 600,
  },
  {
    id: 6,
    title: "Garden Villa",
    status: "sale",
    location: "torghabeh",
    type: "villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    price: "20 Billion Toman",
    image: "assets/images/card6.webp",
    imageWidth: 900,
    imageHeight: 600,
  },
];

const propertiesContainer = document.querySelector("#properties-container");
const statusSelect = document.querySelector("#property-status");
const locationSelect = document.querySelector("#property-location");
const typeSelect = document.querySelector("#property-type");
const searchForm = document.querySelector(".hero__search");
const noResults = document.querySelector("#no-results");

const locationNames = {
  sajjad: "Sajjad, Mashhad",
  ahmadabad: "Ahmadabad, Mashhad",
  vakilabad: "Vakilabad, Mashhad",
  elahiyeh: "Elahiyeh, Mashhad",
  ghasemabad: "Ghasemabad, Mashhad",
  torghabeh: "Torghabeh",
};

function renderProperties(items) {
  const cardsHtml = items
    .map((property) => {
      return `
<article class="property-card" data-id="${property.id}" data-status="${property.status}" data-location="${property.location}" data-type="${property.type}">
          <img
            class="property-card__image"
            src="${property.image}"
            alt="${property.title}"
            width="${property.imageWidth}" height="${property.imageHeight}" loading="lazy" decoding="async"
          >
          <div class="property-card__content">
            <span class="property-card__badge">${property.status === "sale" ? "For Sale" : "For Rent"}</span>
            <h3 class="property-card__title">${property.title}</h3>
            <button type="button" class="property-card__details" aria-haspopup="dialog" aria-controls="property-modal" aria-label="View details for ${property.title}">
              View Details
            </button>
            <p class="property-card__location">
              <svg aria-hidden="true" class="property-card__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>${locationNames[property.location]}</span>
            </p>

            <ul class="property-card__features">
              <li>
                <svg aria-hidden="true" class="property-card__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M12 4v6M2 18h20"/>
                </svg>
                <span>${property.bedrooms} bedrooms</span>
              </li>
              <li>
                <svg aria-hidden="true" class="property-card__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 4 8 2a2 2 0 0 0-4 2v8M9 5l2-2M2 12h20M4 12v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4M6 20v2M18 20v2"/>
                </svg>
                <span>${property.bathrooms} ${property.bathrooms === 1 ? "bathroom" : "bathrooms"}</span>
              </li>
              <li>
                <svg aria-hidden="true" class="property-card__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m21.3 8.7-6-6a1 1 0 0 0-1.4 0l-11.2 11.2a1 1 0 0 0 0 1.4l6 6a1 1 0 0 0 1.4 0L21.3 10.1a1 1 0 0 0 0-1.4ZM7.5 10.5l2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/>
                </svg>
                <span>${property.area} m²</span>
              </li>
            </ul>

            <p class="property-card__price">${property.price}</p>
          </div>
        </article>
    `;
    })
    .join("");

  propertiesContainer.innerHTML = cardsHtml;
  noResults.textContent =
    items.length === 0
      ? "No properties found. Try changing your filters."
      : `${items.length} ${items.length === 1 ? "property" : "properties"} found.`;
}

renderProperties(properties);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedStatus = statusSelect.value;
  const selectedLocation = locationSelect.value;
  const selectedType = typeSelect.value;

  const filteredProperties = properties.filter((property) => {
    const matchesStatus =
      selectedStatus === "all" || property.status === selectedStatus;
    const matchesLocation =
      selectedLocation === "all" || property.location === selectedLocation;
    const matchesType =
      selectedType === "all" || property.type === selectedType;

    return matchesStatus && matchesLocation && matchesType;
  });

  renderProperties(filteredProperties);
});
const modal = document.querySelector("#property-modal");
const modalClose = document.querySelector("#modal-close");
const modalContact = document.querySelector("#modal-contact");
let modalTrigger;

modalClose.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("close", () => {
  document.documentElement.classList.remove("modal-open");
  if (modalTrigger && modalTrigger.isConnected) {
    modalTrigger.focus({ preventScroll: true });
  }
});

modalContact.addEventListener("click", () => {
  modal.close();
  modalTrigger = null;
});

propertiesContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".property-card");
  if (!card) return;

  const propertyId = Number(card.dataset.id);
  const property = properties.find((item) => item.id === propertyId);
  if (!property) return;

  modalTrigger = card.querySelector(".property-card__details");
  document.querySelector("#modal-title").textContent = property.title;
  document.querySelector("#modal-status").textContent =
    property.status === "sale" ? "For Sale" : "For Rent";
  document.querySelector("#modal-location").textContent =
    locationNames[property.location];
  document.querySelector("#modal-bedrooms").textContent =
    `${property.bedrooms} bedrooms`;
  document.querySelector("#modal-bathrooms").textContent =
    `${property.bathrooms} ${property.bathrooms === 1 ? "bathroom" : "bathrooms"}`;
  document.querySelector("#modal-area").textContent = `${property.area} m²`;
  document.querySelector("#modal-price").textContent = property.price;

  const modalImage = document.createElement("img");
  modalImage.id = "modal-image";
  modalImage.src = property.image;
  modalImage.alt = property.title;
  modalImage.width = property.imageWidth;
  modalImage.height = property.imageHeight;
  document.querySelector("#modal-image-container").replaceChildren(modalImage);
  document.documentElement.classList.add("modal-open");
  modal.showModal();
});

modal.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;

  const firstControl = modalClose;
  const lastControl = modalContact;

  if (event.shiftKey && document.activeElement === firstControl) {
    event.preventDefault();
    lastControl.focus();
  } else if (!event.shiftKey && document.activeElement === lastControl) {
    event.preventDefault();
    firstControl.focus();
  }
});
let backdropPointerDown = false;

function isOutsideModal(event) {
  const bounds = modal.getBoundingClientRect();
  return (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  );
}

modal.addEventListener("pointerdown", (event) => {
  backdropPointerDown = event.target === modal && isOutsideModal(event);
});

modal.addEventListener("click", (event) => {
  if (backdropPointerDown && event.target === modal && isOutsideModal(event)) {
    modal.close();
  }
  backdropPointerDown = false;
});

const statsSection = document.querySelector(".about__stats");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (statsSection && "IntersectionObserver" in window && !reduceMotion.matches) {
  const counters = [...statsSection.querySelectorAll("strong")].map(
    (element) => {
      const finalText = element.textContent.trim();
      return {
        element,
        finalText,
        target: Number.parseInt(finalText, 10),
        suffix: finalText.replace(/^\d+/, ""),
      };
    },
  );

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();

      if (reduceMotion.matches) return;

      const duration = 1500;
      let startTime;
      counters.forEach(({ element, finalText, suffix }) => {
        element.setAttribute("aria-label", finalText);
        element.textContent = `0${suffix}`;
      });

      function animateCounters(timestamp) {
        startTime ??= timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        counters.forEach(({ element, target, suffix, finalText }) => {
          element.textContent =
            progress === 1
              ? finalText
              : `${Math.floor(target * easedProgress)}${suffix}`;
        });

        if (progress < 1 && !reduceMotion.matches) {
          requestAnimationFrame(animateCounters);
        } else {
          counters.forEach(({ element, finalText }) => {
            element.textContent = finalText;
          });
        }
      }

      requestAnimationFrame(animateCounters);
    },
    { threshold: 0.35 },
  );

  observer.observe(statsSection);
}

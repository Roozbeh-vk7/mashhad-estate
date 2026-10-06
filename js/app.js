"use strict";

const cards = document.querySelectorAll(".property-card");

cards.forEach((card) => {
    console.log(card.dataset.status);
});

const transactionSelect = document.querySelector("#transaction");

transactionSelect.addEventListener("change", () => {
    console.log(transactionSelect.value);
});
const statsSection = document.querySelector(".about__stats");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (statsSection && "IntersectionObserver" in window && !reduceMotion.matches) {
  const counters = [...statsSection.querySelectorAll("strong")].map((element) => {
    const finalText = element.textContent.trim();
    return {
      element,
      finalText,
      target: Number.parseInt(finalText, 10),
      suffix: finalText.replace(/^\d+/, ""),
    };
  });

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();

    if (reduceMotion.matches) return;

    const duration = 1400;
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
        element.textContent = progress === 1
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
  }, { threshold: 0.35 });

  observer.observe(statsSection);
}

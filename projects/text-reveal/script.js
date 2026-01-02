// Text Reveal - Script file
// Automatically calculate --n value based on text length

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  if (h1) {
    const span = h1.querySelector("span");
    if (span) {
      const textLength = span.textContent.length;
      h1.style.setProperty("--n", textLength);
    }
  }

  // Hide scroll indicator after scrolling
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    const indicator = document.querySelector(".scroll-indicator");
    if (indicator && window.scrollY > 100) {
      indicator.style.opacity = "0";
      indicator.style.pointerEvents = "none";
    } else if (indicator && window.scrollY <= 100) {
      indicator.style.opacity = "1";
      indicator.style.pointerEvents = "auto";
    }
  });
});

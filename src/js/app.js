import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const priceElements = document.querySelectorAll(".price");

  priceElements.forEach((priceElement) => {
    if (priceElement.classList.contains("hot")) {
      const priceElementValue = priceElement.innerText;
      priceElement.innerText = `${priceElementValue} 🔥`;
    }
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    console.log("Inline script loaded");  // Check if the inline script runs
    var splide = new Splide(".slider1", {
      type: "loop",
      padding: "5rem",
    });
    splide.mount();
    console.log("Inline script: Splide slider initialized");
  });

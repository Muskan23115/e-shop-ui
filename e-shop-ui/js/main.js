document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalType = document.getElementById("modalType");
  const modalDesc = document.getElementById("modalDesc");
  const closeBtn = document.querySelector(".close-btn");

  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img").src;
      const title = card.querySelector("h4").textContent;
      const type = card.getAttribute("data-type");
      const subtype = card.getAttribute("data-subtype");

      modalImage.src = img;
      modalTitle.textContent = title;
      modalType.textContent = `Type: ${type} (${subtype})`;
      modalDesc.textContent = "This is a sleek and luxurious product designed to elevate your style.";

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    console.log("Clicked product:", title, img);

  });

  // Close on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

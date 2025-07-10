document.addEventListener("DOMContentLoaded", () => {
  const typeFilter = document.getElementById("typeFilter");
  const subtypeFilter = document.getElementById("subtypeFilter");
  const nameSearch = document.getElementById("nameSearch");
  const productCards = document.querySelectorAll(".product-card");

  function applyFilters() {
    const type = typeFilter.value.toLowerCase();
    const subtype = subtypeFilter.value.toLowerCase();
    const name = nameSearch.value.toLowerCase();

    productCards.forEach(card => {
      const cardType = card.getAttribute("data-type").toLowerCase();
      const cardSubtype = card.getAttribute("data-subtype").toLowerCase();
      const cardName = card.querySelector("h4").textContent.toLowerCase();

      const typeMatch = !type || cardType === type;
      const subtypeMatch = !subtype || cardSubtype === subtype;
      const nameMatch = !name || cardName.includes(name);

      if (typeMatch && subtypeMatch && nameMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  typeFilter.addEventListener("change", applyFilters);
  subtypeFilter.addEventListener("change", applyFilters);
  nameSearch.addEventListener("input", applyFilters);
});

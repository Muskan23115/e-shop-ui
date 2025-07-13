document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.querySelector(".product-grid");
  const typeFilter = document.getElementById("typeFilter");
  const subtypeFilter = document.getElementById("subtypeFilter");
  const nameSearch = document.getElementById("nameSearch");

  let allProducts = [];

  async function loadProducts() {
    try {
      const response = await fetch("data/products.json");
      allProducts = await response.json();
      displayProducts(allProducts);
    } catch (err) {
      console.error("Failed to load products:", err);
    }
  }

  function displayProducts(products) {
    productGrid.innerHTML = ""; // Clear grid

    if (products.length === 0) {
      productGrid.innerHTML = `<p>No products found.</p>`;
      return;
    }

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.dataset.type = product.type;
      card.dataset.subtype = product.subtype;

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>Type: ${product.type}</p>
      `;

      card.addEventListener("click", () => showModal(product));
      productGrid.appendChild(card);
    });
  }

  function filterProducts() {
    const selectedType = typeFilter.value;
    const selectedSubtype = subtypeFilter.value;
    const searchText = nameSearch.value.trim().toLowerCase();

    const filtered = allProducts.filter(product => {
      const matchesType = selectedType === "" || product.type === selectedType;
      const matchesSubtype = selectedSubtype === "" || product.subtype === selectedSubtype;
      const matchesName = product.name.toLowerCase().includes(searchText);
      return matchesType && matchesSubtype && matchesName;
    });

    displayProducts(filtered);
  }

  function showModal(product) {
    const modal = document.getElementById("productModal");
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalType").textContent = `Type: ${product.type} (${product.subtype})`;
    
    // 👇 Updated line
    document.getElementById("modalDesc").textContent = product.description || "No description available.";

    modal.style.display = "flex";
  }

  document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("productModal").style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("productModal")) {
      document.getElementById("productModal").style.display = "none";
    }
  });

  // 🔁 Listen for filter changes
  typeFilter.addEventListener("change", filterProducts);
  subtypeFilter.addEventListener("change", filterProducts);
  nameSearch.addEventListener("input", filterProducts);

  loadProducts();
});

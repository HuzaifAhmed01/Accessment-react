const offers = [
    {
      id: 1,
      units: "1 Unit",
      discount: "20% Off",
      price: 10.0,
      originalPrice: 14.0,
      sizes: ["s", "m", "l", "xl"],
      colors: ["Black", "White", "Red"],
    },
    {
      id: 2,
      units: "2 Units",
      discount: "30% Off",
      price: 18.0,
      originalPrice: 26.0,
      sizes: ["s", "m", "l", "xl"],
      colors: ["Black", "White", "Red"],
    },
    {
      id: 3,
      units: "3 Units",
      discount: "40% Off",
      price: 25.0,
      originalPrice: 42.0,
      sizes: ["s", "m", "l", "xl"],
      colors: ["Black", "White", "Red"],
    },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const formData = document.querySelector(".formData");
  
    offers.forEach((offer) => {
      // Create two size selects
      let sizeSelects = '';
      for (let i = 0; i < 2; i++) {
        sizeSelects += `
          <div class="select-size">
            <p>#${i + 1}</p>
            <select name="product-select" id="select-size-${offer.id}-${i}">
              ${offer.sizes
                .map((size) => `<option value="${size}">${size}</option>`)
                .join("")}
            </select>
          </div>
        `;
      }
  
      // Create two color selects
      let colorSelects = '';
      for (let i = 0; i < 2; i++) {
        colorSelects += `
          <div class="select-color">
            
            <select class="color-options" id="select-color-${offer.id}-${i}">
              ${offer.colors
                .map((color) => `<option value="${color}">${color}</option>`)
                .join("")}
            </select>
          </div>
        `;
      }
  
      const offerHtml = `
        <div class="inside-form">
          <div class="first-section">
            <div class="offers-box-mein">
              <input type="radio" id="price-input-${offer.id}" name="offer" />
              <label for="price-input-${offer.id}">
                ${offer.units} <span class="discount">${offer.discount}</span>
              </label>
            </div>
            <div class="price">
              <h3>$${offer.price.toFixed(2)} USD</h3>
              <h5>$${offer.originalPrice.toFixed(2)} USD</h5>
            </div>
          </div>
          <div class="size-colors-parent">
            <div class="sizes">
              <h3 class="product-heading">Size</h3>
              ${sizeSelects}
            </div>
            <div class="colors-parent">
              <h3 class="product-heading">Colours</h3>
              <div class="colors-section-container">
                ${colorSelects}
              </div>
            </div>
          </div>
        </div>
      `;
  
      formData.insertAdjacentHTML("beforeend", offerHtml);
    });
  });
  
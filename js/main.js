//page3 image changing
$(".imgRow").click(function () {
  const link = $(this).attr("src");
  $("#bigImage").attr("src", link);
});

$(".imgRow").hover(function () {
  const link = $(this).attr("src");
  $("#bigImage").attr("src", link);
});

function myFunction() {
  alert("Chosen item is added to cart");
}

// page5 Product count
calculateTotal();
const btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  element.addEventListener("click", (event) => {
    const row = event.target.closest(".productCart");
    const quantityEl = row.querySelector(".quantity");
    let currentQuantity = parseInt(quantityEl.textContent);

    if (event.target.classList.contains("btnPlus")) {
      currentQuantity += 1;
    } else if (event.target.classList.contains("btnMinus")) {
      if (currentQuantity <= 1) {
        return;
      }
      currentQuantity -= 1;
    }
    quantityEl.textContent = currentQuantity;

    const priceEl = row.querySelector(".price");
    const lineTotalPrice = (
      parseFloat(priceEl.textContent) * parseFloat(currentQuantity)
    ).toFixed(2);
    row.querySelector(".totalOneProduct").textContent = lineTotalPrice;
    calculateTotal();
  });
});

function calculateTotal() {
  let totalPrice = 0;

  const allPrices = document.querySelectorAll(".productCart .totalOneProduct");

  allPrices.forEach((priceEl) => {
    totalPrice += parseFloat(priceEl.textContent);
  });

  document.querySelector(".totalAll").textContent = totalPrice.toFixed(2);
}

const remove = document.querySelectorAll(".remove");

remove.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.target.closest(".productCart").remove();
    calculateTotal();
  });
});

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
let number1 = 1;
let number2 = 1;
let price1 = 0;
let price2 = 0;

floralDress = {
  price: 19.99,
};

blackDress = {
  price: 22.99,
};

$("#btnPlus1").click(function () {
  number1 += 1;
  $(".quantity1").html(`<span class="quantity1">${number1}</span>`);
  price1 = (floralDress.price * number1).toFixed(2);
  $(".totalOneProduct1").html(
    `<span class="totalOneProduct1">${price1}</span>`
  );
});

$(".btnPlus2").click(function () {
  number2 += 1;
  $(".quantity2").html(`<span class="quantity1">${number2}</span>`);
  price2 = (blackDress.price * number2).toFixed(2);
  $(".totalOneProduct2").html(
    `<span class="totalOneProduct2">${price2}</span>`
  );
});

$("#btnMinus1").click(function () {
  if (number1 <= 1) {
    return;
  }
  number1 -= 1;
  $(".quantity1").html(`<span class="quantity1">${number1}</span>`);
  let price1 = (floralDress.price * number1).toFixed(2);
  $(".totalOneProduct1").html(
    `<span class="totalOneProduct1">${price1}</span>`
  );
});

$(".btnMinus2").click(function () {
  if (number2 <= 1) {
    return;
  }
  number2 -= 1;
  $(".quantity2").html(`<span class="quantity1">${number2}</span>`);
  let price2 = (blackDress.price * number2).toFixed(2);
  $(".totalOneProduct2").html(
    `<span class="totalOneProduct2">${price2}</span>`
  );
});

$(".remove1").click(function () {
  $(".productCart1").remove();
});

$(".remove2").click(function () {
  $(".productCart2").remove();
});

// let all = price1 + price2;

// $(".totalAll").html(`<span class="totalAll">${all}</span>`);

// let allProdNumber = parseFloat(blackDress.total + floralDress.total);

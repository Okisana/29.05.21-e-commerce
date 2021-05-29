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

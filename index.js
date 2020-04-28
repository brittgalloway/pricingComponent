document.addEventListener("click", function (e) {
  const isChecked = e.target.checked;
  console.log(isChecked);
  if (isChecked == true) {
    $(".monthly").removeClass("hidden");
    $(".annually").addClass("hidden");
  } else {
    $(".monthly").addClass("hidden");
    $(".annually").removeClass("hidden");
  }
});

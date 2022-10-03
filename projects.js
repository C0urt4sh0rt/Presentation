var html = document.getElementsByClassName("topbutton");
html.click(function () {
  if ($("topbutton").hasClass("active")) {
    $("topbutton").removeClass("active");
  } else {
    $("topbutton").addClass("active");
  }
});

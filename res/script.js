$interval = 3000;
setInterval(() => {
  if ($("#name").css("display") == "none") {
    $("#name").css("display", "inline-block");
    $("#name-urdu").css("display", "none");
  } else {
    $("#name-urdu").css("display", "inline-block");
    $("#name").css("display", "none");
  }
}, $interval);

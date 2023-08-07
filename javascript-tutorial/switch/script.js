window.onload = function () {
  var str = "";
  var day = new Date().getDay();

  switch (day) {
    case 0:
      str = "Today it's Sunday";
      break;
    case 1:
      str = "Today it's Monday";
      break;
    case 2:
      str = "Today it's Tuesday";
      break;
    case 3:
      str = "Today it's Wednesday";
      break;
    case 4:
      str = "Today it's Thursday";
      break;
    case 5:
      str = "Today it's Friday";
      break;
    case 6:
      str = "Today it's Saturday";
      break;
    default:
      str = "Looking forward to the Weekend";
  }
  document.getElementById("today").innerHTML = str;
};

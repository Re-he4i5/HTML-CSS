function calcSum() {
  var max = document.getElementById("max").value;
  total = 0;
  for (var i = 0; i <= max; i++) {
    total += i;
  }
  document.getElementById("val").textContent = max;
  document.getElementById("sum").textContent = total;
}

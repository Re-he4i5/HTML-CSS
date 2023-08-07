function compare() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  document.getElementById("result-equal").innerHTML = a == b;
  document.getElementById("result-not-equal").innerHTML = a != b;
  document.getElementById("result-less-than").innerHTML = a < b;
  document.getElementById("result-greater-than").innerHTML = a > b;
  document.getElementById("result-less-than-or-equal").innerHTML = a <= b;
  document.getElementById("result-greater-than-or-equal").innerHTML = a >= b;
}

function init() {
  var b = document.getElementById("board");
  for (var i = 0; i < 8; i++) {
    var row = document.createElement("row");
    for (var j = 0; j < 8; j++) {
      var col = document.createElement("col");
      col.className = "cell";
      col.id = i + "cell" + j;
      col.onclick = clicked;
      row.appendChild(col);
    }
    b.appendChild(row);
  }
  function clicked(e) {
    document.getElementById("info").textContent = e.target.id + " clicked";
  }
}

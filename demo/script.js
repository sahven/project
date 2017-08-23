function isInside(node, target) {
  for (; node != null; node = node.parentNode) {
    if (node == target) {
      return true;
    }
  }
}

function setUpPanels() {
  var pAll = document.querySelectorAll(".panel");
  var pAbbr = [];
  for (var f = 0; f < pAll.length; f++) {
    if (pAll[f].nodeType == 1) {
      pAbbr.push(pAll[f]);
    }
  }
  for (var g = 0; g < pAll.length; g++) {
    (function(h) {
      pAbbr[h].addEventListener("mouseover", function(event) {
        if (!isInside(event.relatedTarget, pAbbr[h])) {
          var target = event.target;
          while (target.className != "panel" && target.className != "panel inactive") {
            target = target.parentNode;
          }
          makeActive(target);
        }
      });
    })(g);
  }
  return pAbbr;
}
var panels = setUpPanels();

function makeActive(target) {
  for (var i = 0; i < panels.length; i++) {
    panels[i].className = "panel";
  }
  target.className = "panel active";
  for (var j = 0; j < panels.length; j++) {
    if (panels[j].className == "panel active") {
      var an = j;
      var al = j * 15;
      panels[j].style.left = al + "%";
    }
  }
  for (var k = 0; k < panels.length; k++) {
    if (panels[k].className != "panel active") {
      panels[k].className = "panel inactive";
      var il;
      if (k < an) {
        il = al - (an - k) * 15;
        panels[k].style.left = il + "%";
      } else if (k > an) {
        il = al + 25 + (k - an) * 15;
        panels[k].style.left = il + "%";
      }
    }
  }
}

var container = document.getElementById("container");
container.addEventListener("mouseout", function(event) {
  if (!isInside(event.relatedTarget, container)) {
    for (var l = 0; l < panels.length; l++) {
      panels[l].className = "panel";
      panels[l].style.left = "";
    }
  }
});

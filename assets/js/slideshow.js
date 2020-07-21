var slideIndex = 1;
showDivs(slideIndex);

var btntxt = [];
var btnlink = [];

tout();
var f = 1;
function tout() {
  setTimeout(function () {
    if (f == 1) {
      plusDivs(1);
      tout();
    } else {
      f = 1;
      tout();
    }
  }, 2300);
}

function changeDivs(n) {
  f = 0;
  plusDivs(n);
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.transform = "scale(2,2)";
    x[i].style.opacity = 0;
  }
  x[slideIndex - 1].style.transform = "scale(1,1)";
  x[slideIndex - 1].style.opacity = 1;
  if (document.getElementById("btntxt" + slideIndex).value != "") {
    document.getElementById("slide_btn").style.display = "inline-block";
    document.getElementById("slide_btn").innerHTML = document.getElementById(
      "btntxt" + slideIndex
    ).value;
    document.getElementById("slide_btn").href = document.getElementById(
      "btnlnk" + slideIndex
    ).value;
  } else {
    // document.getElementById("slide_btn").style.display = "none";
  }
}

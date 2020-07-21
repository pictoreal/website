window.onscroll = function () {
  scrollFunction();
};

var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
function scrollFunction() {
  //   console.log(document.documentElement.scrollTop);

  
    console.log(window.location.href);
    if (
      document.body.scrollTop > window.innerHeight * 0.25 ||
      document.documentElement.scrollTop > window.innerHeight * 0.25
    ) {
      document.getElementById("navbar").className = "navbar_small";
      document.getElementById("logo_navbar").className = "logo_navbar_small";
      document.getElementById("picto_heading").className =
        "picto_heading_small";
      document.getElementById("navigation__button").className =
        "navigation__button small";
      document.getElementById("navigation__background").className =
        "navigation__background navbg_small";
      document.getElementById("navigation__icon").className =
        "navigation__icon small_ico";
      document.getElementById("div_btn_navbar").className =
        "div_btn_navbar_small";
      if (flag1 === 1) {
        flag1 = 0;
        window.scrollTo(0, window.innerHeight + 2);
      }
      flag2 = 1;
    } else if (
      document.body.scrollTop < window.innerHeight * 0.8 ||
      document.documentElement.scrollTop < window.innerHeight * 0.8 ||
      window.location.href.split('#')[1] === "events"
    ) {
      document.getElementById("navbar").className = "navbar";
      document.getElementById("logo_navbar").className = "logo_navbar";
      document.getElementById("picto_heading").className = "picto_heading";
      document.getElementById("navigation__button").className =
        "navigation__button";
      document.getElementById("navigation__background").className =
        "navigation__background";
      document.getElementById("navigation__icon").className =
        "navigation__icon";
      document.getElementById("div_btn_navbar").className = "div_btn_navbar";
      if (flag2 === 1) {
        flag2 = 0;
        window.scrollTo(0, 0);
      }
      flag1 = 1;
    }
  
}

function toTop() {
  window.scrollTo(0, 0);
}

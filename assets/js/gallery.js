let data;

function onJsonLoad(res) {
  data = res;
  data.itemsBaseURL = `${window.location.origin}/assets/images/gallery/`;
  data.thumbnailHeight = 250;
  data.thumbnailWidth = 400;
  data.thumbnailGutterWidth = 200;
  data.thumbnailGutterHeight = 50;
  console.log(data);
  $("#nanogallery2").nanogallery2(data);
}

$(document).ready(function () {
  $.ajax({
    url: "/assets/images/gallery/list.json",
    method: "get",
    success: onJsonLoad,
  });
});

let data;

function onJsonLoad(res){
	data = res;
	data.itemsBaseURL = `${window.location.origin}/assets/images/gallery/`;
	console.log(data);
	$("#nanogallery2").nanogallery2(data);
}

$(document).ready(function(){
	$.ajax({
		url: "/assets/images/gallery/list.json",
		method: "get",
		success: onJsonLoad
	});
});

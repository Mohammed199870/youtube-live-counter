function viewcount() {
document.getElementById("show").style.display = "none";
clearTimeout(sub);
hide();
fireview();

document.getElementById("subtext").style.display= "none";
document.getElementById("viewtext").style.display= "none";
document.getElementById("liketext").style.display= "none";
document.getElementById("communttext").style.display = "none";

document.getElementById("type").innerHTML = "الفديو";
document.getElementById("span").innerHTML = "حصل على مشهدات"
document.getElementById("show").style.display = "none";
}
function hide() {
document.getElementById("sub").style.display= "none";
document.getElementById("views").style.display= "inline";
document.getElementById("likes").style.display= "none";
document.getElementById("communts").style.display = "none";


}

function fireview() {
var videourl = document.getElementById("url").value;
var videoid = videourl.split("https://www.youtube.com/watch?v=").join("");
function workviewcount() {
var view = setTimeout(function(){ 

var result;
$.ajax({
 url: "https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=" + videoid + "&key=AIzaSyDbnXvZyE2B37fK_BoBmb__8BOXcL3JGk0", 
  dataType: "jsonp",
success: function(data){
result= data.items[0].statistics.viewCount;
title= data.items[0].snippet.title;
document.title = result;
document.getElementById("text").innerHTML = title ;
jQuery(function($){
	var i = 1;
	$('#views').flipcountdown({
		tick:function(){
			return result;
		}
	});
})


      },
    error: function(jqXHR, textStatus, errorThrown) {
		// مدري
      alert (textStatus, + ' | ' + errorThrown);
 }
  });
   workviewcount();
  
}, 3000);
};
workviewcount();
};
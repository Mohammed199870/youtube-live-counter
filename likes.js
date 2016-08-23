function likecount() {
document.getElementById("show").style.display = "none";

hidelikes();
firelikecount();
document.getElementById("subtext").style.display= "none";
document.getElementById("viewtext").style.display= "none";
document.getElementById("liketext").style.display= "none";
document.getElementById("communttext").style.display = "none";

document.getElementById("type").innerHTML = "الفديو";
document.getElementById("span").innerHTML = "حصل على لايكات"
document.getElementById("show").style.display = "none";


}
function hidelikes() {
document.getElementById("sub").style.display= "none";
document.getElementById("views").style.display= "none";
document.getElementById("likes").style.display= "inline";
document.getElementById("communts").style.display = "none";

}

function firelikecount() {

var videourl = document.getElementById("url").value;
var videoid = videourl.split("https://www.youtube.com/watch?v=").join("");
function worklikecount() {
setTimeout(function(){ 
var result;
$.ajax({
 url: "https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=" + videoid + "&key=AIzaSyDbnXvZyE2B37fK_BoBmb__8BOXcL3JGk0", 
  dataType: "jsonp",
success: function(data){
result= data.items[0].statistics.likeCount;
title= data.items[0].snippet.title;
//document.getElementById("answer").innerHTML = result;
document.getElementById("text").innerHTML = title ;
jQuery(function($){
	var i = 1;
	$('#likes').flipcountdown({
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
worklikecount();  
}, 3000);
}
worklikecount();
};

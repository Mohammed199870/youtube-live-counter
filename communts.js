﻿function communtcount() {
hidecommunt();
firecommuntcount();
document.getElementById("type").innerHTML = "الفديو";
document.getElementById("span").innerHTML = "حصل على تعليقات"
}
function hidecommunt() {
document.getElementById("sub").style.display= "none";
document.getElementById("views").style.display= "none";
document.getElementById("likes").style.display= "none";
document.getElementById("communts").style.display = "inline";
}

function firecommuntcount() {

var videourl = document.getElementById("url").value;
var videoid = videourl.split("https://www.youtube.com/watch?v=").join("");
function workcommuntscount() {
setTimeout(function(){ 
var result;
$.ajax({
 url: "https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=" + videoid + "&key=AIzaSyDbnXvZyE2B37fK_BoBmb__8BOXcL3JGk0", 
  dataType: "jsonp",
success: function(data){
result= data.items[0].statistics.commentCount;
title= data.items[0].snippet.title;
document.getElementById("text").innerHTML = title ;
jQuery(function($){
	var i = 1;
	$('#communts').flipcountdown({
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
workcommuntscount();  
}, 3000);
}
workcommuntscount();
};

function sub() {
hidesub();
firesub();
document.getElementById("type").innerHTML = "القنات";
document.getElementById("span").innerHTML = "حصل على مشتركين";
}
function hidesub() {
document.getElementById("views").style.display= "none";
document.getElementById("sub").style.display= "inline";
document.getElementById("likes").style.display= "none";
document.getElementById("communts").style.display = "none";

}
function firesub() {
var videourl = document.getElementById("url").value;
var videoid = videourl.split("https://www.youtube.com/watch?v=").join("");
var result;
var channelID;
$.ajax({
 url: "https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet,status&id=" + videoid + "&key=AIzaSyDbnXvZyE2B37fK_BoBmb__8BOXcL3JGk0", 
  dataType: "jsonp",
success: function(data){
channelID= data.items[0].snippet.channelId;
title= data.items[0].snippet.title;
document.getElementById("text").innerHTML = title ;
},


  });
  
  function worksub() {
 var sub = setTimeout(function(){ 
  $.ajax({
 url: "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+channelID+"&key=AIzaSyDbnXvZyE2B37fK_BoBmb__8BOXcL3JGk0", 
  dataType: "jsonp",
success: function(data){
result = data.items[0].statistics.subscriberCount;

jQuery(function($){
	var i = 1;
	$('#sub').flipcountdown({
		tick:function(){
			return result;
		}
	});
})

},


  });

   sub();
  
}, 3000);
};
worksub();
};




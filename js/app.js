// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyC1LUXhOucBhR6TesAqAUHbFUFZIWloJ2U",
//     authDomain: "pet-app-c88fb.firebaseapp.com",
//     databaseURL: "https://pet-app-c88fb.firebaseio.com",
//     projectId: "pet-app-c88fb",
//     storageBucket: "",
//     messagingSenderId: "902252465338"
//   };
//   firebase.initializeApp(config);
// </script>

function loadPage() {
	$("#share").click(showPost)
}

function showPost(e) {
	e.preventDefault()
	var $container = $("#posts_container")
	var $divPost =  $("<div />", {'class': "col-xs-12 post-style"})
	var $user =  users[0]['nickname']
	var $pUser = $("<p />")
	$pUser.text($user)
	var $date = new Date()
	var $hour = $date.getHours()
	var $minutes = $date.getMinutes()
	var $finalHour = $hour + ':'+ $minutes
	var $pHour = $("<p />")
	$pHour.text($finalHour)
	var $input = $("#input")
	var post = $input.val()
	var $divBar = $("<div />", {'class': "row bar-style"})
	var $pawButton = $("<button />",  {'class': "button-bar col-xs-2"})
	var pawIcon = $("<i />", {'class': "fa fa-heart-o"})
	$pawButton.html(pawIcon)
	var $commentButton = $("<button />",  {'class': "button-bar col-xs-2"})
	var $commentIcon = $("<i />", {'class': "fa fa-comment-o"})
	$commentButton.html($commentIcon)
	var $shareButton =  $("<button />",  {'class': "button-bar col-xs-2"})
	var $shareIcon = $("<i />", {'class': "fa fa-paper-plane"})
	$shareButton.html($shareIcon)

	$divPost.append($pUser)
	$divPost.append($pHour)
	$divPost.append(post)
	$divBar.append($pawButton)
	$divBar.append($commentButton)	
	$divBar.append($shareButton)		
	$container.prepend($divPost)
	$divPost.append($divBar)
	$input.val(" ")
	$input.attr("placeholder", "Compartir el dia de hoy")

	$pawButton.click(function(){
		like(pawIcon);
	})
}

function like(pawIcon) {
	pawIcon.removeClass("fa fa-heart-o")
	pawIcon.addClass("fa fa-heart")
	pawIcon.addClass("like-color")
}


$(document).ready(loadPage)


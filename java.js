var changeAboutMe = document.getElementsById("button1");
changeAboutMe.addEventListener("click", changetoface(),true);
changeAboutMe.addEventListener("click", changepage(page), true);


	function changetoface() {
	
	document.getElementsByTagName('body')[0].style.backgroundImage="linear-gradient(0deg, rgba(25,25,25,0.4), rgba(5,0,29,0.5)),url('face.jpeg')";
	document.getElementsByTagName('body')[0].style.backgroundColor="white";
	
	

}

function changepage (page){

	window.location.href = page;

}

var changeHome = document.getElementsByClassName("home");
changeHome.addEventListener("click", changetohome(),true);
changeHome.addEventListener("click", changepage(page), true);


function changetoface() {
	
	document.getElementsByTagName('body')[0].style.backgroundImage="linear-gradient(0deg, rgba(25,25,25,0.4), rgba(5,0,29,0.5)),url('background.jpeg')";
	document.getElementsByTagName('body')[0].style.backgroundColor="white";
	
	

}
var changeAboutMe = document.getElementsById("button1");
changeAboutMe.addEventListener("click", changetoface(),true);
changeAboutMe.addEventListener("click", changepage(page), true);

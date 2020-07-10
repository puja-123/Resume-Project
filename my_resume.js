var scrolledBar = document.getElementById("top-span");

function setScrolled()
{
	var scrolled = Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight))*100);
	scrolledBar.innerText = scrolled;
}
window.addEventListener("scroll" , setScrolled);

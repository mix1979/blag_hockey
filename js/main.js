document.querySelector(".burger").addEventListener("click", function (e) {
	document.querySelector(".mobile_menu_page").classList.toggle("translated");
	console.log("fired");
});
document.querySelector(".mobile_menu").addEventListener("click", function (e) {
	document.querySelector(".mobile_menu_page").classList.toggle("translated");
});

const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
	document.querySelectorAll(".scrollme").forEach((elem) => {
		elem.classList.remove("scrollme");
	});
}

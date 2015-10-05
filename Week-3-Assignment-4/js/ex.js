var bigRectangle = {};
var smallRectangle = {};
window.onload = function () {
	bigRectangle = document.querySelector(".long-rect");
	smallRectangle = document.querySelector(".short-rect");
	console.log("Welcome...");
	bigRectangle.addEventListener("mouseover", function () {
		smallRectangle.innerText = "Mouse is on the box";
		smallRectangle.addEventListener("click", function () {
			alert("Hello")
		})
	});
	bigRectangle.addEventListener("mouseout", function () {
		smallRectangle.innerText = "Mouse is not on the box"
	})
};


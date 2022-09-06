

const titles = document.querySelectorAll(".preview > a");

const boxes = document.querySelectorAll(".preview");


for (let i = 0; i < titles.length; i++) {
	const rm = titles[i];
	
	rm.onclick = function () {
	boxes[i].classList.toggle("potato");
	if (rm.innerHTML == "read more") {
		rm.innerHTML = "read less";}
	else if (rm.innerHTML != "read more") {
		rm.innerHTML = "read more";
	}
}
}

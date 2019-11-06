function openMenu(){
	document.getElementById("klapMenu").style.display = "block";
	document.getElementById("button").setAttribute('onclick', 'closeMenu()');
}
function closeMenu(){
	document.getElementById("klapMenu").style.display = "none";
	document.getElementById("button").setAttribute('onclick', 'openMenu()');
}

function openMenuDiensten(){
	document.getElementById("klapMenuDiensten").style.display = "block";
	document.getElementById("button").setAttribute('onclick', 'closeMenuDiensten()');
}
function closeMenuDiensten(){
	document.getElementById("klapMenuDiensten").style.display = "none";
	document.getElementById("button").setAttribute('onclick', 'openMenuDiensten()');
}
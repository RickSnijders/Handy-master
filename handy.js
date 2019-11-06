function openMenu(){
	document.getElementById("klapMenu").style.display = "block";
	document.getElementById("button").setAttribute('onclick', 'closeMenu()');
}
function closeMenu(){
	document.getElementById("klapMenu").style.display = "none";
	document.getElementById("button").setAttribute('onclick', 'openMenu()');


}
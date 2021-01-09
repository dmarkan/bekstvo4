function forma() {

var x = document.querySelector("#ime input").value;
var y = document.querySelector("#prezime input").value;

if ((x=="Dan")&&(y=="Simmons")) {
	alert("Vrata su se otključala")
	document.write("KRAJ")
} else {
	alert("Pogrešna šifra, treba da uneseš tačno ime i prezime pa da onda klikneš na dugme");
}
}

function slika() {
var pic = "https://i.ibb.co/jDGPWL6/large.jpg"
document.getElementById('slika').src = pic.replace('90x90', '225x225');
document.getElementById('slika').style.display='block';

}
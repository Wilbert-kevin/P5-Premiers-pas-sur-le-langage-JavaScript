const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const texte = document.querySelector("#banner p");
const image = document.querySelector("#banner img");

var compteur =0

function clickdroit(){ 	
	Dots[compteur].className="dot"	
	compteur++
	console.log(compteur)
	if(compteur==4)compteur=0
	texte.innerHTML=slides[compteur].tagLine
	image.src="./assets/images/slideshow/"+slides[compteur].image

	Dots[compteur].className="dot dot_selected"
}

const Fleche_Droite = document.querySelector("#banner .arrow_right");
Fleche_Droite.addEventListener("click", clickdroit )

function clickgauche(){ 	
	Dots[compteur].className="dot"	
	compteur--
	console.log(compteur)
	if(compteur==-1)compteur=3
	texte.innerHTML=slides[compteur].tagLine
	image.src="./assets/images/slideshow/"+slides[compteur].image

	Dots[compteur].className="dot dot_selected"
}

const Fleche_Gauche = document.querySelector("#banner .arrow_left");
Fleche_Gauche.addEventListener("click", clickgauche )

const Dots = document.querySelectorAll(".dot");

console.log(Dots)
console.log(Dots[0])



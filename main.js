//genero 16 numeri da 1 a 100  genRandNum(min, max)
//li metto nell'array delle bombe generateBombs(array, max)
//metto i restanti nell'array
//chiedo 100 - 16 volte all'utente di inserire un numero
	//controllo che non mi metta più volte lo stesso numero
//controllo che ogni numero non sia nell'array bombe
	//conto quanti numeri del safe array becca e lo stampo quando:
		//becca una bomba
		//finisce array safe

//BONUS:
//funzionalità difficoltà
var bombs = []; //inizializzo array bombe
var safe = []; //inizializzo array safe
//chiedo livello difficoltà
var maxNumber = prompt("Selezione difficoltà", "100");

//funzione genera numeri
function genRandNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//funzione genera array bombe
function generateBombs(array, max) {
	while (array.length < 16){ //finchè la array è minore di 16
		var tempNumber = genRandNum(1, max) //genero un numero da 1 a max
		if (!array.includes(tempNumber)){ //se non presente in array allora
			array.push(tempNumber); //metticelo

		}
	}
	console.log(array); //debug
	return array; //restituisci array di 16
}
//funzione principale del gioco
function mineSweeper (bombs, safe, maxnumber) {
	while (safe.length < maxnumber - 16){ // finchè array safe è minore di maxNumber - 16
		//chiedi numero da utente e parsalo in intero
		var input = parseInt(prompt("Inserisci un numero da 1 a " + maxnumber + "! Buona fortuna!"));
		if (!isNaN(input) && 1 <= input && input <= 100 && !safe.includes(input)){ // se non è un non numero &&
			//maggiore uguale ad 1 && minore uguale a 100 && non è già in array
			safe.push(input); //inseriscilo
		} else {
			return safe.length;// spara fuori a quanto è arrivato
		}
	}
	return safe.length; //ho finito tutto il safe (hai vinto!)
}

var result = mineSweeper(bombs, safe, maxNumber);
console.log("Game over! Punteggio: " + result );
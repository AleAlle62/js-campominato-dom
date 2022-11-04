/*
PARTE 1

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//PARTE 2
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

PASSAGGI IN ITALIANO:
1. creazione di 16 numeri casuali (le bombe), non ci possono essere numeri uguali
2. SE si clicca su uno dei 16 numeri, abbiamo perso, ALTRIMENTI si continua
3. finisce la parita se utente clicca su 1 dei 16 numeri, o clicca tutti i numeri NON bomba
4. dichiarare il punteggio (numero di volte che utente ha cliccato su una NON bomba)
*/

// dichiarazione variabili 
let eleSelectLevel = document.querySelector('#select-level')
let eleBtnPlay = document.querySelector('#btn-play')
let eleBtnHelp = document.querySelector('#btn-help')
let eleStartScreen = document.querySelector('.start-screen')
let eleGrid = document.querySelector('.grid')
let arrMines
let score
let maxScore


// creazione eventi bottone PLAY

eleBtnPlay.addEventListener('click', function () {

    // dichiarazione dello score ad inizio di ogni nuova partita 
	score = 0
    //numero celle
	let nCells = parseInt(eleSelectLevel.value)
    // num delle bombe
	let nMines = 16
    // punteggio massimo 
	maxScore = nCells - nMines
    // creazione dell'array di bombe 
	arrMines = generateMines(nMines, 1, nCells)
    // stampa dell'array in console, per vedere i numeri
	console.log(arrMines.sort((a, b) => a - b))

	// se viene cambiata la modalita si rinnova tutta la griglia
	eleGrid.innerHTML = ''
	eleGrid.classList.remove('hidden')
	eleStartScreen.classList.add('hidden')
	const sideSquare = Math.sqrt(nCells)
	eleGrid.style.setProperty('--sideSquare', sideSquare)

    // creazione ciclo per numero di celle a seconda della difficolta 
	for (let i = 1; i <= nCells; i++) {
		let eleCell = document.createElement('div')
		eleCell.classList.add('cell')
		eleCell.innerHTML = i
		eleGrid.append(eleCell)
		eleCell.addEventListener('click', toggleCell)
	}
});


// incrementazione punteggio bombe 
function toggleCell() {
	const cellNumber = parseInt(this.innerHTML)
	if (arrMines.includes(cellNumber)) {
		this.classList.add('mine')
		disableAllCells(true)
		alert('Il tuo punteggio e: ' + score)
	} else {
		this.removeEventListener('click', toggleCell) 
		score++;
		this.classList.add('no-mine')
		if (score == maxScore) {
			disableAllCells(false)
			alert('Complimenti hai vinto! Il tuo punteggio e: ' + score)
		}
	}
}

// generazione delle mine 
function generateMines(nMines, min, max) {
	const arrRandoms = [];
	for (let i = 0; i < nMines; i++) {
		do {
			randomNumber = getRandomInteger(min, max)
		} while (arrRandoms.includes(randomNumber))
		arrRandoms.push(randomNumber)
	}
	return arrRandoms
}

// random 
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min
}

// disabilita mine visione 
function disableAllCells(showMines) {
	const listCells = eleGrid.querySelectorAll('.cell')
	for (let i = 0; i < listCells.length; i++) {
		const cellNumber = parseInt(listCells[i].innerHTML)
		if (showMines && arrMines.includes(cellNumber)) {
			listCells[i].classList.add('mine')
		}
		listCells[i].removeEventListener('click', toggleCell)
	}
}






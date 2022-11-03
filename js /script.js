// creazione cella classe
let eleGrid = document.querySelector('.grid');
let elePlay = document.querySelector('.btn-play')
let cella = document.querySelector('.cell')
// per il bonus, creare che ad ogni bottone corrispinde un ciclo diverso che fa scorrere i diversi for a seconda di cio che si clicca 


//FACILE
function bottonePlayUno(){

    //far scomparire le altre due opzioni
    eleGrid.innerHTML = ''
    eleGrid.classList.remove('hidden')
    eleGrid.classList.add('hidden') 

      // ciclo per tutti i quadrati
    for (let i = 1; i <= 100; i++) {
            
        // creazione elemento HTML per le celle 
        const eleCell = document.createElement('div');
        
        // aggiunta all'elemento nuovo
        eleCell.classList.add('cell');
            
        // mettere un contenuto all'interno di un elemento
        eleGrid.append(eleCell);
            
        // stampa dei numeri 
        eleCell.innerHTML += `<div class=".grid">${[i]}</div>`
        
        // funzione per cui se cliccli si colora collegato a CSS
        eleCell.addEventListener('click', function () {
            this.classList.toggle('active')
        });
    }
}

//MEDIO
function bottonePlayDue(){

    //far scomparire le altre due opzioni
    eleGrid.innerHTML = ''
    eleGrid.classList.remove('hidden')
    eleGrid.classList.add('hidden') 


      // ciclo per tutti i quadrati
    for (let i = 1; i <= 81; i++) {
            
        // creazione elemento HTML per le celle 
        const eleCell = document.createElement('div');
        
        // aggiunta all'elemento nuovo
        eleCell.classList.add('cell');
            
        // mettere un contenuto all'interno di un elemento
        eleGrid.append(eleCell);
            
        // stampa dei numeri 
        eleCell.innerHTML += `<div class=".grid">${[i]}</div>`
        
        // funzione per cui se cliccli si colora collegato a CSS
        eleCell.addEventListener('click', function () {
            this.classList.toggle('active')
        });
    }
}

//difficile

function bottonePlayTre(){

    //far scomparire le altre due opzioni
    eleGrid.innerHTML = ''
    eleGrid.classList.remove('hidden')
    eleGrid.classList.add('hidden') 


      // ciclo per tutti i quadrati
    for (let i = 1; i <= 49; i++) {
            
        // creazione elemento HTML per le celle 
        const eleCell = document.createElement('div');
        
        // aggiunta all'elemento nuovo
        eleCell.classList.add('cell');
            
        // mettere un contenuto all'interno di un elemento
        eleGrid.append(eleCell);
            
        // stampa dei numeri 
        eleCell.innerHTML += `<div class=".grid">${[i]}</div>`
        
        // funzione per cui se cliccli si colora collegato a CSS
        eleCell.addEventListener('click', function () {
            this.classList.toggle('active')
        });
    }
}



/*

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




//VA MESSO TUTTO DENTRO IL CLICK


//creazione numeri random da 1 a 16
let arrayRandom = [];
for (var i = 0; i < 16 ; i++){

    let numberRandom = Math.floor(Math.random()*100)+1;
    let result = true;

    for (var j = 0; j < i; j++){
        if (arrayRandom [j] == numberRandom)result =false;
    }
    if (result){
        arrayRandom[i] = numberRandom;
    } else {
        i--;
    }
}
console.log(arrayRandom) //OK FUNZIONA



//clicco su uno dei 16 perso, senno si continua
if (cella === arrayRandom[i]){
    console.log('hai perso')
}
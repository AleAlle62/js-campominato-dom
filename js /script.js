// creazione cella classe
const eleGrid = document.querySelector('.grid');
let uno = document.querySelector('.sceltauno')
let due = document.querySelector('.sceltadue')
let tre = document.querySelector('.sceltatre')
let elePlay = document.querySelector('.btn-play')
let livelliDifficolta = document.getElementById('livelli')
// per il bonus, creare che ad ogni bottone corrispinde un ciclo diverso che fa scorrere i diversi for a seconda di cio che si clicca 

//bottone play 
elePlay.addEventListener('click', function(){

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
    
})


// // DIFFICOLTA 1

// uno.addEventListener('click', function () {

//     // ciclo per tutti i quadrati
//     for (let i = 1; i < 101; i++) {
            
//         // creazione elemento HTML per le celle 
//         const eleCell = document.createElement('div');
        
//         // creazione di un elemento nuovo
//         eleCell.classList.add('cell');
            
//         // mettere un contenuto all'interno di un elemento
//         eleGrid.append(eleCell);
            
//         // stampa dei numeri 
//         eleCell.innerHTML += `<div class=".grid">${[i]}</div>`
        
//         // funzione per cui se cliccli si colora collegato a CSS
//         eleCell.addEventListener('click', function () {
//             this.classList.toggle('active')
//         });
//     }
    
// });




// //DIFFICOLTA 2

// due.addEventListener('click', function () {

//     // ciclo per tutti i quadrati
//     for (let i = 1; i < 81; i++) {
            
//         // creazione elemento HTML per le celle 
//         const eleCell = document.createElement('div');
        
//         // creazione di un elemento nuovo
//         eleCell.classList.add('cell');
            
//         // mettere un contenuto all'interno di un elemento
//         eleGrid.append(eleCell);
            
//         // stampa dei numeri 
//         eleCell.innerHTML += `<div class=".grid">${[i]}</div>`
        
//         // funzione per cui se cliccli si colora collegato a CSS
//         eleCell.addEventListener('click', function () {
//             this.classList.toggle('active')
//         });
//     }
// });




// //DIFFICOLTA 3

// tre.addEventListener('click', function () {

//         // ciclo per tutti i quadrati
//     for (let i = 1; i < 49; i++) {
            
//         // creazione elemento HTML per le celle 
//         const eleCell = document.createElement('div');
            
//         // creazione di un elemento nuovo
//         eleCell.classList.add('cell');
        
//         // mettere un contenuto all'interno di un elemento
//         eleGrid.append(eleCell);
            
//         // stampa dei numeri 
//         eleCell.innerHTML += `<div class=".grid">${[i]}</div>`
        
//         // funzione per cui se cliccli si colora collegato a CSS
//         eleCell.addEventListener('click', function () {
//             this.classList.toggle('active')
//         });
//     }
// });




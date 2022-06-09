/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

//Variabili da utilizzare

let answer;
let sum=0;

//Imposto il ciclo con le seguenti direttive

for (let i=0; i<10; i++){

    //imposto il prompt convertito in numero e controllo

    answer=parseInt(prompt('Dimmi un numero'));
    console.log(answer);

    //La somma totale= alla somma dei 10 numeri richiesti

    sum += answer;
}

//Controllo finale
console.log(sum);
/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

//Creo un array vuoto e controllo

const array=[];
console.log(array);

//La variabile del prompt

let answer;

//imposto le condizioni del ciclo

for(let i=0; i<6; i++){

    //Coversione risposta prompt in numero e controllo
    answer=parseInt(prompt('Dammi un numero'));
    console.log(answer);

    //Imposto le condizioni per l'inserimento numerico nell'array

    if(answer % 2 === 0){
    } else{
        array.push(answer);
    }
}

//Controllo finale

console.log(array);

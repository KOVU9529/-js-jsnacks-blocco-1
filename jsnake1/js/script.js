/*Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
in verde i numeri pari.*/

//array
const arrayNumbers=[1,2,3,4,5,6];
console.log(arrayNumbers);

// devo creare un ciclo per far partire la selezione

for (let i=0; i < arrayNumbers.length; i++){
    console.log(arrayNumbers[i]);

// converto ogni singolo elemento in una variabile

   const result=arrayNumbers[i];

// imposto le condizioni
   
   if( result % 2 === 0){
      document.getElementById('green').innerHTML +=' '+ result;
   }else {
      document.getElementById('red').innerHTML += ' '+ result;
   }
}

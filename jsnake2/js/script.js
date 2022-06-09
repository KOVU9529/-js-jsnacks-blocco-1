/*Chiedi un numero di 4 cifre all’utente nel prompt
 e calcola la somma di tutte le cifre che compongono il numero.*/
 const myNumber= prompt('Dimmi un numero');
 console.log(myNumber);

 //imposto la variabile della somma 
let sum=0;

//svolgo il ciclo
for(let i=0; i < myNumber.length; i++){

   //conversione elementi stringa in numeri
   //numeri presi singolarmente
   let number= parseInt(myNumber[i]);
   console.log(number);

   //alla somma=0 sommo ciclo dopo ciclo ogni singolo numero
   sum += number;
 }

 //controllo la funzionalità del procedimento svolto
 console.log(sum);
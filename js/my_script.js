/* 1 SNACK
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 */


// let primaParola = prompt("Inserisci una parola");
// let secondaParola = prompt("Inserisci un'altra parola");

// if (primaParola.length < secondaParola.length) {
//     console.log(primaParola + ", " + secondaParola);
// } else if (primaParola.length > secondaParola.length) {
//     console.log(secondaParola + ", " + primaParola);
// } else {
//     alert("Le parole hanno la medesima lunghezza");
// }


/* 2 SNACK
 * Il software deve chiedere per 10 volte all'utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. 
 */

// let somma = 0;

// for (let i = 0; i < 10; i++) {
//     let numeroTemporaneo = parseInt (prompt("Inserisci un numero"));
//     console.log(numeroTemporaneo);
//     somma = somma + numeroTemporaneo;
// }

// console.log(somma);

/**  3 SNACK
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

// let invitati = ["Giada", "Morena", "Stefano", "Nico"]; //creo una lista di invitati

// let nomeUtente = prompt("Quale è il tuo nome"); //chiedo all'utente di darmi il suo nome. 

// let verificaInvitato = false;

// for (let i = 0; i < invitati.length; i++) {
//     let invitato = invitati[i];     //nel ciclo for scorro tutti i nomi della lista 
//     if (invitato == nomeUtente) {   // e verifico che se il nome dell'invitato corrisponde al nome fornitomi
//         verificaInvitato = true;    //  la condizione risulta vera.
//     }
// }

// if (verificaInvitato == true) { //se la condizione è vera do il benvenuto altrimenti rimando un messaggio di errore.
//     console.log("Benvenuto");
// } else {
//     alert("Non sei tra gli invitati");
// }


/** 4 SNACK
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

// let listaNumeri = []; // creo array vuota

// // Faccio un ciclo for nel quale per 6 volte chiedo all'utente di inserire un numero

// for (let i = 0; i < 6; i++) {
//     let numeroScelto = parseInt(prompt("Inserisci un numero"));
//     if (numeroScelto%2 != 0) {   // se il numero inserito è dispari lo aggiungo a listaNumeri
//         listaNumeri.push(numeroScelto);
//     } 
// }

// console.log(listaNumeri);


/** 5 SNACK
 * Calcola la somma e la media dei primi 10 numeri
 */

// let somma = 0;

// for (let i = 0; i < 10; i++) {
//     somma = somma + i;
// }

// console.log(somma);
// console.log(somma / 10);

// let j = 0;
// somma = 0;

// while ( j < 10) {
//     somma = somma + j;
//     j++
// }

// console.log(somma);
// console.log(somma / 10);


/*  6 SNACK
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
 */

//  let listaParole = [];

//  for (let i = 0; i < 5; i++) {
//      let parolaScelta = prompt("Inserisci una parola");

//      if (parolaScelta == parolaScelta.toUpperCase()) {
//         alert("La parola inserita è in maiuscolo")
//      } else {
//         listaParole.push(parolaScelta); 
//      }
//  }

//  console.log(listaParole);

/** 7 SNACK
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

// let somma = 0

// for (let i = 0; i < 5; i++) {
//     let numeroTemporaneo = parseInt(prompt("Inserisci un numero"));
//     somma = somma + numeroTemporaneo;
// }
// console.log(somma);

// let somma = 0;
// let j = 0;

// while ( j < 5) {
//     let numeroTemporaneo = parseInt(prompt("Inserisci un numero"));
//     somma = somma + numeroTemporaneo;
//     j++
// }

// console.log(somma);

 /** 8 SNACK
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */

//   let listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
//   let listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"]; 

//   let listaInvitati = [];

//   for ( let i = 0; i < 10; i++) {
//       let listaNomiRandom = Math.floor(Math.random() * listaNomi.length);
//       let listaCognomiRandom = Math.floor(Math.random() * listaCognomi.length);
//       let nomeCompletoRandom = listaNomi[listaNomiRandom] + " " + listaCognomi[listaCognomiRandom];
//       listaInvitati.push(nomeCompletoRandom);
//       document.getElementById("lista-invitati").innerHTML += "<li>" + nomeCompletoRandom + "</li>";
//   }

//   document.getElementById("lista-nomi").innerHTML = listaNomi.toString();
// document.getElementById("lista-cognomi").innerHTML =  listaCognomi.toString();


/** 9 SNACK
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */

// let listaPrima = ["mele", "banane", "arance", "pere", "albicocche", "pesche", "uva", "ciliegie", "avocado"];
// let listaSeconda = ["nutella", "merendine", "cioccolata", "biscotti", "marmellata", "panna"];

// if (listaPrima.length > listaSeconda.length) {
//     while (listaSeconda.length < listaPrima.length) {
//         listaSeconda.push(Math.random() * 120);
//     }   
// } else if (listaPrima.length < listaSeconda.length) {
//     while (listaPrima.length < listaSeconda.length) {
//         listaPrima.push(Math.random() * 664);
//     }
// } else {
//     alert("Sono uguali, non aggiungo nessun elemento.");
// }

// document.getElementById("lista-nomi").innerHTML = listaPrima;
// document.getElementById("lista-cognomi").innerHTML = listaSeconda;
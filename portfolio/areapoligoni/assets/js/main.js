function Area() {
    /* assegno alle variabili il valore dei campi input del form in base al loro id */
    var lato1 = parseInt(document
        .getElementById("lato1").value);

    var lato2 = parseInt(document
        .getElementById("lato2").value);

    var lato3 = parseInt(document
        .getElementById("lato3").value);
/* calcolo il semiperimetro del triangolo e salvo il valore in una variabile */ 
    console.log(typeof(lato1));
    var s = (lato1 + lato2 + lato3) / 2;
/* calcolo l'area del triangolo utilizzando le variabili dei lati e del semiperimetro */
    var area = Math.sqrt(s * ((s - lato1) 
            * (s - lato2) * (s - lato3)));
/* mostro il valore dell'area nello spazio apposito sulla pagina che è individuato per mezzo del suo id */

    
    document.getElementById(
        "display-uno").innerHTML = area;

}
/*
Questo script restituisce un errore NaN se i valori inseriti non sono compatibili con le dimensioni di un triangolo. Vorrei implementare un messaggio di errore che invece di NaN restituisce sulla pagina la frase "I valori inseriti costruiscono una linea aperta! Inserisci nuovi valori per riprovare." per permettere all'utente di capire il problema.
Da notare: questo non è un malfunzionamento della funzione. Un poligono non può avere un lato troppo grande o troppo piccolo rispetto agli altri, perché in tal caso sarebbe una linea aperta di cui non è possibile calcolare l'area.
Penso che il modo migliore per mostrare un messaggio di errore personalizzato sia usare isNaN() ma ho bisogno di capire come integrarlo nella mia funzione (devo farlo prima dell'output quando calcolo l'area controllando se il risultato è NaN oppure quando faccio l'output nella pagina sull'InnerHTML? DA CHIEDERE AL PROF E DISCUTERE IN CLASSE).
Un altro modo potrebbe essere quello di costruire una RegEx che controlli i valori inseriti e restiuisca l'errore se si verifica il caso di un poligono aperto ancora prima di eseguire il click sul pulsante?
*/

/*
QUADRATO o RETTANGOLO
*/

function Area2() {
    /* assegno alle variabili il valore dei campi input del form in base al loro id */
    var latoA = parseInt(document
        .getElementById("latoA").value);

    var latoB = parseInt(document
        .getElementById("latoB").value);

    let area2 = latoA * latoB;
    document.getElementById(
        "display-due").innerHTML = area2;
}

/*
CERCHIO
*/

function Area3() {
    /* assegno alle variabili il valore dei campi input del form in base al loro id e dichiaro la variabile pigreco */
    var raggio = parseInt(document
        .getElementById("raggio").value);

    const pi = 3.14;

    let area3 = (raggio * raggio) * pi;
    document.getElementById(
        "display-tre").innerHTML = area3;
}
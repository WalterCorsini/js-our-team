# SVOLGIMENTO
crea un array di object in javascript.
visualizza il risultato sul console.log
visualizza il risultato nel DOM
visualizza la photo dell object non come stringa ma come foto.
viasualizza nel dom in una card.

## INPUT   
1. creo foglio html
2. creo contenitore risultato con id "result"
3. creo in css delle classi per i file che dovro inserire tramite javascript  "result" "card" 
4. do una max-widht ed una posizione all'immagine che verra inserita nel DOM
5. creo un array di object "team"
## LOGIC // con ciclo for e for in
6. creo un ciclo for per far scorrere gli object all'interno dell'array
7. creo una variabile di blocco "currElem" per salvare gli object
8. creo una variabile stringa per salvare il testo che andrò ad inserire ogni fine ciclo for.
    - apri il tag della card con id="card"
9. posso utilizzare brak notation,dot notation e for in per visualizzare i valori delle chiavi dell'object
10. utilizzo for in
11. se la chiave non è "photo"
    - concateno alla mia variabile il testo  con i suoi tag.
12. altrimenti
    - concateno alla mia variabile l'immagine e chiudo il tag <div>
## OUTPUT  // con ciclo for e for in
13. inserisco la stringa creata nel DOM tramite l'id "result"



## LOGIC // con forEach
6. associo alla "variabile" resultElem l'elemento con id "result"
7. creo ciclo forEach con una variabile "currElem"
8. mostro in console log currElem
## OUTPUT
9. concateno nella variabile associata all id "result" del DOM una stringa con tutte le key di "currElem"


## LOGIC // cor forEach e for in
6. associo alla "variabile" resultElem l'elemento con id "result"
7. creo ciclo forEach con una variabile "currElem"
8. creo variabile "stringHTML per concatenare dei valori da inserire alla fine del for in nel DOM
9. creo ciclo for in
10. mostro in console.log gli elementi negli object
11. se la chiave non è "photo"
    - concateno alla mia variabile il testo  con i suoi tag.
12. altrimenti
    - concateno alla mia variabile l'immagine e chiudo il tag <div>
## OUTPUT  // con ciclo for e for in
13. inserisco la stringa creata nel DOM tramite l'id "result"


## LOGIC PRINT IN FUNCTION
6. associo alla "variabile" resultElem l'elemento con id "result"
7. creo ciclo forEach con una variabile "currElem"
8. creo variabile "stringHTML" a la associo alla funzione "saveCard"
9. invoco la funzione saveCard e gli passo il parametro currElem
    - creo variabile "string" e inserisco l'apertura del mio contenitore con classe "card"
    - utilizzo for in
        se la chiave non è "photo"
            - concateno alla mia variabile il testo con i suoi tag.
        altrimenti
            - concateno alla mia variabile l'immagine e chiudo il tag <div> aperto all'inizio della funzione.
        - ritorno il valore nello script
## OUTPUT
10. mostro nel console log il risultato della funzione
11. inserisco nel DOM il risultato
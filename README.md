# SVOLGIMENTO
crea un array di object in javascript.
visualizza il risultato sul console.log
visualizza il risultato nel DOM
visualizza la photo dell object non come stringa ma come foto.
viasualizza nel dom in una card.

## INPUT
creo foglio html
creo contenitore risultato con id "result"
creo in css delle classi per i file che dovro inserire tramite javascript  "result" "card" 
do una max-widht ed una posizione all'immagine che verra inserita nel DOM
creo un array di object "team"
creo un ciclo for per far scorrere gli object all'interno dell'array
creo una variabile di blocco "currElem" per salvare gli object
creo una variabile stringa per salvare il testo che andrò ad inserire ogni fine ciclo for.
    - apri il tag della card con id="card"
posso utilizzare brak notation,dot notation e for in per visualizzare i valori delle chiavi dell'object
utilizzo for in
se la chiave non è "photo"
    - concateno alla mia variabile il testo  con i suoi tag.
altrimenti
    - concateno alla mia variabile l'immagine e chiudo il tag <div>
    - inserisco la stringa creata nel DOM tramite l'id "result"
//generare un numero casuale per il giocatore 
let numUser = Math.floor((Math.random()*6)+1)
console.log(numUser);
let textNumUser = document.getElementById("numeroGiocatore")
textNumUser.innerHTML = `il numero che ti è stato assegnato tirando i dadi è: ${numUser}`;


//generare un numero casuale per il pc
let numAi = Math.floor((Math.random()*6)+1)
console.log(numAi);
let textNumAi = document.getElementById("numeroAi")
textNumAi.innerHTML = `il numero che è stato assegnato al pc tirando i dadi è: ${numAi}`;

let winner = document.getElementById ("winner")

//stabilire il vincitore in base a chi fa il punteggio più alto
if (numAi < numUser){
    winner.innerHTML = `Complimenti hai vinto! :)`
}else if (numAi > numUser){
    winner.innerHTML = `Ti sei fatto battere dal pc :(`
}else {
    winner.innerHTML = `Pareggio`
}


//lista delle mail che possono entrere
const listaMail = ["gionni@gmail.com", "sofia@gmail.com", "franco@gmail.com", "ernesta@gmail.com"];

// chiedo all'utente la mail
const mailUser = prompt("per verificare se sei in lista scrivi la tua mail:")

//controllo che sia in lista se è presente
let trovata = document.getElementById("trovata")

let mailInLista = false; 
let posizione;
for (let i = 0; i < listaMail.length; i++ ){
    if (mailUser === listaMail[i]){
        mailInLista = true;
        posizione = i +1 
    }
}

if (mailInLista === true) {
    trovata.innerHTML = `La tua mail è nella lista, nella posizione ${posizione}`
}else {
    trovata.innerHTML = `Mi dispiace ma la tua mail non è in lista`
}

//lista delle mail che possono entrere
const listaMail = ["gionni@gmail.com", "sofia@gmail.com", "franco@gmail.com", "ernesta@gmail.com"];

// chiedo all'utente la mail
const mailUser = prompt("per verificare se sei in lista scrivi la tua mail:")

//controllo che sia in lista se è presente
let mailInLista = false; 
for (let i = 0; i < listaMail.length; i++ ){
    if (mailUser === listaMail[i]){
        mailInLista = true;
    }
}

if (mailInLista === true) {
    
}
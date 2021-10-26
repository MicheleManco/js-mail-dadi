
//lista delle mail che possono entrere
const listaMail = ["gionni@gmail.com", "sofia@gmail.com", "franco@gmail.com", "ernesta@gmail.com"];

// chiedo all'utente la mail
let mailUser = prompt("per verificare se sei in lista scrivi la tua mail:")

//controllo che sia in lista se è presente
if (mailUser == listaMail[0]) {
    alert("perfetto sei dei nostri!!!")
} else if (mailUser == listaMail[1]){
    alert("perfetto sei dei nostri!!!")
} else if (mailUser == listaMail[2]){
    alert("perfetto sei dei nostri!!!")
} else if (mailUser == listaMail[3]){
    alert("perfetto sei dei nostri!!!")
} else {
    alert("mi dispiace ma non sei in lista :(")
}
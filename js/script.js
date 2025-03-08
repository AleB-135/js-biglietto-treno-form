            //RACCOLTA DATI
const ticketform = document.getElementById("ticketform")
const etaSelect = document.getElementById("eta")
const kmSelect = document.getElementById("km")

const messageElement = document.getElementById("message")

ticketform.addEventListener("submit", gestisciForm);

            //FUNZIONE

function gestisciForm(event){
    event.preventDefault();
    const eta = etaSelect.value;
    const km = (kmSelect.value);
    const ticketPriceInput = (0.21 * km);
    console.log(eta);
    console.log(km);
    console.log(ticketPriceInput.toFixed(2));
    
    //CALCOLO SCONTO PASSEGGERO IN BASE ALL'ETA'
    
    let discount = 0;
    if (eta < 18) {
        discount = 20;
    } else if (eta > 65) {
        discount = 40;
    }
    console.log(discount);
    
    //CALCOLO PREZZO FINALE

    const finalPrice = ticketPriceInput - (ticketPriceInput * discount / 100);
    console.log(finalPrice.toFixed(2));

    //MESSAGGIO DI OUTPUT IN PAGINA

    messageElement.innerText = `Avendo ${eta} anni, hai diritto ad uno sconto del ${discount}%. Il prezzo finale del tuo biglietto è quindi di ${finalPrice.toFixed(2)}€`
}

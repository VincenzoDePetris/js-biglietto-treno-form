const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");
const kmsInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input");
const generateTicketButton = document.getElementById("generate-ticket");
const scontoGiovani = 0.8;
const scontoAnziani = 0.6;
// ticket element
const ticketSection = document.getElementById("ticket-section");
const ticketNameElement = document.getElementById("ticket-name-element");
const ticketPnrElement = document.getElementById("ticket-pnr-element");
const ticketCoachElement = document.getElementById("ticket-coach-element");
const ticketStationElement = document.getElementById("ticket-station-element");
const ticketPriceElement = document.getElementById("ticket-price-element");

generateTicketButton.addEventListener("click", function () {
  const nameValue = nameInput.value;
  const surnameValue = surnameInput.value;
  const kmsValue = parseFloat(kmsInput.value);
  const ageValue = parseInt(ageInput.value);

  // calcolo il prezzo del biglietto
  const tariffaTicket = 0.21;
  let ticketPrice = tariffaTicket * kmsValue;

  if (ageValue < 18) {
    ticketPrice *= scontoGiovani;
  } else if (ageValue > 65) {
    ticketPrice *= scontoAnziani;
  } else {
    ticketPrice;
  }

  const ticketName = nameValue + "" + surnameValue;
  const ticketPnr = "52468";
  const ticketCoach = "45";
  const ticketStation = "Roma Tiburtina";

  ticketNameElement.innerHTML = ticketName;
  ticketPnrElement.innerHTML = ticketPnr;
  ticketCoachElement.innerHTML = ticketCoach;
  ticketStationElement.innerHTML = ticketStation;
  ticketPriceElement.innerHTML = "€" + ticketPrice.toFixed(2);
});

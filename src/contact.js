function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "6969 0000";

  const adress = document.createElement("p");
  adress.textContent = "JL. Stadion";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "images/restaurant-location.png";
  restaurantLocation.alt = "Mozzafiato restaurant location";

  contact.appendChild(phoneNumber);
  contact.appendChild(adress);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;

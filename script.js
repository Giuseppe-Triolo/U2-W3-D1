//esercizio 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
    }
  }
}
const utente1 = new User("Giuseppe", "Triolo", 24, "Pavia");
const utente2 = new User("Federico", "Centi", 50, "Roma");
const confrontoEtà = utente1.confrontaEta(utente2);
console.log(confrontoEtà);

//esercizio 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  stessoPadrone(altroPet) {
    return this.ownerName === altroPet.ownerName;
  }
}

function creaPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const nuovoPet = new Pet(petName, ownerName, species, breed);
  aggiungiPetAllaLista(nuovoPet);
}

function aggiungiPetAllaLista(pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = `Nome Animale: ${pet.petName}, Padrone: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  petList.appendChild(listItem);
}

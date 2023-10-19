
let ageCar = 18;
let ageScooter = 16;
let personAge = prompt("Hvor gammel er du?");

if(personAge >= ageCar) {
    console.log("Du kan kjøre bil og moped");
} else if(personAge >= ageScooter) {
    console.log("Du kan kjøre scooter");
} else if (personAge <= ageScooter) {
    console.log("Du kan ikke kjøre bil eller scooter");
}
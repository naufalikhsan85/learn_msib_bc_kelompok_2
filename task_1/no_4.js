// Soal 4: Membandingkan dua angka
const prompt = require("prompt-sync")(); //import

//input
const angka1 = parseFloat(prompt("Masukkan angka pertama: ")); 
const angka2 = parseFloat(prompt("Masukkan angka kedua: "));

//if adalah sintaks untuk mengetahui suatu kondisi
if (angka1 > angka2) {
  console.log(angka1 + " lebih besar dari " + angka2);
} 
else if (angka2 > angka1) {
  console.log(angka2 + " lebih besar dari " + angka1);
} 
else {
  console.log("Angka-angka tersebut sama besar.");
}

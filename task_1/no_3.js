// Soal 3: Menghitung total harga belanjaan
const prompt = require("prompt-sync")();   //import library

//inputan
const hargaItem1 = parseFloat(prompt("Masukkan harga item pertama: "));
const hargaItem2 = parseFloat(prompt("Masukkan harga item kedua: "));
const hargaItem3 = parseFloat(prompt("Masukkan harga item ketiga: "));

//process
const totalHarga = hargaItem1 + hargaItem2 + hargaItem3;

//output
console.log("Total harga belanjaan:", totalHarga);

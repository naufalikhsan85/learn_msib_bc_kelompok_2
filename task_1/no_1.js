const prompt = require("prompt-sync")(); //import library
const angka1 = parseFloat(prompt("Masukkan angka pertama: ")); //ambil inputan- > ubah ke float masuk ke const
const angka2 = parseFloat(prompt("Masukkan angka kedua: "))//ambil inputan- > ubah ke float masuk ke const
const hasilPerkalian = angka1 * angka2;
console.log("Hasil perkalian:", hasilPerkalian);

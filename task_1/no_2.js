const prompt = require("prompt-sync")();  //import library
const suhuCelsius = parseFloat(prompt("Masukkan suhu dalam Celsius: ")); //ambil inputan- > ubah ke float masuk ke const
const suhuFahrenheit = (suhuCelsius * 9/5) + 32;
console.log("Suhu dalam Fahrenheit:", suhuFahrenheit);



/*
const prompt = require("prompt-sync")();
const suhuCelsius = parseFloat(prompt("Masukkan suhu dalam Celsius: "));
const suhuFahrenheit = (suhuCelsius * 9/5) + 32;
console.log("Suhu dalam Fahrenheit:", suhuFahrenheit);
*/
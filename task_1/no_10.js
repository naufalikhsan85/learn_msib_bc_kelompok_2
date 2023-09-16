// Soal 10: Menghitung jumlah karakter dalam kata atau frasa

//import
const CryptoJS = require("crypto-js");
const prompt = require("prompt-sync")();


//input
const kataFrasa = prompt("Masukkan sebuah kata: ");
const secretKey = prompt("Masukkan kunci rahasia: ");


const ciphertext = CryptoJS.AES.encrypt(kataFrasa, secretKey).toString();
console.log(`Ciphertext: ${ciphertext}`);


const secretKey2 = prompt("Masukkan kembali kunci rahasia: ");
const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey2);
const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
console.log(`Plaintext: ${decryptedText}`)

// Soal 5: Menghitung jumlah bilangan ganjil dari 1 hingga 100

//import library
const prompt = require("prompt-sync")();


let jumlahGanjil = 0; //bikin variabel jumlah 0
console.log("jumlah ganjil saat start:", jumlahGanjil)
let range = parseFloat(prompt("Masukkan angka range: ")); ///input range


for(let i=1; i<= range; i++){
  if (i % 2 !== 0) { //jika sisa pembagian != 0 maka itu ganjil
    jumlahGanjil = jumlahGanjil + i
  }
}


console.log(`Jumlah bilangan ganjil dari 1 hingga ${range}:`, jumlahGanjil);


/*
for (let i = 1; i <= range; i++) {
  if (i % 2 !== 0) {
    jumlahGanjil += i;
  }
}
*/
//console.log(`Jumlah bilangan ganjil dari 1 hingga ${range}:`, jumlahGanjil);

//soal 1 ( Membuat Looping sederhana )
for (var i = 0; i <= 9; i++) {
    console.log(i);
}

//soal 2 ( Membuat Looping dengan conditional angka ganjil )
for (var i = 0; i <= 9; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//soal 3 ( Membuat Looping dengan conditional angka genap )
for (var i = 0; i <= 9; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//soal 4 ( Mengakses element array )
let array1 = [1, 2, 3, 4, 5, 6];

console.log(array1[5]);

//soal 5 ( Mengurutkan element array )
let array2 = [5, 2, 4, 1, 3, 5];

array2.sort();

console.log(array2);

//Soal 6 ( Mengeluarkan element array )
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];

for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

//Soal 7 ( Mengeluarkan element array dan dengan kondisi )
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 == 0) {
        console.log(array4[i]);
    }
}

//Soal 8 ( menggabungkan element menjadi string )
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];

let hasilGabung = kalimat.join(" ");

console.log(`"${hasilGabung}"`);

//soal 9 ( Menambahkan element array )
var sayuran = [];

sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");

console.log(sayuran);

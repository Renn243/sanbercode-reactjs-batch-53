//Soal 1 ( Membuat Function dengan return String )
function cetakFunction() {
    var nama_kamu = "Muhammad Raihan Resa";
    return "Hallo Nama saya " + nama_kamu;
}

console.log(cetakFunction());

//Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya)
function myFunction(angka1, angka2) {
    var hasil = angka1 + angka2;
    return hasil.toString();
}

let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);

console.log(output);

//Soal 3 ( Mengubah dalam bentuk arrow function )
const Hello = () => "Hello";

console.log(Hello());

//soal 4 ( Memanggil key dalam sebuah object )
let obj = {
    nama: "john",
    umur: 22,
    bahasa: "indonesia"
};

let nilaiBahasa = obj.bahasa;

console.log(nilaiBahasa);

//soal 5 ( mengubah array menjadi object )
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
};

console.log(objDaftarPeserta);

//soal 6( Membuat sebuah array of object dan melakukan filter )
const dataBuah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000
    }
];

const buahTanpaBiji = dataBuah.filter(buah => !buah.adaBijinya);

console.log(buahTanpaBiji);

//Soal 7 ( Destructuring pada Object )
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
};

const { name, brand, year } = phone;

console.log(name, brand, year);

//soal 8 ( Spred Operator pada Object )
let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172
}

let objOutput = {};

objOutput = {
    ...buku,
    ...dataBukuTambahan
};

console.log(objOutput);

//soal 9 ( Penggunaan Function dan Object )
let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
}

const functionObject = (param) => {
    return param;
}

console.log(functionObject(mobil));
//Rest Parameter & Spread Operator

// Rest Parameter
// Tanpa parameter
// const penjumlahanArray = (a, b, c, d) => {
//     let array = [a, b, c, d];
//     let total = 0;
//     array.forEach((item) => {
//         total += item;
//     } );
//     console.log(total);
// };

// penjumlahanArray(1, 2, 3, 4);

//Menggunakan rest parameter
// const penjumlahanArray = (a, b, c, ...params) => {
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     } );
//     console.log(total);
// };

// penjumlahanArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread Operator
// let array1 = [1, 2, 3, 4, 5];
// console.log(array1); biasa hasilnya ada []

// console.log(...array1); //dengan spreaad operator
//1. Duplikasi Array
// let array2 = [...array1];
// console.log(array2);
// array1.push(6);
// console.log('Array 1 = ${array1}');
// console.log('Array 2 = ${array1}');

//2. Menggabungkan Array
// let array1 = [1, 2, 3];
// let array2 = [5, 6, 7];
// let array3 = [8, 9, 10];

// let combineArray6 = [...array1, 4, ...array2, ...array3];
// console.log(combineArray6);

// // Pada Objek
// let john = {
//   fullName: "John",
//   age: 30,
//   address: "Manado",
// };
// //Duplikasi Objek
// let student = { ...john };
// john = { ...john, job: "Teacher" };
// console.log(john);

//Menggabungkan Objek
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combineObj = { ...obj1, ...obj2 };

//Destructuring
let buah = ["mangga", "pisang", "anggur", "Pepaya", "Apel"];
let [, , buah3, ...buahLain] = buah;
console.log(buahLain);

let orang = {
        Nama: "Grace",
        umur: 21,
        sudahMenikah: false
    };

let { nama, umur: age, sudahMenikah } = orang;
console.log(nama, age, sudahMenikah);
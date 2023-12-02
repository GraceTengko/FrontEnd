//DestrukturisasiArray
// const colors = ['kuning', 'hijau', 'ungu'];
// const [warnaPertama, warnaKedua, warnaKetiga] = colors;

// console.log(warnaPertama); // Output: "kuning"
// console.log(warnaKedua);   // Output: "hijau"
// console.log(warnaKetiga);  // Output: "ungu"

//DestrukturisasiObject
// const person = { nama: 'Bob', umur: 35, pekerjaan: 'Guru' };
// const { nama, umur, pekerjaan } = person;

// console.log(nama);       // Output: "John"
// console.log(umur);       // Output: 30
// console.log(pekerjaan);  // Output: "insinyur"

// Destructuring Array: 
// const number = [1, 2, 3, 4, 5];
// const numbers = [1, 2, 3, 4, 5];
// const [angkaPertama,  , angkaKetiga] = number;

// console.log(angkaPertama); // Output: 1
// console.log(angkaKetiga); // Output: 3

// Destructuring Object:
// const person = { nama: 'Alice', umur: 25, pekerjaan: 'desainer' };
// const { nama, pekerjaan } = person;

// console.log(nama);       // Output: "Alice"
// console.log(pekerjaan);  // Output: "desainer"

// Destructuring Array:
// const fruits = ['apel', 'pisang'];
// const [buahPertama, buahKedua, buahKetiga = 'mangga'] = fruits;

// console.log(buahPertama); // Output: "apel"
// console.log(buahKedua);   // Output: "pisang"
// console.log(buahKetiga);  // Output: "mangga" (default value)

//Destructuring Object: 
// const person = { nama: 'Eva', umur: 28 };
// const { nama, pekerjaan = 'pengusaha' } = person;

// console.log(nama);       // Output: "Eva"
// console.log(pekerjaan);  // Output: "pengusaha" (default value)

//Destructuring Array:  
// const numbers = [1, 2, 3, 4, 5];
// const [angkaPertama, angkaKedua, ...angkaLainnya] = numbers;

// console.log(angkaPertama);     // Output: 1
// console.log(angkaKedua);       // Output: 2
// console.log(angkaLainnya);     // Output: [3, 4, 5]

// Destructuring Object:
const person = { nama: 'Bob', umur: 35, pekerjaan: 'guru' };
const { nama, ...detailLainnya } = person;

console.log(nama);             // Output: "Bob"
console.log(detailLainnya);    // Output: { umur: 35, pekerjaan: 'guru' }
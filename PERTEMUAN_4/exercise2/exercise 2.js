// Buatlah funsgi yang menerima 1 input angka 
// dan mengembalikan string apakah angka yang dimasukkan
// adalah bilangan positif atau negatif
// buatlah dengan menggunakan IIFE dan callback function

(function (number){
    if (number > 0) {
        console.log(number, "Positif")
    }
    else{
        console.log(number, "Negatif")
    }
})(2);

(function (number){
    if (number < 0) {
        console.log(number, "Negatif")
    }
    else{
        console.log(number, "Positif")
    }
})(-2);

//callback function

function createPositifNegatif(number, callback){
    const check = number  == 0 ? "POSITIF" : "NEGATIF"
    callback(check)
}

function positifNegatif(check){
    console.log(check)
}

createPositifNegatif(2, positifNegatif)
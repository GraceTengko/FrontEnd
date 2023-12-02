//Tengko, Grace Mahgrit Stehvalin
//105022010088
//Exercise 3 Front-End

//arrayExercise
let people = ["Greg", "Mary", "Devon", "James"];

//1
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }

//2
people.forEach(function(person) {
  console.log(person);
});

//3
people.shift()
console.log(people);

//4
people.pop();
console.log(people);

//5
people.unshift("Matt");
console.log(people)

//6
people.push("GraceTengko");
console.log(people);

//7
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

//8
let copy = people.slice(2);
console.log(people);

//9
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//10
let withBob = people.push("Bob");
console.log(people);

//objectExercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1
programming.languages.push("Go");
console.log(programming.languages);

//2
programming["difficulty"] = 7;
console.log(programming.difficulty);

//3
delete programming.jokes;
console.log(programming);

//4
programming.isFun = "True";
console.log(programming);

//5
let updateLanguage = programming.languages.map (function(language, index){
    return index + " - " + language;
});

console.log(updateLanguage);
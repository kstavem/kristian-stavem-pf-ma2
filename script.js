// Kristian Stavem Andersen, pf-ma2, FEU-OKT19 Part time

// question 1
var petArray = ["cat", "cow", "dog"];

//question 2
console.log("The second item in the petArray is a " + petArray[1]);

//question 3
petArray.push("sheep");

//question 4
console.log("There are now " + petArray.length + " animals in the petArray");

//question 5
var catObject = {
    name: "MJ",
    colour: "zebrastriped",
    age: "over 9000 days",
};

//question 6
console.log("The cat is " + catObject.age + " old");

//question 7 
var catArray = [
    {
        name: "MJ",
        colour: "zebrastriped",
        age: "over 9000 days",
    },
];

//question 8
for (i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
};

//question 9
function logtoConsole(noroff) {
    console.log(noroff);
};

//question 10
logtoConsole("donkey");
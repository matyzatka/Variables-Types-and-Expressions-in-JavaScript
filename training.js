/*Exercises
Calculate your age using the console and store it in a variable called age
How long was the WW2? Store it in a variable called ww2
How much would you need to pay for 76 Tesla shares? Store it in a variable called tesla
How many seconds do we have in a day? Store it in a variable called secondsOfDay
What percentage of the world's population is hungarian? Store it in a variable called hungarians
How much bigger is China than the Czech Republic? Store it in a variable bigger
If only 7 people can fit into a discord channel and we have 654 participants, than how many people 
will be in the smallest channel? Store it in participants*/

let age = 26;
const ww2 = 6;
let tesla = 1328536;
secondsOfDay = 86400;
hungarians = 0.12;
bigger = 122;
participants = 3;

/*Exercises
Create an array with some names you choose, store it in a variable called names
Check if the 3rd name is longer than 5 characters
Add one more name to your array
Replace the first element with your name
Check if the array's has more items than 4*/

let names = ['Johnny', 'Frank', 'Hannah', 'Rose'];
console.log(names[2].length>5);
console.log("Hello!");
names.push('Rick');
names[0] = 'Maty';
console.log(names);
console.log(names.length>4);

/*Exercises
Create an object which has a field called colors
The colors field should be an array containing random colors
Add one more field to the object, named hasManyColors
Its value should be true if there are more colors than 3, otherwise it is expected to be false*/

let object = {
    colors: ['red', 'blue', 'green', 'cyan', 'violet', 'white'],
    hasManyColors: true,
};



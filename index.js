// Greetings: Start with the array you used in Exercise 11, but
//  instead of just printing each person’s name, print a message
//   to them. The text of each message
// should be the same, but each message should be personalized
//  with the person’s name.
var array = ["ali", "ahmad", "anas", "shakir", "talha"];
for (var a = 0; a < 5; a++) {
    console.log("Hi, How are you ".concat(array[a]));
}

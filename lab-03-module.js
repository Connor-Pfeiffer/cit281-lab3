/*
    CIT 281 Lab 3
    Name: Connor Pfeiffer
*/

// TODO Part 9: Add the reverseString function to the module.exports object
// for import using require()

// TODO Part 10: Add an anonymous function concatenateString that takes a string
// as a parameter, and returns the original concatenated to itself

//anynousmus function
const concatenateString = function(str){
    return  ;
}
module.exports = {
    //part 9
    reverseString,
    //part 10 and 9
    concatenateString: function(str){
        //implementation here
        let x = reverseString(str) + reverseString(str)
        return console.log(x);
    }
};

// TODO Part 8: Reference the following website to use the spread operator
// to reverse the string for reverseString(str) function. Comment out the
// original return line of code.
// https://betterprogramming.pub/5-ways-to-reverse-a-string-in-javascript-466f62845827
function reverseString(str) {
    return [...str].reverse().join("");
}
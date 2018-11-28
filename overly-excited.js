/* Create an array that contains the words in the sentence

The addExcitement function should be an impure function, and accept
the array as the sole argument. It should iterate over the array
and output the words to the browser console.
*/ // Each time the for loop executes, you're going to add one more word to this string
// Concatenate the new word onto buildMeUp
// Print buildMeUp to the console
// Invoke the function and pass in the array

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let buildMeUp = " ";

function addExcitement (theWordArray, v2) {
    for (let i = 0; i < theWordArray.length; i++) {
        if ( i === 0 ) {
            buildMeUp += sentence[i] + " ";
        }
        else if (i % 3 === 0) {
            buildMeUp += sentence[i] +  (v2);
        }
        else {
            buildMeUp += sentence[i] + " ";
        }
        console.log(buildMeUp);
    }
    
}
addExcitement(sentence, "? ");


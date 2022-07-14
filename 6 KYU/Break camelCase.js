// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//update
function solution(string) {
  string = string.split("").map(function (letter) {
    if (letter === letter.toUpperCase()) {
      letter = " " + letter;
    }
    return letter;
  });
  return string.join("");
}

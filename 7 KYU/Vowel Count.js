// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// TEST DATA:
// "abracadabra"

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  console.log(
    str.split("").filter((letter) => {
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      ) {
        return vowelsCount++;
      }
    })
  );

  return vowelsCount;
}

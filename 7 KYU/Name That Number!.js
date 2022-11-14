// In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

// nameThatNumber(4)   // returns "four"
// nameThatNumber(19)  // returns "nineteen"
// nameThatNumber(99)  // returns "ninety nine"
// Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!

function nameThatNumber(num) {
    let singleDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  
   let name = ''
    const arrayOfDigits = Array.from(String(num), Number)
    if (num < 10) {
    name = singleDigits[num]
    }
    if (num > 9 && num < 20) {
    name = teens[arrayOfDigits[1]]
  }
  else {
    if (arrayOfDigits[1] === 0) {
      name = tens[arrayOfDigits[0]-2]
    }
    if (arrayOfDigits[1] > 0) {
      name = tens[arrayOfDigits[0]-2]
      name += ` ${singleDigits[arrayOfDigits[1]]}`
    }
  }
  return name
}

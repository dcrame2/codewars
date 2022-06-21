// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
function expressionMatter(a, b, c) {
  let first = a * (b + c);
  let second = a * b * c;
  let third = (a + b) * c;
  let fourth = a + b + c;
  let arr = [first, second, third, fourth];
  let value = arr.sort((a, b) => b - a).shift();
  return value;
}

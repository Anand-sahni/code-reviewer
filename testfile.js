let n = 10;
let num1 = 0;
let num2 = 1;
let next_number = num2;
let count = 1;
//commit
while (count <= n) {
  console.log(next_number, " ");
  count++;
  [num1, num2] = [num2, next_number];
  next_number = num1 + num2;
}

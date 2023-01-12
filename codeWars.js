// console.log('HI');

// //11.01.23

// const stringToNumber = function (str) {
//   return Number(str);
// };

// stringToNumber('1234');
// stringToNumber('605');
// stringToNumber('1405');
// stringToNumber('-7');

// function basicOp(operation, value1, value2) {
//   let res;

//   switch (operation) {
//     case '+':
//       res = value1 + value2;
//       break;
//     case '-':
//       res = value1 - value2;
//       break;
//     case '/':
//       res = value1 / value2;
//       break;
//     default:
//       res = value1 * value2;
//   }

//   console.log(+operation);
//   console.log(res);
//   //   return;
// }

// basicOp('+', 4, 7);
// basicOp('-', 15, 18);
// basicOp('*', 5, 5);
// basicOp('/', 49, 7);

// function repeatStr(n, s) {
//   //   let str = [];
//   //   for (i = 0; i < n; i++) {
//   //     str.push(s);
//   //   }
//   //   return str.join('');

//   console.log(s.repeat(n));
//   return s.repeat(n);
// }

// repeatStr(6, 'I');
// repeatStr(5, 'Hello ! 12 ');

// function litres(time) {
//   const water = time * 0.5;
//   return Math.floor(water);
// }

// litres(3);
// litres(5.6);
// litres;(9.1)

function tribonacci(signature, n) {
  let res = [...signature];

  for (i = 0; i < n - signature.length; i++) {
    res.push(res[res.length - 1] + res[res.length - 2] + res[res.length - 3]);
  }

  return res.slice(0, n);
}

tribonacci([1, 1, 1], 10); //[1,1,1,3,5,9,17,31,57,105]

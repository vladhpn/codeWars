function firstTask() {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}

function secondTask() {
  for (let i = 20; i >= 0; i--) {
    if (i === 13) return;
    console.log(i);
  }
}

function thirdTask() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

thirdTask();

function fourthTask() {
  let i = 2;

  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}

fourthTask();

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);
  }

  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}
ї;

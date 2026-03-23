let score = 0;

const question1 = prompt(`In which of these cities did jazz originate?
    [1] Atlanta
    [2] New York
    [3] New Orleans
    `);

const answer1 = Number(question1);

if (answer1 < 1 || answer1 > 3) {
  alert("Please enter a valid answer choice!");
} else if (answer1 == 3) {
  score += 1;
}

const question2 = prompt(`In which of these cities did house music originate?
    [1] Chicago
    [2] Detroit
    [3] London
    `);

const answer2 = Number(question2);

if (answer2 < 1 || answer2 > 3) {
  alert("Please enter a valid answer choice!");
} else if (answer2 == 1) {
  score += 1;
}

const question3 = prompt(`In which of these cities did hip-hop originate?
    [1] Los Angeles
    [2] New York City
    [3] Dallas
    `);

const answer3 = Number(question3);

if (answer3 < 1 || answer3 > 3) {
  alert("Please enter a valid answer choice!");
} else if (answer3 == 2) {
  score += 1;
}

if (score == 0) {
  alert("You've answered 0 questions correctly. LOSERRRR!!!");
} else if (score == 1 || score == 2) {
  alert("You've answered some questions correctly. ALmost there!");
} else {
  alert(
    "You've answered all of the questions correctly. Congrats, you're a genius!!",
  );
}

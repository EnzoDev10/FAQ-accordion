function showAnswer(Num) {
  let answer;
  switch (Num) {
    case 1:
      answer = document.getElementById("answer-one");
      break;
    case 2:
      answer = document.getElementById("answer-two");
      break;
    case 3:
      answer = document.getElementById("answer-three");
      break;
    case 4:
      answer = document.getElementById("answer-four");
      break;
    default:
      answer = 0;
      console.log("something went wrong with the buttons");
  }

  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }

}

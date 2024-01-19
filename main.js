// * onclick function that takes as an argument the number of the question
// * and based on the number makes visible the corresponding answer and changes his icon
function showAnswer(Num) {
  let answer;
  switch (Num) {
    case 1:
      answerNum = document.getElementById("answer-one");
      iconNum = document.getElementById("icon-one");
      break;
    case 2:
      answerNum = document.getElementById("answer-two");
      iconNum = document.getElementById("icon-two");
      break;
    case 3:
      answerNum = document.getElementById("answer-three");
      iconNum = document.getElementById("icon-three");
      break;
    case 4:
      answerNum = document.getElementById("answer-four");
      iconNum = document.getElementById("icon-four");
      break;
    default:
      answerNum = 0;
      console.log("something went wrong with the buttons");
  }

  if (answerNum.style.display === "none") {
    answerNum.style.display = "block";
    iconNum.src = "assets/images/icon-minus.svg";
  } else {
    answerNum.style.display = "none";
    iconNum.src = "assets/images/icon-plus.svg";
  }
}

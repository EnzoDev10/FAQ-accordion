/*  TODO: Improve function that displays the answers DONE*/
/* TODO: Add focus state so users can select questions with the keyboard DONE */
/* TODO: check Lighhouse Report DONE */
/* TODO: Create a function that changes the icon when the first question is clicked DONE */
/* TODO: Add to the function the ability to add an animation to the answers */
// TODO: Make the function affect all the questions
// TODO: Add hover state for the questions so it looks better
// TODO: Improve Desktop Design
// TODO: Finish README

const details = document.querySelector("#first-question");

details.addEventListener("toggle", function () {
  const img = details.querySelector(".quest-icon");
  const answer = details.querySelector(".answer");

  if (details.open) {
    img.src = "assets/images/icon-minus.svg";
    answer.classList.toggle("active");
  } else {
    img.src = "assets/images/icon-plus.svg";
    answer.classList.remove("active");
  }
});

/* if (answerNum.style.display === "none") {
    answerNum.style.display = "block";
    iconNum.src = "assets/images/icon-minus.svg";
  } else {
    answerNum.style.display = "none";
    iconNum.src = "assets/images/icon-plus.svg";
  } */

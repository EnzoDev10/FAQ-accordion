/*  TODO: Improve function that displays the answers DONE*/
/* TODO: Add focus state so users can select questions with the keyboard DONE */
/* TODO: check Lighhouse Report DONE */

// TODO: Create a function that changes the icon when the first question is clicked
// TODO: Add to the function the ability to add an animation to the answers
// TODO: Make the function affect all the questions
// TODO: Add hover state for the questions so it looks better
// TODO: Improve Desktop Design
// TODO: Finish README

const details = document.querySelector("#first-question");

details.addEventListener("toggle", function () {
  const img = document.getElementById("icon-one");
  
  if (details.open) {
    img.src = "assets/images/icon-minus.svg";
  } else {
    img.src = "assets/images/icon-plus.svg";
  }
});

/* if (answerNum.style.display === "none") {
    answerNum.style.display = "block";
    iconNum.src = "assets/images/icon-minus.svg";
  } else {
    answerNum.style.display = "none";
    iconNum.src = "assets/images/icon-plus.svg";
  } */

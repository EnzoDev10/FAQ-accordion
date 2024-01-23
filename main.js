/*  TODO: Improve function that displays the answers DONE*/
/* TODO: Add focus state so users can select questions with the keyboard DONE */
/* TODO: check Lighhouse Report DONE */
/* TODO: Create a function that changes the icon when the first question is clicked DONE */
/* TODO: Add to the function the ability to add an animation to the answers DONE */

// TODO: Make the function affect all the questions
// TODO: Add hover state for the questions so it looks better
// TODO: Improve Desktop Design
// TODO: Finish README

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("toggle", function handleClick(event) {
    const img = question.querySelector(".quest-icon");
    const answer = question.querySelector(".answer");

    if (question.open) {
      img.src = "assets/images/icon-minus.svg";
      answer.classList.toggle("active");
    } else {
      img.src = "assets/images/icon-plus.svg";
      answer.classList.remove("active");
    }
  });
});

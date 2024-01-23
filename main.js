

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("toggle", function handleClick(event) {
    const img = question.querySelector(".quest-icon");
    const answer = question.querySelector(".answer");
    const summary = question.querySelector("summary");
    if (question.open) {
      img.src = "assets/images/icon-minus.svg";
      summary.classList.toggle("active");
      answer.classList.toggle("active");
    } else {
      img.src = "assets/images/icon-plus.svg";
      summary.classList.remove("active");
      answer.classList.remove("active");
    }
  });
});

const finish_btn = document.getElementById("finish-button");

const quiz_form = document.querySelector("#quizForm");
const answers = {};

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  //code to store answers

  let quizInput = event.target;
  answers[quizInput.name] = event.target.value;

  // console.log("answers: ", answers);
  // console.log("event: ", event);
  // console.log("value: ", event.target.value);
  // console.log("name: ", event.target.name);

  // console.log(answers[event.target.name] = event.target.value)

}


finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});

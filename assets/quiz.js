const finish_btn = document.getElementById("finish-button");
const prev_btn = document.querySelector('#prev-button');
const next_btn = document.querySelector('#next-button');
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

// variables

// initialize the index counter
let current_question_index = 0;

// decrement button index
prev_btn.addEventListener('click', function () {
  current_question_index--;
  update_button_states(current_question_index);
  display_question(current_question_index);
  console.log('previous button index:', current_question_index);
});

// increment button index
next_btn.addEventListener('click', function () {
  current_question_index++;
  update_button_states(current_question_index);
  display_question(current_question_index);
  console.log('next button index:', current_question_index);
});

// update button state
function update_button_states(btnIndex) {
  prev_btn.disabled = (btnIndex === 0);
  next_btn.disabled = (btnIndex == questions.length - 1);
  console.log('current button index:', current_question_index);
}

finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});

// display question function
function display_question(questionIndex) {
  // set argument as current question index
  let current_question = questions[questionIndex];
  console.log("show curent question: ", current_question);
  // show questions dynamically one by one
  let question_html = `
    <h2>1)${questionIndex + 1} ${current_question.text}</h2><br>
  `
  // confirm user selected answer is and stays selected

  // also when loading a question ensure selected answer is stored


}

// initialize display and update functions
displayQuestion(current_question_index);
updateButtonStates(current_question_index);
document.addEventListener("DOMContentLoaded", function() {
  const finish_btn = document.getElementById("finish-button");
  const prev_btn = document.querySelector('#prev-button');
  const next_btn = document.querySelector('#next-button');
  const quiz_form = document.querySelector("#quizForm");
  const answers = {};

  let current_question_index = 0;
  const question_containers = quiz_form.querySelectorAll('.question-container');
  const total_questions = question_containers.length;

  quiz_form.addEventListener("change", updateAnswers);

  function updateAnswers(event) {
    let quizInput = event.target;
    answers[quizInput.name] = quizInput.value;
  }

  prev_btn.addEventListener('click', function () {
    if (current_question_index > 0) {
      current_question_index--;
      display_question(current_question_index);
      update_button_states(current_question_index);
    }
  });

  next_btn.addEventListener('click', function () {
    if (current_question_index < total_questions - 1) {
      current_question_index++;
      display_question(current_question_index);
      update_button_states(current_question_index);
    }
  });

  function update_button_states(btnIndex) {
    prev_btn.classList.toggle('hidden', btnIndex === 0);
    next_btn.classList.toggle('hidden', btnIndex === total_questions - 1);
    finish_btn.classList.toggle('hidden', btnIndex !== total_questions - 1);
  }

  finish_btn.addEventListener("click", function () {
    if (Object.keys(answers).length === total_questions) {
      alert("Here are your answers: " + JSON.stringify(answers));
    } else {
      alert("Please answer all the questions!");
    }
  });

  function display_question(questionIndex) {
    let currentQuestion = questions[questionIndex];
    question_containers.forEach((container, index) => {
      if (index === questionIndex) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
    console.log(currentQuestion)
  }

  // Initialize display and update functions
  display_question(current_question_index);
  update_button_states(current_question_index);
});
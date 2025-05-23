document.addEventListener("DOMContentLoaded", function() {

  // variables
  const finish_btn = document.getElementById("finish-button");
  const prev_btn = document.querySelector('#prev-button');
  const next_btn = document.querySelector('#next-button');
  const quiz_form = document.querySelector("#quizForm");
  const answers = {};

  // set question index to 0
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
    let selected_answer = answers[currentQuestion.name] || '';
    let question_html = `    

      <h2>${currentQuestion.text}</h2>
      <div class="label-container">
        ${currentQuestion.options.map(option => `
          <input ${option.value === selected_answer ? 'checked' : ''} type="radio" id="${option.value}" name="${currentQuestion.name}" value="${option.value}">
        <label for="${option.value}">
          <div class="img-wrap">
            <img src="${option.img}">
          </div>
          <span>${option.label}</span>
        </label>
      `).join('')} 
    </div>
    `;

    quiz_form.innerHTML = question_html;
  };

  // Initialize display and update functions
  display_question(current_question_index);
  update_button_states(current_question_index);
});
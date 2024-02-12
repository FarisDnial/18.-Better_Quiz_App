const question1 = document.getElementById('correctQ1');
const question2 = document.getElementById('correctQ2');
const question3 = document.getElementById('correctQ3');
const question4 = document.getElementById('correctQ4');
const question5 = document.getElementById('correctQ5');
const question6 = document.getElementById('correctQ6');
const results = document.getElementById('result');
const quest1 = document.getElementById('question1');
const quest2 = document.getElementById('question2');
const quest3 = document.getElementById('question3');
const quest4 = document.getElementById('question4');
const quest5 = document.getElementById('question5');
const quest6 = document.getElementById('question6');
const customMessage = document.getElementById('custom');
const checkAnswer = document.getElementById('checkAnswer');

function checkAnswers() {
  let score = 0;

  if (question1.checked) {
    score++;
    quest1.innerHTML =  `<div class="text-success fw-bold">😄 You're Correct!</div>`;
  } else {
    quest1.innerHTML =  `<div class="text-danger fw-bold">😞 incorrect, the correct answer is Paris.</div>`;
  }

  if (question2.checked) {
    score++;
    quest2.innerHTML =  `<div class="text-success fw-bold">😄 You're Correct!</div>`;
  } else {
    quest2.innerHTML =  `<div class="text-danger fw-bold">😞 incorrect, the correct answer is Mars.</div>`;
  }

  if (question3.checked) {
    score++;
    quest3.innerHTML =  `<div class="text-success fw-bold">😄 You're Correct!</div>`;
  } else {
    quest3.innerHTML = `<div class="text-danger fw-bold">😞 incorrect, the correct answer is H2O.</div>`;
  }

  if (question4.checked) {
    score++;
    quest4.innerHTML =  `<div class="text-success fw-bold">😄 You're Correct!</div>`;
  } else {
    quest4.innerHTML = `<div class="text-danger fw-bold">😞 incorrect, the correct answer is William Shakespeare.</div>`;
  }

  if (question5.checked) {
    score++;
    quest5.innerHTML =  `<div class="text-success fw-bold">😄 You're Correct!</div>`;
  } else {
    quest5.innerHTML = `<div class="text-danger fw-bold">😞 incorrect, the correct answer is Elephant.</div>`;
  }

  if (question6.checked) {
    score++;
    quest6.innerHTML =  `<div class="text-success fw-bold">😄 You're Correct!</div>`;
  } else {
    quest6.innerHTML = `<div class="text-danger fw-bold">😞 incorrect, the correct answer is Seven.</div>`;
  }

results.innerHTML = `<div class="text-success fw-bold">You got ${score} out of 6 correct.</div>`;

  if (score >= 5) {
    customMessage.innerHTML = `<div class="text-success fw-bold">Well Done!</div>`;
  } else if (score >= 3) {
    customMessage.innerHTML = `<div class="text-success fw-bold">Good Job!</div>`;
  } else if (score >= 1) {
    customMessage.innerHTML = `<div class="text-success fw-bold">Better Luck Next Time!</div>`;
  } else {
    customMessage.innerHTML = `<div class="text-danger fw-bold">Please answer the question first</div>`;
  }
}

function reset() {
  // Clear all selected radio buttons
  question1.checked = false;
  question2.checked = false;
  question3.checked = false;
  question4.checked = false;
  question5.checked = false;
  question6.checked = false;

  // Reset the inner HTML of feedback elements
  quest1.innerHTML = '';
  quest2.innerHTML = '';
  quest3.innerHTML = '';
  quest4.innerHTML = '';
  quest5.innerHTML = '';
  quest6.innerHTML = '';

  // Reset the inner HTML of results and customMessage elements
  results.innerHTML = '';
  customMessage.innerHTML = '';
}

let currentQuestion = 1;
let score = 0;

async function loadQuestion() {
  const res = await fetch(`/api/quiz/${currentQuestion}`);
  if (res.status === 404) {
    document.getElementById('quiz-container').innerHTML = `Quiz terminé ! Score: ${score}`;
    return;
  }

  const data = await res.json();
  document.getElementById('question').textContent = data.question.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  data.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.option;
    btn.onclick = () => {
      if (opt.option === data.question.correct_answer) {
        score++;
        document.getElementById('result').textContent = "Correct ✅";
      } else {
        document.getElementById('result').textContent = "Incorrect ❌";
      }
      document.getElementById('next').disabled = false;
    };
    optionsDiv.appendChild(btn);
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentQuestion++;
  document.getElementById('next').disabled = true;
  document.getElementById('result').textContent = '';
  loadQuestion();
});

loadQuestion();

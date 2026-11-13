// Quiz: add more questions here later if you would like to expand it.
document.querySelectorAll('.quiz-option').forEach((button) => {
  button.addEventListener('click', () => {
    const isCorrect = button.dataset.answer === 'true';
    const feedback = document.querySelector('#quizFeedback');
    feedback.textContent = isCorrect ? 'Correct! A keyboard is used to input text and commands.' : 'Not quite — try again! Think about the device used for typing.';
    feedback.style.color = isCorrect ? '#07873b' : '#cc2f35';
  });
});

// Contact form: opens a pre-filled WhatsApp message instead of saving data online.
document.querySelector('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = event.currentTarget.elements;
  const message = `Hello Shakila, my name is ${fields[0].value}. ${fields[2].value} (Email: ${fields[1].value})`;
  window.open(`https://wa.me/94765500954?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

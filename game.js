document.addEventListener('DOMContentLoaded', () => {
  const numbersEl = document.getElementById('numbers');
  const inputEl = document.getElementById('guess');
  const resultEl = document.getElementById('result');
  const checkBtn = document.getElementById('checkGuess');
  const newBtn = document.getElementById('newGame');
  let numbers = [];

  function newGame() {
    numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
    numbersEl.textContent = numbers.join(', ');
    resultEl.textContent = '';
    inputEl.value = '';
  }

  function checkGuess() {
    const guess = parseFloat(inputEl.value);
    if (isNaN(guess)) {
      resultEl.textContent = 'Please enter a number.';
      return;
    }
    const mean = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
    const diff = Math.abs(mean - guess).toFixed(2);
    resultEl.textContent = `Actual mean: ${mean.toFixed(2)} (difference: ${diff})`;
  }

  checkBtn.addEventListener('click', checkGuess);
  newBtn.addEventListener('click', newGame);
  newGame();
});

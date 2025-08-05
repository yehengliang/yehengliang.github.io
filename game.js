 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/game.js
index 0000000000000000000000000000000000000000..c00ec86efaf4c1fd08c38d3d07d1429033eda73d 100644
--- a//dev/null
+++ b/game.js
@@ -0,0 +1,30 @@
+document.addEventListener('DOMContentLoaded', () => {
+  const numbersEl = document.getElementById('numbers');
+  const inputEl = document.getElementById('guess');
+  const resultEl = document.getElementById('result');
+  const checkBtn = document.getElementById('checkGuess');
+  const newBtn = document.getElementById('newGame');
+  let numbers = [];
+
+  function newGame() {
+    numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
+    numbersEl.textContent = numbers.join(', ');
+    resultEl.textContent = '';
+    inputEl.value = '';
+  }
+
+  function checkGuess() {
+    const guess = parseFloat(inputEl.value);
+    if (isNaN(guess)) {
+      resultEl.textContent = 'Please enter a number.';
+      return;
+    }
+    const mean = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
+    const diff = Math.abs(mean - guess).toFixed(2);
+    resultEl.textContent = `Actual mean: ${mean.toFixed(2)} (difference: ${diff})`;
+  }
+
+  checkBtn.addEventListener('click', checkGuess);
+  newBtn.addEventListener('click', newGame);
+  newGame();
+});
 
EOF
)

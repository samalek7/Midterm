/* main.js — factorial logic + theme toggle */

// Theme switcher using data-bs-theme-value
(function () {
  const buttons = document.querySelectorAll("[data-bs-theme-value]");
  const root = document.documentElement;
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-bs-theme-value");
      root.setAttribute("data-bs-theme", val);
      try { localStorage.setItem("preferred-theme", val); } catch (e) {}
    });
  });
  // Load saved theme
  try {
    const saved = localStorage.getItem("preferred-theme");
    if (saved) document.documentElement.setAttribute("data-bs-theme", saved);
  } catch (e) {}
})();

// Factorial calculation
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let out = 1;
  for (let i = 2; i <= n; i++) out *= i;
  return out;
}

function calculateFactorial() {
  const inputEl = document.getElementById("userInput");
  const outputEl = document.getElementById("output");
  const raw = inputEl.value.trim();

  if (raw === "") {
    outputEl.textContent = "Please enter a number.";
    return;
  }

  const num = Number(raw);
  if (!Number.isFinite(num) || !Number.isInteger(num)) {
    outputEl.textContent = "Enter a whole (integer) number.";
    return;
  }
  if (num < 0) {
    outputEl.textContent = "Enter a non-negative integer (0 or greater).";
    return;
  }
  if (num > 170) {
    outputEl.textContent = "Number too large (use 170 or smaller).";
    return;
  }

  const result = factorial(num);
  outputEl.textContent = `${num}! = ${result}`;
}

// Enter key handler
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const active = document.activeElement;
    if (active && active.id === "userInput") {
      e.preventDefault();
      calculateFactorial();
    }
  }
});
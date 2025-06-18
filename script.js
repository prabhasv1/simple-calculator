function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  const validKeys = "0123456789+-*/.=EnterBackspace";
  const display = document.getElementById("display");

  if (!validKeys.includes(key)) return;

  if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "=") {
    calculateResult();
  } else {
    display.value += key;
  }
});

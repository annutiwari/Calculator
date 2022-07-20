let outputScreen = document.getElementById("output_screen");

function display(num) {
  outputScreen.value += num;
}

function reset() {
  outputScreen.value = null;
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch {
    console.log("error");
  }
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}


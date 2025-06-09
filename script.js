let box = document.getElementById("box");
let result = document.getElementById("result");
let message = document.getElementById("message");
let startTime, endTime;

function getRandomTime() {
  return Math.random() * 3000 + 2000; // Between 2 to 5 seconds
}

function showBox() {
  let top = Math.random() * 300;
  let left = Math.random() * 300;
  let color = "#" + Math.floor(Math.random()*16777215).toString(16);

  box.style.top = top + "px";
  box.style.left = left + "px";
  box.style.backgroundColor = color;
  box.style.display = "block";
  startTime = Date.now();
}

function startGame() {
  box.style.display = "none";
  result.textContent = "";
  message.textContent = "Wait for it...";

  setTimeout(() => {
    showBox();
    message.textContent = "Click it!";
  }, getRandomTime());
}

box.onclick = function () {
  endTime = Date.now();
  let reactionTime = ((endTime - startTime) / 1000).toFixed(3);

  // Change box color immediately
  box.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Wait briefly to allow the browser to repaint the color before showing the alert
  setTimeout(() => {
    alert(`Your reaction time is ${reactionTime} seconds`);
    startGame();
  }, 100); // 100ms delay is enough
};


startGame();

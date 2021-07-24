let desktop_time = document.getElementById("time");
let desktop_date = document.getElementById("date");

function time() {
  let d = new Date();

  let minutes = addZero(d.getMinutes());
  let hours = d.getHours();
  let daytime = "";

  if (hours > 12) {
    daytime = "PM";
  } else {
    daytime = "AM";
  }

  hours = addZero(twelveFormat(hours));

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[d.getMonth()];
  let day = addZero(d.getDate());

  desktop_time.innerHTML = `${hours}:${minutes} ${daytime}`;
  desktop_date.innerHTML = `${month} ${day}`;
}

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

function twelveFormat(num) {
  if (num > 12) {
    num = num - 12;
  } else if (num == 0) {
    num = 12;
  }
  return num;
}

setInterval(time, 1000);

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
}

let openGame = document.getElementById("solitaire-button");
let closeGame = document.getElementById("solitaire-close-button");
let game = document.getElementById("modal2");

openGame.addEventListener("click", () => {
  game.classList.add("active");
});

closeGame.addEventListener("click", () => {
  game.classList.remove("active");
});

let openGoogle = document.getElementById("google-button");
let closeGoogle = document.getElementById("google-close-button");
let google = document.getElementById("google");

openGoogle.addEventListener("click", () => {
  google.classList.add("active");
});

closeGoogle.addEventListener("click", () => {
  google.classList.remove("active");
});

let openTask = document.getElementById("task-button");
let closeTask = document.getElementById("task-close-button");
let task = document.getElementById("task");

openTask.addEventListener("click", () => {
  task.classList.add("active");
});

closeTask.addEventListener("click", () => {
  task.classList.remove("active");
});

let openCalculator = document.getElementById("calculator-button");
let closeCalculator = document.getElementById("calculator-close-button");
let calculator = document.getElementById("calculator");

openCalculator.addEventListener("click", () => {
  calculator.classList.add("active");
});

closeCalculator.addEventListener("click", () => {
  calculator.classList.remove("active");
});

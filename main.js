const timeEl = document.getElementById("current_time");
const dayEl = document.getElementById("current_day");

const now = new Date();
const day = now.getDay();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();

timeEl.innerText = `${hours}:${minutes}`;
dayEl.innerText =
  now.getUTCFullYear() +
  "-" +
  String(now.getUTCMonth() + 1).padStart(2, "0") +
  "-" +
  String(now.getUTCDate()).padStart(2, "0") +
  " ";


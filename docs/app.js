const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const babyTime = new Date(`1 November 2026 00:00:00`);
console.log("test")

//update countdowntime
function updateCountdown() {
    const currentTime = new Date();
    const diff = babyTime - currentTime;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60) % 24;
    const m = Math.floor(diff/1000/60) % 60;
    const s = Math.floor(diff/1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

setInterval(updateCountdown, 1000);

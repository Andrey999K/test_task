document.addEventListener("DOMContentLoaded", () => {
    const sec = document.querySelectorAll(".stock__time-numeral")[2];
    const min = document.querySelectorAll(".stock__time-numeral")[1];
    const hour = document.querySelectorAll(".stock__time-numeral")[0];
    let timerId = setInterval(() => {
        if (sec.textContent == 0) {
            sec.textContent = 60;
            min.textContent--;
        }
        if (min.textContent == 0) {
            min.textContent = 59;
            hour.textContent--;
        }
        sec.textContent--;
        if (sec.textContent == 0 && min.textContent == 0 && hour.textContent == 0) {
            clearInterval(timerId);
        }
    }, 1000);
});
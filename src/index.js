import './styles.css';

// let a = null
// const getTimer = function () {
//   a = Date.now()
//   console.log(a)
// }
// const timerId = setInterval(() => { getTimer(), 1000 });
// console.log(timerId)

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 26, 2020 GMT+0300'),
});;

// const timer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Oct 26, 2021 GMT+0300'),
// });;


const date = function() {
    let day = Date.now();
    let time = timer.targetDate.getTime() - day;

  const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');

const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');

const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');

  const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
  document.querySelector('[data-value="days"]').innerHTML = `${days}`;
  document.querySelector('[data-value="hours"]').innerHTML = `${hours}`;
  document.querySelector('[data-value="mins"]').innerHTML = `${mins}`;
  document.querySelector('[data-value="secs"]').innerHTML = `${secs}`;
}
setInterval(date, 1000)

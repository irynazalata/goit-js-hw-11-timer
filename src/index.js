import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.setTimer = this.setTimer.bind(this);
  }
  setTimer() {
    let targetDate = this.targetDate;
    const date = function () {
      let currentDay = Date.now();
      let time = targetDate.getTime() - currentDay;
      const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
  
      document.querySelector('[data-value="days"]').textContent = `${days}`;
      document.querySelector('[data-value="hours"]').textContent = `${hours}`;
      document.querySelector('[data-value="mins"]').textContent = `${mins}`;
      document.querySelector('[data-value="secs"]').textContent = `${secs}`;
    }
    setInterval(date, 1000)
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});;

 timer.setTimer()

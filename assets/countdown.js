class CountDownTimer extends HTMLElement {
  constructor() {
    super();

    // Grab required elements
    this.countdownText = this.querySelector('.countdown-text');
    this.daysContainer = this.querySelector('.days');
    this.hoursContainer = this.querySelector('.hours');
    this.minutesContainer = this.querySelector('.minutes');
    this.secondsContainer = this.querySelector('.seconds');

    // Get end date from data attribute
    const endDateAttribute = this.querySelector('.countdown-timer').dataset.endDate;

    try {
      this.endDate = new Date(endDateAttribute).getTime();

      // Check if the date is valid
      if (isNaN(this.endDate)) {
        throw new Error('Invalid date format');
      }
    } catch (error) {
      console.error('Error parsing countdown date:', error);
      // Set a default date (30 days from now) if there's an error
      this.endDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
    }

    // bind this keyword to our function
    this.handleTick = this.handleTick.bind(this);

    // Start timer
    this.handleTick(); // Run once immediately
    this.timerInterval = setInterval(this.handleTick, 1000);
  }

  handleTick() {
    // Logic and update elements
    const now = new Date().getTime();
    const timeLeft = this.endDate - now;

    if (timeLeft < 0) {
      this.countdownText.textContent = "This countdown has ended!";

      // Clear all time displays
      this.daysContainer.innerHTML = `<span class="count">0</span><span class="label">Days</span>`;
      this.hoursContainer.innerHTML = `<span class="count">0</span><span class="label">Hours</span>`;
      this.minutesContainer.innerHTML = `<span class="count">0</span><span class="label">Minutes</span>`;
      this.secondsContainer.innerHTML = `<span class="count">0</span><span class="label">Seconds</span>`;
      clearInterval(this.timerInterval);
      return;
    }

    // Calculate time units
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM
    this.daysContainer.innerHTML = `<span class="count">${days}</span><span class="label">Days</span>`;
    this.hoursContainer.innerHTML = `<span class="count">${hours}</span><span class="label">Hours</span>`;
    this.minutesContainer.innerHTML = `<span class="count">${minutes}</span><span class="label">Minutes</span>`;
    this.secondsContainer.innerHTML = `<span class="count">${seconds}</span><span class="label">Seconds</span>`;
  }

  disconnectedCallback() {
    // Clean up the interval when the element is removed from the DOM
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}

customElements.define("countdown-timer", CountDownTimer);

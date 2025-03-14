class Timer {
  constructor() {}

  start() {
    this.start = Date.now();
  }

  end() {
    this.end = Date.now();
    return this.end - this.start;
  }
}

module.exports = Timer;

export default class Slide {
  constructor(slide, query) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(query);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {}

  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onMove.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvent();
    return this;
  }
}

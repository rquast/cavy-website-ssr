export class Pricing {

  activate() {
    this.scrollToTop();
  }

  attached() {
    this.scrollToTop();
    if (typeof window !== 'undefined') {
      window.sr.reveal('.pricing-container', {duration: 500, delay: 0});
    }
  }

  scrollToTop() {
    if (typeof window !== 'undefined' && window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }

}

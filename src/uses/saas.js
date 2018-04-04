import {inject} from 'aurelia-framework';
import {Resize} from 'resize';

@inject(Resize)
export class Saas {

  constructor(resize) {
    this.resize = resize;
  }

  activate() {
    this.scrollToTop();
  }

  attached() {
    this.scrollToTop();
  }

  scrollToTop() {
    if (typeof window !== 'undefined' && window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }

}

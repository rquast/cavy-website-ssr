import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Home {

  constructor(router) {
    this.router = router;
  }

  attached() {
    if (typeof window !== 'undefined') {
      window.sr.reveal('.reveal-one', {duration: 300, delay: 0});
      window.sr.reveal('.reveal-two', {duration: 300, delay: 200});
      window.sr.reveal('.reveal-three', {duration: 300, delay: 400});
    }
  }

  activate() {
    if (typeof window !== 'undefined' && window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }

  deactivate() {
    if (typeof window !== 'undefined' && window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
  }

  claim() {
    this.router.navigateToRoute('claim');
  }

  integration() {
    this.router.navigateToRoute('integration');
  }

  features() {
    this.router.navigateToRoute('features');
  }

}

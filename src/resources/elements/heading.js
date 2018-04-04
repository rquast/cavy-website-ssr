import {customElement, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Resize} from '../../resize';

@customElement('heading')
@inject(Router, Resize)
export class Heading {

  constructor(router, resize) {
    this.router = router;
    this.resize = resize;
  }

  bind(bindingContext) {
    this.parent = bindingContext;
  }

  claim() {
    this.router.navigateToRoute('claim');
  }

  home() {
    this.router.navigateToRoute('home');
  }

}

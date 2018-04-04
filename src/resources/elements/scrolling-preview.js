import {customElement, bindable} from 'aurelia-framework';

@customElement('scrolling-preview')
export class ScrollingPreview {

  @bindable items;

  bind(bindingContext) {
    this.$parent = bindingContext;
  }

  view(item) {
    this.$parent.showImagePreview(item);
  }

  thumbnail(item) {
    return '../../../static/screenshots/' + item + '_thumb.png';
  }

}

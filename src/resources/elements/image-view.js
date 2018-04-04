import {customElement} from 'aurelia-framework';

@customElement('image-view')
export class ImageView {

  imgSrc = undefined;

  bind(bindingContext) {
    this.$parent = bindingContext;
    this.imgSrc = '../static/screenshots/' + this.$parent.activeImage + '.png';
  }

  attached() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keyup', this.keyHandler, false);
    }
  }

  keyHandler = (event) => {
    if (event.which === 27 && this.showVideo !== false) {
      this.closePreview();
    }
  };

  closePreview() {
    this.$parent.activeImage = false;
  }

  detached() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keyup', this.keyHandler);
    }
    this.imgSrc = undefined;
  }

}

import {inject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {noView} from 'aurelia-framework';
import SsrTransformer from './ssr-transformer';

@noView()
@inject(SsrTransformer)
export class Resize {

  desktop = true;
  resizing = false;

  constructor(transformer) {
    this.transformer = transformer;
    if (typeof window !== 'undefined') {
      this.desktop = document.documentElement.clientWidth > 768;
    } else {
      this.desktop = !this.isMobile();
    }
    PLATFORM.addEventListener('resize', this.resizeEvent);
  }

  isMobile() {
    return this.transformer ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(this.transformer.headers['user-agent']) : false;
  }

  resizeEvent = (e) => {
    if (!this.resizing) {
      PLATFORM.requestAnimationFrame(() => {
        if (typeof window !== 'undefined') {
          this.desktop = document.documentElement.clientWidth > 768;
        } else {
          this.desktop = true;
        }
        this.resizing = false;
      });
      this.resizing = true;
    }
  };

}

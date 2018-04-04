import {customElement, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Resize} from '../../resize';

if (typeof window !== 'undefined') {
  require('particles.js');
  require('video.js');
  require('video.js/dist/video-js.css');
}

@customElement('hero')
@inject(Router, Resize)
export class Hero {

  showExplainer = false;
  showVideo = false;

  constructor(router, resize) {
    this.router = router;
    this.resize = resize;
  }

  attached() {
    if (typeof window !== 'undefined' && this.resize.desktop) {
      particlesJS.load('particles-js', 'static/particles.json', function() {});
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('keyup', this.keyHandler, false);
    }
  }

  detached() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keyup', this.keyHandler);
    }
    if (typeof window !== 'undefined' && this.player) {
      this.player.dispose();
    }
  }

  bind(bindingContext) {
    this.parent = bindingContext;
  }

  claim() {
    this.router.navigateToRoute('claim');
  }


  keyHandler = (event) => {
    if (event.which === 27 && this.showVideo !== false) {
      this.closeExplainer();
    }
  };

  openExplainer() {
    this.showExplainer = true;
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        let els = document.getElementsByClassName('video-js');
        this.player = videojs(els[0]);
        this.player.ready(() => {
          this.showVideo = true;
          let height = document.body.clientHeight;
          let width = document.body.clientWidth;
          this.player.dimensions(width, height);
          this.player.play();
        });
      }, 1000);
    }
  }

  closeExplainer() {
    if (typeof window !== 'undefined') {
      this.player.pause();
    }
    this.showVideo = false;
    this.showExplainer = false;
  }

}

import {inject} from 'aurelia-framework';
import Prism from 'prismjs';
import {Resize} from 'resize';

@inject(Resize)
export class Integration {

  script = '<script src="https://(your-subdomain).cavy.io/widget/boot.js" type="text/javascript"></script>';

  bodyTag = '<body data-cavy-topic="(topic-tag)">';

  elementTag = '<div data-cavy-topic="(topic-tag)" data-cavy-link="true">';

  anchorTag = '<a data-cavy-topic="(topic-tag)">';

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

  getFormattedCode(source, language) {
    return Prism.highlight(source, Prism.languages[language]);
  }

}

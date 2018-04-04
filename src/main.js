import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import 'babel-polyfill';
import * as Bluebird from 'bluebird';
import ScrollReveal from 'scrollreveal';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

if (typeof window !== 'undefined' && typeof window.sr === 'undefined') {
  window.sr = ScrollReveal();
}

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use
    .globalResources([
      PLATFORM.moduleName('resources/elements/hero'),
      PLATFORM.moduleName('resources/elements/heading'),
      PLATFORM.moduleName('resources/elements/footer'),
      PLATFORM.moduleName('resources/elements/image-view'),
      PLATFORM.moduleName('resources/elements/scrolling-preview')
    ]);

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}

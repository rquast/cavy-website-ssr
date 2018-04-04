module.exports = require('aurelia-ssr-bootstrapper-webpack').default(function(aurelia, headers) {
  let PLATFORM = require('aurelia-pal').PLATFORM;
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
  aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));

  let transformer = require('./ssr-transformer').default;
  transformer.headers = headers;
  aurelia.container.registerInstance('ssr-transformer', transformer);

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
});

const Koa = require('koa');
const path = require('path');
const {aureliaKoaMiddleware} = require('aurelia-middleware-koa');
const PrebootOptions = require('preboot').defaultOptions;

var port = process.env.PORT || 8084;

const app = new Koa();
const bundle = './dist/server.bundle';

app.use(require('koa-compress')());

app.use(require('koa-html-minifier')({
  collapseWhitespace: true
}));

app.use(aureliaKoaMiddleware({
  preboot: true,
  prebootOptions: Object.assign({}, PrebootOptions),
  bundlePath: require.resolve(bundle),
  template: require('fs').readFileSync(path.resolve('./dist/index.html'), 'utf-8')
}, {
  main: () => {
    delete require.cache[require.resolve(bundle)];
    return require(bundle);
  }
}));

app.use(require('koa-static')(path.resolve(__dirname)));
app.use(require('koa-static')(path.resolve(__dirname, 'dist')));

console.log('Starting server....');
app.listen(port);
console.log(`Listening at http://localhost:${port}/`);

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
  console.log(error.stack);
});

const {series, crossEnv, concurrent, rimraf} = require('nps-utils')

module.exports = {
  scripts: {
    default: 'nps webpack',
    test: {
      lint: {
        default: 'eslint src',
        fix: 'eslint --fix'
      },
      all: concurrent({
        lint: 'nps test.lint'
      })
    },
    build: 'nps webpack.build',
    webpack: {
      default: 'nps webpack.server',
      build: {
        before: rimraf('dist'),
        default: 'nps webpack.build.production',
        development: {
          default: series(
            'nps webpack.build.before',
            'webpack --progress -d'
          ),
          extractCss: series(
            'nps webpack.build.before',
            'webpack --progress -d --env.extractCss'
          ),
          serve: series.nps(
            'webpack.build.development',
            'serve'
          )
        },
        production: {
          inlineCss: series(
            'nps webpack.build.before',
            'webpack --progress -p --env.production'
          ),
          default: series(
            'nps webpack.build.before',
            'webpack --progress -p --env.production --env.extractCss'
          ),
          serve: series.nps(
            'webpack.build.production',
            'serve'
          ),
          ssr: series(
            'nps webpack.build.before',
            'webpack --progress -p --env.production --env.extractCss',
            'webpack --config webpack.server.config.js --progress -p --env.production --env.extractCss'
          )
        }
      },
      server: {
        default: `webpack-dev-server -d --devtool '#source-map' --inline --env.server`,
        extractCss: `webpack-dev-server -d --devtool '#source-map' --inline --env.server --env.extractCss`,
        hmr: `webpack-dev-server -d --devtool '#source-map' --inline --hot --env.server`,
        ssr: {
          watch: series.nps('webpack.build.before', 'webpack.server.ssr.bundle'),
          bundle: concurrent({
            client: `webpack --watch --env.extractCss --env.ssr --env.production`,
            server: `webpack --config webpack.server.config.js --env.extractCss --watch`
          }),
          start: `nodemon ./server.js` // start: `node --inspect=0.0.0.0:9228 ./server.js`
        }
      }
    },
    serve: 'http-server dist --cors'
  }
}

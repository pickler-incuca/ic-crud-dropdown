const loaders = require('vue-webpack-loaders');
const glob = require('glob').sync;
const basename = require('path').basename;

function getDocSections() {
  b = p => basename(p, '.md');
  return glob('docs/*.md')
  .filter(path => b(path)!=='Introduction')
  .map(path => ({
    name: b(path),
    content: path
  }));
}

/**
 * More info about this styleguide configuration in
 * vue-styleguidist/vue-styleguidist github repository
 */
module.exports = {
  sections: [
    {
      /* The component itself */
      name: 'ic-crud-dropdown documentation',
      content: 'docs/Introduction.md',
      components: './src/**/*.vue',
      // ignore: ['src/ignored-component/ignored-component.vue'],
      sections: getDocSections()
    },
  ],
  webpackConfig: {
    module: {
			loaders,
		},
    devtool: 'inline-source-map'
  },
  serverPort: 6062,
  require: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.js',
    'bootstrap-vue/dist/bootstrap-vue.css',
    'font-awesome/css/font-awesome.css',
  ]
};

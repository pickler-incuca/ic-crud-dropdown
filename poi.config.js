const presetKarma = require('poi-preset-karma');
const webpack = require('webpack');
const glob = require('glob').sync;
const {name} = require('./package.json');

module.exports = {
  entry: glob('./src/**/*.vue'),
  filename: {
    js: name + '.min.js',
    css: name + '.min.css'
  },
  sourceMap: true,
  html: false,
  webpack: function(config) {
    config.externals = {
      'IcFormly': 'ic-formly'
    }
    return config;
  },
  presets: [
    presetKarma({
      files: ['./test/specs/**.spec.js'],
      browsers: ['PhantomJS'],
      frameworks: ['mocha', 'chai', 'phantomjs-shim'],
      extendWebpack: function (config) {
        config.externals = {}
        return config;
      },
    })
  ],
  moduleName: 'IcCrudDropdown'
};

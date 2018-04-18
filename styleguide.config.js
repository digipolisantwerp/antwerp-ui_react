module.exports = {
  components: 'packages/*/src/!(index).js',
  getExampleFilename(componentPath) {
    const basePath = componentPath.split('src/')[0];
    return basePath + 'Readme.md';
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  template: {
    head: {
      scripts: [],
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.antwerpen.be/core_branding_scss/2.0.0/main.min.css'
        }
      ]
    }
  },
	ignore: ['**/*.spec.js', '**/packages/slider/src/Handle.js', '**/packages/slider/src/Bar.js']
};

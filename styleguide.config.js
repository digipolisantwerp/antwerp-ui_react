const path = require('path');

module.exports = {
  components: 'packages/*/src/!(index).js',
  getExampleFilename(componentPath) {
    const basePath = componentPath.split('src/')[0];
    return basePath + 'Readme.md';
  },
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    return `import { ${name} } from '@acpaas-ui/react-components';`
  },
  styleguideDir: 'docs',
  title: 'ACPaaS UI React Components',
  usageMode: 'expand',
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
            'https://cdn.antwerpen.be/core_branding_scss/3.0.1/main.min.css'
        }
      ]
    }
  }
};

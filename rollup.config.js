import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import sass from 'rollup-plugin-sass';

export default {
  input: 'index.js',
  output: [
    {file: pkg.main, format: 'cjs'},
    {file: pkg.module, format: 'es'}
  ],
  plugins: [
    resolve(),
    sass(),
    babel({
      babelHelpers: 'external',
      exclude: ['node_modules/**'],
      plugins: [['@babel/plugin-external-helpers']],
      presets: [
        "@babel/preset-flow",
        "@babel/preset-react"
      ]
    })
  ],
  external: ['react', 'classnames', 'moment', 'react-dom', 'react-input-mask', 'react-modal'],
};

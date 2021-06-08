import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import sass from 'rollup-plugin-sass';
export default {
  input: 'index.js',
  output: [
    {file: pkg.main, format: 'cjs', validate: true},
    {file: pkg.module, format: 'es', validate: true}
  ],
  plugins: [
    resolve(),
    sass(),
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules/**'],
      presets: [
        "@babel/preset-flow",
        "@babel/preset-react"
      ]
    })
  ],
  external: ['react', 'classnames', 'moment', 'react-dom', 'react-input-mask', 'react-modal'],
};

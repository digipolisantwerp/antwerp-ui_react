import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import sass from 'rollup-plugin-sass';

export default {
  input: 'src/index.js',
  output: [
    {file: pkg.main, format: 'cjs'},
    {file: pkg.module, format: 'es'}
  ],
  plugins: [
    resolve(),
    sass({ insert: true }),
    babel({
      exclude: ['node_modules/**']
    })
  ],
  external: ['react', 'react-dom', 'classnames', 'react-input-mask'],
};

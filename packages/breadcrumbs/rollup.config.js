

import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
	],
	plugins: [
		resolve(),
		babel({
      babelHelpers: 'bundled',
			exclude: ['node_modules/**'],
      presets: [
        "@babel/preset-flow",
        "@babel/preset-react"
      ]
		})
	],
	external: ['react', 'classnames', 'react-input-mask', 'moment', 'react-dom'],
};

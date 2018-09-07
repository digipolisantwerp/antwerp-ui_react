

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from "./package.json";

export default {
	input: 'index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
	],
	plugins: [
		resolve(),
		babel({
			exclude: ['node_modules/**']
		})
	],
	external: ['react', 'classnames', 'moment', 'react-dom', 'react-input-mask'],
};
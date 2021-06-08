import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import sass from 'rollup-plugin-sass';

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
	],
	plugins: [
		resolve(),
    sass(),
		babel({
      babelHelpers: 'bundled',
			exclude: ['node_modules/**'],
      configFile: "../../babel.config.js"
		}),
	],
	external: ['react', 'classnames', 'react-modal'],
};


import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	output: [
		{ file: 'dist/index.cjs.js', format: 'cjs' },
		{ file: 'dist/index.esm.js', format: 'es' }
	],
	plugins: [
		babel({
			exclude: ['node_modules/**']
		})
	],
	external: ['react'],
};
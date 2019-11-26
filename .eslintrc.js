module.exports = {
	'env': {
		'es6': true,
		'node': true
	},
	'extends': ['eslint:recommended', 'prettier'],
	'plugins':['prettier'],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'rules': {
		"class-methods-use-this": "off",
		"no-param-reassign":"off",
		"camelcase":"off",
		"prettier/prettier": "error",
		"no-unsused-vars":"off",

		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}

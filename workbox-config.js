module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,css,png,md,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
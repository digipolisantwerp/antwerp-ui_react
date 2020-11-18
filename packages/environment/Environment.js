const ENV_IDENTIFIERS = {
	dev: '-o.',
	acc: '-a.',
	local: 'local'
}

function getEnvironment() {
	if (typeof window === 'undefined') {
		return process.env.NODE_ENV;
	}

	const currentUrl = window.location.href;

	const env = Object
		.keys(ENV_IDENTIFIERS)
		.find(key => currentUrl.includes(ENV_IDENTIFIERS[key]));

	return env || 'prod';
}

function getAstadUrl() {
	switch (getEnvironment().toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be';
		case 'dev': return 'https://www.dev.dcs.antwerpen.be';
		case 'acc': return 'https://www.acc.dcs.antwerpen.be';
		default:
			return 'https://www.antwerpen.be';
	}
}

function getShoppingCartUrl() {
	switch (getEnvironment().toLowerCase()) {
		case 'local': return 'https://winkelmand-o.antwerpen.be';
		case 'dev': return 'https://winkelmand-o.antwerpen.be';
		case 'acc': return 'https://winkelmand-a.antwerpen.be';
		default:
			return 'https://winkelmand.antwerpen.be';
	}
}

function getEloketUrl() {
	switch (getEnvironment().toLowerCase()) {
		case 'local': return 'https://eloket-o.antwerpen.be';
		case 'dev': return 'https://eloket-o.antwerpen.be';
		case 'acc': return 'https://eloket-a.antwerpen.be';
		default:
			return 'https://eloket.antwerpen.be';
	}
}

export const Environment = {
	getEnvironment,
	getAstadUrl,
	getShoppingCartUrl,
	getEloketUrl
}

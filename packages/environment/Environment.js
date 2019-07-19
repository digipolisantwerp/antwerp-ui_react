const ENV_IDENTIFIERS = {
	dev: '-o.',
	acc: '-a.',
	local: 'local'
}

function getEnvironment() {
	const ENV_IDENTIFIERS = {
		dev: '-o.',
		acc: '-a',
		local: 'local'
	}
	if (typeof window === 'undefined') {
		return process.env.NODE_ENV;
	}

	const currentUrl = window.location.href;

	const env = Object
		.keys(ENV_IDENTIFIERS)
		.find(key => currentUrl.includes(ENV_IDENTIFIERS[key]));

	return env || 'prod';
}

export const Environment = {
	getEnvironment
}
const notificationsUrl = (env) => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/notificaties';
		case 'development': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/notificaties';
		case 'acceptance': return 'https://www.acc.dcs.antwerpen.be/nl/voorkeuren/notificaties';
		case 'production': return 'https://www.antwerpen.be/nl/voorkeuren/notificaties';
		default:
			return 'https://www.antwerpen.be/nl/voorkeuren/notificaties';
	}
}

const aProfileUrl = (env) => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/profiel';
		case 'development': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/profiel';
		case 'acceptance': return 'https://www.acc.dcs.antwerpen.be/nl/voorkeuren/profiel';
		case 'production': return 'https://www.antwerpen.be/nl/voorkeuren/profiel';
		default:
			return 'https://www.antwerpen.be/nl/voorkeuren/profiel';
	}
}

const favoritesUrl = (env) => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/overzicht';
		case 'development': return 'https://www.dev.dcs.antwerpen.be/nl/overzicht';
		case 'acceptance': return 'https://www.acc.dcs.antwerpen.be/nl/overzicht';
		case 'production': return 'https://www.antwerpen.be/nl/overzicht';
		default:
			return 'https://www.antwerpen.be/nl/overzicht';
	}
}

const linkingUrl = (env) => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/koppelingen';
		case 'development': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/koppelingen';
		case 'acceptance': return 'https://www.acc.dcs.antwerpen.be/nl/voorkeuren/koppelingen';
		case 'production': return 'https://www.antwerpen.be/nl/voorkeuren/koppelingen';
		default:
			return 'https://www.antwerpen.be/nl/voorkeuren/koppelingen';
	}
}


const myPaymentsUrl = (env) => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://winkelmand-o.antwerpen.be/betalingen';
		case 'development': return 'https://winkelmand-o.antwerpen.be/betalingen';
		case 'acceptance': return 'https://winkelmand-a.antwerpen.be/betalingen';
		case 'production': return 'https://winkelmand.antwerpen.be/betalingen';
		default:
			return 'https://winkelmand.antwerpen.be/betalingen';
	}
}

const shoppingCartUrl = (env) => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://winkelmand-o.antwerpen.be/mand';
		case 'development': return 'https://winkelmand-o.antwerpen.be/mand';
		case 'acceptance': return 'https://winkelmand-a.antwerpen.be/mand';
		case 'production': return 'https://winkelmand.antwerpen.be/mand';
		default:
			return 'https://winkelmand.antwerpen.be/mand';
	}
}

const eloketUrl = (env) => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
		case 'development': return 'https://www.dev.dcs.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
		case 'acceptance': return 'https://www.acc.dcs.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
		case 'production': return 'https://www.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
		default:
			return 'https://www.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
	}
}

export {
	notificationsUrl,
	aProfileUrl,
	favoritesUrl,
	linkingUrl,
	myPaymentsUrl,
	shoppingCartUrl,
	eloketUrl
}
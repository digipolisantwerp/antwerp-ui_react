import {Environment} from '../../environment';

const env = Environment.getEnvironment();

const notificationsUrl = () => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/notificaties';
		case 'dev': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/notificaties';
		case 'acc': return 'https://www.acc.dcs.antwerpen.be/nl/voorkeuren/notificaties';
		case 'prod': return 'https://www.antwerpen.be/nl/voorkeuren/notificaties';
		default:
			return 'https://www.antwerpen.be/nl/voorkeuren/notificaties';
	}
}

const aProfileUrl = () => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/profiel';
		case 'dev': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/profiel';
		case 'acc': return 'https://www.acc.dcs.antwerpen.be/nl/voorkeuren/profiel';
		case 'prod': return 'https://www.antwerpen.be/nl/voorkeuren/profiel';
		default:
			return 'https://www.antwerpen.be/nl/voorkeuren/profiel';
	}
}

const favoritesUrl = () => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/overzicht';
		case 'dev': return 'https://www.dev.dcs.antwerpen.be/nl/overzicht';
		case 'acc': return 'https://www.acc.dcs.antwerpen.be/nl/overzicht';
		case 'prod': return 'https://www.antwerpen.be/nl/overzicht';
		default:
			return 'https://www.antwerpen.be/nl/overzicht';
	}
}

const linkingUrl = () => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/koppelingen';
		case 'dev': return 'https://www.dev.dcs.antwerpen.be/nl/voorkeuren/koppelingen';
		case 'acc': return 'https://www.acc.dcs.antwerpen.be/nl/voorkeuren/koppelingen';
		case 'prod': return 'https://www.antwerpen.be/nl/voorkeuren/koppelingen';
		default:
			return 'https://www.antwerpen.be/nl/voorkeuren/koppelingen';
	}
}


const myPaymentsUrl = () => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://winkelmand-o.antwerpen.be/betalingen';
		case 'dev': return 'https://winkelmand-o.antwerpen.be/betalingen';
		case 'acc': return 'https://winkelmand-a.antwerpen.be/betalingen';
		case 'prod': return 'https://winkelmand.antwerpen.be/betalingen';
		default:
			return 'https://winkelmand.antwerpen.be/betalingen';
	}
}

const shoppingCartUrl = () => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://winkelmand-o.antwerpen.be/mand';
		case 'dev': return 'https://winkelmand-o.antwerpen.be/mand';
		case 'acc': return 'https://winkelmand-a.antwerpen.be/mand';
		case 'prod': return 'https://winkelmand.antwerpen.be/mand';
		default:
			return 'https://winkelmand.antwerpen.be/mand';
	}
}

const eloketUrl = () => {
	switch (env.toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
		case 'dev': return 'https://www.dev.dcs.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
		case 'acc': return 'https://www.acc.dcs.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
		case 'prod': return 'https://www.antwerpen.be/nl/eloket/mijnloket/context/burger/aanvragen';
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
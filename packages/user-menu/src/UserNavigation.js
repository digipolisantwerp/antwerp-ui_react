import React from 'react';

import {Environment} from '../../environment';

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


const UserNavigation = (props: Props) => {
	const {children } = props;
	const env = Environment.getEnvironment();

	return (
		<ul className="m-nav-list u-margin-xs">
			<li><a href={myPaymentsUrl(env)} title="Mijn betalingen">Mijn betalingen</a></li>
			<li><a href={shoppingCartUrl(env)} title="Mijn winkelmand">Mijn winkelmand</a></li>
			<li><a href={eloketUrl(env)} title="Mijn e-loket">Mijn e-loket</a></li>
			{children}
		</ul>
	)
}

export default UserNavigation;
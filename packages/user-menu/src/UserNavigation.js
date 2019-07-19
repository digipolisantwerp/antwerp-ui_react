import React from 'react';

import {
	notificationsUrl,
	aProfileUrl,
	favoritesUrl,
	linkingUrl,
	myPaymentsUrl,
	shoppingCartUrl,
	eloketUrl
} from './UserNavigationUrls';

const UserNavigation = (props: Props) => {
	const {children } = props;

	return (
		<ul className="m-nav-list u-margin-xs">
			<li><a href={notificationsUrl()} title="Notificaties">Notificaties</a></li>
			<li><a href={aProfileUrl()} title="A-profiel beheren">A-profiel beheren</a></li>
			<li><a href={favoritesUrl()} title="Favorieten">Favorieten</a></li>
			<li><a href={linkingUrl()} title="Koppelingen">Koppelingen</a></li>
			<li><a href={eloketUrl()} title="Mijn e-loket">Mijn e-loket</a></li>

			{/* Uncomment when shoppingcart V2 is live */}
			{/*<li><a href={myPaymentsUrl(env)} title="Mijn betalingen">Mijn betalingen</a></li>
			<li><a href={shoppingCartUrl(env)} title="Mijn winkelmand">Mijn winkelmand</a></li>*/}
			{children}
		</ul>
	)
}

export default UserNavigation;
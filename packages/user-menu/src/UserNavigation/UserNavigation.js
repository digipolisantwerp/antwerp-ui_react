import React from 'react';

import {
  notificationsUrl,
  aProfileUrl,
  favoritesUrl,
  linkingUrl,
  myPaymentsUrl,
  myShoppingCartUrl,
  myEloketUrl,
} from './UserNavigationUrls';

const UserNavigation = (props) => {
  const { children, notificationsCount = '' } = props;

  return (
    <ul className="m-nav-list">
      <li>
        <a href={notificationsUrl()} title="Notificaties" alt="Klik hier om uw notificaties te bekijken.">
          Notificaties
          {notificationsCount > 0 &&
            <span className="badge">{notificationsCount}</span>
          }
        </a>
      </li>
      <li><a href={aProfileUrl()} title="A-profiel beheren" alt="Hier krijgt u toegang tot uw A-profiel en uw persoonlijke instellingen.">A-profiel beheren</a></li>
      <li><a href={favoritesUrl()} title="Favorieten" alt="Klik hier om uw favorieten te bekijken.">Favorieten</a></li>
      <li><a href={linkingUrl()} title="Koppelingen" alt="Klik hier om uw eID, A-kaart en meer te koppelen.">Koppelingen</a></li>

      {/* Uncomment when shoppingcart V2/ Splitsing eleoket is live */}
      {/* <li><a href={myEloketUrl()} title="Mijn e-loket" alt="Mijn e-loket">Mijn e-loket</a></li> */}
      {/* <li><a href={myPaymentsUrl()} title="Mijn betalingen">Mijn betalingen</a></li>
      <li><a href={myShoppingCartUrl()} title="Mijn winkelmand">Mijn winkelmand</a></li> */}
      {children}
		</ul>
  );
};

export default UserNavigation;

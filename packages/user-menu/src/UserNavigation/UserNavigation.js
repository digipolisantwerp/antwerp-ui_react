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

function renderNotificationsMenuItem(notificationsCount) {
  if (notificationsCount) {
    return (
      <li>
        <a href={notificationsUrl()} title="Notificaties" alt="Klikt hier om uw notificaties te bekijken.">
          U heeft notificaties:
          <span className="badge">43</span>
        </a>
      </li>
    )
  } else {
    return <li><a href={notificationsUrl()} title="Notificaties" alt="Klikt hier om uw notificaties te bekijken.">Notificaties</a></li>
  }
}

const UserNavigation = (props) => {
  const { children, notificationsCount = '' } = props;

  return (
    <ul className="m-nav-list">
      {renderNotificationsMenuItem(notificationsCount)}
      <li><a href={aProfileUrl()} title="A-profiel beheren" alt="Hier krijgt u toegang tot uw A-profiel en uw persoonlijke instellingen.">A-profiel beheren</a></li>
      <li><a href={favoritesUrl()} title="Favorieten" alt="Klik hier om uw favorieten te bekijken.">Favorieten</a></li>
      <li><a href={linkingUrl()} title="Koppelingen" alt="Klik hier om uw eID, A-kaart en meer te koppelen.">Koppelingen</a></li>
      <li><a href={myEloketUrl()} title="Mijn e-loket" alt="Mijn e-loket">Mijn e-loket</a></li>

      {/* Uncomment when shoppingcart V2 is live */}
      {/* <li><a href={myPaymentsUrl()} title="Mijn betalingen">Mijn betalingen</a></li>
      <li><a href={myShoppingCartUrl()} title="Mijn winkelmand">Mijn winkelmand</a></li> */}
      {children}
		</ul>
  );
};

export default UserNavigation;

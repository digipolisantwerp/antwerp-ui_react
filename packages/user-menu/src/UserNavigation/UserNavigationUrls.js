import { Environment } from '../../../environment';

const env = Environment.getEnvironment();

const portalUrl = () => {
  switch (env.toLowerCase()) {
    case 'local': return 'https://www.dev.dcs.antwerpen.be';
    case 'dev': return 'https://www.dev.dcs.antwerpen.be';
    case 'acc': return 'https://www.acc.dcs.antwerpen.be';
    default:
      return 'https://www.antwerpen.be';
  }
};

const shoppingCartUrl = () => {
  switch (env.toLowerCase()) {
    case 'local': return 'https://winkelmand-o.antwerpen.be';
    case 'dev': return 'https://winkelmand-o.antwerpen.be';
    case 'acc': return 'https://winkelmand-a.antwerpen.be';
    default:
      return 'https://winkelmand.antwerpen.be';
  }
};

const eloketUrl = () => {
  switch (env.toLowerCase()) {
    case 'local': return 'https://eloket-o.antwerpen.be';
    case 'dev': return 'https://eloket-o.antwerpen.be';
    case 'acc': return 'https://eloket-a.antwerpen.be';
    default:
      return 'https://eloket.antwerpen.be';
  }
};

const notificationsUrl = () => `${portalUrl()}/nl/voorkeuren/notificaties`;
const aProfileUrl = () => `${portalUrl()}/nl/voorkeuren/profiel`;
const favoritesUrl = () => `${portalUrl()}/nl/overzicht`;
const linkingUrl = () => `${portalUrl()}/nl/voorkeuren/koppelingen`;
const myEloketUrl = () => `${eloketUrl()}/nl/eloket/mijnloket/context/burger/aanvragen`;

const myPaymentsUrl = () => `${shoppingCartUrl()}/betalingen`;
const myShoppingCartUrl = () => `${shoppingCartUrl()}/mand`;

export {
  notificationsUrl,
  aProfileUrl,
  favoritesUrl,
  linkingUrl,
  myPaymentsUrl,
  myShoppingCartUrl,
  myEloketUrl,
};

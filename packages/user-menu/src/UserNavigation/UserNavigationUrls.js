import { Environment } from '../../../environment';

const notificationsUrl = () => `${Environment.getAstadUrl()}/nl/voorkeuren/notificaties`;
const aProfileUrl = () => `${Environment.getAstadUrl()}/nl/voorkeuren/profiel`;
const favoritesUrl = () => `${Environment.getAstadUrl()}/nl/overzicht`;
const linkingUrl = () => `${Environment.getAstadUrl()}/nl/voorkeuren/koppelingen`;
const myEloketUrl = () => `${Environment.getEloketUrl()}/nl/eloket/mijnloket/context/burger/aanvragen`;

const myPaymentsUrl = () => `${Environment.getShoppingCartUrl()}/betalingen`;
const myShoppingCartUrl = () => `${Environment.getShoppingCartUrl()}/mand`;

export {
  notificationsUrl,
  aProfileUrl,
  favoritesUrl,
  linkingUrl,
  myPaymentsUrl,
  myShoppingCartUrl,
  myEloketUrl,
};

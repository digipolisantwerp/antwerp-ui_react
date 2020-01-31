import Moment from 'moment';
import { yearsOfMonth } from './';

const viewTypeMap = {
  days: 'dagen',
  months: 'maanden',
  years: 'jaren'
};

const mapViewType = viewType => {
  return viewTypeMap[viewType];
};

const mapNav = (direction, viewType, value) => {
  let multi = '';
  let viewTypeDisplay = '';
  let valueDisplay = '';
  const directionDisplay = direction > 0 ? 'volgend' : 'vorig';

  switch (viewType) {
    case 'months':
      viewTypeDisplay = 'jaar';
      valueDisplay = value
        .clone()
        .add(direction, 'years')
        .format('YYYY');
      break;
    case 'years':
      multi = 'e';
      viewTypeDisplay = 'periode van 12 jaar';
      const years = yearsOfMonth(value.clone().add(12 * direction, 'years'));
      valueDisplay = years[0] + '-' + years.slice(-1);
      break;
    default:
      multi = 'e';
      viewTypeDisplay = 'maand';
      valueDisplay = value
        .clone()
        .add(direction, 'months')
        .format('MMMM YYYY');
  }

  return `Ga naar ${directionDisplay}${multi} ${viewTypeDisplay}, ${valueDisplay}`;
};

export default {
  mapViewType,
  mapNav
};

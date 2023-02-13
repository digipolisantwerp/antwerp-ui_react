import { FunctionalListProps } from '../list.types';
import FunctionalList from './FunctionalList';

export function CheckboxList(props: FunctionalListProps) {
  return <FunctionalList type="checkbox" {...props} />;
}

export default CheckboxList;

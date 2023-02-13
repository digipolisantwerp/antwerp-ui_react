import { Checkbox } from '../../checkbox';
import { ListItemCheckboxProps } from '../list.types';

export function ListItemCheckbox({ name, onClick, qa, ...props }: ListItemCheckboxProps) {
  const onItemClick = () => {
    if (onClick) {
      onClick(name);
    }
  };

  return (
    <li className="a-checkbox-list__item">
      <div onClick={onItemClick} className="a-input a-checkbox-list__checkbox">
        <Checkbox name={name} {...props} />
      </div>
    </li>
  );
}

export default ListItemCheckbox;

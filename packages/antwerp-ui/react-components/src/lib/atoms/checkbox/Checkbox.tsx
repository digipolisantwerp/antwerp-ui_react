import { ChangeEvent } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({ label, checked, id, qa, name, disabled, indeterminate, onChange }: CheckboxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(event);
  };

  const setIndeterminate = (inputRef: HTMLInputElement) => {
    if (inputRef && indeterminate) {
      inputRef.indeterminate = true;
    }
  };

  const classes = classNames({
    'a-input__checkbox': true
  });

  return (
    <div data-qa={qa} className={classes}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        ref={setIndeterminate}
        disabled={disabled}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;

import { ChangeEvent } from 'react';
import { SCREEN_READER_CLASS } from '../../../constants/settings';
import { classNames } from '../../../utils/dom.utils';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({
  label,
  showLabel,
  checked,
  id,
  qa,
  name,
  disabled,
  indeterminate,
  onChange
}: CheckboxProps) {
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
      <label htmlFor={id}>
        <span className={showLabel ? undefined : SCREEN_READER_CLASS}>{label}</span>
      </label>
    </div>
  );
}

Checkbox.defaultProps = {
  showLabel: true
};

export default Checkbox;

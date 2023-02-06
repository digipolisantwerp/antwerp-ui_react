import { ChangeEvent } from 'react';
import { RadioProps } from './Radio.types';

export function Radio({ value, label, id, qa, name, onChange, checked, disabled }: RadioProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <div className="a-input__radio" data-qa={qa}>
      <input
        type="radio"
        id={id}
        checked={checked}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Radio;

import { RadioGroupProps } from './Radio.types';
import { ChangeEvent, cloneElement, Children, ReactElement } from 'react';
import { classNames } from '../../../utils/dom.utils';

export function RadioGroup({ label, name, children = [], value, qa, onChange }: RadioGroupProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(event.target?.value);
  };
  const classes = classNames({
    'a-input': true
  });
  return (
    <fieldset className={classes} data-qa={qa}>
      <legend className="a-input__label">{label}</legend>
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          name: name,
          onChange: handleChange,
          ...(value ? { checked: child.props.value === value } : {}),
          ...child.props
        });
      })}
    </fieldset>
  );
}

export default RadioGroup;

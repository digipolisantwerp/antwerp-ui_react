import { MouseEvent, useState } from 'react';
import { SwitchProps } from './Switch.types';
import { labelWrapper } from '../../../utils/render.utils';

export function Switch({
  ariaLabel,
  checked: checkedProp,
  disabled,
  id,
  internalIOLabels,
  label,
  labelId,
  onClick,
  qa,
  statusLabelOff,
  statusLabelOn,
  statusLabelSide
}: SwitchProps) {
  const [checked, setChecked] = useState(!!checkedProp);
  const isChecked = checkedProp === true || checkedProp === false ? !!checkedProp : checked;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setChecked(!checked);
    if (onClick && typeof onClick === 'function') {
      onClick(event);
    }
  };

  const statusLabels = (
    <>
      <div className="a-switch__label a-switch__label--on" aria-hidden="true">
        {statusLabelOn}
      </div>
      <div className="a-switch__label a-switch__label--off" aria-hidden="true">
        {statusLabelOff}
      </div>
    </>
  );

  return labelWrapper(
    <button
      id={id}
      data-qa={qa}
      className="a-switch"
      role="switch"
      aria-checked={isChecked}
      aria-label={label ? undefined : ariaLabel}
      aria-labelledby={label ? labelId : undefined}
      disabled={disabled}
      onClick={handleClick}
    >
      {statusLabelSide === 'left' && statusLabels}
      <div className="a-switch__toggle" aria-hidden="true">
        {internalIOLabels && (
          <>
            <div className="a-switch__toggle-label a-switch__toggle-label--on" aria-hidden="true">
              i
            </div>
            <div className="a-switch__toggle-label a-switch__toggle-label--off" aria-hidden="true">
              o
            </div>
          </>
        )}
      </div>
      {statusLabelSide === 'right' && statusLabels}
    </button>,
    label,
    id,
    labelId
  );
}

Switch.defaultProps = {
  disabled: false,
  id: 'aui-switch',
  internalIOLabels: false,
  labelId: 'aui-switch-label',
  statusLabelOff: 'Uit',
  statusLabelOn: 'Aan',
  statusLabelSide: ''
};

export default Switch;

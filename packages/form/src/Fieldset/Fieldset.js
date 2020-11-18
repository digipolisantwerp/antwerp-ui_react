import React from 'react';

type Props = {
  /** Legend label */
  legend: string,
  children?: any,
  style?: object,
  /** Qa id */
  qa?: string,
};

const Fieldset = (props: Props) => {
  const { legend, children, style, qa } = props;
  return (
    <fieldset style={style} data-qa={qa}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}

export default Fieldset;
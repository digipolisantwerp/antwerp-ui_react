import React from 'react';

type Props = {
  /** Legend label */
  legend: string,
  children?: any,
  style?: object,
};

const Fielset = (props: Props) => {
  const { legend, children, style } = props;
  return (
    <fieldset style={style}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}

export default Fielset;
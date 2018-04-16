import React from 'react';

type Props = {
  children?: any,
  style?: object,
};

const Form = (props: Props) => {
  const { children, style } = props;
  return (
    <div className="a-form" style={style}>
      {children}
    </div>
  )
}

export default Form;
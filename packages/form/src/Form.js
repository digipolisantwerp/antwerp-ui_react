import React from 'react';

type Props = {
  children?: any,
  style?: object,
};

const Form = (props: Props) => {
  const { children, style } = props;
  return (
    <form className="a-form" style={style}>
      {children}
    </form>
  )
}

export default Form;
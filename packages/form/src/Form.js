import React from 'react';

type Props = {
  children?: any,
  style?: object,
  onSubmit?: (e: object) => void,
};

const Form = (props: Props) => {
  const { children, style, onSubmit } = props;
  return (
    <form className="a-form" style={style} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form;
import React, { Component } from 'react';
import FlyoutButton from '../../flyout-button/src/FlyoutButton';
import Button from '../../button/src/Button';

type User = {
  firstName?: string,
  lastName?: string
}
type LogoutFunction = () => void;

type Props = {
  user?: User,
  onLogout?: LogoutFunction,
  isLoading?: boolean,
  className?: string,
  style?: object,
  children?: any
}
const UserMenu = (props: Props) => {
  const { user, onLogout, isLoading, children, className, style } = props;
  const {
    firstName = '',
    lastName = '',
  } = user;

  const name = `${firstName} ${lastName}`;
  return (
      <FlyoutButton
      flyoutDirection="right"
      iconLeft="user"
      flyoutSize="small"
      label={name}
      style={style}
      className={className}
    >
      {children}
      <Button
        iconLeft="power-off"
        type="danger"
        block
        onClick={onLogout}>
        Uitloggen
        </Button>
      </FlyoutButton>
  )
}

export default UserMenu;
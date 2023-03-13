import { MouseEventHandler } from 'react';
import { IconProps } from '../../base/icon';
import { AvatarProps } from '../avatar';

export interface ButtonProps {
  ariaLabel?: string;
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  qa?: string;
  size?: 'small' | 'medium' | 'large';
  addOn?: ButtonAddOnProps;
  theme?: 'success' | 'warning' | 'danger' | 'neutral';
  title?: string;
  emphasis?: 'high' | 'medium' | 'low';
}

export type ButtonAddOnProps = {
  type: 'avatar' | 'icon' | 'spinner';
  align?: 'left' | 'center' | 'right';
  iconProps?: ButtonIconProps;
  avatarProps?: ButtonAvatarProps;
};
export type ButtonAvatarProps = Omit<AvatarProps, 'rounded' | 'size'>;
export type ButtonIconProps = IconProps;

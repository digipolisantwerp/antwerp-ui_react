// Emphasis
enum Emphasis {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}

export const DEFAULT_EMPHASIS = Emphasis.HIGH;

export const EMPHASIS_MAP: { [emphasis: string]: string } = {
  [Emphasis.MEDIUM]: 'outlined',
  [Emphasis.LOW]: 'transparent'
};

// Sizes
export enum Size {
  XS = 'extra-small',
  S = 'small',
  MD = 'medium',
  L = 'large'
}

export const DEFAULT_SIZE = Size.MD;

export const SIZE_MAP: { [size: string]: string } = {
  [Size.XS]: 'xs',
  [Size.S]: 's',
  [Size.MD]: 'md',
  [Size.L]: 'l'
};

// Themes
export enum Theme {
  PRIMARY = 'primary',
  NEUTRAL = 'neutral',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning'
}

export const THEME_ICON_MAP: { [Theme: string]: string } = {
  [Theme.SUCCESS]: 'check-1',
  [Theme.DANGER]: 'alert-circle',
  [Theme.WARNING]: 'alert-triangle'
};

// States
export enum State {
  SUCCESS = 'success',
  ERROR = 'error'
}

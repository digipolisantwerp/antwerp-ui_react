// Sizes
export enum Size {
  XS = 'extra-small',
  S = 'small',
  MD = 'medium',
  L = 'large'
}

export const DEFAULT_SIZE = Size.MD;

export const SIZE_MAPPING: { [size: string]: string } = {
  [Size.XS]: 'xs',
  [Size.S]: 's',
  [Size.MD]: 'md',
  [Size.L]: 'l'
};

// Themes
export enum Theme {
  NEUTRAL = 'neutral',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning'
}

// States
export enum State {
  SUCCESS = 'success',
  ERROR = 'error'
}

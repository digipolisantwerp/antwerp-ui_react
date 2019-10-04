import React from 'react';
import classNames from 'classnames';

type Props = {
  style?: object,
  className?: string,
  children: Object,
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xsOffset: string,
  smOffset: string,
  mdOffset: string,
  lgOffset: string,
};

const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xl: 'col-xl',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xlOffset: 'col-xl-offset'
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props) {
  const extraClasses = [];

  if (props.first) {
    extraClasses.push(`first-${props.first}`);
  }

  if (props.last) {
    extraClasses.push(`last-${props.last}`);
  }

  const filter = Object.keys(props)
    .filter(key => classMap[key])
    .map(key => isInteger(props[key]) ? (classMap[key] + '-' + props[key]) : classMap[key])
    .concat(extraClasses);

  return filter.join().replace(/,/g, ' ');
}

const Col = (props: Props) => {
  const {
    style,
    className,
    children,
    xs,
    sm,
    md,
    lg,
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
  } = props;

  const columns = getColClassNames(props);
  console.log(columns);

  const containerClass = classNames(
    className,
    getColClassNames(props),
  );

  return (
    <div className={containerClass} style={style}>{children}</div>
  )
}

export default Col;
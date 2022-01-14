
import classnames from 'classnames';
import React from 'react';

type Props = {
  as: string,
  classList: string[],
  className: string,
  component: Function,
  rowData: object,
  rowIndex: number,
  value: number | string | boolean,
  style: any,
}

const TableCell = ({
  as: HTMLTag = 'td',
  classList,
  className,
  component,
  rowData,
  rowIndex,
  value,
  style,
}) => (
  <HTMLTag className={classnames(className, classList)} style={style}>
    <>
      {component ? component(value, rowData, rowIndex) : value}
    </>
  </HTMLTag>
);

export default TableCell;

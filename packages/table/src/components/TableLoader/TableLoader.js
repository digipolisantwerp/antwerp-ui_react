
import Spinner from '../../../../spinner';
import React from 'react';

type Props = {
  loadDataMessage: string,
};

const TableLoader = ({
  loadDataMessage,
}: Props) => (
  <tr>
    <td>
      <div className="a-table--loading">
        <Spinner className="u-margin-right-xs" style={{ display: 'inline' }} />
        <span>{loadDataMessage}</span>
      </div>
    </td>
  </tr>
);

export default TableLoader;

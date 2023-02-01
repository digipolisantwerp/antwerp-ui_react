import { Pagination } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function PaginationExamples() {
  const [current, setCurrent] = useState(1);
  return (
    <div className="u-margin-bottom">
      <h2>Pagination</h2>
      <Pagination />
      <Pagination size="small" itemsPerPage={10} totalItems={11} />
      <Pagination currentPage={4} itemsPerPage={10} totalItems={200} />
      <Pagination size="small" display="text" currentPage={4} itemsPerPage={10} totalItems={77} />
      <Pagination display="numbers" currentPage={4} itemsPerPage={10} totalItems={77} />
      <Pagination size="small" display="numbers" currentPage={1} itemsPerPage={5} totalItems={10} />
      <Pagination size="small" display="numbers" currentPage={10} itemsPerPage={5} totalItems={200} />
      <Pagination
        ariaLabel="Controlled Pagination"
        ariaLabelPreviousPage="Prev"
        ariaLabelNextPage="Next"
        ariaLabelPage="Controlled Page"
        display="numbers"
        currentPage={current}
        itemsPerPage={5}
        totalItems={99}
        onChange={setCurrent}
      />
    </div>
  );
}

export default PaginationExamples;

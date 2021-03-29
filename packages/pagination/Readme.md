```js
const [currentPage, setCurrentPage] = React.useState(5)
const itemsPerPage = 4;
const totalValues = 180;

<Pagination
  currentPage={currentPage}
  itemsPerPage={itemsPerPage}
  totalValues={totalValues}
  styling="m-pagination--outline"
  display="numbers"
  buttonType="a"
  onUpdate={n => setCurrentPage(n)}
/>;
```

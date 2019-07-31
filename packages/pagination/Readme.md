```js
initialState = { currentPage: 1};
const itemsPerPage = 4;
const totalValues = 470;

<Pagination
  currentPage={state.currentPage}
  itemsPerPage={itemsPerPage}
  totalValues={totalValues}
  styling="basic"
  display="numbers"
  buttonType="a"
  onUpdate={n => setState({currentPage: n})}
/>;
```

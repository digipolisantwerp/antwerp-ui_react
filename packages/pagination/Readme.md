```js
initialState = { currentPage: 5};
const itemsPerPage = 4;
const totalValues = 180;

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

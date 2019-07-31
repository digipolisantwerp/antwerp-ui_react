import React, { Component } from "react";
import Pagination from "./src";

export default class PaginationExample extends Component {
  state = {
    currentPage: 1
  };

  onUpdatePage = n => {
    this.setState({ currentPage: n });
  };
  
  render() {
    const itemsPerPage = 4;
    const totalValues = 470;
    const { currentPage } = this.state;
    return (
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalValues={totalValues}
        styling="basic"
        display="numbers"
        buttonType={Button}
        onUpdate={n => console.log("Moved to page" + n)}
      />
    );
  }
}

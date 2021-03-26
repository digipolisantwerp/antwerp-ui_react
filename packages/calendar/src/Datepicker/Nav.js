import React, { Component } from 'react';
import { yearsOfMonth, aria } from '../utils';
import Button from '../../../button/src/Button';

class Nav extends Component {
  renderNav() {
    const { viewType, displayedPeriod } = this.props;
    switch (viewType) {
      case 'months':
        return displayedPeriod.format('YYYY');
      case 'years':
        return this.renderYearsNav(displayedPeriod);
      default:
        return displayedPeriod.format('MMMM YYYY');
    }
  }

  renderYearsNav(displayedMonth) {
    const years = yearsOfMonth(displayedMonth);
    return years[0] + '-' + years.slice(-1);
  }

  render() {
    const {
      onClickPrevious,
      onClickViewType,
      onClickNext,
      viewType,
      displayedPeriod,
      ariaLabelPrevious = (viewType, value) => aria.mapNav(-1, viewType, value),
      ariaLabelNext = (viewType, value) => aria.mapNav(1, viewType, value)
    } = this.props;

    return (
      <React.Fragment>
        <Button
          htmlType="button"
          onClick={onClickPrevious}
          className={'a-button has-icon'}
          icon={'ai-arrow-left-1'}
          ariaLabel={ariaLabelPrevious(viewType, displayedPeriod)}
        />

        <Button htmlType="button" onClick={onClickViewType} className={'m-datepicker__title a-button u-text-capitalize'}>
          {this.renderNav()}
        </Button>

        <Button
          htmlType="button"
          onClick={onClickNext}
          className={'a-button has-icon'}
          icon={'ai-arrow-right-1'}
          ariaLabel={ariaLabelNext(viewType, displayedPeriod)}
        />
      </React.Fragment>
    );
  }
}

export default Nav;

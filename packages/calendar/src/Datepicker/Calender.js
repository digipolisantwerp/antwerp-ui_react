import React, { Component } from 'react';
import Moment from 'moment';
import Nav from './Nav';
import Body from './Body';
import Head from './Head';
import { nextItemInArray, aria } from '../utils';

class Calendar extends Component {
  state = {
    displayedPeriod: this.props.activeDate ? Moment(this.props.activeDate, this.props.format) : Moment(),
    viewType: 'days',
    views: ['days', 'months', 'years']
  };

  changeViewType() {
    const { viewType, views } = this.state;
    let switchTo = nextItemInArray(viewType, views);
    this.goToViewType(switchTo);
  }

  goToViewType(switchTo, displayedPeriod = '') {
    this.setState({
      viewType: switchTo,
      displayedPeriod: displayedPeriod || this.state.displayedPeriod
    });
  }

  moveDisplayedPeriod(delta) {
    const { viewType, displayedPeriod } = this.state;
    const period = viewType === 'days' ? 'months' : 'years';
    const diffTime = viewType === 'years' ? delta * 12 : delta;

    this.setState({
      displayedPeriod: displayedPeriod.clone().add(diffTime, period)
    });
  }

  render() {
    const {
      selectDay,
      activeDate,
      selectedDates,
      minDate,
      maxDate,
      format,
      noWeekends,
      ariaLabelPrevious,
      ariaLabelNext,
      ariaLabelDatePicker = viewType => `Datumkiezer ${aria.mapViewType(viewType)}`,
      ariaLabelButtonDateFormat
    } = this.props;
    const { viewType, displayedPeriod } = this.state;

    return (
      <React.Fragment>
        <div
          className="m-datepicker__nav"
          aria-label={`${ariaLabelDatePicker(viewType)}`}
          aria-hidden="false"
        >
          <Nav
            viewType={viewType}
            displayedPeriod={displayedPeriod}
            onClickPrevious={this.moveDisplayedPeriod.bind(this, -1)}
            onClickViewType={this.changeViewType.bind(this)}
            onClickNext={this.moveDisplayedPeriod.bind(this, 1)}
            ariaLabelPrevious={ariaLabelPrevious}
            ariaLabelNext={ariaLabelNext}
          />
        </div>
        <table>
          <thead>
            <Head displayedPeriod={displayedPeriod} viewType={viewType} />
          </thead>
          <tbody className="m-datepicker__calendar">
            <Body
              viewType={viewType}
              displayedPeriod={displayedPeriod}
              selectDay={selectDay.bind(this)}
              selectedDates={selectedDates}
              minDate={minDate}
              maxDate={maxDate}
              format={format}
              noWeekends={noWeekends}
              activeDate={activeDate}
              ariaLabelButtonDateFormat={ariaLabelButtonDateFormat}
              goToViewType={this.goToViewType.bind(this)}
            />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Calendar;

import React, {Component} from 'react';
import Calendar from './Calender';

class DatePicker extends Component {

  renderCalendar() {
    const {
      minDate,
      maxDate,
      open,
      activeDate,
      clickOnDate
    } = this.props;

    if (!open) {
      return null;
    }

    return <Calendar
      ref={() => {
        Calendar
      }}
      activeDate={activeDate}
      minDate={minDate}
      maxDate={maxDate}
      selectDay={clickOnDate.bind(this)}/>;
  }

  render() {
    return (
      this.renderCalendar()
    );
  }
}

export default DatePicker;
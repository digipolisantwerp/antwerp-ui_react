import React, { Component } from 'react';
import Moment from 'moment';
import DatePicker from './Datepicker/DatePicker';

type Props = {
  /** The date format used to render the date. */
  format?: string,
  /** Which locale you want to use. Defaults to 'nl' */
  locale?: string,
  /** The selected or predefined date. */
  activeDate?: string,
  /** Every date in this prop will be selected and disabled */
  selectedDates?: Array,
  /** Every date less than this date will be disabled */
  minDate: string,
  /** Every date greater than this date will be disabled */
  maxDate: string,
  /** enable/disable the days during the weekend */
  noWeekends?: boolean,
  /** Event for when the date changes. */
  onChange?: (e: object) => void,
  /** aria-label for previous, defaults to (viewType, value) => `Vorige ${viewType} (${value})` */
  ariaLabelPrevious?: Function,
  /** aria-label for next, defaults to (viewType, value) => `Volgende ${viewType} (${value})` */
  ariaLabelNext?: Function,
  /** aria-label for the datepicker, defaults to (viewType) => `Datumkiezer ${viewType}` */
  ariaLabelDatePicker?: Function,
  /** aria-label date format, defaults to 'dddd D MMMM YYYY' */
  ariaLabelButtonDateFormat?: string,
  /** Qa id */
  qa?: string,
};
class Calendar extends Component<Prop> {

    constructor(props) {
      super(props);
      const {activeDate, format, locale} = this.props;

      Moment.locale(locale ? locale : 'nl');

      this.state = {
        activeDate: activeDate ? Moment(activeDate, format) : '',
      };
    }

    static defaultProps = {
      format: 'DD/MM/YYYY',
      noWeekends: false
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.activeDate) {
        return {
          activeDate: Moment(nextProps.activeDate, nextProps.format)
        };
      }

      return null;
    }

    changeDate(day) {
      const {onChange, format} = this.props;
      if (onChange) onChange(Moment(day).format(format));

      this.setState({
        activeDate: day
      });
    }

    render() {
      const {
        format,
        selectedDates,
        minDate,
        maxDate,
        noWeekends,
        qa,
        ...restProps
      } = this.props;

      const {
        activeDate,
      } = this.state;

      return <div className="m-datepicker is-open" data-qa={qa}>
        <DatePicker
          format={format}
          activeDate={activeDate}
          selectedDates={selectedDates}
          minDate={Moment(minDate, format)}
          maxDate={Moment(maxDate, format)}
          noWeekends={noWeekends}
          clickOnDate={this.changeDate.bind(this)}
          {...restProps}
        />
      </div>;
  }
}

export default Calendar;

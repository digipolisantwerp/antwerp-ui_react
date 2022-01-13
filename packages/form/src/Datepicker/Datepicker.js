import React, { Component } from 'react';
import Moment from 'moment';
import classNames from 'classnames';

import InputLabel from '../InputLabel';
import Calendar from '../../../calendar';
import TextField from '../TextField';
import Icon from '../../../icon/src/Icon';

const stateClasses = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error',
};

type InputStates = "success" | "warning" | "error";
type Sizes = "small" | "normal" | "large";

type
  Props = {
  /** The label to display above the text field. */
  label?: string,
  /** The id for the text field. */
  id?: string,
  /** The name for the text field. */
  name?: string,
  /** If the field is required. */
  required?: string,
  /** The mask for input. */
  mask?: string,
  /** The date format used to render the date. */
  format?: string,
  /** Which locale you want to use. Defaults to 'nl' */
  locale?: string,
  /** The selected or predefined date. */
  activeDate?: string,
  /** Every date in this prop will be selected and disabled. */
  selectedDates?: Array,
  /** Toggle the calender open/closed. */
  open?: boolean,
  /** If the calender should open/close after date change. */
  autoClose?: boolean,
  /** If the calender should allow manual input. */
  disabled?: boolean,
  /** If it should be free text input or click only */
  readOnly?: boolean,
  /** enable/disable the days during the weekend. */
  noWeekends?: boolean,
  /** Every date less than this date will be disabled. */
  minDate?: string,
  /** Validation state of input. */
  state?: InputStates,
  /** Description to be shown under input. */
  description?: string,
  /** Every date greater than this date will be disabled. */
  maxDate?: string,
  /** Event for when the date changes. */
  onChange?: (e: object) => void,
  /** Event for onBlur. */
  onBlur?: (e: object) => void,
  /** Qa id */
  qa?: string,
  /** Sizes */
  size?: Sizes,
};

class Datepicker extends Component<Props> {
  constructor(props) {
    super(props);
    const {open} = this.props;

    this.state = {
      input: '',
      open: open || false
    };
  }

  static defaultProps = {
    required: false,
    format: 'DD/MM/YYYY',
    autoClose: true,
    noWeekends: false,
    readOnly: false,
    disabled: false,
  };

  defaultId = 'aui-date-' + Math.random().toString(36);

  componentDidMount() {
    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', this.handleClickOutside);
      document.addEventListener('touchstart', this.handleClickOutside);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('mousedown', this.handleClickOutside);
      document.removeEventListener('touchstart', this.handleClickOutside);
    }
  }

  handleClickOutside = (e) => {
    if (this.datepicker && this.datepicker.contains(e.target)) {
      return;
    }

    this.setState({ open: false });
  };

  static getDerivedStateFromProps(props, state) {
    // Reset input value
    if (props.activeDate === '') {
        return {
          activeDate: null,
          input: props.activeDate
        };
    }

    if (props.activeDate) {
      const momentDate = Moment(props.activeDate, props.format, true);
      if (momentDate.isValid()) {
        return {
          activeDate: momentDate,
          input: props.activeDate
        };
      }
    }

    return null;
  }

  onClickInput() {
    if (this.props.readOnly) {
      this.toggleCalendar()
    }
  }

  resetDate() {
    this.setState({
      input: '',
      activeDate: null
    });
  }

  changeDate(date) {
    const {onChange, format, autoClose} = this.props;
    const momentDate = Moment(date, format, true);
    const isValid = momentDate.isValid();
    if (onChange) onChange(date, isValid);

    this.setState(() => {
      let updateDate = {};
      if (isValid) {
        updateDate =   {
          activeDate: momentDate
        };
      }

      return {
        ...updateDate,
        input: date,
        open: !autoClose || false
      }
    });
  }

  toggleCalendar() {
    if (!this.props.disabled) {
      this.setState({
        open: !this.state.open
      });
    }
  }

  keyPressed(e) {
    if(e.key === 'Enter' && !this.props.disabled){
      this.setState({
        open: !this.state.open
      });
    }
  }

  render() {
    const {
      label,
      id,
      state,
      description,
      mask,
      required,
      disabled,
      readOnly,
      name,
      format,
      locale = 'nl',
      selectedDates,
      minDate,
      maxDate,
      noWeekends,
      onBlur,
      qa,
      size,
    } = this.props;

    const {
      input,
      activeDate,
      open,
    } = this.state;

    const datepickerWrapperClass = classNames(
      'a-input',
      'has-icon-right',
      {
        'is-required': !!required,
        [`${stateClasses[state]}`]: !!state,
        [`a-input--${size}`]: !!size,
      }
    );

    const datepickerClass = classNames(
      'm-datepicker',
      'm-datepicker--fixed',
      {
        'is-open': open
      }
    );

    return <div className={datepickerWrapperClass} ref={node => this.datepicker = node} data-qa={qa}>
      {label && <InputLabel htmlFor={id || this.defaultId}>{label}</InputLabel>}
      <div className="a-input__wrapper">
        <TextField
          mask={mask}
          name={name}
          id={id || this.defaultId}
          value={input}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          onClick={() => this.onClickInput()}
          onChange={(e) => this.changeDate(e.target.value)}
          onBlur={onBlur} />
        <span role="button" className="ai is-clickable" tabIndex="0" onClick={this.toggleCalendar.bind(this)} onKeyPress={this.keyPressed.bind(this)} aria-label="Open"><Icon name="ai-calendar-3" /></span>
        {open &&
          <div className={datepickerClass} aria-hidden="false">
            <div className="m-datepicker is-open">
              <Calendar
                locale={locale}
                format={format}
                activeDate={activeDate}
                selectedDates={selectedDates}
                minDate={minDate}
                maxDate={maxDate}
                noWeekends={noWeekends}
                onChange={this.changeDate.bind(this)}
              />
            </div>
          </div>
        }
      </div>
      {description && <small>{description}</small>}
    </div>
    ;
  }
}

export default Datepicker;

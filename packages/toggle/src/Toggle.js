import React, { Component } from 'react';
import classNames from 'classnames';

const sizeClasses = {
  tiny: 'a-toggle--tiny',
  small: 'a-toggle--small',
  large: 'a-toggle--large',
};

type Sizes = "tiny" | "small" | "large";

type Props = {
  id?: string,
  name?: string,
  size?: Sizes,
	checkedLabel?: string,
	uncheckedLabel?: string,
  checked?: boolean,
  value?: string,
  onChange?: (e: Object) => void,
  onClick?: (e: Object) => void,
};


class Toggle extends Component<Props> {
  state = {
    checked: this.props.checked || false
  }

	static defaultProps = {
  	id: 'toggle-normal',
  	checkedLabel: '',
		uncheckedLabel: '',
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.checked !== prevState.checked) {
			return {
				checked: nextProps.checked
			};
		}

		return null;
	}

  handleClick = (e) => {
    this.setState({ checked: !this.state.checked });
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      id,
      name,
      size,
      value,
      checkedLabel,
	    uncheckedLabel,
      onClick,
    } = this.props;

    const toggleClass = classNames(
      'a-toggle has-icon',
      {
        [`${sizeClasses[size]}`]: !!size,
      }
    );

    const checkedClasses = classNames(
      'a-toggle__on a-button', {
		    'has-icon': checkedLabel === '',
		    'has-icon-left': checkedLabel !== ''
	    }
    );

	  const uncheckedClasses = classNames(
		  'a-toggle__off a-button a-button--danger',
		  {
			  'has-icon': uncheckedLabel === '',
			  'has-icon-left': uncheckedLabel !== ''
		  }
	  );

    return (
      <div className={toggleClass}>
        <input
          className="a-toggle__checkbox"
          id={id}
          name={name}
          checked={this.state.checked}
          type="checkbox"
          onClick={this.handleClick}
        />
        <div className="a-toggle__labels">
          <label htmlFor={id} className={checkedClasses}>
            <i className="fa fa-bars"></i>
              {checkedLabel}
          </label>
          <label htmlFor={id} className={uncheckedClasses}>
            <i className="fa fa-close"></i>
              {uncheckedLabel}
          </label>
        </div>
      </div>
    );
  }
}

export default Toggle;
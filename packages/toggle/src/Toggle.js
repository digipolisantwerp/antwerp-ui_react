import React, { Component } from 'react';
import classNames from 'classnames';

const sizeClasses = {
  tiny: 'a-toggle--tiny',
  small: 'a-toggle--small',
  large: 'a-toggle--large',
};

const sizeBtnClasses = {
	tiny: 'a-button--tiny',
	small: 'a-button--small',
	large: 'a-button--large',
};

type Sizes = "tiny" | "small" | "large";

type Props = {
  id?: string,
  name?: string,
  size?: Sizes,
	checkedLabel?: string,
	checkedIcon?: string,
	checkedButtonClass?: string,
	uncheckedLabel?: string,
	uncheckedIcon?: string,
	uncheckedButtonClass?: string,
  checked?: boolean,
  /** Qa id */
  qa?: string,
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
		checkedIcon: 'fa-bars',
		checkedButtonClass: '',
		uncheckedLabel: '',
		uncheckedIcon: 'fa-close',
		uncheckedButtonClass: 'a-button--danger'
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
      checkedLabel,
      checkedIcon,
      checkedButtonClass,
      uncheckedLabel,
      uncheckedIcon,
      uncheckedButtonClass,
      qa,
    } = this.props;

    const toggleClass = classNames(
      'a-toggle has-icon',
      {
        [`${sizeClasses[size]}`]: !!size,
      }
    );

    const checkedClasses = classNames(
      'a-toggle__on a-button',
	    (checkedLabel === '' ? 'has-icon' : 'has-icon-left'), {
		    [`${checkedButtonClass}`]: checkedButtonClass,
		    [`${sizeBtnClasses[size]}`]: !!size
	    }
    );

	  const uncheckedClasses = classNames(
		  'a-toggle__off a-button',
		  uncheckedLabel === '' ? 'has-icon' : 'has-icon-left', {
			  [`${uncheckedButtonClass}`]: uncheckedButtonClass,
			  [`${sizeBtnClasses[size]}`]: !!size
		  }
	  );

    return (
      <div className={toggleClass} data-qa={qa}>
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
            <i className={"fa " + checkedIcon}></i>
              {checkedLabel}
          </label>
          <label htmlFor={id} className={uncheckedClasses}>
            <i className={"fa " + uncheckedIcon}></i>
              {uncheckedLabel}
          </label>
        </div>
      </div>
    );
  }
}

export default Toggle;
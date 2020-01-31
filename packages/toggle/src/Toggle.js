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
	checkedLabel: string,
	checkedIcon?: string,
	checkedButtonClass?: string,
	uncheckedLabel: string,
	uncheckedIcon?: string,
	uncheckedButtonClass?: string,
  showLabels?: boolean,
  checked?: boolean,
  /** Qa id */
  qa?: string,
  onChange?: (e: Object) => void,
  onClick?: (e: Object) => void,
};


class Toggle extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.checked !== prevState.checked) {
      return {
        checked: nextProps.checked
      };
    }

    return null;
  }

	static defaultProps = {
  	id: 'toggle-normal',
    checked: false,
  	checkedLabel: '',
		checkedIcon: 'fa-bars',
		checkedButtonClass: '',
    showLabels: true,
		uncheckedLabel: '',
		uncheckedIcon: 'fa-close',
		uncheckedButtonClass: 'a-button--danger'
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
      showLabels,
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
	    (showLabels ? 'has-icon-left' : 'has-icon'), {
		    [`${checkedButtonClass}`]: checkedButtonClass,
		    [`${sizeBtnClasses[size]}`]: !!size
	    }
    );

	  const uncheckedClasses = classNames(
		  'a-toggle__off a-button',
		  (showLabels ? 'has-icon-left' : 'has-icon'), {
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
          aria-checked={this.state.checked}
          defaultChecked={this.state.checked}
          type="checkbox"
          role="switch"
          onChange={this.handleClick}
        />
        <div className="a-toggle__labels">
          <label htmlFor={id} className={checkedClasses}>
            <span className={"fa " + checkedIcon}></span>
              <span className={showLabels ? '' : 'u-screen-reader-only'}>{checkedLabel}</span>
          </label>
          <label htmlFor={id} className={uncheckedClasses}>
            <span className={"fa " + uncheckedIcon}></span>
              <span className={showLabels ? '' : 'u-screen-reader-only'}>{uncheckedLabel}</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Toggle;

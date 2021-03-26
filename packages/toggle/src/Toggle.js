import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../../icon/src/Icon';

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

	static defaultProps = {
  	id: 'toggle-normal',
    checked: false,
  	checkedLabel: '',
		checkedIcon: 'ai-navigation-menu',
		checkedButtonClass: '',
    showLabels: true,
		uncheckedLabel: '',
		uncheckedIcon: 'ai-close',
		uncheckedButtonClass: 'a-button--danger'
	}

  constructor(props) {
    super(props);
    this.state = {checked: props.checked || false};
  }

  componentDidUpdate(prevProps) {
    // check if checked changed
    if (this.props.checked !== prevProps.checked) {
      // check if state change is required
      if (this.props.checked !== this.state.checked) {
        // update state with new checked value
        this.setState({ checked: this.props.checked });
      }
    }
  }

  handleChange = e => {
    this.setState({checked: !this.state.checked});
    if (this.props.onChange && (typeof this.props.onChange === 'function')) {
      this.props.onChange(e);
    }
    if (this.props.onClick && (typeof this.props.onClick === 'function')) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      id,
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
      'a-toggle',
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
        <button
          className="a-toggle__button"
          id={id}
          aria-expanded={this.state.checked}
          onClick={this.handleChange}>
          <span className={checkedClasses}>
            <Icon name={checkedIcon} ariaLabel={showLabels ? '' : checkedLabel} />
            {showLabels && <span>{checkedLabel}</span>}
          </span>
          <span className={uncheckedClasses}>
            <Icon name={uncheckedIcon} ariaLabel={showLabels ? '' : uncheckedLabel} />
            {showLabels && <span>{uncheckedLabel}</span>}
          </span>
        </button>
      </div>
    );
  }
}

export default Toggle;

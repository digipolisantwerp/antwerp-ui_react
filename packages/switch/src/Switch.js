import React, {Component} from 'react';
import classNames from 'classnames';
import InputLabel from '../../form/src/InputLabel';

class Switch extends Component {
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

	onClick = (e) => {
		this.setState({checked: !this.state.checked});

		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}

	render() {
		const {
			id,
			label,
			name,
			labelTrue,
			labelFalse,
			required,
			disabled,
			qa,
		} = this.props;

		const containerClass = classNames(
			'a-input',
			{'is-required': !!required}
		);

		const switchWrapperClass = classNames(
			'a-switch',
			{'disabled': disabled}
		);

		return (
			<div className={containerClass} data-qa={qa}>
				{label && <InputLabel>{label}</InputLabel>}
				<div className={switchWrapperClass}>
					{labelFalse &&
						<label className="a-switch__label">{labelFalse}</label>
					}
					<div className="a-switch__toggle">
						<input
							type="checkbox"
							name={name}
							id={id}
							role="switch"
							aria-checked={this.state.checked}
							defaultChecked={this.state.checked}
							disabled={disabled}
							onChange={this.onClick}
						/>
						<label htmlFor={id}><span className="u-screen-reader-only">Toggle "{label}"</span></label>
					</div>
					{labelTrue &&
						<label className="a-switch__label">{labelTrue}</label>
					}
				</div>
			</div>
		)
	}
}

export default Switch;

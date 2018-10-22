import React, {Component} from 'react';
import classNames from 'classnames';
import InputLabel from '../../form/src/InputLabel';

class Switch extends Component {
	state = {
		checked: this.props.checked || false
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
			<div className={containerClass}>
				{label && <InputLabel htmlFor={id}>{label}</InputLabel>}
				<div className={switchWrapperClass}>
					<label className="a-switch__label">{labelFalse ? labelFalse : 'Nee'}</label>
					<div className="a-switch__toggle">
						<input
							type="checkbox"
							name={name}
							id={id}
							checked={this.state.checked}
							disabled={disabled}
							onClick={this.onClick}
						/>
						<label htmlFor={id}></label>
					</div>
					<label className="a-switch__label">{labelTrue ? labelTrue : 'Ja'}</label>
				</div>
			</div>
		)
	}
}

export default Switch;
import React from 'react';
import classNames from 'classnames';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    onChange(e) {
        const value = e.currentTarget.value;

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    onClick(e) {
        const value = e.currentTarget.value;
        this.setState({ checked: !this.state.checked });

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const {
            id,
            label,
            checked,
            required,
            disabled,
            onChange,
        } = this.props;

        const inputClass = classNames(
            'a-input',
            { 'is-required': !!required }
        );

        return (
            <div className={inputClass}>
                <div className="a-input">
                    <label className="a-input__label">{label}</label>
                    <div className="a-switch">
                        <label className="a-switch__label">Off</label>
                        <div className="a-switch__toggle">
                            <input type="checkbox"
                                   name="switch1" id={id}
                                   value={this.state.checked}
                                   defaultChecked={checked}
                                   disabled={disabled}
                                   onChange={(e) => this.onChange(e)}
                                   onClick={(e) => this.onClick(e)}
                            />
                            <label htmlFor={id}></label>
                        </div>
                        <label className="a-switch__label">On</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Switch;
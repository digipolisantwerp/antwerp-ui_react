import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

const Switch = ({
                      id,
                      label,
                      checked,
                      required,
                      onChange,
                  }) => {
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
                        <input type="checkbox" name="switch1" id={id}/>
                        <label for={id}></label>
                    </div>
                    <label className="a-switch__label">On</label>
                </div>
            </div>
        </div>
    )
}

export default Switch;
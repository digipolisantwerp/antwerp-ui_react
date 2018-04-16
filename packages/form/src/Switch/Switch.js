import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

const Switch = ({
                      id,
                      label,
                      value,
                      description,
                      required,
                      placeholder,
                      onChange,
                  }) => {
    const inputClass = classNames(
        'a-input',
        { 'is-required': !!required }
    );
    return (
        <div className={inputClass}>
            <div className="a-input">
                <Label className="a-input__label">{label}</Label>
                <div className="a-switch">
                    <Label className="a-switch__label">Off</Label>
                    <div className="a-switch__toggle">
                        <input type="checkbox" name={id} id={id} />
                            <Label></Label>
                    </div>
                    <Label className="a-switch__label">On</Label>
                </div>
            </div>
        </div>
    )
}

export default Switch;
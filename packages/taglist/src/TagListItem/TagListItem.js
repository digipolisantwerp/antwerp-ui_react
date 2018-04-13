import React, { Component } from 'react';

class TagListItem extends Component {
    render() {
        const {
            onClick,
            value,
            key
        } = this.props;

        return (
            <li key={key} className="m-tag">
                <span className="m-tag__label">{value}</span>
                <button
                    className="a-button-transparent a-button--small a-button--danger has-icon"
                    onClick={onClick}>
                    <i className="fa fa-close"></i>
                </button>
            </li>
        )
    }
}


export default TagListItem;
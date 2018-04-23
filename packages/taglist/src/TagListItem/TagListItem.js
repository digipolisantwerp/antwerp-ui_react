import React, { Component } from 'react';
import Button from '../../../button';

type Props = {
	/** The label to display. */
	value: string,
	/** Make the tag closable or not. */
	closable?: boolean,
	/** Add a custom icon like for example 'check'. */
	icon?: string,
	/** Add a custom buttonclass like for example 'success'. */
	buttonClass?: string,
	/** Add a custom function that gets triggered when the tag gets closes. */
	onClick?: void,
};

class TagListItem extends Component<Props> {
    render() {
        const {
            value,
            closable = false,
            icon = '',
            buttonClass = 'a-button--default',
					  onClick,

        } = this.props;

        return (
            <li className="m-tag">
                {icon &&
                    <Button className={'a-button a-button--small has-icon ' + (buttonClass && 'a-button--' + buttonClass)} icon={icon}></Button>
                }
                <span className="m-tag__label">{value}</span>
                {closable &&
                    <Button className="a-button-transparent a-button--small a-button--danger has-icon"
                            onClick={onClick}
                            icon="close">
                    </Button>
                }
            </li>
        )
    }
}

export default TagListItem;
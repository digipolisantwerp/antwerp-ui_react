import React from 'react';
import Button from '../../../button';

class TagListItem extends React.Component {
    render() {
        const {
            onClick,
            value,
            closable = false,
            icon = '', // vb. check
            buttonClass = 'a-button--default' // vb. success

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
// @flow
import React, { Component } from 'react';
import Button from '../../../button/src/Button';

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
  /**  AriaLabel for your icon. */
  ariaLabelIcon?: string,
  /** AriaLabel for your close button. Defaults to 'Sluiten'. */
  ariaLabelClose?: string
};

class TagListItem extends Component<Props> {
  render() {
    const {
      value,
      closable = false,
      icon = '',
      buttonClass = 'a-button--default',
      onClick,
      ariaLabelIcon,
      ariaLabelClose = 'Sluiten'
    } = this.props;

    return (
      <li className="m-tag">
        {icon &&
          <Button size="small" icon={icon} ariaLabel={ariaLabelIcon}></Button>
        }
        <span className="m-tag__label">{value}</span>
        {closable &&
          <Button transparent size="small" type="danger" icon="close" ariaLabel={ariaLabelClose} onClick={onClick} />
        }
      </li>
    )
  }
}

export default TagListItem;
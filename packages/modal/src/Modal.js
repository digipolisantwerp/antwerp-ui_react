// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../../button/src/Button';

const sizeClasses = {
    default: '',
    large: 'm-modal--large'
};

type ModalTypes = "success" | "warning" | "danger";

type ModalSizes = "large";

type Props = {
    /** Type of modal ("success" | "warning" | "danger") */
    type?: ModalTypes,
    /** Size of modal */
    size?: ModalSizes,
    /** Title of modal */
    title?: string,
    /** Modal body */
    children?: any,
    closable?: boolean,
    className?: string
};

class Modal extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            closing: true,
            closed: false
        };
    }

    handleClose(e) {
        e.preventDefault();
        console.log("Closing modal!");
    }

    render() {
        const {
            type,
            size,
            title,
            children,
            closable,
            className,
        } = this.props;

        const sizeClass = classNames(
            'm-modal',
            { [`${sizeClasses[size]}`]: !!size },
            className,
        );

        const closeButton = closable ? (
            <Button type={type} transparent icon="close" onClick={this.handleClose} className="m-modal__close">
            </Button>
          ) : null;

        return (
            <div class={sizeClass}>
                <div class="m-modal__content">
                    <div class="m-modal__header u-margin-bottom-xs">
                        {closeButton}
                        {title && <h6>{title}</h6>}
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}

export default Modal;

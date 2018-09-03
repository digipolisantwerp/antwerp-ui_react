// @flow
import React, { Component } from 'react';

type Props = {
    /** Modal body */
    children?: any,
};

class ModalBody extends Component<Props> {
    render() {
        return (
            <div class="u-margin-bottom">
                {children}
            </div>
        );
    }
}

export default ModalBody;

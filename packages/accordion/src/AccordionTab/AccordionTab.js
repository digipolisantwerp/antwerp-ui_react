// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.node,
  open?: boolean,
};

class AccordionTab extends React.Component<Props> {
  static defaultProps = {
    open: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.open,
    };
  }

  toggle() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        role="button"
        tabIndex="0"
        onKeyPress={() => this.toggle()}
        onClick={() => this.toggle()}
        className={classNames('m-accordion__tab', { 'is-open': isOpen })}
      >
        { children }
      </div>
    );
  }
}

export default AccordionTab;

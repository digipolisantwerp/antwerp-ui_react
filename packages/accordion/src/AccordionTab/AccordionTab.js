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

  state = {
    isOpen: this.props.open,
  };

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      this.setState({isOpen: this.props.open});
    }
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { children, qa } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        role="button"
        tabIndex="0"
        data-qa={qa}
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

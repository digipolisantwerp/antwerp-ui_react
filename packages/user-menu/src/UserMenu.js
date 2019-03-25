import React, { Component } from 'react';

import Avatar from '../../avatar/src/Avatar';
import Button from '../../button/src/Button';
import Flyout from '../../flyout/src/Flyout';

type Props = {
  children?: any,
  /** Login URL */
  loginUrl: string,
  /** Is the user logged in? */
  loggedIn: boolean,
  /** First name */
  firstName: string,
  /** Last name */
  lastName: string,
  /** Avatar URL */
  avatarUrl?: string,
  /** Logout URL */
  logoutUrl: string,
  /** Flyout size */
  flyoutSize: 'small' | 'medium' | 'large' | 'full',
  /** Direction */
  direction: 'left' | 'right',
}

class UserMenu extends Component<Props> {

  static defaultProps = {
    direction: 'right',
    flyoutSize: 'medium',
  }

  renderAvatar() {
    return (
      <Avatar
        image={this.props.avatarUrl}
        icon={this.props.avatarUrl ? null : 'user'}
        alt="avatar"
        width="48"
        height="48"
        style={{ marginLeft: '-24px', marginRight: '10px' }}
      />);
  }
  renderLoggedInButton() {
    const {
      firstName,
      lastName,
    } = this.props;
    return (
      <Button style={{paddingTop: 0, paddingBottom: 0}}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          {this.renderAvatar()}
          <p>{firstName} {lastName}</p>
        </div>
      </Button>
    );
  }

  renderProfile() {
    return (
      <div style={{
        paddingTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar
          image={this.props.avatarUrl}
          icon={this.props.avatarUrl ? null : 'user'}
          alt="avatar"
          width="48"
          height="48" />
        <h5 className="u-margin-top-xs u-margin-bottom">
          {`${this.props.firstName} ${this.props.lastName}`}
        </h5>
      </div>
    )
  }

  renderLoggedIn() {
    return (
      <Flyout
        trigger={this.renderLoggedInButton()}
        direction="right"
        hasPadding={true}
        size={this.props.flyoutSize}
        >
        <div>
          {this.renderProfile()}
          {this.props.children}
          <Button
            onClick={() => window.location.href=this.props.logoutUrl}
            block
            type="danger"
            iconLeft="power-off">
            Afmelden
          </Button>
        </div>
      </Flyout>
    );
  }

  renderLoggedOut() {
    return (<Button iconLeft="user">Aanmelden</Button>);
  }

  render() {
    return (
      <div style={{ textAlign: this.props.direction }}>
        {this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
      </div>
    );
  }
}

export default UserMenu;

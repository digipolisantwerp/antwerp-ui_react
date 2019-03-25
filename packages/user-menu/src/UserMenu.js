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
}

class UserMenu extends Component<Props> {
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
      <Button>
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
      <div style={{ textAlign: 'right'}}>
        <Flyout
          trigger={this.renderLoggedInButton()}
          direction="right"
          hasPadding={true}
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
      </div>
    )
  }

  renderLoggedOut() {
    return (
      <div style={{ textAlign: 'right' }}>
        <Button iconLeft="user">Aanmelden</Button>
      </div>);
  }

  render() {
    return (this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut());
  }
}

export default UserMenu;

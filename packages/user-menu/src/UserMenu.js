import React, { Component } from 'react';

import Avatar from '../../avatar/src/Avatar';
import Button from '../../button/src/Button';
import Flyout from '../../flyout/src/Flyout';
import UserNavigation from './UserNavigation';

type Props = {
  children?: any,
  /** Login URL */
  loginUrl?: string,
  /** Is the user logged in? */
  loggedIn?: boolean,
  /** User object */
  user: {
    firstName: string,
    lastName: string,
    avatarUrl: string
  },
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
    flyoutSize: 'small',
  }

  renderAvatar() {
    const { avatarUrl } = this.props.user;
    return (
      <Avatar
        image={avatarUrl}
        icon={avatarUrl ? null : 'user'}
        alt="avatar"
        width="48"
        height="48"
        style={{ marginLeft: '-1.5rem', marginRight: '1.5rem' }}
      />);
  }
  renderLoggedInButton() {
    const {
      firstName,
      lastName,
    } = this.props.user;
    return (
      <Button style={{ paddingTop: 0, paddingBottom: 0 }}>
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
    const { firstName, lastName, avatarUrl } = this.props.user;
    return (
      <div style={{
        paddingTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar
          image={avatarUrl}
          icon={avatarUrl ? null : 'user'}
          alt="avatar"
          width="48"
          height="48"
        />
        <p className="u-margin-top-xs u-margin-bottom h5">
          {`${firstName} ${lastName}`}
        </p>
      </div>
    );
  }

  renderLoggedIn() {
    const { children, flyoutSize, logoutUrl } = this.props;

    return (
      <Flyout
        trigger={this.renderLoggedInButton()}
        direction="right"
        hasPadding={false}
        size={flyoutSize}>
        <div>
          {this.renderProfile()}
          <UserNavigation children={children} />
          <Button
            onClick={() => window.location.href = logoutUrl}
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
    const { loginUrl } = this.props;
    return (<Button onClick={() => window.location.href = loginUrl} iconLeft="user">Aanmelden</Button>);
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

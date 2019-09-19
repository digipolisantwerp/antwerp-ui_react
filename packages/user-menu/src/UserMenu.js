import React, { Component } from 'react';

import Avatar from '../../avatar/src/Avatar';
import Button from '../../button/src/Button';
import Flyout from '../../flyout/src/Flyout';
import UserNavigation from './UserNavigation';
import { notificationsUrl } from './UserNavigation/UserNavigationUrls';
import './UserMenu.scss';

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
	/** Amount of notifications */
	notificationsCount: string,
  /** Flyout size */
  flyoutSize: 'small' | 'medium' | 'large' | 'full',
  /** Direction */
  direction: 'left' | 'right'
}

class UserMenu extends Component<Props> {
  static defaultProps = {
    direction: 'right',
    flyoutSize: 'small',
    notificationsCount: 0
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

  renderBadge() {
    const { notificationsCount } = this.props;
    return (
      <a className="badge inner-badge"
         href={notificationsUrl()}>
        {notificationsCount}
        <span className="u-screen-reader-only" data-translate="">notificaties</span>
      </a>
    )
  }

  renderLoggedInButton() {
    const {
      firstName,
      lastName,
    } = this.props.user;
    return (
      <Button className="btn-user-flyout" title="Hier krijgt u toegang tot uw A-profiel en uw persoonlijke instellingen.">
        <div className="a-avatar-wrapper">
          {this.renderAvatar()}
          <p>{firstName} {lastName}</p>
        </div>
      </Button>
    );
  }

  renderProfile() {
    const { firstName, lastName, avatarUrl } = this.props.user;
    return (
      <div className="avatar-wrapper">
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
    const { children, flyoutSize, logoutUrl, notificationsCount } = this.props;

    return (
      <div id="astad-user-menu">
        {notificationsCount > 0 &&
          this.renderBadge()
        }
        <Flyout
          trigger={this.renderLoggedInButton()}
          direction="right"
          hasPadding={false}
          size={flyoutSize}>
          <div>
            {this.renderProfile()}
            <UserNavigation notificationsCount={notificationsCount} children={children} />
            <Button
              className="btn-logout"
              onClick={() => window.location.href = logoutUrl}
              block
              type="danger"
              alt="Klik hier om u af te melden."
              iconLeft="power-off"
              ariaLabel="Afmelden">
              Afmelden
            </Button>
          </div>
        </Flyout>
      </div>
    );
  }

  renderLoggedOut() {
    const { loginUrl } = this.props;
    return (
      <Button
        className="btn-login"
        title="Aanmelden"
        ariaLabel="Aanmelden"
        alt="Klik hier om u aan te melden met uw A-profiel."
        onClick={() => window.location.href = loginUrl}
        iconLeft="user">Aanmelden</Button>
    );
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

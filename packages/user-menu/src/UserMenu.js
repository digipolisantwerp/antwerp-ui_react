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
  direction: 'left' | 'right',
  /** ARIA string to login, defaults to 'Aanmelden' */
  ariaLogin: string,
  /** ARIA string to logout, defaults to 'Afmelden' */
  ariaLogout: string,
  /** Qa id */
  qa?: string,
}

class UserMenu extends Component<Props> {
  static defaultProps = {
    direction: 'right',
    flyoutSize: 'small',
    notificationsCount: 0,
    ariaLogin: 'Aanmelden',
    ariaLogout: 'Afmelden'
  }

  onLogin() {
    const { loginUrl, onClickLogin } = this.props;
    if (onClickLogin) {
      return onClickLogin();
    }

    window.location.href = loginUrl;
  }

  onLogout() {
    const { logoutUrl, onClickLogout } = this.props;
    if (onClickLogout) {
      return onClickLogout();
    }

    window.location.href = logoutUrl;
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
      <a
        className="a-badge a-badge--warning"
        href={notificationsUrl()}>
        {notificationsCount}<span className="u-screen-reader-only" data-translate=""> notificaties</span>
      </a>
    )
  }

  renderLoggedInButton() {
    const {
      firstName,
      lastName,
    } = this.props.user;
    return (
      <Button className="a-button-negative a-button__avatar o-header__button">
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
      <div className="u-text-center u-margin-top">
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
    const { children, flyoutSize, notificationsCount, ariaLogout } = this.props;

    return (
      <div className="m-user-menu-flyout">
        {notificationsCount > 0 &&
          this.renderBadge()
        }
        <Flyout
          trigger={this.renderLoggedInButton()}
          direction="right"
          hasPadding={false}
          size={flyoutSize}>
          <div className="u-margin">
            {this.renderProfile()}
            <UserNavigation notificationsCount={notificationsCount} children={children} />
            <Button
              className="u-margin-top"
              onClick={(e) => this.onLogout()}
              block
              type="danger"
              iconLeft="power-off">
              {ariaLogout}
            </Button>
          </div>
        </Flyout>
      </div>
    );
  }

  renderLoggedOut() {
    const { children, flyoutSize, notificationsCount, ariaLogin } = this.props;

    return (
      <Button
        className="a-button-negative o-header__button"
        onClick={(e) => this.onLogin()}
        iconLeft="user">{ariaLogin}</Button>
    );
  }

  render() {
    const { qa } = this.props;

    return (
      <div style={{ textAlign: this.props.direction }} data-qa={qa}>
        {this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
      </div>
    );
  }
}

export default UserMenu;


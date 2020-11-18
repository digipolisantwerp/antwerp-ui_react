```
 <UserMenu
  loggedIn={false}
  onClickLogin={() => console.log('Custom login function')}
  logoutUrl="/auth/logout/aprofiel"
  ariaLogin="Login"
  ariaLogout="Logout">
</UserMenu>

<br/>

<UserMenu
  user={{
    firstName:'John',
    lastName:'Doe',
    avatarUrl:'https://gravatar.com/avatar/66f865ee03bc019d2f06af6ec0c434ce?s=200'}}
  loggedIn={true}
  notificationsCount="123"
  logoutUrl="/auth/logout/aprofiel"
  flyoutSize="medium"
  ariaLogin="Login"
  ariaLogout="Logout">
    <li><a href="/" title="Custom menu item">Custom menu item</a></li>
</UserMenu>
```

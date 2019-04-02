```
 <UserMenu
  loggedIn={false}
  logoutUrl="/auth/logout/aprofiel">
</UserMenu>

<br/>

<UserMenu
  user={{
    firstName:'John',
    lastName:'Doe',
    avatarUrl:'https://gravatar.com/avatar/66f865ee03bc019d2f06af6ec0c434ce?s=200'}}
  loggedIn={true}
  logoutUrl="/auth/logout/aprofiel"
  flyoutSize="medium">
  <ul className="m-nav-list m-nav-list--left">
    <li><a href="/" title="Notificaties">Notificaties</a></li>
    <li><a href="/" title="A-profiel beheren">A-profiel beheren</a></li>
    <li><a href="/" title="Favorieten">Favorieten</a></li>
    <li><a href="/" title="Koppelingen">Koppelingen</a></li>
  </ul>
</UserMenu>
```
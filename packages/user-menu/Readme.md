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
    <li><a href="/" title="Custom menu item">Custom menu item</a></li>
</UserMenu>
```
This component uses [react-modal](http://reactcommunity.org/react-modal) internally, props configurable on this external component are passed on from this component.

```js
 <Modal
  appElement="#rsg-root"
  ariaCloseLabel="Close modal"
  confirmText="Yes"
  denyText="No"
  title="Do you agree?"
  shouldCloseOnEsc={true}
  shouldCloseOnOverlayClick={true}
  triggerText="Modal demo"
  onRequestClose={() => console.log("modal should close")}
>
  <p className="u-padding u-margin-bottom">This is the modal content.</p>
</Modal>
```

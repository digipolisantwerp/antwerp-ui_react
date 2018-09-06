# Modal

## Usage

```js
import { Modal, ModalBody, ModalFooter, Button } from '@acpaas-ui/react-components';

<Modal
  closable={true}
  closeModal={() => console.log('Close modal')}
  onSubmit={() => console.log('Submitted')}
  show={true}
  size="large"
  title="Modal Title"
  type="success"
>
  <ModalBody>
    <p>Lorem ipsum...</p>
  </ModalBody>
  <ModalFooter>
    <Button type="success">Toevoegen</Button>
    <Button type="danger" outline>Annuleren</Button>
  </ModalFooter>
</Modal>
```
---

## Props

```js
closable: Boolean // (optional) Show or hide the close button
closeModal: Function // (required) Function that gets executed when you click the close button
onSubmit: Function // (required) The function that needs to be executed when submitting the modal
show: Boolean // (optional) Hide or show the modal
size: String // (optional) Only 2 sizes at the moment, namely: default AND large
title: String // (optional) Modal title
type: String // (optional) Defaults to a grey close button, else the correct color gets applied accordingly to the type
```

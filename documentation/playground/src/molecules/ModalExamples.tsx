import { Button, Modal } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function ModalExamples() {
  const [closedCount, setClosedCount] = useState(0);
  const [openCount, setOpenCount] = useState(0);

  const [controlledOpen, setControlledOpen] = useState(false);
  const [title, setTitle] = useState('');
  return (
    <>
      <h1>Modals</h1>
      <Button theme="danger" onClick={() => setControlledOpen(true)}>
        CONTROLLED MODAL TRIGGER
      </Button>
      <Modal
        onClose={() => setControlledOpen(false)}
        onCancel={() => setControlledOpen(false)}
        onConfirm={() => setTitle('GEBRUIK ANNULEREN OM AF TE SLUITEN')}
        open={controlledOpen}
        appRootId="aui-react-playground"
        title={title}
      >
        <div>This is a controlled modal.</div>
      </Modal>
      <p></p>
      <Modal
        onClose={() => setClosedCount(closedCount + 1)}
        onAfterOpen={() => setOpenCount(openCount + 1)}
        title="Hello world!"
        trigger={<Button>UNCONTROLLED MODAL TRIGGER</Button>}
        appRootId="aui-react-playground"
      >
        <div>This modal is uncontrolled.</div>
      </Modal>
      <p>Modal has been opened "{openCount}" times.</p>
      <p>Modal has been closed "{closedCount}" times.</p>
    </>
  );
}

export default ModalExamples;

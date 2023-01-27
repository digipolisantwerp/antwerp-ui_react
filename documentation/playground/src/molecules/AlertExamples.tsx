import { Alert } from '@acpaas-ui/react-components';

export function AlertExamples() {
  const doNothing = () => {
    return true;
  };
  return (
    <div className="u-margin-bottom">
      <h2>Alert</h2>
      <div className="u-margin">
        <Alert title="Modal alert default" modal>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Alert>
      </div>
      <div className="u-margin">
        <Alert title="Modal alert success" modal theme="success" onConfirm={doNothing} onCancel={doNothing}>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Alert>
      </div>
      <div className="u-margin">
        <Alert
          title="Modal alert warning"
          modal
          theme="warning"
          confirmLabel="Ok"
          cancelLabel="Annuleren"
          onConfirm={doNothing}
          onCancel={doNothing}
        >
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Alert>
      </div>
      <div className="u-margin">
        <Alert title="Modal alert danger" modal theme="danger">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Alert>
      </div>
      <div className="u-margin">
        <Alert title="Inline alert">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Alert>
      </div>
    </div>
  );
}

export default AlertExamples;

import { Alert } from './Alert';
import jest from 'jest-mock';
import { render, screen, fireEvent } from '@testing-library/react';

const doNothing = () => true;

describe.only('UI Components - Molecules - Alert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert />);
    expect(baseElement).toBeTruthy();
  });

  it.only('should render a default modal alert with buttons', () => {
    const { baseElement } = render(
      <Alert
        title="Modal alert default"
        modal
        ariaLabelClose="close icon"
        onConfirm={doNothing}
        confirmLabel="Got it"
        onCancel={doNothing}
        cancelLabel="Cancel"
      >
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(screen.getByRole('alertdialog')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__close')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__actions')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__actions')[0].children[0].tagName).toEqual('BUTTON');
    expect(baseElement.getElementsByClassName('m-alert__actions')[0].children[1].tagName).toEqual('BUTTON');
  });

  it('should not render actions if their functions are not provided', () => {
    const { baseElement } = render(
      <Alert title="Modal alert default" modal ariaLabelClose="close icon" confirmLabel="Got it" cancelLabel="Cancel">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(baseElement.getElementsByClassName('m-alert__actions')[0].children.length).toEqual(0);
  });

  it('should trigger onClose when modal is closed', () => {
    const onClose = jest.fn();
    const { baseElement } = render(
      <Alert title="Modal alert default" modal ariaLabelClose="close icon" onClose={onClose}>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    const closeButton = baseElement.getElementsByClassName('m-alert__close')[0];
    fireEvent.click(closeButton);
    expect(screen.getByRole('alertdialog')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__close')[0]).toBeTruthy();
    expect(onClose).toHaveBeenCalled();
  });

  it('should render a success modal', () => {
    const { baseElement } = render(
      <Alert title="Modal alert default" modal theme="success" ariaLabelClose="close icon">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(screen.getByRole('alertdialog')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__close')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert--success')[0]).toBeTruthy();
  });

  it('should render a default inline modal with correct title ', () => {
    render(
      <Alert title="Modal alert default">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText('Modal alert default')).toBeTruthy();
  });

  it('should render a warning inline modal with correct title ', () => {
    const { baseElement } = render(
      <Alert title="Modal alert default" theme="warning">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText('Modal alert default')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert--warning')[0]).toBeTruthy();
  });

  it('should trigger onCancel/onConfirm when buttons are clicked', () => {
    const onConfirmMock = jest.fn();
    const onCancelMock = jest.fn();

    const { baseElement } = render(
      <Alert
        title="Modal alert default"
        modal
        ariaLabelClose="close icon"
        onConfirm={onConfirmMock}
        onCancel={onCancelMock}
      >
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    const confirmButton = baseElement.getElementsByClassName('a-button')[1];
    const cancelButton = baseElement.getElementsByClassName('a-button')[2];
    fireEvent.click(confirmButton);
    fireEvent.click(cancelButton);
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });
});

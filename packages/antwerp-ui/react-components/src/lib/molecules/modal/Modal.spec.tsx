import { fireEvent, render } from '@testing-library/react';
import jest from 'jest-mock';
import { act } from 'react-dom/test-utils';
import { Modal } from './Modal';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Modal appRootId="root">
        <p>test</p>
      </Modal>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should set aria-hidden on the app element when open', () => {
    const fakeAppElement = document.createElement('div');
    jest.spyOn(document, 'getElementById').mockImplementation(() => fakeAppElement);
    render(
      <Modal open appRootId="root">
        <p>test</p>
      </Modal>
    );
    expect(fakeAppElement.getAttribute('aria-hidden')).toBe('true');
  });

  it('should open modal on trigger click', () => {
    const { baseElement, getByText } = render(
      <Modal trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    const trigger = getByText('Open');
    fireEvent.click(trigger);
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
  });

  it('should close modal on close click and invoke onClose', async () => {
    const closeMock = jest.fn();
    const { baseElement, getByText } = render(
      <Modal appRootId="root" trigger={<p>Open</p>} onClose={closeMock}>
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    await act(async () => fireEvent.click(baseElement.getElementsByClassName('m-modal__close')[0]));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(0);
    expect(closeMock).toBeCalledTimes(1);
  });

  it('should close modal on confirm click', async () => {
    const mockConfirm = jest.fn();
    const { baseElement, getByText } = render(
      <Modal onConfirm={mockConfirm} trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
    await act(async () => fireEvent.click(getByText('Bevestigen')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(0);
    expect(mockConfirm).toBeCalledTimes(1);
  });

  it('should close modal on cancel click', async () => {
    const mockCancel = jest.fn();
    const { baseElement, getByText } = render(
      <Modal onCancel={mockCancel} trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
    await act(async () => fireEvent.click(getByText('Annuleren')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(0);
    expect(mockCancel).toBeCalledTimes(1);
  });

  it('should close modal if onCancel is not defined', async () => {
    const { baseElement, getByText } = render(
      <Modal trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
    await act(async () => fireEvent.click(getByText('Annuleren')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(0);
  });

  it('should not show the footer/header', () => {
    const { baseElement } = render(
      <Modal showCancel={false} closeButton={false} showConfirm={false} open appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    expect(baseElement.getElementsByClassName('m-modal__footer').length).toBe(0);
    expect(baseElement.getElementsByClassName('m-modal__header').length).toBe(0);
  });

  it('should show title', () => {
    const { getByText } = render(
      <Modal appRootId="root" open title="Title">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    expect(getByText('Title')).toBeTruthy();
  });

  it('should be controlled', async () => {
    const { baseElement, getByText } = render(
      <Modal open trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
    await act(async () => fireEvent.click(getByText('Annuleren')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
  });
});

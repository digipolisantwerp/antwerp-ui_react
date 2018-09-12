import React from 'react';
import ReactModal from 'react-modal';
import { shallow, mount } from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  test('Modal renders title correctly', () => {
    const title = 'Do you agree?';

    const component = shallow(<Modal title={title} isOpen ariaHideApp={false} />);

    expect(component.find('.m-modal__header h6').text()).toEqual(title);
  });

  test('Modal renders close-button correctly', () => {
    const component = shallow(<Modal isOpen ariaHideApp={false} />);

    expect(component.find('.m-modal__header .m-modal__close').exists()).toEqual(true);
  });

  test('Modal doesn\'t render header when there is no title and close-button', () => {
    const component = mount(<Modal hasCloseButton={false} isOpen ariaHideApp={false} />);

    expect(component.find('.m-modal__header').exists()).toEqual(false);
  });

  test('Modal renders passed children correctly', () => {
    const component = mount(
      <Modal isOpen ariaHideApp={false}>
        <p>This is the modal content.</p>
      </Modal>,
    );
    expect(component.find(ReactModal).html().indexOf('<p>This is the modal content.</p>')).toBeGreaterThan(-1);
  });

  test('Modal renders confirm-button correctly', () => {
    const confirmText = 'Okay';

    const component = mount(<Modal confirmText={confirmText} isOpen ariaHideApp={false} />);

    expect(component.find('.m-modal__confirm').exists()).toEqual(true);
    expect(component.find('.m-modal__confirm').first().text()).toEqual(confirmText);
  });

  test('Modal renders deny-button correctly', () => {
    const denyText = 'Not okay';

    const component = mount(<Modal denyText={denyText} isOpen ariaHideApp={false} />);

    expect(component.find('.m-modal__deny').exists()).toEqual(true);
    expect(component.find('.m-modal__deny').first().text()).toEqual(denyText);
  });

  test('Modal should be able to be rendered as "open" in initial state', () => {
    const component = mount(<Modal openOnInit isOpen ariaHideApp={false} />);

    expect(component.state('showModal')).toEqual(true);
  });

  test('Modal correctly passes on props to react-modal-component', () => {
    const contentLabel = 'Lorem ipsum';

    const component = mount(<Modal contentLabel={contentLabel} isOpen ariaHideApp={false} />);

    expect(component.find(ReactModal).prop('contentLabel')).toEqual(contentLabel);
  });
});

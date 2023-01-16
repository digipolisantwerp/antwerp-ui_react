import '@testing-library/jest-dom/extend-expect';
import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';

import { Datepicker } from './Datepicker';
import moment from 'moment';

describe('Datepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Datepicker isOpen />);
    expect(baseElement).toBeTruthy();
  });

  it('should render correct view when user is clicking on the header', () => {
    const { baseElement } = render(<Datepicker isOpen />);
    expect(baseElement.getElementsByClassName('m-datepicker__grid').length).toBe(1);

    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    expect(baseElement.getElementsByClassName('m-datepicker__grid').length).toBe(0);
    expect(baseElement.getElementsByClassName('m-datepicker__list').length).toBe(1);

    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    expect(baseElement.getElementsByClassName('m-datepicker__grid').length).toBe(0);
    expect(baseElement.getElementsByClassName('m-datepicker__list').length).toBe(1);

    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    expect(baseElement.getElementsByClassName('m-datepicker__grid').length).toBe(1);
    expect(baseElement.getElementsByClassName('m-datepicker__list').length).toBe(0);
  });

  it('should handle user selecting day in days view', () => {
    const changeMock = jest.fn();
    const { getByRole, getByText } = render(<Datepicker isOpen onChange={changeMock} />);
    expect(getByText('10')).toBeInTheDocument();
    fireEvent.click(getByText('10'));
    expect(getByRole('button', { pressed: true })).toBeInTheDocument();
    expect(changeMock).toBeCalledTimes(1);
  });

  it('should handle user selecting month in months view', () => {
    const changeMock = jest.fn();
    const { baseElement, getByText } = render(<Datepicker isOpen onChange={changeMock} />);

    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    fireEvent.click(getByText('February'));
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText(`February ${moment().year()}`)).toBeInTheDocument();
  });

  it('should handle user selecting year in years view', () => {
    const changeMock = jest.fn();
    const { baseElement, getByText } = render(
      <Datepicker isOpen value={new Date('2023-01-05').toISOString()} onChange={changeMock} />
    );

    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    expect(getByText('2016 - 2033')).toBeInTheDocument();
    fireEvent.click(getByText('2024'));
    expect(baseElement.getElementsByClassName('m-datepicker__nav-title')[0].textContent).toBe('2024');
  });

  it('should change to previous month in days view on previous click', () => {
    const { baseElement, getByText } = render(<Datepicker isOpen value={new Date('2023-02-05').toISOString()} />);
    const prevNavButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0].firstChild;
    expect(prevNavButton).toBeInTheDocument();
    expect(getByText('February 2023')).toBeInTheDocument();
    fireEvent.click(prevNavButton as ChildNode);
    expect(getByText('January 2023')).toBeInTheDocument();
    fireEvent.click(prevNavButton as ChildNode);
    expect(getByText('December 2022')).toBeInTheDocument();
  });

  it('should change to next month in days view on previous click', () => {
    const { baseElement, getByText } = render(<Datepicker isOpen value={new Date('2023-12-05').toISOString()} />);
    const nextNavButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0].lastChild;
    expect(nextNavButton).toBeInTheDocument();
    expect(getByText('December 2023')).toBeInTheDocument();
    fireEvent.click(nextNavButton as ChildNode);
    expect(getByText('January 2024')).toBeInTheDocument();
    fireEvent.click(nextNavButton as ChildNode);
    expect(getByText('February 2024')).toBeInTheDocument();
  });

  it('should change to previous year in months view on previous click', () => {
    const { baseElement, getByText } = render(<Datepicker isOpen value={new Date('2023-02-05').toISOString()} />);
    const prevNavButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0].firstChild;
    expect(prevNavButton).toBeInTheDocument();
    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    expect(getByText('2023')).toBeInTheDocument();
    fireEvent.click(prevNavButton as ChildNode);
    expect(getByText('2022')).toBeInTheDocument();
    fireEvent.click(prevNavButton as ChildNode);
    expect(getByText('2021')).toBeInTheDocument();
  });

  it('should change to next year in months view on previous click', () => {
    const { baseElement, getByText } = render(<Datepicker isOpen value={new Date('2023-12-05').toISOString()} />);
    const nextNavButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0].lastChild;
    expect(nextNavButton).toBeInTheDocument();
    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    expect(getByText('2023')).toBeInTheDocument();
    fireEvent.click(nextNavButton as ChildNode);
    expect(getByText('2024')).toBeInTheDocument();
    fireEvent.click(nextNavButton as ChildNode);
    expect(getByText('2025')).toBeInTheDocument();
  });

  it('should change to previous years range in years view on previous click', () => {
    const { baseElement, getByText } = render(<Datepicker isOpen value={new Date('2023-02-05').toISOString()} />);
    const prevNavButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0].firstChild;
    expect(prevNavButton).toBeInTheDocument();
    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    expect(getByText('2016 - 2033')).toBeInTheDocument();
    fireEvent.click(prevNavButton as ChildNode);
    expect(getByText('1998 - 2015')).toBeInTheDocument();
  });

  it('should change to next year in months view on previous click', () => {
    const { baseElement, getByText } = render(<Datepicker isOpen value={new Date('2023-12-05').toISOString()} />);
    const nextNavButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0].lastChild;
    expect(nextNavButton).toBeInTheDocument();
    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    fireEvent.click(baseElement.getElementsByClassName('m-datepicker__nav-title')[0]);
    expect(getByText('2016 - 2033')).toBeInTheDocument();
    fireEvent.click(nextNavButton as ChildNode);
    expect(getByText('2034 - 2051')).toBeInTheDocument();
  });
});

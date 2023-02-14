/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { TextField } from '../../atoms/input';
import { FunctionalList, ListItem } from '../../atoms/list';
import { Flyout } from '../flyout';
import { AutocompleteProps } from './Autocomplete.types';

export function Autocomplete({
  label,
  items,
  name,
  inputValue,
  value,
  onInputChange,
  onChange,
  noResultsText,
  qa
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(inputValue || '');
  const [selected, setSelected] = useState(value || '');
  const fieldValue = inputValue || inputValue === '' ? inputValue : input;
  const selectedValue = value || value === '' ? value : selected;

  useEffect(() => {
    if (value) {
      selectValue(value, true);
    }
  }, [value]);

  // const [focusList, setFocusList] = React.useState(false);
  // const [cursor, setCursor] = React.useState(0);

  const handleStateChange = (state: boolean) => {
    setIsOpen(state);
  };

  const handleInput = (val: string) => {
    setInput(val);
    setIsOpen(true);
    if (selectedValue && !val) {
      setSelected('');
      onChange && onChange('', name);
    }
    onInputChange && onInputChange(val, name);
  };

  const selectValue = (val: string, silence = false) => {
    if (value !== '' && (!value || value === val)) {
      const actualValue = items?.find((i) => i.value === val);
      handleInput(actualValue?.label || '');
      setSelected(actualValue?.value || '');
      setIsOpen(false);
    }
    !silence && onChange && onChange(val, name);
  };

  const setValueBack = () => {
    const actualValue = items?.find((i) => i.value === selectedValue);
    if (actualValue && fieldValue?.length && actualValue.label !== fieldValue) {
      handleInput(actualValue.label);
    }
  };

  // const toggleOpen = () => {
  //   setIsOpen(!isOpen);
  //   setFocusList(false);
  // };
  // const processKeyEvent = (e: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>, v: number) => {
  //   e.preventDefault();
  //   setFocusList(true);
  //   setCursor(v);
  // };
  // const handleKeyPress = (e: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>) => {
  //   if ((e.key === 'ArrowDown' && !focusList) || e.key === 'Home') {
  //     processKeyEvent(e, 0);
  //   } else if (e.key === 'ArrowDown' && cursor < results.length - 1) {
  //     processKeyEvent(e, cursor + 1);
  //   } else if (e.key === 'ArrowUp' && cursor > 0) {
  //     processKeyEvent(e, cursor - 1);
  //   } else if (e.key === 'End') {
  //     processKeyEvent(e, results.length - 1);
  //   } else if (e.key === 'Enter' && isOpen && focusList) {
  //     e.preventDefault();
  //     setFocusList(false);
  //     setIsOpen(false);
  //     handleChange(e);
  //   } else if ((e.key === 'Enter' && !isOpen) || e.key === 'Backspace') {
  //     setIsOpen(true);
  //   } else if (e.key === 'Esc' || e.key === 'Escape') {
  //     e.preventDefault();
  //     setIsOpen(false);
  //   }
  // };

  const results = (items || []).filter((i) =>
    fieldValue ? i.label?.toLowerCase().includes(fieldValue.toLowerCase()) : true
  );

  return (
    <Flyout
      scrollable
      hasPadding={false}
      trigger={
        <TextField
          name={name}
          label={label}
          onBlur={setValueBack}
          value={fieldValue}
          onChange={(e) => handleInput(e.target.value)}
          data-qa={qa}
          aria-autocomplete="list"
          aria-haspopup="true"
        />
      }
      open={isOpen}
      onStateChange={handleStateChange}
    >
      {results && results.length ? (
        <FunctionalList lined onItemClick={selectValue}>
          {results.map((r) => (
            <ListItem
              onMouseDown={(e) => e.preventDefault()}
              active={r.value === selectedValue}
              name={r.value}
              link={{ href: '' }}
              key={r.value}
            >
              {r.label}
            </ListItem>
          ))}
        </FunctionalList>
      ) : (
        <FunctionalList lined>
          <ListItem>
            <small>{noResultsText}</small>
          </ListItem>
        </FunctionalList>
      )}
    </Flyout>
  );
}

Autocomplete.defaultProps = {
  noResultsText: 'Geen resultaten'
};

export default Autocomplete;

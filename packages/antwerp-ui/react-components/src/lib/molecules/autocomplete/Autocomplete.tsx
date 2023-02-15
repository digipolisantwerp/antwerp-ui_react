/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { TextField } from '../../atoms/input';
import { FunctionalList, ListItem } from '../../atoms/list';
import { Flyout } from '../flyout';
import { AutocompleteProps } from './Autocomplete.types';
import './Autocomplete.css';

export function Autocomplete({
  id,
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
  const [results, setResults] = useState(items);
  const [input, setInput] = useState(inputValue || '');
  const [selected, setSelected] = useState(value || '');
  const [cursor, setCursor] = useState(-1);

  const fieldValue = inputValue || inputValue === '' ? inputValue : input;
  const selectedValue = value || value === '' ? value : selected;

  const flyoutRef = React.useRef(null);

  useEffect(() => {
    if (value) {
      selectValue(value, true);
    }
  }, [value]);

  useEffect(() => {
    setResults(
      (items || []).filter((i) => (fieldValue ? i.label?.toLowerCase().includes(fieldValue.toLowerCase()) : true))
    );
  }, [fieldValue]);

  useEffect(() => {
    if (flyoutRef.current) {
      const current = flyoutRef.current as HTMLDivElement;
      const highlighted = current.querySelector(`.a-list__item:nth-child(${cursor + 1})`);
      highlighted?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }, [cursor]);

  const handleStateChange = (state: boolean) => {
    setIsOpen(state);
  };

  const closeFlyout = () => {
    setIsOpen(false);
    setCursor(-1);
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
      closeFlyout();
    }
    !silence && onChange && onChange(val, name);
  };

  const setValueBack = () => {
    const actualValue = items?.find((i) => i.value === selectedValue);
    if (actualValue && fieldValue?.length && actualValue.label !== fieldValue) {
      handleInput(actualValue.label);
    }
    closeFlyout();
  };

  const onEnter = () => {
    const highlighted = results && results[cursor];
    if (highlighted) {
      selectValue(highlighted.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const totalResults = results?.length || 0;
    switch (e.key) {
      case 'ArrowDown':
        setCursor(cursor === -1 ? 0 : (cursor + 1) % totalResults);
        return setIsOpen(true);
      case 'ArrowUp':
        setCursor(cursor === -1 ? totalResults - 1 : cursor - 1 < 0 ? totalResults - 1 : cursor - 1);
        return setIsOpen(true);
      case 'Enter':
        return onEnter();
      case 'Escape':
        return closeFlyout();
      default:
        break;
    }
  };

  return (
    <Flyout
      scrollable
      hasPadding={false}
      qa={qa}
      trigger={
        <TextField
          id={id}
          name={name}
          label={label}
          onBlur={setValueBack}
          value={fieldValue}
          onChange={(e) => handleInput(e.target.value)}
          aria-autocomplete="list"
          aria-haspopup="true"
          onKeyDown={handleKeyDown}
        />
      }
      ref={flyoutRef}
      open={isOpen}
      onStateChange={handleStateChange}
    >
      {results && results.length ? (
        <FunctionalList lined onItemClick={selectValue}>
          {results.map((r, i) => (
            <ListItem
              tabIndex={-1}
              highlighted={i === cursor}
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
  id: 'aui-autocomplete',
  noResultsText: 'Geen resultaten'
};

export default Autocomplete;

export interface AutocompleteProps {
  label?: string;
  items?: { value: string; label: string }[];
  name?: string;
  inputValue?: string;
  value?: string;
  noResultsText?: string;
  qa?: string;
  onChange?: (value: string, name?: string) => void;
  onInputChange?: (value: string, name?: string) => void;
}

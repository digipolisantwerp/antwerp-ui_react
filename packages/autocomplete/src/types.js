export type Item = { label: string; value: string };

export interface ISelectionMode {
  select(item: Item): void;

  unselect(item: Item): void;

  getSelection(): Array<Item>;

  handleDefaultValue(defaultValue: string): void;
}

export interface ISearchMode {

  initialize(): void;

  search(value: string): Promise<Array<Item>>;

  reset(): void;
}

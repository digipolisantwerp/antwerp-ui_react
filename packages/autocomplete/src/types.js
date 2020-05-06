export type Item = { label: string; value: string };

export interface ISelectionMode {
  select(item: Item): void;

  unselect(item: Item): void;

  getSelection(): Array<Item>;
}

export interface ISearchMode {
  search(value: string): Promise<Array<Item>>;

  reset(): void;
}

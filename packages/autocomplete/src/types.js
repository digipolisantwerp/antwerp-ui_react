export type Item = { label: string; value: string };

export interface ISelectionMode {
  select(item: Item): void;

  unselect(item: Item): void;
}

export interface ISearchMode {
  search(value: string): Promise<Array<Item>>;

  reset(): void;
}

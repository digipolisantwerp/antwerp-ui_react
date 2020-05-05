export type Item = { label: string; value: string };

export interface IMode {
  select(item: Item): void;

  unselect(item: Item): void;
}

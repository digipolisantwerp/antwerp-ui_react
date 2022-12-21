export function classNames(classConfig: { [key: string]: boolean }): string {
  return Object.keys(classConfig)
    .filter((k) => !!classConfig[k])
    .join(' ');
}

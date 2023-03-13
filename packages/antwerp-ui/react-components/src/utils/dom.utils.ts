export function classNames(classConfig: { [key: string]: boolean }): string {
  return Object.keys(classConfig)
    .filter((k) => !!classConfig[k])
    .join(' ');
}

export function isScrollAtTheEnd(target: Element) {
  return target.clientWidth === target.scrollWidth || target.clientWidth + target.scrollLeft === target.scrollWidth;
}

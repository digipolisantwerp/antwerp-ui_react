const getRange = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(0)
    .map((_, i) => i + start);
};

export const pagesArray = (current: number, total: number) => {
  const delta = total <= 7 ? 7 : current > 4 && current < total - 3 ? 2 : 4;
  let rangeStart = Math.round(current - delta / 2);
  let rangeEnd = Math.round(current + delta / 2);
  if (rangeStart - 1 === 1 || rangeEnd + 1 === total) {
    rangeStart += 1;
    rangeEnd += 1;
  }
  let pages: number[] =
    current > delta
      ? getRange(Math.min(rangeStart, total - delta), Math.min(rangeEnd, total))
      : getRange(1, Math.min(total, delta + 1));
  if (pages[0] !== 1) {
    pages = [1, 0].concat(pages);
  }
  if (pages[pages.length - 1] < total) {
    pages = pages.concat([0, total]);
  }
  return pages;
};

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

export const lineValuesToPosition = (value: number, min: number, max: number, limit: number) => {
  const diffMaxMin = max - min;
  const diffValMin = value - min;
  const percentage = diffValMin / diffMaxMin;
  return Math.round(percentage * limit);
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const getPosition = (coordinate: number, grab: number, direction: number | undefined) => {
  return direction ? coordinate - direction - grab : coordinate - grab;
};

export const getValueFromPosition = (pos: number, limit: number, step: number, max: number, min: number) => {
  const percentage = clamp(pos, 0, limit) / (limit || 1);

  const baseVal = step * Math.round((percentage * (max - min)) / step);

  let value = baseVal + min;

  if (value >= max) value = max;
  if (value <= min) value = min;
  return value;
};

export const getSteps = (min: number, max: number, step: number): number[] => {
  const array: number[] = [];
  if (step <= 0) {
    return [max];
  }
  for (let index = min; index < max; index += step) {
    array.push(index);
  }
  return [...array, max];
};

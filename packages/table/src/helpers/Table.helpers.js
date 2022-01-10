export const isNull = (value) => value === null;
export const isUndefined = (value) => value === undefined;
export const isNil = (value) => isNull(value) || isUndefined(value);

export const isObject = (value) => {
	const type = typeof value;
	return !isNull(value) && (type === 'object' || type === 'function');
};
export const isNumber = (value) => typeof value === 'number';
export const isString = (value) => typeof value === 'string';

const getCellValue = (rowData, key, fallback) => {
	if (!key) {
		return null;
	}

	const value = rowData[key];

	if (isObject(value)) {
		return String(value);
	}

	if (isNil(value) && fallback) {
		return fallback;
	}

	return value;
};

const getFormatValue = (rowData, col, rowIndex) => {
	if (isString(col)) {
		return getCellValue(rowData, col);
	}

	const cellValue = getCellValue(rowData, col.value, col.fallback);

	return col.format
		? col.format(cellValue, col, rowData, rowIndex)
		: cellValue;
};

export const getHeaderProps = (col, sorting, onSortClick, columnIndex) => {
	const keyPrefix = 'table-header';

	if (isString(col)) {
		return { key: `${keyPrefix}-${col}-${columnIndex}`, label: col };
	}

	return {
		key: `${keyPrefix}-${col.label}-${columnIndex}`,
		component: col.headerComponent,
		classList: col.classList,
		disableSorting: col.disableSorting,
		label: col.label,
		value: col.value,
		width: col.width,
		hideLabel: col.hideLabel,
		sorting,
		onSortClick,
	};
};

export const getCellProps = (col, rowData, rowIndex) => {
	const keyPrefix = 'table-cell';

	if (isString(col)) {
		return { key: `${keyPrefix}-${col}-${rowData.id}`, label: col };
	}

	return {
		key: `${keyPrefix}-${col.label}-${rowData.id}`,
		classList: col.classList,
		component: col.component,
		ellipsis: col.ellipsis,
		rowData,
		rowIndex,
		value: getFormatValue(rowData, col, rowIndex),
	};
};

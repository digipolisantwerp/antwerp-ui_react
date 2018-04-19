import React from 'react';

export function daysOfMonth (displayedMonth) {
	let _i, d;
	let results = [];
	let startOfMonth = displayedMonth.startOf('months');
	let startDayOfWeek = startOfMonth.clone().startOf('isoWeek');
	let startAt = -(startOfMonth.diff(startDayOfWeek, 'days'));

	let endAt = Math.ceil((displayedMonth.daysInMonth() - startAt) / 7) * 7 + startAt - 1;
	for (d = _i = startAt; startAt <= endAt ? _i <= endAt : _i >= endAt; d = startAt <= endAt ? ++_i : --_i) {
		results.push(displayedMonth.clone().add(d, 'days'));
	}

	return results;
}

export function weekEnum (daysOfMonth) {
	let results = [];

	for (let _i = 0, _ref = daysOfMonth.length / 7; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--) {
		results.push(_i);
	}
	return results;
}

export function isDateFromNextMonth (date, displayedMonth) {
	return date.year() > displayedMonth.year() || date.year() ===
		displayedMonth.year() && date.month() > displayedMonth.month();
}

export function isDateFromPrevMonth (date, displayedMonth) {
	return date.year() < displayedMonth.year() || date.year() ===
		displayedMonth.year() && date.month() < displayedMonth.month();
}

export function yearsOfMonth (displayedMonth) {
	console.log(displayedMonth);
	const amountOfYearsBack = -11;
	let results = [];

	for (let year = amountOfYearsBack; year < 0; year++) {
		results.push(displayedMonth.clone().add(year, 'years').format('YYYY'));
	}
	results.push(displayedMonth.clone().format('YYYY'));

	return results;
}

export function switchToView(viewType) {
	switch(viewType) {
		case 'days':
			return 'months';
		case 'months':
			return 'years';
		default:
			return'days';
	}
}
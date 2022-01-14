import classnames from 'classnames';
import React from 'react';

type Props = {
	className: string,
	children: any,
	collapseOnDrag: boolean,
	hasClickAction: boolean,
	onClick: function,
	trRef: any,
	isDragging: boolean,
	level: number,
	isLast: boolean,
};

const TableRow = ({
	children,
	className,
	collapseOnDrag,
	hasClickAction,
	isDragging,
	isLast,
	level,
	onClick,
	trRef,
}: Props) => (
	<tr
		ref={trRef}
		className={classnames(className, {
			'a-table--clickable': hasClickAction,
			'a-table__row--hovered': isDragging,
			'a-table__row--collapse': collapseOnDrag,
			'a-table__row--level-1': level === 1,
			'a-table__row--level-2': level === 2,
			'a-table__row--last-in-level': isLast,
		})}
		onClick={onClick}
	>
		{children}
	</tr>
);

export default TableRow;

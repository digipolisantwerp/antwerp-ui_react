import React from 'react';

const NavBlock = ({
	title = '',
  children
}) => {
	return (
		<div>
			<h5 className="u-margin-top-xs u-margin-bottom-xs">{title}</h5>
			<ul className="a-list a-list--lined has-icon-right">
				{children}
			</ul>
		</div>
	);
};

export default NavBlock;

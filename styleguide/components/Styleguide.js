import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'react-styleguidist/lib/rsg-components/Logo';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import cx from 'classnames';

const xsmall = '@media (max-width: 600px)';

const styles = ({ font, base, light, link, baseBackground, mq, color, sidebarWidth }) => ({
	root: {
		color: base,
		backgroundColor: baseBackground,
	},
	header: {
		color: '#fff',
		backgroundColor: link,
	},
	bar: {
		display: 'flex',
		alignItems: 'center',
		[xsmall]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	nav: {
		marginLeft: 'auto',
		marginRight: '-0.5em',
		[xsmall]: {
			margin: [[10, 0, 0]],
		},
	},
	headerLink: {
		'&, &:link, &:visited': {
			marginLeft: '0.5em',
			marginRight: '0.5em',
			fontFamily: font,
			color: '#efefef',
		},
		'&:hover, &:active': {
			color: '#fff',
			cursor: 'pointer',
		},
	},
	content: {
		maxWidth: 1000,
		padding: [[15, 30]],
		margin: [[0, 'auto']],
		[mq.small]: {
			padding: 15,
		},
		display: 'block',
	},
	components: {
		overflow: 'auto', // To prevent the pane from growing out of the screen
	},
	sidebar: {
		border: [[color.border, 'solid']],
		borderWidth: [[0, 1, 0, 0]],
		position: 'fixed',
		top: 0,
		left: 0,
		bottom: 0,
		width: sidebarWidth,
		overflow: 'auto',
		'-webkit-overflow-scrolling': 'touch'
	},
	footer: {
		display: 'block',
		color: light,
		fontFamily: font,
		fontSize: 12,
	},
});

export function StyleGuideRenderer({ classes, title, homepageUrl, children, toc, hasSidebar }) {
	return (
		<div className={cx(classes.root, hasSidebar && classes.hasSidebar)} >
			<header className={classes.header}>
				<div className={classes.content}>
					<div className={classes.bar}>
						<Logo>{title}</Logo>
						<nav className={classes.nav}>
							<a
								className={classes.headerLink}
								href="https://github.com/styleguidist/react-styleguidist/tree/master/docs"
							>
								Docs
							</a>
							<a
								className={classes.headerLink}
								href="https://github.com/styleguidist/react-styleguidist"
							>
								GitHub
							</a>
							<a className={classes.headerLink} href="https://gitter.im/styleguidist/styleguidist">
								Gitter
							</a>
						</nav>
					</div>
				</div>
			</header>
			<main className={classes.content}>
				{children}
				<footer className={classes.footer}>
					<Markdown text={`Generated with [React Styleguidist](${homepageUrl}) ❤️`} />
				</footer>
			</main>
			<div className={classes.sidebar}>
				{toc}
			</div>
		</div>
	);
}

StyleGuideRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	homepageUrl: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Styled(styles)(StyleGuideRenderer);
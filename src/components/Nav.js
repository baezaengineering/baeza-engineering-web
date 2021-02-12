import React, { useState, useRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { Mixins, Media, Theme } from '../styles';
import { navLinks } from '../config';
import Menu from './Menu';

const { myColors, fontSizes } = Theme;

const NavContainer = styled.header`
	${Mixins.flexBetween};
	position: sticky;
	top: 0;
	z-index: 11;
	width: 100%;
	margin: auto;
`;

const Navbar = styled.nav`
	${Mixins.flexCenter}
	width: 100%;
	position: relative;
	background-color: ${myColors.alto};
	${Media.thone`${Mixins.flexEnd}`}
`;

const NavLinks = styled.div`
	${Mixins.flexCenter};
	${Media.thone`display: none;`}
`;

const NavList = styled.ol`
	${Mixins.flexBetween};
`;

const NavListItem = styled.li`
	padding: 20px 0;
`;

const NavLink = styled(props => <Link {...props} />)`
	padding: 20px 35px;
	position: relative;
	text-decoration: none;
	font-weight: bold;
	font-size: ${fontSizes.xlarge};
	counter-increment: item 1;
	color: black;
	:hover,
	:focus,
	:active {
		color: ${myColors.white};
		background-color: black;
	}
	transition: all 0.4s ease;
`;

const NavIcon = styled(FontAwesomeIcon)`
	padding: 0 10px;
`;

const Hamburger = styled.div`
	${Mixins.flexEnd};
	overflow: visible;
	padding: 15px;
	cursor: pointer;
	z-index: 12;
	transition-timing-function: linear;
	transition-property: opacity, filter;
	text-transform: none;
	color: inherit;
	border: 0;
	background-color: transparent;
	display: none;
	${Media.thone`display: flex;`};
`;

const HamburgerBox = styled.div`
	position: relative;
	display: inline-block;
	width: ${Theme.hamburgerWidth}px;
	height: 24px;
`;

const HamburgerInner = styled.div`
	background-color: ${props =>
		props.menuOpen ? `${myColors.white}` : `black`};
	position: absolute;
	width: ${Theme.hamburgerWidth}px;
	height: 2px;
	border-radius: 3px;
	top: 50%;
	left: 0;
	right: 0;
	z-index: 15;
	transition-duration: 0.22s;
	transition-property: transform;
	transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
	transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
	transition-timing-function: cubic-bezier(
		${props =>
			props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
	);
	&:before,
	&:after {
		content: '';
		display: block;
		background-color: ${props =>
			props.menuOpen ? `${myColors.white}` : `black`};
		position: absolute;
		left: auto;
		right: 0;
		width: ${Theme.hamburgerWidth}px;
		height: 2px;
		transition-timing-function: ease;
		transition-duration: 0.15s;
		transition-property: transform;
		border-radius: 4px;
	}
	&:before {
		width: ${props => (props.menuOpen ? `100%` : `120%`)};
		top: ${props => (props.menuOpen ? `0` : `-10px`)};
		opacity: ${props => (props.menuOpen ? 0 : 1)};
		transition: ${props =>
			props.menuOpen ? Theme.hamBeforeActive : Theme.hamBefore};
	}
	&:after {
		width: ${props => (props.menuOpen ? `100%` : `80%`)};
		bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
		transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
		transition: ${props =>
			props.menuOpen ? Theme.hamAfterActive : Theme.hamAfter};
	}
`;

function useEventListener(eventName, handler, element) {
	const savedHandler = useRef();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const isSupported = element && element.addEventListener;
		if (!isSupported) return;
		const eventListener = event => savedHandler.current(event);

		element.addEventListener(eventName, eventListener);

		return () => {
			element.removeEventListener(eventName, eventListener);
		};
	}, [eventName, element]);
}

const Nav = () => {
	const [menuOpen, toggleMenu] = useState(false);

	const handleResize = () => {
		console.log(window.innerWidth);
		if (window.innerWidth > 768 && menuOpen) toggleMenu(!menuOpen);
	};

	const handleKeydown = e => {
		if (!menuOpen) return;

		if (e.which === 27 || e.key === 'Escape') toggleMenu(false);
	};

	useEventListener('keydown', handleKeydown);
	useEventListener('resize', handleResize);

	return (
		<NavContainer>
			<Helmet>
				<body className={menuOpen ? 'blur' : ''} />
			</Helmet>
			<Navbar>
				<Hamburger onClick={() => toggleMenu(!menuOpen)}>
					<HamburgerBox>
						<HamburgerInner menuOpen={menuOpen} />
					</HamburgerBox>
				</Hamburger>
				<NavLinks>
					<NavList>
						<NavListItem>
							<NavLink to={navLinks[0].url}>
								<NavIcon icon={faHome} />
								{navLinks[0].name}
							</NavLink>
						</NavListItem>
						{navLinks.slice(1).map(({ name, url }, index) => (
							<NavListItem key={index}>
								<NavLink to={url}>{name}</NavLink>
							</NavListItem>
						))}
					</NavList>
				</NavLinks>
			</Navbar>
			<Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
		</NavContainer>
	);
};

export default Nav;

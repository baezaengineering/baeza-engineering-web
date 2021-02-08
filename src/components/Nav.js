import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { Mixins, Media, Theme } from '../styles';
import { navLinks } from '../config';

const { myColors, fontSizes } = Theme;

const NavContainer = styled.header`
	position: sticky;
	top: 0;
	height: ${Theme.navHeight};
	z-index: 11;
	margin: auto;
`;

const Navbar = styled.nav`
	width: 100%;
	position: relative;
	background-color: ${myColors.alto};
`;

const NavLinks = styled.div`
	${Mixins.flexCenter}
`;

const NavList = styled.ol`
	${Mixins.flexBetween};
`;

const NavListItem = styled.li`
	padding: 20px 0;
`;

const NavLink = styled(AnchorLink)`
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
		color: white;
		background-color: black;
	}
	transition: all 0.4s ease;
`;

const NavIcon = styled(FontAwesomeIcon)`
	padding: 0 10px;
`;

const Hamburger = styled.div``;

const HamburgerBox = styled.div``;

const HamburgerInner = styled.div``;

const Nav = () => {
	return (
		<NavContainer>
			<Navbar>
				<Hamburger>
					<HamburgerBox>
						<HamburgerInner></HamburgerInner>
					</HamburgerBox>
				</Hamburger>
				<NavLinks>
					<NavList>
						<NavListItem>
							<NavLink href={navLinks[0].url}>
								<NavIcon icon={faHome} />
								{navLinks[0].name}
							</NavLink>
						</NavListItem>
						{navLinks.slice(1).map(({ name, url }, index) => (
							<NavListItem key={index}>
								<NavLink href={url}>{name}</NavLink>
							</NavListItem>
						))}
					</NavList>
				</NavLinks>
			</Navbar>
			{/* <Menu /> */}
		</NavContainer>
	);
};

export default Nav;

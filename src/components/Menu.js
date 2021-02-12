import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { navLinks } from '../config';
import { Theme, Mixins, Media } from '../styles';

const { myColors, fontSizes } = Theme;

const MenuContainer = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	outline: 0;
	transition: ${Theme.transition};
	transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
	visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
	display: none;
	${Media.tablet`display: block;`};
`;

const Sidebar = styled.div`
	${Mixins.flexCenter};
	flex-direction: column;
	background-color: ${myColors.lightGrey};
	padding: 10px;
	width: 50vw;
	height: 100%;
	position: relative;
	right: 0;
	margin-left: auto;
	font-family: inherit;
	box-shadow: -10px 0px 30px -15px ${myColors.lightGray};
	${Media.thone`padding: 25px;`};
	${Media.phablet`width: 75vw;`};
	${Media.tiny`padding: 10px;`};
`;

const NavLinks = styled.nav`
	${Mixins.flexBetween};
	width: 100%;
	flex-direction: column;
	text-align: center;
`;

const NavList = styled.ol`
	width: 100%;
`;

const NavListItem = styled.li`
	margin: 0 auto 20px;
	position: relative;
	font-size: ${fontSizes.large};
	${Media.thone`
  		margin: 0 auto 10px;
  		font-size: ${fontSizes.medium};
	`};
	${Media.tiny`font-size: ${fontSizes.smallish};`};
`;

const NavLink = styled(props => <Link {...props} />)`
	${Mixins.smallButton};
	display: inline-block;
	margin-left: 10px;
	font-size: ${fontSizes.small};
`;

const Menu = ({ menuOpen, toggleMenu }) => {
	const handleMenuClick = ({ target }) => {
		const isLink = target.hasAttribute('href');
		const isNotMenu =
			target.classList && target.classList[0].includes('MenuContainer');
		if (isLink || isNotMenu) {
			toggleMenu(!menuOpen);
		}
	};

	return (
		<MenuContainer
			menuOpen={menuOpen}
			onClick={handleMenuClick}
			aria-hidden={!menuOpen}
		>
			<Sidebar>
				<NavLinks>
					<NavList>
						{navLinks &&
							navLinks.map(({ url, name }, index) => (
								<NavListItem key={index}>
									<NavLink to={url}>{name}</NavLink>
								</NavListItem>
							))}
					</NavList>
				</NavLinks>
			</Sidebar>
		</MenuContainer>
	);
};

Menu.propTypes = {
	menuOpen: PropTypes.bool,
	toggleMenu: PropTypes.func.isRequired,
};

Menu.defaultProps = {
	menuOpen: false,
};

export default Menu;

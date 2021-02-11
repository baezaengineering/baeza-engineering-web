import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { GlobalStyle, Media } from '../styles';
import Head from './Head';
import Nav from './Nav';

const LargeLogo = styled.div`
	margin: 1rem auto 1.45rem auto;
	max-width: 1100px;
	${Media.thone`
		padding: 10px;
	`}
`;

const Layout = ({ companyLogo, children }) => {
	return (
		<div id='root'>
			<Head />
			<GlobalStyle />
			<LargeLogo id='home'>
				<Img fluid={companyLogo} />
			</LargeLogo>
			<Nav />
			<div className='container'>{children}</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

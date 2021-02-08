import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { GlobalStyle, Main } from '../styles';
import Nav from './Nav';

const LargeLogo = styled.div`
	margin: 1rem auto 1.45rem auto;
	max-width: 1100px;
`;

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query HeaderLogoQuery {
			allContentfulNavigation {
				nodes {
					companyLogo {
						fluid(maxWidth: 2048, quality: 90) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);

	return (
		<>
			<GlobalStyle />
			<LargeLogo>
				<Img fluid={data.allContentfulNavigation.nodes[0].companyLogo.fluid} />
			</LargeLogo>
			<Nav />
			<Main>
				<div className='container'>{children}</div>
			</Main>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

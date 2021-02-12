import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import { Layout, SEO, Contact, EmployeeProfile } from '../components';
import { Mixins, Main, Section, Theme, Aside, Media } from '../styles';
config.autoAddCss = false;
const { myColors } = Theme;

const MainContainer = styled(Main)`
	${Mixins.sidePadding};
	background-color: ${myColors.gallery};
`;

const FlexContainer = styled.div`
	${Mixins.flexContainer};
	${Media.bigDesktop`
		display: block;
	`};
`;

const Content = styled(Section)`
	display: flex;
	${Mixins.sidePadding};
	${Media.thone`flex-direction: column;`};
`;

const About = ({ data }) => {
	return (
		<Layout companyLogo={data.navigation.nodes[0].companyLogo.fluid}>
			<MainContainer>
				<SEO title='Home' />
				<FlexContainer>
					<Content>
						<EmployeeProfile />
						<EmployeeProfile />
					</Content>
					<Aside>
						<Contact contact={data.contact} />
					</Aside>
				</FlexContainer>
			</MainContainer>
		</Layout>
	);
};

export default About;

export const pageQuery = graphql`
	{
		navigation: allContentfulNavigation {
			nodes {
				companyLogo {
					fluid(maxWidth: 2048, quality: 90) {
						...GatsbyContentfulFluid
					}
				}
			}
		}
		allContentfulEmployeeProfile {
			nodes {
				id
				name
				startDate
				title
				profileImage {
					fluid {
						base64
						tracedSVG
						srcWebp
						srcSetWebp
					}
				}
				cv {
					fluid {
						base64
						tracedSVG
						srcWebp
						srcSetWebp
					}
				}
				employeeCerts {
					employeeCerts
				}
			}
		}
		contact: allContentfulContactSection {
			nodes {
				location {
					lat
					lon
				}
				address {
					address
				}
				companyEmail
				companyPhone
			}
		}
	}
`;

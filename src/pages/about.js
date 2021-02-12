import React, { Fragment } from 'react';
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
	flex-wrap: wrap;
	justify-content: center;
	${Mixins.sidePadding};
	${Media.thone`
		flex-direction: column; 
		align-items: center`};
`;

const About = ({ data }) => {
	// Sort the profiles array by employee number
	data.profiles.nodes.sort((a, b) => a.employeeNumber - b.employeeNumber);

	return (
		<Layout companyLogo={data.navigation.nodes[0].companyLogo.fluid}>
			<MainContainer>
				<SEO title='Home' />
				<FlexContainer>
					<Content>
						{data.profiles.nodes.map(({ id, ...profile }) => {
							return (
								<Fragment key={id}>
									<EmployeeProfile profile={profile} />
								</Fragment>
							);
						})}
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
		profiles: allContentfulEmployeeProfile {
			nodes {
				id
				name
				startDate
				title
				profileImage {
					fluid(maxWidth: 2048, quality: 90) {
						...GatsbyContentfulFluid
						src
					}
				}
				cv {
					file {
						url
					}
				}
				employeeCerts {
					employeeCerts
				}
				employeeNumber
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

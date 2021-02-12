import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import { Layout, Contact, DetailedProject, SEO } from '../components';
import { Main, Mixins, Theme, Section, Media } from '../styles';
config.autoAddCss = false;
const { myColors } = Theme;

const MainContainer = styled(Main)`
	${Mixins.sidePadding};
	background-color: ${myColors.gallery};
`;

const FlexContainer = styled.div`
	${Mixins.flexContainer};
	${Media.desktop`
			display: block;
		`};
`;

const Content = styled(Section)`
	flex: 1;
`;

const Sidebar = styled.div`
	padding: 30px 0;
	max-width: 185px;
	${Media.desktop`
		max-width: none;
		width: 100%;
	`}
`;

const Projects = ({ data }) => {
	const carouselTimer = data.carouselTimer.nodes[0].carouselTimer;

	return (
		<Layout companyLogo={data.navigation.nodes[0].companyLogo.fluid}>
			<MainContainer>
				<SEO title='Projects' />
				<FlexContainer>
					<Content>
						{data.projects.nodes.map(({ id, ...project }) => (
							<Fragment key={id}>
								<DetailedProject
									project={project}
									carouselTimer={carouselTimer}
								/>
							</Fragment>
						))}
					</Content>
					<Sidebar>
						<Contact contact={data.contact} />
					</Sidebar>
				</FlexContainer>
			</MainContainer>
		</Layout>
	);
};

export default Projects;

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
		projects: allContentfulProject {
			nodes {
				id
				title
				secondaryTitle
				descriptionText {
					descriptionText
				}
				footerText {
					footerText
				}
				headerText {
					headerText
				}
				projectImages {
					id
					fluid(maxWidth: 2048, quality: 90) {
						...GatsbyContentfulFluid
						src
					}
				}
				projectType
				completed
			}
		}
		carouselTimer: allContentfulImageCarousel {
			nodes {
				carouselTimer
			}
		}
	}
`;

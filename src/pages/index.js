import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import {
	Layout,
	SEO,
	Carousel,
	Certifications,
	ProjectsShortList,
	Contact,
	Footer,
} from '../components';
import { Mixins, Main, Section, Theme, Aside, Media } from '../styles';
config.autoAddCss = false;
const { myColors } = Theme;

// Main
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

const CarouselContainer = styled.div`
	margin: 0 auto;
`;

const Content = styled(Section)`
	flex: 1;
	${Mixins.sidePadding};
	${Media.phablet`padding: 0;`}
`;

const IndexPage = ({ data }) => {
	return (
		<Layout companyLogo={data.navigation.nodes[0].companyLogo.fluid}>
			<MainContainer>
				<SEO title='Home' />
				<CarouselContainer>
					<Carousel carousel={data.carousel.nodes[0]} />
				</CarouselContainer>
				<FlexContainer>
					<Content>
						<Certifications certifications={data.certifications} />
						<ProjectsShortList projects={data.projectsShortList} />
					</Content>
					<Aside>
						<Contact contact={data.contact} />
					</Aside>
				</FlexContainer>
			</MainContainer>
			<Footer />
		</Layout>
	);
};

export default IndexPage;

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
		certifications: allContentfulCertification {
			nodes {
				id
				description
				certificationName
			}
		}
		carousel: allContentfulImageCarousel {
			nodes {
				carouselImage {
					id
					fluid(maxWidth: 2048, maxHeight: 1000, quality: 90) {
						...GatsbyContentfulFluid
						src
					}
				}
				carouselTimer
			}
		}
		projectsShortList: allContentfulProjectsShortList {
			nodes {
				id
				title
				secondaryTitle
				summary {
					summary
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

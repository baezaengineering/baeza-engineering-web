import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import {
	Layout,
	SEO,
	Carousel,
	Certifications,
	ProjectsShortList,
	Contact,
} from '../components';
import { Mixins, Main, Section, Theme, Aside, Media } from '../styles';
config.autoAddCss = false;
const { myColors } = Theme;

const MainContainer = styled(Main)`
	${Mixins.sidePadding};
	background-color: ${myColors.gallery};
`;

const FlexContainer = styled.div`
	${Mixins.flexContainer};
`;

const CarouselContainer = styled.div`
	margin: 0 auto;
	// padding: 0 200px;
	// ${Media.thone`
	// 	padding-left: 0;
	// 	padding-right: 0;
	// `}
	// margin-bottom: 50px;
`;

const Content = styled(Section)`
	flex: 1;
	${Mixins.sidePadding};
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
						{/* <Img fluid={data.projects.nodes[0].projectImage.fluid} /> */}
					</Content>
					<Aside>
						<Contact contact={data.contact} />
					</Aside>
				</FlexContainer>
			</MainContainer>
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
					fluid(maxWidth: 2048, quality: 90) {
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

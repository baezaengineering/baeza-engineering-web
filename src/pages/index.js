import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import styled from 'styled-components';

import {
	Layout,
	SEO,
	Carousel,
	Certifications,
	ProjectsShortList,
	Contact,
} from '../components';
import { Mixins, Main, Section, Theme, Aside, Media } from '../styles';
const { myColors } = Theme;

const MainContainer = styled(Main)`
	${Mixins.sidePadding};
	background-color: ${myColors.gallery};
`;

const FlexContainer = styled.div`
	${Mixins.flexContainer};
`;

const CarouselContainer = styled.div`
	${Mixins.sidePadding}
	${Media.thone`
		padding-left: 0;
		padding-right: 0;
	`}
	margin-bottom: 50px;
`;

const Content = styled(Section)`
	flex: 1;
	padding-right: 50px;
	padding-left: 50px;
	${Media.desktop`
		padding-right: 20px;
		padding-left: 20px;
	`};
	${Media.thone`
		padding-right: 0px;
		padding-left: 0px;
	`};
`;

const Sidebar = styled(Aside)`
	padding-right: 25px;
	padding-left: 25px;
	${Media.desktop`
		padding-right: 10px;
		padding-left: 10px;
	`};
	${Media.thone`
		padding-right: 0px;
		padding-left: 0px;
	`};
`;

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<MainContainer>
				<SEO title='Home' />
				<CarouselContainer>
					<Carousel carousel={data.carousel} />
				</CarouselContainer>
				<FlexContainer>
					<Content>
						<Certifications certifications={data.certifications} />
						<ProjectsShortList projects={data.projectsShortList} />
						{/* <Img fluid={data.projects.nodes[0].projectImage.fluid} /> */}
					</Content>
					<Sidebar>
						<Contact contact={data.contact} />
					</Sidebar>
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

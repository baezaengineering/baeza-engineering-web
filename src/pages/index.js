import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import {
	Layout,
	SEO,
	Carousel,
	Certifications,
	ProjectsShortList,
} from '../components';
import { Mixins, Main, Section, Theme, Aside, Media } from '../styles';
const { myColors } = Theme;

const MainContainer = styled(Main)`
	${Mixins.sidePadding};
	background-color: ${myColors.gallery};
`;

const FlexContainer = styled.div`
	${Media.thone`
		display: block;
	`};
	${Mixins.flexContainer};
	padding-right: 0;
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
	background-color: blue;
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
	console.log(data);
	return (
		<Layout>
			<MainContainer>
				<SEO title='Home' />
				<Carousel carousel={data.carousel} />
				<FlexContainer>
					<Content>
						<Certifications certifications={data.certifications} />
						<ProjectsShortList projects={data.projectsShortList} />
						{/* <Img fluid={data.projects.nodes[0].projectImage.fluid} /> */}
					</Content>
					<Sidebar>Sidebar</Sidebar>
				</FlexContainer>
				<Link to='/page-2/'>Go to page 2</Link> <br />
				<Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
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
	}
`;

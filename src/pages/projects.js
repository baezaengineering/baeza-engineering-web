import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Layout, Contact } from '../components';
import SEO from '../components/seo';
import { Main, Mixins, Theme, Section, Media, Aside } from '../styles';
const { myColors } = Theme;

const MainContainer = styled(Main)`
	${Mixins.sidePadding};
	background-color: ${myColors.gallery};
`;

const FlexContainer = styled.div`
	${Mixins.flexContainer};
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

const Projects = ({ data }) => {
	return (
		<Layout>
			<MainContainer>
				<SEO title='Projects' />
				<FlexContainer>
					<Content>
						<FlexContainer>
							<Content>Image</Content>
							<Sidebar>Description</Sidebar>
						</FlexContainer>
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

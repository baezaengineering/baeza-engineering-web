import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<SEO title='Home' />
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<div style={{ maxWidth: `2000px`, marginBottom: `1.45rem` }}>
				{/* <Image /> */}
				{/* <Img fluid={data.navigation.nodes[0].companyLogo.fluid} /> */}
				<Img fluid={data.projects.nodes[0].projectImage.fluid} />
				<Img fluid={data.projects.nodes[0].projectImage.fluid} />
			</div>
			<Link to='/page-2/'>Go to page 2</Link> <br />
			<Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
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
		projects: allContentfulProject {
			nodes {
				title
				projectType
				projectImage {
					fluid(maxWidth: 2048, quality: 90) {
						...GatsbyContentfulFluid
					}
					description
					title
				}
				description {
					raw
				}
			}
		}
	}
`;

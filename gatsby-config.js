require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./src/config');

const options = {
	host: 'cdn.contentful.com',
	accessToken: 'q7OPel7aHAdLeD4i2sCiwmCWSIIGcKgh4owKpRAxtVY',
	spaceId: process.env.CONTENTFUL_SPACE_ID,
};

if (process.env.NODE_ENV === 'production') {
	options.host = 'cdn.contentful.com';
	options.accessToken = 'q7OPel7aHAdLeD4i2sCiwmCWSIIGcKgh4owKpRAxtVY';
}

module.exports = {
	siteMetadata: {
		title: config.siteTitle,
		siteUrl: config.siteUrl,
		description: config.siteUrl,
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: options,
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [],
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-responsive-iframe`],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		{
			resolve: 'gatsby-plugin-no-sourcemaps',
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Baeza Engineering`,
				short_name: `BaezaEngineering`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/BE_Logo.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};

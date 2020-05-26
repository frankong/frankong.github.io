module.exports = {
    siteMetadata: {
	title: `Frank Ong`,
	description: `Frank Ong's website`,
	author: `Frank Ong`,
    },
    plugins: [
	`gatsby-plugin-react-helmet`,
	{
	    resolve: `gatsby-source-filesystem`,
	    options: {
		name: `images`,
		path: `${__dirname}/src/images`,
	    },
	},
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
	{
	    resolve: `gatsby-plugin-manifest`,
	    options: {
		name: `frankong-website`,
		short_name: `website`,
		start_url: `/`,
		display: `minimal-ui`,
		icon: `src/images/me.jpg`, // This path is relative to the root of the site.
	    },
	},
	// this (optional) plugin enables Progressive Web App + Offline functionality
	// To learn more, visit: https://gatsby.dev/offline
	// `gatsby-plugin-offline`,
    ],
}

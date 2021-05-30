module.exports = {
  siteMetadata: {
    title: 'twisted-hologram',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/functions`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
  ],
};

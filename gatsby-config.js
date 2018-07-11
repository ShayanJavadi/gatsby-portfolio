module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Shayan Javadi',
    description: 'Fullstack Developer',
    keywords: 'full stack, product enginner, portfolio, personal website',
    url: 'https://www.shayanjavadis.com'
  }
};

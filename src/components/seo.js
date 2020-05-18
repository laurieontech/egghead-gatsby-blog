import React from 'react'
import {Helmet} from "react-helmet"
import {useStaticQuery, graphql} from 'gatsby'
const SEO = ({title, image, meta}) => {
    const {site} = useStaticQuery(
        graphql`
        query {
          site {
            siteMetadata {
                title
              siteUrl
            }
          }
        }
      `
    )
    const imageUrl = `${site.siteMetadata.siteUrl}${image}`
    return (
        <Helmet
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        // meta={[
        //     {
        //         name: `og:image`,
        //         content: imageUrl,
        //       },
        //       {
        //         name: `og:image:alt`,
        //         content: title,
        //       },
            //   {
            //     property: `og:title`,
            //     content: title,
            //   },
        //       {
        //         property: `og:type`,
        //         content: `website`,
        //       },
        //       {
        //         name: `twitter:image`,
        //         content: imageUrl,
        //       },
        //       {
        //         name: `twitter:image:alt`,
        //         content: title,
        //       },
        //       {
        //         name: `twitter:card`,
        //         content: `summary_large_image`,
        //       },
        //       {
        //         name: `twitter:title`,
        //         content: title,
        //       },
        // ].concat(meta)}
        />
    )
}

export default SEO
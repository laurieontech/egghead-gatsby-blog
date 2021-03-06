import React from 'react'
import {Helmet} from "react-helmet"
import {useStaticQuery, graphql} from 'gatsby'
import PropTypes from 'prop-types'
export const SEO = ({title, image, meta}) => {
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
    console.log(title)
    return (
        <Helmet
        title={title}
        htmlAttributes={{lang: `en`}}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[

              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:title`,
                content: title,
              },
        ]
        .concat (
            imageUrl ? [
             {
                name: `og:image`,
                content: imageUrl,
              },
              {
                name: `og:image:alt`,
                content: title,
              },
            {
                name: `twitter:image`,
                content: imageUrl,
              },
              {
                name: `twitter:image:alt`,
                content: title,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
            ]
            : [
                {
                    name: "twitter:card",
                    content: "summary"
                  } 
            ]
        )
        .concat(meta)}
        />
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,  
    meta: PropTypes.array,
  }

  SEO.defaultProps = {
    meta: []
  }

export default SEO


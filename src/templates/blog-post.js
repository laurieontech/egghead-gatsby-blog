import React from "react"
import {graphql} from "gatsby"
import Image from "gatsby-image"
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({data}) => {
    const post = data.markdownRemark

    return (
        <Layout>
        <SEO title={post.frontmatter.title} image={post.frontmatter.image.childImageSharp.fluid.src}/>
        <article>
        <header>
        <Image fluid={post.frontmatter.image.childImageSharp.fluid} alt=''/>
        <h1>{post.frontmatter.title}</h1>
        </header>
        <section dangerouslySetInnerHTML={{__html: post.html}}/>
        </article>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
          frontmatter {
            title
            image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
        }
      }
`


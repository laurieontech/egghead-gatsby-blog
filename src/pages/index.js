import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
 

export default ({data}) => {
    const posts = data.allMarkdownRemark.nodes
    return (
    <Layout>
    {posts.map((post) => {
        return (<Link to={post.fields.slug}>
        <h2>{post.frontmatter.title}</h2>
        </Link>
        )
            })}
    </Layout>
)}

export const pageQuery = graphql`
query { 
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
    nodes {
        fields {
            slug
        }
        frontmatter {
          title
        }
      }
  }
}
`

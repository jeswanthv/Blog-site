import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import Home from "../template/Home"

type DataProps = {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          slug: string
        }
      }
    }[]
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Home>
      <h1>Blogs</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Home>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default IndexPage

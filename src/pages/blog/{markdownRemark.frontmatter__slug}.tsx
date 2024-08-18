import * as React from "react"

import { graphql, PageProps } from "gatsby"
import Home from "../../template/Home"

interface BlogPostTemplateProps extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
      }
      html: string
    }
  }
}

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: BlogPostTemplateProps) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
    <Home>
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Home>
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
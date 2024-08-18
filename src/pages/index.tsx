import { graphql, PageProps } from "gatsby";
import React from "react";
import { VCard } from "../components/VCard/VCard";
import Home from "../template/Home";

type DataProps = {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          title: string;
          slug: string;
          tag: string;
        };
      };
    }[];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Home>
      <h1>Blogs</h1>
      <ul>
        {posts.map(({ node }) => (
          <VCard node={node} key={node.id} />
        ))}
      </ul>
    </Home>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            tag
          }
        }
      }
    }
  }
`;

export default IndexPage;

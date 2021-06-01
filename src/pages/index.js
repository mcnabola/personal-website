import React from "react";
import { Layout } from "../components/layout";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Box, Heading, Link } from "theme-ui";

export default function IndexPage( { data } ) {
  return (
  <>
    <Layout>
    {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
          <Box
            key={id}
            as="article"
            sx={{
              mb: 4,
              p: 3,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              border: "1px solid #d1d1d1",
              borderRadius: "15px",
            }}
          >
            <Link as={GatsbyLink} to={`/${slug}`}>
              <Heading>{frontmatter.title}</Heading>
              <Box as="p" variant="styles.p">
                {frontmatter.date}
              </Box>
              <Box as="p" variant="styles.p">
                {excerpt}
              </Box>
            </Link>
          </Box>
        ))}
      </Layout>
    </>
  );
}


export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        slug
      }
    }
  }
`;
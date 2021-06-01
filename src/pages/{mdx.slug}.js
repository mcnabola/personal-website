import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Box } from "theme-ui";

export default function PostPage ({data}) {
    const {
        body,
        frontmatter: {title},
    } = data.mdx;
    return (<>
        <Box as="h1" variant="styles.h1" fontSize="4xl">
            {title}
        </Box>
        <MDXRenderer>{body}</MDXRenderer>
    </>
    );
}

export const query = graphql`
query POST_BY_SLUG($slug: String) {
  mdx(slug: { eq: $slug }) {
    id
    slug
    body
    frontmatter {
      date
      title
    }
  }
}
`;
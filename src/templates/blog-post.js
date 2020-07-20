import React from "react";
import {graphql} from 'gatsby'

import {
    ImagePost,
    HoldTitle,
    TextPost

} from "./style";
import GlobalStyles from "../styles/global";
import {LayoutWrapper} from "../components/Layout/style";


const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    return (
        <>
            <GlobalStyles/>
            <ImagePost>
                <HoldTitle>
                <h1>{post.frontmatter.title}</h1>
                <span>{post.frontmatter.category}</span>
                </HoldTitle>
            </ImagePost>
            <TextPost>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

            </TextPost>

        </>
    )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        category
      }
      html
      timeToRead
    }
  }
`



export default BlogPost
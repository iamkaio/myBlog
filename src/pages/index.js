import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo";
import PostItem from "../components/PostItem/PostItem";
import {useStaticQuery, graphql} from 'gatsby'

const IndexPage = () => {



    const {allMarkdownRemark} = useStaticQuery(
        graphql`
        query PostList {
          allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
              node {
              fields {
              slug
              }
                frontmatter {
                  background
                  category
                  description
                  title
                  date
                }
              }
            }
          }
        }
        `)

    const postList = allMarkdownRemark.edges

    return (
        <Layout>
            <SEO title="Home"/>
            {postList.map(
                ({
                node: {
                    frontmatter: {background, category, title, description, date},
                    fields: { slug }
                },
            }) => (
                <PostItem
                slug={slug}
                background={background}
                category={category}
                title={title}
                description={description}
                date={date}
                />
                )
            )}

        </Layout>
    )

}

export default IndexPage

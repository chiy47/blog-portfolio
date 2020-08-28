import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
query($slug:String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    image {
      resize (width: 2000, height: 1500) {
        src
      }
    }
    body {
      json
    }
  }
}`

const Blog = (props)  => {
    return (
      <Layout>
        <Head title={props.data.contentfulBlogPost.title} />
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        <img src={props.data.contentfulBlogPost.image.resize.src} 
        alt={props.data.contentfulBlogPost.image.title} />
        {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
      </Layout>
    )
}

export default Blog
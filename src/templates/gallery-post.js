import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout';

const GalleryPostTemplate = ({ title, price, description }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div class="image is-1by1">
              <img src="https://placehold.it/1000x1000" />
            </div>
          </div>
          <div className="column is-5 is-offset-1">
            <div className="title is-2">{title}</div>
            <p className="title is-3 has-text-muted">$ {price}</p>
            <hr />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const GalleryPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div className="section has-background-light">
        <div className="container">
          <div className="columns">
            <div className="column">
              <span class="title is-4">{post.frontmatter.title}</span>
              <span class="title is-4 has-text-muted">&nbsp;|&nbsp;</span>
              <span class="title is-5 has-text-muted">$ {post.frontmatter.price}</span>
            </div>
          </div>
        </div>
      </div>
      <GalleryPostTemplate
        description={post.frontmatter.description}
        price={post.frontmatter.price}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

GalleryPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default GalleryPost

export const pageQuery = graphql`
  query GalleryPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        price
      }
    }
  }
`
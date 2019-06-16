import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const GalleryPostTemplate = ({ title, price, description, image, helmet }) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <figure style={{ maxWidth: '500px', margin: 'auto' }}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: `Image thumbnail for post ${title}`,
                  style: {
                    maxWidth: '100%',
                    height: '100%',
                  }
                }}
              />
            </figure>
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
              <span className="title is-4">{post.frontmatter.title}</span>
              <span className="title is-4 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-5 has-text-muted">$ {post.frontmatter.price}</span>
            </div>
          </div>
        </div>
      </div>
      <GalleryPostTemplate
        description={post.frontmatter.description}
        price={post.frontmatter.price}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        helmet={
          <Helmet titleTemplate="%s | Gallery">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
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
        title
        templateKey
        date(formatString: "MMMM DD, YYYY")
        description
        featuredpost
        price
        image {
          childImageSharp{
            fluid (maxWidth:700, quality:100){
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
          publicURL
        }
      }
    }
  }
`
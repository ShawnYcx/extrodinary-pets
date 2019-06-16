import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage';

const GalleryRoll = ({ data }) => {
  const { edges: gallery } = data.allMarkdownRemark

  return <div className="columns is-multiline">
    {gallery && gallery.map(({ node: post }) => (
      <div className="is-parent column is-3" key={post.id} >
        <Link to={post.fields.slug}>
          <div className="panel hoverable">
            <p className="panel-heading">
              {post.frontmatter.title}
            </p>
            <div className="is-marginless" style={{
              height: '300px',
            }}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.image,
                  alt: `Image thumbnail for post ${post.title}`,
                  style: {
                    maxWidth: '100%',
                    height: '100%',
                    borderRadius: '0 0 5px 5px',
                  }
                }}
              />
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
}

GalleryRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
export default () => (
  <StaticQuery
    query={graphql`
      query GalleryRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "gallery-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                featuredpost
                price
                image {
                  childImageSharp{
                    fluid (maxWidth:700, quality:50){
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
        }
      }
    `}
    render={(data, count) => <GalleryRoll data={data} count={count} />}
  />
)
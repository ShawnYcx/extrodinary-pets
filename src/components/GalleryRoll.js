import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

const GalleryRoll = ({ data }) => {
  const { edges: gallery } = data.allMarkdownRemark

  return <div className="columns is-multiline">
    {gallery && gallery.map(({ node: post }) => (
      <div className="is-parent column is-3" key={post.id}>
        <Link to={post.fields.slug}>
          <div className={`card`}>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{post.frontmatter.title}</p>
                  <p className="subtitle is-6">${post.frontmatter.price}</p>
                </div>
              </div>

              <div className="content">
                {post.frontmatter.description}
              </div>
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <GalleryRoll data={data} count={count} />}
  />
)
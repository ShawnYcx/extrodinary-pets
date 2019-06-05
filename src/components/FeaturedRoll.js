import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage';

import "bulma-carousel/dist/css/bulma-carousel.min.css";

const bulmaCarousel = (() => {
  if (typeof window !== 'undefined') {
    return require('bulma-carousel')
  }
})()


const FeaturedRoll = ({ data }) => {
  const { edges: gallery } = data.allMarkdownRemark

  useEffect(() => {
    bulmaCarousel.attach('#carousel-demo', {
      slidesToScroll: 1,
      slidesToShow: 2
    });
  }, [])

  return (
    <div id="carousel-demo" className="carousel">
      {gallery && gallery.map(({ node: post }, index) => (
        <Link to={post.fields.slug} key={post.id}>
          <div className={`item-${index}`} style={{ padding: '.2rem' }}>
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.image,
                alt: `Image thumbnail for post ${post.frontmatter.title}`,
                style: {
                  maxWidth: '500px',
                  height: '250px',
                  borderRadius: '5px',
                }
              }}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

FeaturedRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { 
            templateKey: { eq: "gallery-post" } 
            featuredpost: { eq: true}
          } 
        }
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
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FeaturedRoll data={data} count={count} />}
  />
)
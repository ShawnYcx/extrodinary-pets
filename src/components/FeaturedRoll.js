import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      }
    },
  ]
};

const FeaturedRoll = ({ data }) => {
  const { edges: gallery } = data.allMarkdownRemark;

  return (
    <Slider {...settings}>
      {gallery && gallery.map(({ node: post }, index) => (
        // <Link to={post.fields.slug} key={post.id}>
        <div key={post.id} style={{ display: 'inline-block' }}>
          <div className={`item-${index}`} style={{ maxWidth: '300px', height: 'auto', margin: '0 auto' }}>
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.image,
                alt: `Image thumbnail for post ${post.frontmatter.title}`,
                style: {
                  maxWidth: '100%',
                  maxHeight: '100%',
                  borderRadius: '5px',
                }
              }}
            />
          </div>
        </div>
        // </Link>
      ))}
    </Slider>
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
    render={(data, count) => <FeaturedRoll data={data} count={count} />}
  />
)
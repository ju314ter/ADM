import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  citation,
  presentationItems,
  offreItems
}) => (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          backgroundPosition: `bottom right`,
          backgroundAttachment: `fixed`,
          backgroundSize: 'cover',
          height: '98vh'
        }}
      >
        <div
          style={{
            display: 'flex',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="index-titre has-text-weight-light"
            style={{
              position: 'relative',
              top: 150,
              left: '5%',
              fontWeight: 'lighter',
              boxShadow:
                'hsl(171, 100%, 29%) 0.5rem 0px 0px, hsl(171, 100%, 29%) -0.5rem 0px 0px',
              color: 'white',
              lineHeight: '1',
              letterSpacing: '6px',
              padding: '0.25em',
              textTransform: 'uppercase'
            }}
          >
            {title}
          </h1>
        </div>
        <div className="index-citation">
          <div className="citation-wrapper">
            <h2 className="is-size-5-mobile is-size-4-tablet is-size-3-widescreen">{citation.content}</h2>
            <p className="is-italic is-size-6-mobile is-size-5-tablet is-size-4-widescreen">{citation.auteur}</p>
          </div>
        </div>
      </div>
      <section className="section-presentation" style={{ height: '600px' }}>
        {presentationItems.map((item) => (
          <div key={item.titre} className="presentation-item">
            <div>{item.titre}</div>
          </div>
        ))}
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  citation: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  presentationItems: PropTypes.object,
  offreItems: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        citation={frontmatter.citation}
        presentationItems={frontmatter.presentationItems}
        offreItems={frontmatter.offreItems}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        citation {
          content
          auteur
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        presentationItems {
          titre
          description
        }
        offreItems {
          titre
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

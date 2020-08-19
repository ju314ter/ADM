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
}) => {

  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          height: '98vh',
          overflow: 'hidden'
        }}
      >
        <div className="full-width-image kenburns-bottom-right"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
              })`,
            backgroundPosition: `bottom right`,
            backgroundAttachment: `fixed`,
            backgroundSize: 'cover',
            height: '100%'
          }}>
        </div>
      </div>
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
            position: 'absolute',
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
      <section className="section-presentation" style={{ minHeight: '150px' }}>
        <div className="presentation-items-wrapper"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            width: '100%',
            minHeight: '300px',
            position: 'relative',
            top: '-100px',
            background: 'rgba(0,0,0,0.3)',
          }}>
          {presentationItems.map((item) => (
            <div key={item.titre} className="presentation-item">
              <div style={{ color: 'white' }}>{item.titre}</div>
              <div style={{ color: 'white' }}>{item.description}</div>
              <button>En savoir +</button>
            </div>
          ))}
        </div>
      </section>
      <section className="section-offres">
        {offreItems.map((item) => (
          <div key={item.titre} className="offre-item"
            style={{
              backgroundImage: `url(${
                !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : image
                })`,
              backgroundPosition: `center`
            }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              width: '100%'
            }}>
              <div>
                <span>{item.titre}</span>
                <button>Se renseigner</button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="section-breves">
        <div>breves slideshow</div>
      </section>
      <section className="section-contact">
        <div>Newsletter</div>
        <div>Contact info card</div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  citation: PropTypes.object,
  presentationItems: PropTypes.array,
  offreItems: PropTypes.array
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

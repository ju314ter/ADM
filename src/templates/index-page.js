import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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
        <h1 className="index-titre has-text-weight-light">
          {title}
        </h1>
      </div>
      <div className="index-citation">
        <div className="citation-wrapper">
          <h2 className="is-size-6-mobile is-size-5-tablet is-size-3-widescreen">{citation.content}</h2>
          <p className="is-italic is-size-7-mobile is-size-5-tablet is-size-4-widescreen">{citation.auteur}</p>
        </div>
      </div>
      <section className="section-presentation" style={{ minHeight: '150px' }}>
        <div className="presentation-items-wrapper">
          {presentationItems.map((item) => (
            <div key={item.titre} className="presentation-item">
              <Card className='mat-card'>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 200 }}
                    image={item.image.childImageSharp.fluid.src}
                    title={item.titre}
                  />
                  <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', flexDirection: 'column', textAlign: 'center' }}>
                    <h2>{item.titre}</h2>
                    <div style={{ color: 'hsl(141, 53%, 31%)', fontWeight: 300 }}>{item.description}</div>
                    <ul>
                      {item.bulletPoints.map((bulletpoint) => {
                        return <li key={bulletpoint}>{bulletpoint}</li>
                      })}
                    </ul>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button size="small" color="primary" className="btn-card">
                    En savoir plus !
                    </Button>
                </CardActions>
              </Card>
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
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              width: '100%'
            }}>
              <div>
                <span>{item.titre}</span>
                <Button className='btn-card'>Se renseigner</Button>
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
          bulletPoints
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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

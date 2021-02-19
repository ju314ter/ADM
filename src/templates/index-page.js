import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export const IndexPageTemplate = ({
  image,
  backgroundOffres,
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
          height: '100vh',
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
      <div className="clouds">
        <img src="../img/clouds/cloud1.png" alt="cloud" className="cloud"></img>
        <img src="../img/clouds/cloud2.png" alt="cloud" className="cloud"></img>
        <img src="../img/clouds/cloud3.png" alt="cloud" className="cloud"></img>
        <img src="../img/clouds/cloud4.png" alt="cloud" className="cloud"></img>
        <img src="../img/clouds/cloud5.png" alt="cloud" className="cloud"></img>
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
      <section className="section-presentation">
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
      <section className="section-offres"
        style={{
          backgroundImage: `url(${
            !!backgroundOffres.childImageSharp ? backgroundOffres.childImageSharp.fluid.src : backgroundOffres
            })`,
          backgroundPosition: `center`,
          backgroundAttachment: `fixed`,
          backgroundSize: 'cover',
        }}>
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
              flexDirection: 'column',
              color: 'white',
              width: '100%'
            }}>
              <div className='content-card' style={{
              }}>
                <h2>{item.titre}</h2>
              </div>
              <Button className='btn-card'>Se renseigner</Button>
            </div>
          </div>
        ))}
      </section>
      {/* <section className="section-contact">
        <div className="facebook-slideshow">

        </div>
        <div className="contact-block">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <input type="text" placeholder="Entrez votre e-mail" name="newsletter-input"></input>
            <span>Abonnez vous à la newsletter !</span>
          </div>
          <div>Contact info card</div>
        </div>
      </section> */}
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  backgroundOffres: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        backgroundOffres={frontmatter.backgroundOffres}
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
        backgroundOffres {
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

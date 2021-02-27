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
import { Link } from 'gatsby'

export const IndexPageTemplate = ({
  image,
  backgroundOffres,
  title,
  subtitle,
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
        <h1 className="index-title has-text-weight-light"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="500"
          data-sal-easing="ease">
          {title}
        </h1>
        <h2 className="index-subtitle has-text-weight-light"
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="1000"
          data-sal-easing="ease">
          {subtitle}
        </h2>
      </div>
      <div className="index-citation">
        <div className="citation-wrapper"
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease">
          <h2>"{citation.content}"</h2>
          <p>{citation.auteur}</p>
        </div>
      </div>
      <section className="section-presentation">
        <div className="presentation-items-wrapper">
          {presentationItems.map((item, index) => (
            <div key={item.titre} className="presentation-item"
            data-sal="slide-up"
            data-sal-delay={150*index}
            data-sal-duration="1000"
            data-sal-easing="ease-out">
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
                    <ul style={{paddingLeft: '0px'}}>
                      {item.bulletPoints.map((bulletpoint) => {
                        return <li key={bulletpoint}>{bulletpoint}</li>
                      })}
                    </ul>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button size="small" color="primary" className="btn-card">
                    <Link to={item.link} className="inner-link">En savoir plus !</Link>
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
        {offreItems.map((item, index) => (
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
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  backgroundOffres: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
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
        subtitle={frontmatter.subtitle}
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
        subtitle
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
          link
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

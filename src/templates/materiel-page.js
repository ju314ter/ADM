import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import '../sass/materiel.sass'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export const MaterielPageTemplate = ({
    intro,
    illustration,
    materiel
}) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', flexWrap: 'wrap' }}>
            <div className="full-width-image landing"
                style={{
                    backgroundImage: `url(${
                        !!illustration.childImageSharp ? illustration.childImageSharp.fluid.src : illustration
                        })`,
                    backgroundPosition: `center`,
                    backgroundAttachment: `fixed`,
                    backgroundSize: 'cover',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    boxShadow: 'inset 0px -8px 22px -10px rgba(255,255,255,1)'
                }}>
                <h1>Comment fonctionne un planeur ?</h1>
                {intro && intro.map((paragraphe, index) => {
                    return <p className="intro-p" 
                                key={index}
                                data-sal="slide-up"
                                data-sal-duration="1000"
                                data-sal-easing="ease"
                                style={{
                                    position:'relative',
                                    left: index % 2 === 0 ? '5%' : '-5%'
                                }}>
                        {paragraphe}</p>
                })}
            </div>
            <div className="materiel-main">
                {
                    materiel && Object.keys(materiel).map((sectionName, index)=>{
                        return (
                        <div key={index} className="section">
                            {
                                materiel[sectionName] && materiel[sectionName].map((planeur, index)=>{
                                return (
                                  <div key={index}
                                        data-sal="slide-up"
                                        data-sal-delay={1*(index*150)}
                                        data-sal-duration="800"
                                        data-sal-easing="ease-out">
                                    <Card className='card'
                                            data-sal="slide-up"
                                            data-sal-duration="1000"
                                            data-sal-easing="ease"
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            alt={planeur.nom}
                                            height="140"
                                            image={planeur.uri_photo.childImageSharp.fluid.src}
                                            title={planeur.nom}
                                            />
                                            <CardContent>
                                                <h1>{planeur.nom}</h1>
                                                <p>{planeur.description}</p>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{justifyContent: 'center'}}>
                                            <Button size="small" color="primary" className="btn">
                                                <a href={planeur.hyperlink}>En apprendre plus</a>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                  </div>
                                  )
                                })
                            }
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

MaterielPageTemplate.propTypes = {
}

const MaterielPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <MaterielPageTemplate
                            intro={frontmatter.introduction}
                            illustration={frontmatter.illustration}
                            materiel={frontmatter.materiel}
            />
        </Layout>
    )
}

MaterielPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default MaterielPage

export const pageQuery = graphql`
  query MaterielPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "materiel-page" } }) {
      frontmatter {
        title
        illustration {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        introduction
        materiel {
            planeursBi {
                nom
                type
                uri_photo {
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                hyperlink
                description
            }
            planeursMono {
                nom
                type
                uri_photo {
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                hyperlink
                description
            }
            autre {
                nom
                type
                uri_photo {
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                hyperlink
                description
            }
        }
      }
    }
  }
`

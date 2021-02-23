import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import '../components/decouverte.sass'

// import ImageDecouverte from '../img/decouverte.jpg'

export const DecouvertePageTemplate = ({
    intro,
    illustration,
    sections
}) => {

    useState(() => {
    }, [])


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', flexWrap: 'wrap' }}>
            <div className="full-width-image"
                style={{
                    backgroundImage: `url(${
                        !!illustration.childImageSharp ? illustration.childImageSharp.fluid.src : illustration
                        })`,
                    backgroundPosition: `bottom right`,
                    backgroundAttachment: `fixed`,
                    backgroundSize: 'cover',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}>
                {intro.map((paragraphe, index) => {
                    return <p className="intro-p" key={index}>{paragraphe}</p>
                })}
            </div>
            <div className="decouverte-main">
                {
                    sections && sections.map((section, index) => {
                        return (
                            <div className="sections-wrapper" key={index}>

                                <div className="sections-illustration" style={{
                                    backgroundImage: `url(${
                                        !!section.illustration.childImageSharp ? section.illustration.childImageSharp.fluid.src : section.illustration
                                        })`,
                                    backgroundSize: 'cover',
                                    float: index % 2 == 0 ? 'left' : 'right',
                                    margin: index % 2 == 0 ? '15px' : '15px'
                                }} />
                                <div>
                                    <h1>{section.titre}</h1>
                                    {
                                        section && section.paragraphes.map((paragraphe, index) => {
                                            return <p key={index}>{paragraphe}</p>
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

DecouvertePageTemplate.propTypes = {
    intro: PropTypes.array,
    illustration: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    sections: PropTypes.array
}

const DecouvertePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    useState(() => {
        // console.log('frontmatter')
        // console.log(frontmatter)
    }, [])
    return (
        <Layout>
            <DecouvertePageTemplate
                intro={frontmatter.introduction}
                illustration={frontmatter.illustration}
                sections={frontmatter.sections}
            />
        </Layout>
    )
}

DecouvertePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default DecouvertePage

export const pageQuery = graphql`
  query DecouvertePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "decouverte-page" } }) {
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
        sections {
            titre
            illustration {
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            paragraphes
        }
      }
    }
  }
`

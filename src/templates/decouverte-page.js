import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import '../components/decouverte.sass'

// import ImageDecouverte from '../img/decouverte.jpg'

export const DecouvertePageTemplate = ({
    intro,
    illustration
}) => {

    useState(() => {
        // console.log(image)
    }, [])


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', flexWrap: 'wrap', height: '100vh' }}>
            <div className="full-width-image"
                style={{
                    backgroundImage: `url(${
                        !!illustration.childImageSharp ? illustration.childImageSharp.fluid.src : illustration
                        })`,
                    backgroundPosition: `bottom right`,
                    backgroundAttachment: `fixed`,
                    backgroundSize: 'cover',
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {intro.map((paragraphe, index) => {
                    return <p className="intro-p" key={index}>{paragraphe}</p>
                })}
            </div>
            <div className="decouverte-intro">
            </div>
        </div>
    )
}

DecouvertePageTemplate.propTypes = {
    intro: PropTypes.array,
    illustration: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const DecouvertePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    useState(() => {
        console.log(frontmatter)
    }, [])
    return (
        <Layout>
            <DecouvertePageTemplate
                intro=''
                illustration=''
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
        sections
      }
    }
  }
`

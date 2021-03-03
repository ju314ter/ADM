import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import BackgroundImage from 'gatsby-background-image'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import '../sass/envol.sass'

export const EnvolPageTemplate = ({
    intro,
    illustration,
    sections
}) => {

useEffect(()=>{
})

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', flexWrap: 'wrap' }}>
        <BackgroundImage className="full-width-image landing-envol"
            tag='envolbackground'
            fluid={illustration.childImageSharp.fluid}
            style={{
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
            <h1>Comment prendre son envol ?</h1>

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
            <div>

                {sections && sections.map((section, i)=>{
                    return (
                        <Accordion key={i}>
                            <AccordionSummary className="accordion-section-title-wrapper" expandIcon={<ExpandMoreIcon />}>
                                <h1 style={{color:"black"}}>{section.titre}</h1>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-section-content-wrapper">
                                {section.content && section.content.map((options, i)=>{
                                    return (
                                        <div key={i} className="options-wrapper">
                                            <h2 style={{paddingLeft: 15}}>{options.titre}</h2>
                                            {options.paragraphes && options.paragraphes.map((paragraphe, i)=>{
                                                return <p key={i}
                                                data-sal="slide-up"
                                                data-sal-duration="1000"
                                                data-sal-easing="ease"
                                                >{paragraphe}</p>
                                            })}
                                        </div>
                                    )
                                })}
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        </BackgroundImage>
    </div>
    )
}

EnvolPageTemplate.propTypes = {
    intro: PropTypes.array,
    illustration: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    sections: PropTypes.array
}

const EnvolPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <EnvolPageTemplate
                intro={frontmatter.intro}
                illustration={frontmatter.illustration}
                sections={frontmatter.sections}
            />
        </Layout>
    )
}

EnvolPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default EnvolPage

export const pageQuery = graphql`
  query EnvolPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "envol-page" } }) {
      frontmatter {
        intro
        sections {
            titre
            content {
                titre
                paragraphes
            }
        }
        illustration {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`

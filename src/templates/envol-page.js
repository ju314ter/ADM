import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


export const EnvolPageTemplate = ({

}) => {

    return (
        <div>
            <p>Page découverte</p>
        </div>
    )
}

EnvolPageTemplate.propTypes = {
}

const EnvolPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <DecouvertePageTemplate
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "decouverte-page" } }) {
      frontmatter {
        
      }
    }
  }
`

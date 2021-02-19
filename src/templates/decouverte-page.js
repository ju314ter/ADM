import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


export const DecouvertePageTemplate = ({

}) => {

    return (
        <div>
            <p>Page découverte</p>
        </div>
    )
}

DecouvertePageTemplate.propTypes = {
}

const DecouvertePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <DecouvertePageTemplate
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "decouverte-page" } }) {
      frontmatter {
        
      }
    }
  }
`

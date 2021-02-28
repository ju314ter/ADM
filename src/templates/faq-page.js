import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const FaqPageTemplate = ({

}) => {

    return (
        <div>
            <p>Page FAQ</p>
        </div>
    )
}

FaqPageTemplate.propTypes = {
}

const FaqPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <FaqPageTemplate
            />
        </Layout>
    )
}

FaqPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default FaqPage

export const pageQuery = graphql`
  query FaqPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "faq-page" } }) {
      frontmatter {
        title
      }
    }
  }
`

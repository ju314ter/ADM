import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const TarifPageTemplate = ({

}) => {

    return (
        <div>
            <p>Page tarif</p>
        </div>
    )
}

TarifPageTemplate.propTypes = {
}

const TarifPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <TarifPageTemplate
            />
        </Layout>
    )
}

TarifPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default TarifPage

export const pageQuery = graphql`
  query TarifPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "tarif-page" } }) {
      frontmatter {
        title
      }
    }
  }
`

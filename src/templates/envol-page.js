import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'


export const EnvolPageTemplate = ({

}) => {

    return (
        <div>
            <p>Page envol</p>
        </div>
    )
}

EnvolPageTemplate.propTypes = {
}

const EnvolPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <EnvolPageTemplate
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
        title
      }
    }
  }
`

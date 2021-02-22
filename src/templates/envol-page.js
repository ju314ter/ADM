import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

// import ImageEnvol from '../img/envol.jpg'

export const EnvolPageTemplate = ({

}) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <img src={ImageEnvol} style={{ width: '100%', height: '100%' }} className='kenburns-bottom-right' /> */}
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

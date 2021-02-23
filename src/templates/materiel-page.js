import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

// import ImageEnvol from '../img/envol.jpg'

export const MaterielPageTemplate = ({

}) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <img src={ImageEnvol} style={{ width: '100%', height: '100%' }} className='kenburns-bottom-right' /> */}
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
      }
    }
  }
`

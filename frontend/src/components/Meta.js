import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Cosmetic Formulator Depot',
  description: 'We sell the best cosmetic raw materials at affordable prices',
  keywords: 'skincare, cosmetic ingredients, best skincare ingredients',
}

export default Meta

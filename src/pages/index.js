import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import homeStyles from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1 className={homeStyles.homeTitle}>Hello.</h1>
      <h2>I'm Chi, a full-stack developer.</h2>
    </Layout>
  )
}

export default IndexPage
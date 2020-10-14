import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import homeStyles from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={homeStyles.container}>
        <h1 className={homeStyles.homeTitle}>Hello World.</h1>
        <h2 className={homeStyles.homeIntro}>I'm Chi, a full-stack developer.</h2>
        <Link to="/about" className={homeStyles.learnMoreContainer}>
          <button className={homeStyles.learnMoreBtn}>
          <span>Learn more about me</span></button></Link>
       </div>   
    </Layout>
  )
}

export default IndexPage
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import projectStyles from './project.module.scss'

import Cards from '../components/cards'

const ProjectPage = () => {
    
    return (
       <Layout>
           <Head title="Project" />
           <h1 className={projectStyles.projectTitle}>Project</h1>
            <Cards />
       </Layout> 
    )
}

export default ProjectPage
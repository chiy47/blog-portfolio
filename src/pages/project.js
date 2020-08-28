import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const ProjectPage = () => {
    
    return (
       <Layout>
           <Head title="Project" />
           <h1>Project</h1>
            
       </Layout> 
    )
}

export default ProjectPage
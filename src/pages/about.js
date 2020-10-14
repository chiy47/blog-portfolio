import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'
import Pink from '../components/images/pink.jpg'

const AboutPage = () => {
    return (
       <Layout>
            <Head title="About" />        
            <h1 className={aboutStyles.aboutTitle}>About Me</h1>
            <div className={aboutStyles.aboutContainer}>
                <div className={aboutStyles.imageContainer}>
                    <img className={aboutStyles.aboutImage} src={Pink} alt="Chi" />
                </div> 

                <div className={aboutStyles.aboutText}>
                    <p><span className={aboutStyles.firstCharacter}>H</span>
                    i, my name is Chi Duong (pronounced “Chee Yoong”. 
                    The "Y" sound was enunciated for the letter "D"). 
                        I am a web developer based in Maryland, USA.</p>

                    <p>I was born in Vietnam, went to the USA in 2015 and started programming in Summer 2017. 
                        I earned a bachelor's degree in Computer Science in 2019. </p>

                    <p>As a child, I am good at drawing and see beauty potentials in things. 
                        I am also a curious and nerdy girl. 
                        I love maths, science, technology, chess, and board games.
                        I seek to combine my artistic and problem-solving skills into tech.</p>

                    <p>I always wanted to make my own blog. 
                        I am looking forward to seeing its growth.</p>
                    
                    <p>I aspire to make intuitive, elegant, and to-the-point websites, and implement smart and minimalist designs into my professional and personal life.</p>

                    <p><Link to="/contact" className={aboutStyles.workWithMe}>Want to work with me? Reach out.</Link></p>
                </div>
            </div>
       </Layout> 
    )
}

export default AboutPage
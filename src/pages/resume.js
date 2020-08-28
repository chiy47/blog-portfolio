import React from 'react'

import Layout from '../components/layout'
import resumeStyles from './resume.module.scss'
import Head from '../components/head'
import { Link } from 'gatsby'

const ResumePage = () => {
    return (
       <Layout>
           <Head title="Resume" />
           <div className={resumeStyles.container}>
               <section>
                   <div className={resumeStyles.profile}>
                       <div className={resumeStyles.name}>Chi Duong</div>
                       <div className={resumeStyles.title}>Full Stack Web Developer</div>
                       <div className={resumeStyles.location}>Maryland, USA</div>
                       <div className={resumeStyles.contact}><a href="mailto:chiduong4107@gmail.com" className={resumeStyles.linkItem}>chiduong4107@gmail.com</a></div>
                       <div className={resumeStyles.intro}>
                           <p>A technology enthusiast specializing in both backend and frontend tools
                            is eager to find work and build interesting projects!</p>
                        </div>   
                   </div>
               </section>

               <section className={resumeStyles.section}>
                    <div className={resumeStyles.sectionTitle}>Projects</div>
                    <div>
                        <div className={resumeStyles.job}>
                            <div className={resumeStyles.jobTitleContainer}>
                                <div>
                                    <div className={resumeStyles.jobTitle}>Blog and Portfolio: a personal blog and portfolio</div>
                                    <div className={resumeStyles.description}>
                                        <p>
                                        -powered by Contentful, GatsbyJS and Netlify
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    August 2020 - present
                                </div>
                            </div>
                        </div>
                    </div>
               </section>

               <section className={resumeStyles.section}>
                    <div className={resumeStyles.sectionTitle}>Education</div>
                    <div>
                        <div className={resumeStyles.job}>
                            <div className={resumeStyles.jobTitleContainer}>
                                <div>
                                    <div className={resumeStyles.jobTitle}>Bachelor of Computer Science</div>
                                    <div className={resumeStyles.jobCompany}>Towson University</div>
                                </div>
                                <div>
                                    August 2015 - December 2019
                                </div>
                            </div>
                            <div className={resumeStyles.jobTitleContainer}>
                                <div>
                                    <div className={resumeStyles.jobTitle}>Doris K. Lidtke Excellence in Service Award Scholarship</div>
                                    <div className={resumeStyles.jobTitle}>Dean’s List (4 semesters)</div>
                                    <div className={resumeStyles.jobCompany}>Towson University</div>
                                </div>
                                <div>
                                    May 2018
                                </div>
                            </div>
                        </div>
                    </div>
               </section>

               <section className={resumeStyles.section}>
                   <div className={resumeStyles.sectionTitle}>Technical Skills</div>
                   <div>
                        <div className={resumeStyles.skillsContainer}>
                           <ul>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                           </ul>
                           <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                           </ul>
                           <ul>
                                <li>GatsbyJS</li>
                                <li>Github</li>
                           </ul>
                       </div>
                   </div>
               </section>

               <section className={resumeStyles.section}>
                    <div className={resumeStyles.sectionTitle}>Work Experience</div>
                    <div>
                        <div className={resumeStyles.job}>
                            <div className={resumeStyles.jobTitleContainer}>
                                <div>
                                    <div className={resumeStyles.jobTitle}>Math Tutor</div>
                                    <div className={resumeStyles.jobCompany}>Towson University</div>
                                    <div className={resumeStyles.description}>
                                        <p>
                                        -tutored Calculus, Linear Algebra, and Statistics for students 
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    June 2017 - May 2018
                                </div>
                            </div>
                        </div>
                    </div>
               </section>

               
           </div>
        </Layout> 
    )
}

export default ResumePage
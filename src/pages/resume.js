import React from 'react'

import Layout from '../components/layout'
import resumeStyles from './resume.module.scss'
import Head from '../components/head'
import ResumePdfDownload from "../components/resumepdfdownload";

const ResumePage = () => {
    return (
       <Layout>
           <Head title="Resume" />
           <div className={resumeStyles.container}>
               <section className={resumeStyles.top}>
                   <div className={resumeStyles.profile}>
                       <div className={resumeStyles.name}>Chi Duong</div>
                       <div className={resumeStyles.title}>Full Stack Web Developer</div>
                       <div className={resumeStyles.location}>Maryland, USA</div>
                       <div className={resumeStyles.contact}>
                           <div>
                           <a href="mailto:chiduong4107@gmail.com">chiduong4107@gmail.com</a>
                           </div>
                           <div>
                           <a href="https://github.com/chiy47">https://github.com/chiy47</a>
                           </div>
                        </div>
                   </div>
                   <div>
                        <ResumePdfDownload />
                        <p className={resumeStyles.viewPdf}>(ctrl + click to review)</p>
                   </div>
                   <div className={resumeStyles.intro}>
                        <p>A technology enthusiast specializing in both backend and frontend tools
                            loves building interesting projects!</p>
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
                                        <div>-powered by Contentful, GatsbyJS and Netlify</div>
                                        <div>
                                            <a href="https://github.com/chiy47/blog-portfolio">-link: https://github.com/chiy47/blog-portfolio</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    Aug 2020 - present
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
                                    Jun 2017 - Dec 2019
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
                        <div className={resumeStyles.jobTitleContainer}>
                            <div className={resumeStyles.description}>
                                <div>Languages: JavaScript, HTML, CSS</div>
                                <div>Development: Node.js, Express, MongoDB, Gatsby.js</div>
                            </div>
                       </div>
                   </div>
               </section>

               <section className={resumeStyles.section}>
                    <div className={resumeStyles.sectionTitle}>Work</div>
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
                                    Jun 2017 - May 2018
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
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import resumeStyles from './resume.module.scss'
import Head from '../components/head'
import ResumePdfDownload from '../components/resumepdfdownload'
import portrait from '../components/images/portrait.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ResumePage = () => {
    return (
       <Layout>
           <Head title="Resume" />
           <h1 className={resumeStyles.resumeTitle}>Resume</h1>

           <div className={resumeStyles.pdfContainer}>
                <FontAwesomeIcon icon={["fas", "file-pdf"]} className={resumeStyles.pdfIcon} />
                <ResumePdfDownload />
            </div> 

           <div className={resumeStyles.container}>

               <section className={resumeStyles.top}>
                    <div className={resumeStyles.resumeImage}>
                       <img alt="graduated portrait" src={portrait}></img>
                   </div>
           
                   <div className={resumeStyles.profile}>
                       <div className={resumeStyles.name}>Chi Duong</div>
                       <div className={resumeStyles.title}>Full Stack Web Developer</div>

                       <div className={resumeStyles.profileInfo}>
                            <div className={resumeStyles.contact}>
                                <div className={resumeStyles.location}>
                                    <FontAwesomeIcon icon={["fas", "home"]} className={resumeStyles.icons} />
                                    Maryland, USA
                                </div>
                            
                                <div>
                                    <FontAwesomeIcon icon={["fas", "phone"]} className={resumeStyles.icons} />
                                    <a href="tel:240-584-3783">240-584-3783</a>
                                </div>

                                <div>   
                                    <FontAwesomeIcon icon={["fas", "envelope"]} className={resumeStyles.icons} />
                                    <a href="mailto:chiduong4107@gmail.com">chiduong4107@gmail.com</a>
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={["fab", "github"]} className={resumeStyles.icons} />
                                    <a href="https://github.com/chiy47">https://github.com/chiy47</a>
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={["fab", "linkedin"]} className={resumeStyles.icons} />
                                <a href="https://www.linkedin.com/in/chi-duong-b88098175">https://www.linkedin.com/in/chi-duong-b88098175</a>
                            </div>   
                        </div> 
                   </div>
                    </div>

               </section>

               <section className={resumeStyles.section}>
                   <div className={resumeStyles.sectionTitle}>Technical Skills</div>
                   <div className={resumeStyles.job}>
                        <div className={resumeStyles.skillTitleContainer}>
                            <div className={resumeStyles.jobTitle}>Languages</div>
                            <div className={resumeStyles.skill}>JavaScript, HTML, CSS/SASS</div>
                       </div>

                       <div className={resumeStyles.skillTitleContainer}>
                            <div className={resumeStyles.jobTitle}>Development</div>
                            <div className={resumeStyles.skill}>Node.js, Express.js, MongoDB, GraphQL, Gatsby.js, React</div>
                       </div>
                   </div>
               </section>

               <section className={resumeStyles.section}>
                    <div className={resumeStyles.sectionTitle}>Projects</div>
                    <div>
                        <div className={resumeStyles.job}>
                            <div className={resumeStyles.jobTitleContainer}>
                                <div className={resumeStyles.jobInfo}>
                                    <div className={resumeStyles.jobTitle}>Blog and Portfolio: a personal blog and portfolio</div>
                                    <div className={resumeStyles.description}>
                                        <div>-powered by CMS Contentful, Gatsby.js and Netlify</div>
                                        <div>
                                            <a href="https://www.chiquynhduong.com" target="blank">-link: https://www.chiquynhduong.com</a>
                                        </div>
                                        <div>
                                            <a href="https://github.com/chiy47/blog-portfolio" target="blank">-repo: https://github.com/chiy47/blog-portfolio</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={resumeStyles.date}>
                                    2020/08 - now
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
                                <div className={resumeStyles.jobInfo}>
                                    <div className={resumeStyles.jobTitle}>Bachelor of Computer Science</div>
                                    <div className={resumeStyles.jobCompany}>Towson University</div>
                                </div>
                                <div className={resumeStyles.date}>
                                    2017/06 - 2019/12
                                </div>
                            </div>
                            <div className={resumeStyles.jobTitleContainer}>
                                <div className={resumeStyles.jobInfo}>
                                    <div className={resumeStyles.jobTitle}>Doris K. Lidtke Excellence in Service Award Scholarship</div>
                                    <div className={resumeStyles.jobCompany}>Towson University</div>
                                    <div className={resumeStyles.description}>
                                    -a $3,000 scholarship for seniors in the Department of Computer and Information Sciences 
                                    with a 3.5 GPA and extracurricular involvement in tutoring and volunteer service
                                    </div>
                                </div>
                                <div className={resumeStyles.date}>
                                    2018/05
                                </div>
                            </div>
                            <div className={resumeStyles.jobInfo}>
                                <div className={resumeStyles.jobTitle}>Dean’s List (4 semesters)</div>
                                <div className={resumeStyles.jobCompany}>Towson University</div>
                            </div>
                        </div>
                    </div>
               </section>

               <section className={resumeStyles.section}>
                    <div className={resumeStyles.sectionTitle}>Work</div>
                    <div>
                        <div className={resumeStyles.job}>
                            <div className={resumeStyles.jobTitleContainer}>
                                <div className={resumeStyles.jobInfo}>
                                    <div className={resumeStyles.jobTitle}>Math Tutor</div>
                                    <div className={resumeStyles.jobCompany}>Towson University</div>
                                    <div className={resumeStyles.description}>
                                        -tutored Calculus, Linear Algebra, and Statistics for students 
                                    </div>
                                </div>
                                <div className={resumeStyles.date}>
                                    2017/06 - 2018/05
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
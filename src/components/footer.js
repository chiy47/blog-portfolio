import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.iconsContainer}>
                <div>
                    <a href="https://github.com/chiy47" target="blank"><FontAwesomeIcon icon={["fab", "github"]} className={footerStyles.icons} /></a> 
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/chi-duong-b88098175/" target="blank"><FontAwesomeIcon icon={["fab", "linkedin"]} className={footerStyles.icons} /></a> 
                </div>
        </div>
            <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
        </footer>
    )
}

export default Footer
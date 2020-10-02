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
                <div className={footerStyles.icons}>
                    <a href="https://github.com/chiy47" target="blank"><FontAwesomeIcon icon={["fab", "github"]} /></a> 
                </div>
                <div className={footerStyles.icons}>
                    <a href="https://www.linkedin.com/in/chi-duong-b88098175/" target="blank"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a> 
                </div>
        </div>
            <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
        </footer>
    )
}

export default Footer
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
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </div>
                <div className={footerStyles.icons}>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </div>
        </div>
            <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
        </footer>
    )
}

export default Footer
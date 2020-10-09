import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/" onClick={closeMobileMenu}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>

            
            <div className={headerStyles.icons} onClick={handleClick}>
                {click ? <FontAwesomeIcon icon={["fas", "times"]} />
                : <FontAwesomeIcon icon={["fas", "bars"]} />}
            </div>
              

            <nav>
                <ul className={click ? headerStyles.mobileNavList : headerStyles.navList} click={click}>
                     <li className={headerStyles.navLink}>
                       <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/" onClick={closeMobileMenu}>Home</Link> 
                    </li>
                    <li className={headerStyles.navLink}>
                       <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about" onClick={closeMobileMenu}>About</Link> 
                    </li>
                    <li className={headerStyles.navLink}>
                       <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/resume" onClick={closeMobileMenu}>Resume</Link> 
                    </li>
                    <li className={headerStyles.navLink}>
                       <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/project" onClick={closeMobileMenu}>Project</Link> 
                    </li>
                    <li className={headerStyles.navLink}>
                       <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog" onClick={closeMobileMenu}>Blog</Link> 
                    </li>
                    <li className={headerStyles.navLink}>
                       <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact" onClick={closeMobileMenu}>Contact</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
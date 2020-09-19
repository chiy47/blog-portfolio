import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

library.add(fab, faPhone, faEnvelope)

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children} 
            </div>
            <Footer />
        </div>
    )
}

export default Layout
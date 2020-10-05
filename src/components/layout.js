import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

library.add(fab, fas)

const Layout = (props) => {
    return (
        <div className={layoutStyles.margin}>
            <Header />

            <div className={layoutStyles.body}>
                {props.children} 
            </div>          

            <Footer />
        </div>
    )
}

export default Layout
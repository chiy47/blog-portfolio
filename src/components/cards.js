import React from 'react'

import CardItem from './cardItem'
import cardsStyles from './cards.module.scss'
import img from './images/blogportfolio.png'
import grey from './images/grey_background.jpg'

const Cards = () =>  {
    return (
        <div className={cardsStyles.cards}>
            <h2 className={cardsStyles.cardsIntro}>Check out these projects!</h2>
            <div className={cardsStyles.cardsContainer}>
                    <ul className={cardsStyles.cardsItems}>
                        <li>
                            <CardItem 
                                src={img}
                                text='Blog and Portfolio'
                                label={['Gatsby','graphQL', 'Contentful']}
                                demo='https://musing-swirles-ab27a1.netlify.app/'
                                repo='https://github.com/chiy47/blog-portfolio'
                            />
                        </li> 
                        <li>
                            <CardItem 
                                src={grey}
                                text= 'Will Be Updated'
                                label={['tool1','tool2']}
                                demo='/services'
                                repo='/services'
                            />
                        </li> 
                        <li>
                            <CardItem 
                                src={grey}
                                text= 'Will Be Updated'
                                label={['tool1','tool2']}
                                demo='/services'
                                repo='/services'
                            />
                        </li>
                        <li>
                            <CardItem 
                                src={grey}
                                text= 'Will Be Updated'
                                label={['tool1','tool2']}
                                demo='/services'
                                repo='/services'
                            />
                        </li>    
                    </ul>
            </div>
        </div>
    )
}

export default Cards
import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import cardsStyles from './cards.module.scss'

const CardItem = (props) => {
    const cardsList = props.label.map((label) => 
        <li className={cardsStyles.toolsItem} key={label.toString()}>{label}</li>)

    return (
        <div className={cardsStyles.cardItem}>
            <figure className={cardsStyles.picWrapper}>     
                <img src={props.src} alt="Blog/Portfolio" className={cardsStyles.img} />
            </figure>
            <div className={cardsStyles.cardItemInfo}>
                <h5 className={cardsStyles.cardItemText}>{props.text}</h5>
                <ul className={cardsStyles.tools}>{cardsList}</ul> 
                <ul className={cardsStyles.iconsList}>
                    <Link className={cardsStyles.icon} to={props.demo} target="blank"><FontAwesomeIcon icon={["fas", "link"]} /></Link>
                    <Link className={cardsStyles.icon} to={props.repo} target="blank"><FontAwesomeIcon icon={["fab", "github"]} /></Link>
                </ul>
            </div>
        </div>
    )
}

export default CardItem;
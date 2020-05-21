import React from 'react'
import './Card.scss'

const Card = ({ title, info, footer }) => {
    return (
        <div className="card__wrap">
            <div className="content__right-card">
                <div className="body-card">
                    <h3 className='content__card-title'>{title}</h3>
                    <h2 className="content__card-info">{info}</h2>
                    <h3 className="content__card-footer">{footer}</h3>
                </div>
            </div>
        </div>

    )
}
export default Card
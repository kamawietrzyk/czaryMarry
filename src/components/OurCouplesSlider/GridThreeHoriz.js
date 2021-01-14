import React from 'react'
import './styles.scss'

const GridThreeHoriz = ({ picOne, picTwo, picThree, className }) => (
    <div className={`grid-${className} slider-box`}>
        <div className="image pic-main">
            <img src={picOne} alt={picOne} />
        </div>
        <div className="image pic-small1">
            <img src={picTwo} className="height-auto" alt={picTwo} />
        </div>
        <div className="image pic-small2">
            <img src={picThree} className="height-auto" alt={picThree} />
        </div>
    </div>
)

export default GridThreeHoriz
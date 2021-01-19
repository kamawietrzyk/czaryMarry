import React from 'react'
import './styles.scss'

const GridVertHoriz = ({ picOne, picTwo }) => (
    <div className="grid-vertHoriz slider-box">
        <div className="image ver">
            <img src={picOne} alt={picOne} />
        </div>
        <div className="image horiz">
            <img src={picTwo} alt={picTwo} />
        </div>
    </div>
)

export default GridVertHoriz
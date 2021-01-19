import React from 'react'
import './styles.scss'

const GridEven = ({ picOne, picTwo }) => (
    <div className="grid-even slider-box">
        <div className="image">
            <img src={picOne} alt={picOne} />
        </div>
        <div className="image">
            <img src={picTwo} alt={picTwo} />
        </div>
    </div>
)

export default GridEven
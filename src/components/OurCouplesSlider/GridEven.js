import React from 'react'
import './styles.scss'

const GridEven = ({ picOne, picTwo }) => (
    <div className="grid-even slider-box">
        <div className="image">
            <img src={picOne} alt="ft1" />
            <div className="overlay"></div>
        </div>
        <div className="image">
            <img src={picTwo} alt="ft2" />
            <div className="overlay"></div>
        </div>
    </div>
)

export default GridEven
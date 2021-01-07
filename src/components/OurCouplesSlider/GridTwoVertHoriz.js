import React from 'react'
import './styles.scss'

const GridTwoVertHoriz = ({ picVer1, picVer2, picHoriz, className }) => (
    <div className={`grid-${className} slider-box`}>
    <div className="image pic-ver1">
        <img src={picVer1} alt="ft-ver1" />
        <div className="overlay"></div>
    </div>
    <div className="image pic-ver2">
        <img src={picVer2} alt="ft-ver2" />
        <div className="overlay"></div>
    </div>
    <div className="image pic3">
        <img src={picHoriz} alt="ft3" />
        <div className="overlay"></div>
    </div>
</div>
)

export default GridTwoVertHoriz
import React from 'react'
import './styles.scss'

const GridTwoVertHoriz = ({ picVer1, picVer2, picHoriz, className }) => (
    <div className={`grid-${className} slider-box`}>
    <div className="image pic-ver1">
        <img src={picVer1} alt={picVer1} />
    </div>
    <div className="image pic-ver2">
        <img src={picVer2} alt={picVer2} />
    </div>
    <div className="image pic3">
        <img src={picHoriz} alt={picHoriz} />
    </div>
</div>
)

export default GridTwoVertHoriz
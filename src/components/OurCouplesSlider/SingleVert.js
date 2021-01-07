import React from 'react'
import './styles.scss'

const SingleVert = ({ picOne }) => (
    <div className="grid-singleVert slider-box">
        <div className="image">
            <img src={picOne} alt="" />
            <div className="overlay"></div>
        </div>
    </div>
)

export default SingleVert
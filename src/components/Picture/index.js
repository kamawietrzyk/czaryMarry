import React from 'react'
import './styles.scss'

const Picture = ({ item, className = "" }) => (
    <div className={`Picture ${className}`}>
        <img src={item.src} alt={item.author ? item.author : item.src} />
        {item.author && <p className="photo">Fot. {item.author}</p>}
    </div>
)

export default Picture
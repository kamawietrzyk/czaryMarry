import React from 'react'
import './styles.scss'

const Picture = ({ src, author }) => (
    <div className="Picture">
        <img src={src} alt={author} />
        <p>Fot. {author}</p>
    </div>
)

export default Picture
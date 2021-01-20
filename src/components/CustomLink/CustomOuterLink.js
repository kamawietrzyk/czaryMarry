import React from 'react'
import './styles.scss'

const CustomOuterLink = ({ to, text }) => (
    <a className="CustomLink" href={to} target="_blank" rel="noopener noreferrer">
        {text}
    </a>
)

export default CustomOuterLink
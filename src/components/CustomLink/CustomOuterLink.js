import React from 'react'
import './styles.scss'

const CustomOuterLink = ({ to, text, className }) => (
    <a className={`CustomLink ${className}`} href={to} target="_blank" rel="noopener noreferrer">
        {text}
    </a>
)

export default CustomOuterLink
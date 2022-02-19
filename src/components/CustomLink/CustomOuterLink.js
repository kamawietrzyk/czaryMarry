import React from 'react'
import './styles.scss'

const CustomOuterLink = ({ to, text, className, asFB }) => (
    // eslint-disable-next-line
    <a className={`CustomLink ${className}`} href={to} target="_blank" rel={`noopener noreferrer ${asFB ? "nofollow" : ""}`}>
        {!text ? to : text}
    </a>
)

export default CustomOuterLink
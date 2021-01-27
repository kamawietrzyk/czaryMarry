import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import URLS from '../../utils/urls'
import './styles.scss'

const CustomInnerLink = ({ path, text, className = "", target }) => (
    <Link className={`CustomLink ${className}`} to={generatePath(URLS.POST, { url: path })} target={target}>
        {text}
    </Link>
)

export default CustomInnerLink
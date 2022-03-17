import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import './styles.scss'
import URLS from '../../utils/urls'

const CustomRealisationLink = ({ path, text, className = "" }) => (
    <Link className={`CustomLink ${className}`} to={generatePath(URLS.COUPLES_EVENT, { path: path })} target="_blank">
        {text}
    </Link>
)

export default CustomRealisationLink
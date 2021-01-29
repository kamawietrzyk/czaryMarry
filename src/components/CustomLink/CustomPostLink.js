import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import './styles.scss'
import URLS from '../../utils/urls'

const CustomPostLink = ({ path, text, className = "" }) => (
    <Link className={`CustomLink ${className}`} to={generatePath(URLS.POST, { path: path })} target="_blank">
        {text}
    </Link>
)

export default CustomPostLink
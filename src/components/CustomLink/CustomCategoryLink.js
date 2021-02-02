import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import './styles.scss'
import URLS from '../../utils/urls'

const CustomCategoryLink = ({ path, text, className = "" }) => (
    <Link className={`CustomLink ${className}`} to={generatePath(URLS.CATEGORY, { tag: path })}>
        {text}
    </Link>
)

export default CustomCategoryLink
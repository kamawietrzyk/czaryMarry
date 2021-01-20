import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import URLS from '../../utils/urls'
import './styles.scss'

const CustomInnerLink = ({ path, text }) => (
    <Link className="CustomLink" to={generatePath(URLS.POST, { url: path })}>
        {text}
    </Link>
)

export default CustomInnerLink
import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import URLS from '../../utils/urls'
import './styles.scss'

const PostPreviewSmall = ({ mainPic, title, path }) => (
    <Link className="custom-link" to={generatePath(URLS.POST, { url: path })}>
        <div className="PostPreviewSmall">
            <img src={mainPic.src} alt={title} />
            <h2 className="postSmall-title">{title}</h2>
        </div>
    </Link>
)

export default PostPreviewSmall

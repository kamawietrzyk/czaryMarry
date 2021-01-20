import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import URLS from '../../utils/urls'
import './styles.scss'

const PostPreviewSmall = ({ mainPic, title, path }) => (
    <div className="PostPreviewSmall">
        <Link className="custom-link" to={generatePath(URLS.POST, { url: path })}>
            <img src={mainPic} alt={title} />
            <h2 className="postSmall-title">{title}</h2>
        </Link>
    </div>
)

export default PostPreviewSmall

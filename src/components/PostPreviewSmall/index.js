import React from 'react'
import './styles.scss'

const PostPreviewSmall = ({ mainPic, title }) => (
    <div className="PostPreviewSmall">
        <img src={mainPic} alt={title} />
        <h2>{title}</h2>
        <hr />
    </div>
)

export default PostPreviewSmall

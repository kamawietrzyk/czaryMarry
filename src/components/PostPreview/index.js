import React from 'react'
import './styles.scss'

const PostPreview = ({ posts }) => (
    <div className="PostPreview">
        {posts.map(({ title, tag }) => (
            <div className="PostPreview-item">
                <h2>{title}</h2>
                <p>{tag}</p>
            </div>
        ))}
    </div>
)

export default PostPreview
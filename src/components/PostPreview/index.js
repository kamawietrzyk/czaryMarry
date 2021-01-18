import React from 'react'
import './styles.scss'

const PostPreview = ({ posts }) => (
    <div className="PostPreview">
        {posts.map(({ title, tag }, index) => (
            <div className="PostPreview-item" key={index}>
                <h2>{title}</h2>
                <p>{tag}</p>
            </div>
        ))}
    </div>
)

export default PostPreview
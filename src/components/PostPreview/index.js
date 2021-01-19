import React from 'react'
import './styles.scss'

const PostPreview = ({ posts }) => (
    <div className="PostPreview">
        {posts.map(({ title, date, pic }, index) => (
            <div className="PostPreview-mobile" key={index}>
                <div className="overlay-div">
                    <p>{date}</p>
                    <h2>{title}</h2>
                </div>
                <img src={pic} alt={title} />
            </div>
        ))}
    </div>
)

export default PostPreview
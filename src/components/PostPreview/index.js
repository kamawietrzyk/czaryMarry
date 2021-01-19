import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import URLS from '../../utils/urls'
import './styles.scss'

const PostPreview = ({ posts }) => (
    <div className="PostPreview">
        {posts.map(({ title, date, mainPic, textShort, path }, index) => (
            <Link className="custom-link" to={generatePath(URLS.POST, { url: path })} key={index}>
                <div className="PostPreview-mobile">
                    <div className="overlay-div">
                        <p>{date}</p>
                        <h2>{title}</h2>
                    </div>
                    <img src={mainPic} alt={title} />
                </div>
                <div className="PostPreview-desktop">
                    <img src={mainPic} alt={title} />
                    <div className="content-div">
                        <h2>{title}</h2>
                        <hr />
                        <p>{textShort}</p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
)

export default PostPreview
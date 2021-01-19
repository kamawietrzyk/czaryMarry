import React from 'react'
import { Link, withRouter, useParams } from 'react-router-dom'
import PostPreviewSmall from '../PostPreviewSmall'
import posts from '../../utils/posts'
import './styles.scss'
import URLS from '../../utils/urls'

const PostPage = () => {
    const { url } = useParams()
    const selectedPost = posts.find(post => post.path === url)
    // const relatedPost = posts.slice(1, 4)

    const { title, date, mainPic } = selectedPost

    return (
        <div className="PostPage">
            <Link to={URLS.BLOG} className="btn">
            &laquo;  Wróć do Bloga
            </Link>
            <div className="PostPage-content">
                <p>{date}</p>
                <h2>{title}</h2>
                <img src={mainPic} alt={title} />
            </div>
            <div className="PostPage-suggestions">
                {/* {relatedPost.map((item, index) =>
                    <PostPreviewSmall key={index} {...item} />
                )} */}
            </div>
        </div>
    )
}

export default withRouter(PostPage)
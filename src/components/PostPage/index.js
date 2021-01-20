import React from 'react'
import { Link, withRouter, useParams } from 'react-router-dom'
import PostPreviewSmall from '../PostPreviewSmall'
import URLS from '../../utils/urls'
import posts from '../../utils/posts'
import './styles.scss'
import logo from '../../utils/czarymarry_logo.png'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import ToTopOnUpdate from '../ToTopOnUpdate'
import Picture from '../Picture'
import CustomInnerLink from '../CustomLink/CustomInnerLink'
import CustomOuterLink from '../CustomLink/CustomOuterLink'
import ArrowToTop from '../ArrowToTop'

const PostPage = () => {
    const { url } = useParams()
    const selectedPost = posts.find(post => post.path === url)
    const relatedPost = posts.slice(1, 4)

    const { title, date, edited, mainPic, author, path } = selectedPost

    return (
        <>
        <ScrollToTopOnMount />
        <ToTopOnUpdate />
        <ArrowToTop />
        <div className="PostPage">
            <div className="PostPage-content">
                <div className="header-box">
                    <img className="logo" src={logo} alt="Czary Marry logo" />
                    <span>
                        <p className="author">Kasia&Ola</p>
                        <p className="date">{date}</p>
                    </span>
                </div>
                <h2 className="post-title">{title}</h2>
                {edited && <p className="date">Aktualizacja: {edited}</p>}
                <p className="mt-4">
                Lorem ipsum <CustomInnerLink path={path} text="Folwark Wąsowo"/>, consectetur adipiscing elit. Nulla sit amet libero at diam suscipit malesuada. Nullam porttitor nisl sed tempor ornare. Etiam consectetur auctor rutrum. Nulla sed metus dignissim, sollicitudin mi a, tempus lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim nisi vel elit imperdiet <CustomOuterLink to="https://www.ksiaz.walbrzych.pl/" text="Zamek Ksiąz" /> bibendum. Sed egestas, felis at pulvinar scelerisque, diam orci tristique elit, ac lobortis tortor nibh eu justo. Aliquam erat volutpat.
                </p>
                <Picture src={mainPic} author={author} />
                <p>Sed non diam dui. Nullam vitae molestie tellus, ac pharetra ante. Morbi nisl nisi, laoreet nec elit cursus, vehicula faucibus diam. Quisque magna est, interdum eget iaculis a, pharetra et magna. Proin arcu risus, sagittis vel nunc sit amet, auctor viverra nisl. Vivamus quis tortor sit amet turpis sagittis facilisis. Nulla ac molestie dolor. Aliquam erat volutpat. Sed ut feugiat magna. Aliquam quis aliquet ligula. Phasellus suscipit mollis nisi, tempor condimentum orci pharetra eget. Morbi vulputate dui ante, faucibus rhoncus nisl aliquam et. Donec facilisis a dolor aliquam euismod.</p>
                <hr />

            </div>
            <Link to={URLS.BLOG} className="btn">Wróć do Bloga</Link>
            <div className="PostPage-suggestions">
                <h3>Ostatnie posty</h3>
                <div className="content">
                    {relatedPost.map((item, index) =>
                        <PostPreviewSmall key={index} {...item} />
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default withRouter(PostPage)
import React from 'react'
import { Link, withRouter, useParams } from 'react-router-dom'
import PostPreviewSmall from '../PostPreviewSmall'
import URLS from '../../utils/urls'
import posts from '../../utils/posts'
import './styles.scss'
import logo from '../../utils/czarymarry_logo.png'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import Picture from '../Picture'
import ArrowToTop from '../ArrowToTop'
import ToStartOnUpdate from '../ToStartOnUpdate'
// import SeoContent from '../SeoContent'

    // const APP_URL = process.env.REACT_APP_BASE_URL

    // const { title, seoTitle, seoText, path, mainPic } = posts
    // const seoPath = generatePath(URLS.POST, { url: path })

    // const seo = {
    //     title: {seoTitle ? seoTitle : title},
    //     description: seoText,
    //     url: `${APP_URL}${seoPath}`,
    //     image: mainPic.src
    // }

const PostPage = () => {
    const { url } = useParams()
    const selectedPost = posts.find(post => post.path === url)
    const relatedPost = posts.slice(0, 3)

    const { title, date, edited, topPic, textMain, content, textAuthor, links, extras } = selectedPost

    return (
        <>
            {/* <SeoContent {...seo} /> */}
            <ScrollToTopOnMount />
            <ToStartOnUpdate />
            <ArrowToTop />
            <div className="PostPage">
                <div className="PostPage-content">
                    <div className="header-box">
                        <img className="logo" src={logo} alt="Czary Marry logo" />
                        <div>
                            <p className="author">• Kasia&Ola •</p>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                    <h2 className="post-title">{title}</h2>
                    {edited && <p className="date">Aktualizacja: {edited}</p>}
                    <p className="mt-5">
                        {textMain}
                    </p>
                    {topPic &&
                        <Picture item={topPic} />
                    }
                    {content && content.map(({ headerSmall, pics, text }, index) => (
                        <div className="mb-4" key={index}>
                            <h3 className="subheader">{headerSmall}</h3>
                            <p>{text}</p>
                            {pics && pics.map((pic, index) => (
                                <Picture className="my-2" item={pic} key={index} />))}
                        </div>
                    ))}
                    {textAuthor &&
                        <p className="bold my-5">{textAuthor}</p>
                    }
                    {links &&
                        <div className="my-5">
                            {links}
                        </div>
                    }
                    {extras &&
                        <div className="extras">
                            <hr className="mb-4 mt-0" />
                            {extras}
                            <hr className="mb-0 mt-4" />
                        </div>
                    }
                </div>
                <Link to={URLS.BLOG} className="btn">« Wróć do Bloga</Link>
                <div className="PostPage-suggestions">
                    <h3>Ostatnie posty</h3>
                    <div className="box">
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
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import signal from '../Icons/signal.svg'
import './styles.scss'
import Pagination from '../Pagination'
import PostPreview from '../PostPreview'
import FiltersBar from '../FiltersBar'


const posts = [
    { title: "tytuł 1", tag: "tag1" },
    { title: "tytuł 2", tag: "tag2" },
    { title: "tytuł 3", tag: "tag3" },
    { title: "tytuł 4", tag: "tag4" },
    { title: "tytuł 5", tag: "tag5" },
    { title: "tytuł 6", tag: "tag6" },
    { title: "tytuł 7", tag: "tag7" },
    { title: "tytuł 8", tag: "tag8" },
    { title: "tytuł 9", tag: "tag9" },
    { title: "tytuł 10", tag: "tag10" },
    { title: "tytuł 11", tag: "tag11" },
    { title: "tytuł 12", tag: "tag12" },
    { title: "tytuł 13", tag: "tag6" },
    { title: "tytuł 14", tag: "tag7" },
    { title: "tytuł 15", tag: "tag8" },
    { title: "tytuł 16", tag: "tag9" },
    { title: "tytuł 17", tag: "tag10" },
    { title: "tytuł 18", tag: "tag11" },
    { title: "tytuł 19", tag: "tag12" },
    { title: "tytuł 1", tag: "tag1" },
    { title: "tytuł 2", tag: "tag2" },
    { title: "tytuł 3", tag: "tag3" },
    { title: "tytuł 4", tag: "tag4" },
    { title: "tytuł 5", tag: "tag5" },
    { title: "tytuł 6", tag: "tag6" },
    { title: "tytuł 7", tag: "tag7" },
    { title: "tytuł 8", tag: "tag8" },
    { title: "tytuł 9", tag: "tag9" },
    { title: "tytuł 10", tag: "tag10" },
    { title: "tytuł 11", tag: "tag11" },
    { title: "tytuł 12", tag: "tag12" },
    { title: "tytuł 13", tag: "tag6" },
    { title: "tytuł 14", tag: "tag7" },
    { title: "tytuł 15", tag: "tag8" },
    { title: "tytuł 16", tag: "tag9" },
    { title: "tytuł 17", tag: "tag10" },
    { title: "tytuł 18", tag: "tag11" },
    { title: "tytuł 19", tag: "tag12" }
]

const Blog = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 5
    const totalPages = Math.ceil(posts.length / postsPerPage)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const slicedPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const onPageChange = (pageNum, isSwitch) => (e) => {
        e.preventDefault();
        if (isSwitch) {
            return setCurrentPage(pageNum);
        };
        return setCurrentPage(currentPage + pageNum);
    }

    return (
        <div className="Blog main-div">
            <ScrollToTopOnMount />
            <ArrowToTop />
            <div className="page-header">
                <span className="num-span number">04</span>
                <h2 className="page-title">Blog</h2>
                <div className="icon-wrapper">
                    <img src={signal} alt="signal icon" />
                </div>
            </div>
            <p className="main-header">
                O ślubach i weselach wiemy dużo... naprawdę dużo. Dodatkowo bardzo lubimy dzielić się swoją wiedzą i doświadczeniem. Zapraszamy więc do naszego małego świata pełnego porad oraz inspiracji ślubnych. Mamy nadzieję, że czytając naszego bloga zobaczycie, jak bardzo uwielbiamy swoją pracę.
                </p>
            <div className="bg-grey">
                <FiltersBar />
            </div>
            <div className="Blog-content">
                <PostPreview posts={slicedPosts} />
                <Pagination onChange={onPageChange} currentPage={currentPage} totalPages={totalPages} />
            </div>
        </div>
    )
}

export default Blog

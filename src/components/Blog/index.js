import React, { useState } from 'react'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import signal from '../Icons/signal.svg'
import './styles.scss'
import Pagination from '../Pagination'
import PostPreview from '../PostPreview'
import FiltersBar from '../FiltersBar'
import posts from '../../utils/posts'
import ToTopOnUpdate from '../ToTopOnUpdate'

const Blog = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [clickedTab, setClickedTab] = useState("wszystkie")

    const postsPerPage = 5
    const totalPages = Math.ceil(posts.length / postsPerPage)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const slicedPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const filteredData = posts.filter(post => {
        return post.tag && post.tag.toLowerCase() === clickedTab.toLowerCase()});

    const totalFilteredPages = Math.ceil(filteredData.length /postsPerPage)

    const filters = [
        { name: "Wszystkie wpisy", tag: "wszystkie" },
        { name: "Niezbędnik przedŚLUBNY", tag: "niezbędnik" },
        { name: "Opowiadamy o naszych realizacjach", tag: "realizacje" },
        { name: "Wesela stulecia", tag: "stulecie" },
        { name: "Ślubne opowieści, czyli wesela dawniej", tag: "opowieści" },
        { name: "Śluby i wesela na świecie", tag: "świat" },
        { name: "Podcast", tag: "podcast" }
    ]

    const onFilterSelect = (tag) => (e) => {
        e.preventDefault();
        setClickedTab(tag);
    }

    const onPageChange = (pageNum, isSwitch) => (e) => {
        e.preventDefault();
        if (isSwitch) {
            return setCurrentPage(pageNum);
        };
        return setCurrentPage(currentPage + pageNum);
    }

    return (
        <div className="Blog">
            <ScrollToTopOnMount />
            <ToTopOnUpdate />
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
                <FiltersBar filters={filters} onFilterSelect={onFilterSelect} />
            </div>
            <div className="Blog-content">
                <PostPreview posts={clickedTab === "wszystkie" ? slicedPosts : filteredData} />
            </div>
            <Pagination onChange={onPageChange} currentPage={currentPage} totalPages={clickedTab === "wszystkie" ? totalPages : totalFilteredPages } />
        </div>
    )
}

export default Blog

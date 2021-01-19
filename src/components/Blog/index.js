import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import signal from '../Icons/signal.svg'
import './styles.scss'
import Pagination from '../Pagination'
import PostPreview from '../PostPreview'
import FiltersBar from '../FiltersBar'
import bgOne from '../OurCouples/OurCouplesPics/FoodtruckWedding/ft4.JPG'
import bgTwo from '../OurCouples/OurCouplesPics/FoodtruckWedding/ft8.JPG'


const posts = [
    { title: "Folwark Wąsowo - miejsce na wesele dające nieograniczone mozliwości", date: "12 sty 2021", pic: bgOne},
    { title: "tytuł 2", date: "14 sty 2021", pic: bgTwo },
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

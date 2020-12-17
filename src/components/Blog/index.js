import React from 'react'
// import { Link } from 'react-router-dom'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import signal from '../Icons/signal.svg'
import './styles.scss'

const Blog = () => {

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
            <div className="Blog-content">

            </div>
        </div>
    )
}

export default Blog

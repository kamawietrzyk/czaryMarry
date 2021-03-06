import React from 'react'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import './styles.scss'
import Pagination from '../Pagination'
import PostPreview from '../PostPreview'
import FiltersBar from '../FiltersBar'
import posts from '../../utils/posts'
import ToTopOnUpdate from '../ToTopOnUpdate'
import { useHistory, useParams } from 'react-router-dom'
import URLS from '../../utils/urls'
import logo from '../../utils/czarymarry_logo.png'
import SeoContent from '../SeoContent';

const APP_URL = process.env.REACT_APP_BASE_URL

const seo = {
    title: 'Blog | agencja ślubna | Czary Marry',
    description: 'Blog agencji ślubnej Czary Marry - porady, aktualności, inspiracje i praktyczne wskazówki.',
    url: `${APP_URL}${URLS.BLOG}`,
    image: logo
}

const Blog = () => {
    let { tag, page: currentPage } = useParams()
    const history = useHistory()

    if (!currentPage) {
        currentPage = 1
    }

    const postsPerPage = 5
    const totalPages = Math.ceil(posts.length / postsPerPage)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const slicedPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    let filteredData = posts.filter(post => {
        return !tag || (post.tag && post.tag.toLowerCase() === tag.toLowerCase());
    });

    const slicedFiltered = filteredData.slice(indexOfFirstPost, indexOfLastPost)

    const totalFilteredPages = Math.ceil(filteredData.length / postsPerPage)

    const filters = [
        { name: "Niezbędnik przedŚLUBNY", tag: "niezbędnik-przedslubny" },
        { name: "Opowiadamy o naszych realizacjach", tag: "opowiadamy-o-naszych-realizacjach" },
        { name: "Wesela stulecia", tag: "wesela-stulecia" },
        { name: "Ślubne opowieści, czyli wesela dawniej", tag: "ślubne-opowieści-czyli-wesela-dawniej" },
        { name: "Śluby i wesela na świecie", tag: "śluby-i-wesela-na-świecie" },
        { name: "Podcast", tag: "podcast" }
    ]

    const onFilterSelect = (tag) => (e) => {
        e.preventDefault();
        history.push(tag === 'wszystkie-wpisy' ? URLS.BLOG : URLS.CATEGORY.replace(":tag", tag));
    }

    const setCurrentPage = (page) => {
        if (parseInt(page) === 1) {
            history.push(!tag
                ? URLS.BLOG
                : URLS.CATEGORY.replace(":tag", tag));
        } else {
            history.push(!tag
                ? URLS.BLOG_PAGE.replace(':page', page)
                : URLS.CATEGORY_PAGE.replace(':tag', tag).replace(':page', page));
        }
    }

    const onPageChange = (pageNum, isSwitch) => (e) => {
        e.preventDefault();
        if (isSwitch) {
            return setCurrentPage(pageNum);
        };
        return setCurrentPage(parseInt(currentPage) + pageNum);
    }

    return (
        <div className="Blog">
            <ScrollToTopOnMount />
            <SeoContent {...seo} />
            <ToTopOnUpdate />
            <ArrowToTop />
            <div className="page-header">
                <span className="num-span number">05</span>
                <h2 className="page-title">Blog</h2>
            </div>
            <p className="main-header">
                O ślubach i weselach wiemy dużo... naprawdę dużo. Dodatkowo bardzo lubimy dzielić się swoją wiedzą i doświadczeniem. Zapraszamy więc do naszego małego świata pełnego porad oraz inspiracji ślubnych. Mamy nadzieję, że czytając naszego bloga zobaczycie, jak bardzo uwielbiamy swoją pracę.
                </p>
            <div className="bg-grey">
                <FiltersBar filters={filters} onFilterSelect={onFilterSelect} selectedTag={tag} />
            </div>
            <div className="Blog-content">
                <PostPreview posts={!tag ? slicedPosts : slicedFiltered} />
            </div>
            <Pagination onChange={onPageChange} currentPage={currentPage} totalPages={!tag ? totalPages : totalFilteredPages} />
        </div>
    )
}

export default Blog

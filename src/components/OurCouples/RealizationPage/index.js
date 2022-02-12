import React from 'react'
import { Link, withRouter, useParams, generatePath } from 'react-router-dom'
import URLS from '../../../utils/urls'
import ScrollToTopOnMount from '../../ScrollToTopOnMount'
// import Picture from '../Picture'
import ArrowToTop from '../../ArrowToTop'
import ToStartOnUpdate from '../../ToStartOnUpdate'
import SeoContent from '../../SeoContent'
import PageNotFound from '../../PageNotFound'
import weddings from '../weddings'
import logo from '../../../utils/czarymarry_logo.png'
import './styles.scss'


const APP_URL = process.env.REACT_APP_BASE_URL

const RealizationPage = () => {
    const { path } = useParams()
    const selectedRealization = weddings.find(item => item.path === path);

    if (!selectedRealization) {
        return (
            <PageNotFound />
        )
    }

    const { title, seoTitle, seoText, mainPic, date } = selectedRealization;

    const seoPath = selectedRealization.path;

    const seo = {
        title: !seoTitle ? title : seoTitle,
        description: seoText,
        url: `${APP_URL}${generatePath(URLS.COUPLES, { path: seoPath })}`,
        image: mainPic.src
    }

    return (
        <>
            <SeoContent {...seo} />
            <ScrollToTopOnMount />
            <ToStartOnUpdate />
            <ArrowToTop />
            <div className='RealizationPage'>
                <main className='RealizationPage-main'>
                    <header>
                        <div className="header-box">
                            <img className="logo" src={logo} alt="Czary Marry logo" />
                            <div>
                                <p className="author">• Kasia&Ola •</p>
                                <p className="date">{date}</p>
                            </div>
                        </div>
                        <h1 className="post-title">{title}</h1>
                    </header>
                </main>
                <Link to={URLS.COUPLES} className="btn">« Wróć do Realizacji</Link>
            </div>
        </>
    )
}

export default withRouter(RealizationPage);
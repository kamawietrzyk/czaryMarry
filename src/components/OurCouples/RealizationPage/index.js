import React from 'react'
import { Link, withRouter, useParams, generatePath } from 'react-router-dom'
import URLS from '../../../utils/urls'
import ScrollToTopOnMount from '../../ScrollToTopOnMount'
import Picture from '../../Picture'
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

    const { bgColor, title, seoTitle, seoText, date, mainPic, textMain, topPic, content, extras } = selectedRealization;

    const resolveColor = (color) => {
        switch (color) {
            case "bgDark": {
                return "darkTheme"
            }
            case "bgGrey": {
                return "greyTheme"
            }
            case "bgMint": {
                return "mintTheme"
            }
            case "bgPink": {
                return "pinkTheme"
            }
            default: {
                return "dark"
            }
        }
    }

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
                <main className={`RealizationPage-main RealizationPage-main_${resolveColor(bgColor)}`}>
                    <div className="header-box">
                        <img className="logo" src={logo} alt="Czary Marry logo" />
                        <div>
                            <p className="author">• Kasia&Ola •</p>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                    <h1 className="post-title">{title}</h1>
                    <p className="mt-5">
                        {textMain}
                    </p>
                    {topPic &&
                        <Picture item={topPic} />
                    }
                    <section>
                        {content && content.map(({ headerClassName, headerSmall, pics, text, extraContent, extraContentClassName }, index) => (
                            <article className="mb-4" key={index}>
                                <h2 className={`subheader ${headerClassName}`}>{headerSmall}</h2>
                                <p>{text}</p>
                                {extraContent &&
                                    <div className={`extra-content ${extraContentClassName}`}>{extraContent}</div>}
                                {pics && pics.map((pic, index) => (
                                    <Picture className="my-2" item={pic} key={index} />))}
                            </article>
                        ))}
                    </section>

                    {extras &&
                        <section>
                            <div className="extras">
                                <hr className="mb-4 mt-0" />
                                {extras}
                                <hr className="mb-0 mt-4" />
                            </div>
                        </section>
                    }

                </main>
                <Link to={URLS.COUPLES} className={`btn btn_${resolveColor(bgColor)}`}>« Wróć do Realizacji</Link>
            </div>
        </>
    )
}

export default withRouter(RealizationPage);
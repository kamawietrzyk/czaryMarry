import React from 'react'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import weddings from '../OurCouples/weddings'
import './styles.scss'
import URLS from '../../utils/urls'
import logo from '../../utils/czarymarry_logo.png'
import SeoContent from '../SeoContent';
import { OurCouplesContent } from './OurCouplesContent'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'

const APP_URL = process.env.REACT_APP_BASE_URL
const seo = {
    title: 'Referencje organizatorek wesel | Czary Marry',
    description: 'Dowiedz się, co sądzą o organizatorach wesel nasze pary. Poznaj referencje i opinie o Czary Marry.',
    url: `${APP_URL}${URLS.COUPLES}`,
    image: logo
}

const OurCouples = () => (
    <div className="OurCouples custom-div">
        <ScrollToTopOnMount />
        <SeoContent {...seo} />
        <ArrowToTop />
        <div className="page-header">
            <span className="number">03</span>
            <h2 className="page-title smaller">Nasze pary</h2>
        </div>
        <div className="OurCouples-content">
            <h1 className="main-header">
                Takimi momentami należy się chwalić, dlatego zachęcamy do zapoznania się z naszymi realizacjami.
            </h1>
            {weddings.map((item, index) => (
                <>
                    {item.path &&
                        <div key={index} className={`OurCouples-content_grid ${index % 2 && "flipped"} ${item.minHeight && "with-min-height"}`}>
                            <Link className="mainPic-wrapper photos" to={generatePath(URLS.COUPLES_EVENT, { path: item.path })}>
                                <img src={item.mainPic.src} alt={item.mainPic.src} />
                            </Link>
                            <OurCouplesContent {...item} />
                        </div>
                    }
                </>
            ))}
        </div>
    </div >
)

export default OurCouples
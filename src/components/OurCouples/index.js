import React from 'react'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import './styles.scss'

const OurCouples = () => (
    <div className="OurCouples main-div">
        <ScrollToTopOnMount />
        <ArrowToTop />
        <div className="page-header">
            <span className="number">03</span>
            <h2 className="page-title smaller">Nasze pary</h2>
        </div>
        <div className="OurCouples-content">
            <h1 className="main-header">
            Takimi momentami należy się chwalić, dlatego zachęcamy do zapoznania się z naszymi realizacjami.
            </h1>
        </div>
    </div>
)

export default OurCouples
import React from 'react'
import { useParams, withRouter, generatePath } from 'react-router-dom'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import Slider from 'react-slick'
import './styles.scss'
import landings from './landings'
import URLS from '../../utils/urls'
import logo from '../../utils/czarymarry_logo.png'
import SeoContent from '../SeoContent';
import ToStartOnUpdate from '../ToStartOnUpdate'

const APP_URL = process.env.REACT_APP_BASE_URL

const LandingPage = () => {

    const settingsOne = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const settingsTwo = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            },
        ]
    };

    const settingsHorizontal = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false
    };

    const { path } = useParams()
    const selectedLanding = landings.find(item => item.path === path)

    const { seoTitle, seoText, mainHeader, boxTitle, boxColor, textOne, textTwo, placePics, content, gridHeader, gridBgColor, gridTextOne, gridTextTwo, gridPics, numsTitle, numsText, numsContent, extras, bottomTitle, bottomText, extraSliderLastPics, extraSliderHorizontalPics, isExtraSliderLastHorizontal } = selectedLanding
    const seoPath = selectedLanding.path

    const seo = {
        title: seoTitle,
        description: seoText,
        url: `${APP_URL}${generatePath(URLS.LANDING, { path: seoPath })}`,
        image: logo
    }

    const resolveSliderLastSettings = () => {
        if (isExtraSliderLastHorizontal) {
            return settingsHorizontal;
        } return settingsOne;
    }

    return (
        <>
            <ArrowToTop />
            <ScrollToTopOnMount />
            <ToStartOnUpdate />
            <SeoContent {...seo} />
            <div className="LandingPage main-div">
                <h1 className="page-title">{mainHeader}</h1>
                <div className="container-top">
                    <div className={`square ${boxColor}`}>
                        <h2>{boxTitle}</h2>
                    </div>
                    <p className="one">{textOne}</p>
                    <p className="two">{textTwo}</p>
                    <div className="custom-slider">
                        <Slider {...settingsOne}>
                            {placePics.map((pic, index) => (
                                <div key={index}>
                                    <div className="custom-box">
                                        <img src={pic} alt="" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {content && content.map(({ title, titleBgColor, color, text }, index) => (
                    <div className="container-middle" key={index}>
                        <h2 className={`middle-header ${titleBgColor} ${color}`}>{title}</h2>
                        {text &&
                            <div className="content-box">
                                {text}
                            </div>
                        }
                    </div>
                ))}

                {extraSliderHorizontalPics &&
                    <div className='extra-pics-wrapper'>
                        <div className="custom-slider">
                            <Slider {...settingsHorizontal}>
                                {extraSliderHorizontalPics.map((pic, index) => (
                                    <div key={index}>
                                        <div className="custom-box-horizontal">
                                            <img src={pic} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                }

                <div className="container-gridPics">
                    <h2 className={gridBgColor}>{gridHeader}</h2>
                    <div className="txt1">{gridTextOne}</div>
                    {gridTextTwo &&
                        <div className="txt2">{gridTextTwo}</div>
                    }
                    <div className="custom-slider-two">
                        <Slider {...settingsTwo}>
                            {gridPics && gridPics.map((pic, index) => (
                                <div key={index}>
                                    <div className="custom-box">
                                        <img src={pic} alt={pic} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {numsTitle &&
                    <div className="container-nums">
                        <h2>{numsTitle}</h2>
                        {numsText &&
                            <p className="dark">{numsText}</p>
                        }
                        {numsContent.map(({ bgColor, number, title, text }, index) => (
                            <div key={index} className={`grid-cont ${bgColor}`}>
                                <h3 className="num-small">{number}</h3>
                                <span>
                                    {title && <h4 className="title-small">{title}</h4>}
                                    <p>{text}</p>
                                </span>
                            </div>
                        ))}
                    </div>
                }

                {extras &&
                    <div className="extras my-5">
                        {extras}
                    </div>
                }

                {extraSliderLastPics &&
                    <div className='extra-pics-wrapper'>
                        <div className="custom-slider">
                            <Slider {...resolveSliderLastSettings()}>
                                {extraSliderLastPics.map((pic, index) => (
                                    <div key={index}>
                                        <div className={isExtraSliderLastHorizontal ? "custom-box-horizontal" : "custom-box"}>
                                            <img src={pic} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>}

                <div className="container-bottom">
                    {bottomTitle &&
                        <h2>{bottomTitle}</h2>
                    }
                    {bottomText &&
                        <span>{bottomText}</span>
                    }
                </div>
            </div>
        </>
    )
}

export default withRouter(LandingPage)
import React, { Component } from 'react'
import './styles.scss'
import Slider from 'react-slick'
import chevRight from '../Icons/chevRight.svg'
import chevLeft from '../Icons/chevLeft.svg'
import GridEven from './GridEven'
import GridTwoVertHoriz from './GridTwoVertHoriz'
import SingleVert from './SingleVert'
import GridThreeHoriz from './GridThreeHoriz'
import GridVertHoriz from './GridVertHoriz'

export default class CouplesSlider extends Component {

    render() {
        const CustomNextArrow = (props) => {
            const { onClick } = props;
            return (
                <div className="icon-wrapper" onClick={onClick}>
                    <img src={chevRight} alt="next icon" className="slick-next" />
                </div>
            );
        }

        const CustomPrevArrow = (props) => {
            const { onClick } = props;
            return (
                <div className="icon-wrapper" onClick={onClick}>
                    <img src={chevLeft} alt="next icon" className="slick-prev" />
                </div>
            );
        }

        const settings = {
            className: "slider variable-width",
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            variableWidth: true,
            lazyLoad: false,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />
        };

        const mobile = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            cssEase: "linear",
            adaptiveHeight: true,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />
        };

        const { photos: { pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, picVer1, picVer2, picVer3, picVer4, picVer5, picVer6, picVer7, picVer8, picVer9, picVer10, classNameOne, classNameTwo, classNameThree, classNameFour, classNameFive } } = this.props

        const mobilePics = [
            pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, picVer1, picVer2, picVer3, picVer4, picVer5, picVer6, picVer7, picVer8, picVer9, picVer10
        ]

        return (
            <>
                <div className="MobileCouplesSlider">
                    <Slider {...mobile}>
                        {mobilePics.filter(pic => { return pic !== undefined }).map((pic, index) => (
                            <div key={index}>
                                <div className="image">
                                    <img src={pic} alt={pic} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="CouplesSlider">
                    <Slider {...settings}>
                        <div className="main-con" style={{ width: 460 }}>
                            <GridEven picOne={pic1} picTwo={pic2} />
                        </div>
                        {picVer1 && picVer2 && pic3 && classNameOne &&
                            <div className="main-con" style={{ width: 430 }}>
                                <GridTwoVertHoriz picVer1={picVer1} picVer2={picVer2} picHoriz={pic3} className={classNameOne} />
                            </div>
                        }
                        <div className="main-con" style={{ width: 460 }}>
                            <GridEven picOne={pic4} picTwo={pic5} />
                        </div>
                        {picVer3 &&
                            <div className="main-con" style={{ width: 420 }}>
                                <SingleVert picOne={picVer3} />
                            </div>
                        }
                        {pic10 && pic11 && pic12 && classNameTwo &&
                            <div className="main-con" style={{ width: 605 }}>
                                <GridThreeHoriz picOne={pic10} picTwo={pic11} picThree={pic12} className={classNameTwo} />
                            </div>
                        }
                        {pic6 && pic7 &&
                            <div className="main-con" style={{ width: 460 }}>
                                <GridEven picOne={pic6} picTwo={pic7} />
                            </div>
                        }
                        {picVer4 &&
                            <div className="main-con" style={{ width: 410 }}>
                                <SingleVert picOne={picVer4} />
                            </div>
                        }
                        {picVer6 && picVer7 && pic16 && classNameThree &&
                            <div className="main-con" style={{ width: 415 }}>
                                <GridTwoVertHoriz picVer1={picVer6} picVer2={picVer7} picHoriz={pic16} className={classNameThree} />
                            </div>
                        }
                        {pic8 && pic9 &&
                            <div className="main-con" style={{ width: 460 }}>
                                <GridEven picOne={pic8} picTwo={pic9} />
                            </div>
                        }
                        {picVer5 && pic13 &&
                            <div className="main-con" style={{ width: 262 }}>
                                <GridVertHoriz picOne={picVer5} picTwo={pic13} />
                            </div>
                        }
                        {pic14 && pic15 &&
                            <div className="main-con" style={{ width: 460 }}>
                                <GridEven picOne={pic14} picTwo={pic15} />
                            </div>
                        }
                        {picVer10 &&
                            <div className="main-con" style={{ width: 410 }}>
                                <SingleVert picOne={picVer10} />
                            </div>
                        }
                        {picVer8 && picVer9 && pic17 && classNameFour &&
                            <div className="main-con" style={{ width: 430 }}>
                                <GridTwoVertHoriz picVer1={picVer8} picVer2={picVer9} picHoriz={pic17} className={classNameFour} />
                            </div>
                        }
                        {pic17 && pic18 && pic19 && classNameFive &&
                            <div className="main-con" style={{ width: 602 }}>
                                <GridThreeHoriz picOne={pic17} picTwo={pic18} picThree={pic19} className={classNameFive} />
                            </div>
                        }
                    </Slider>
                </div>
            </>
        )
    }
}

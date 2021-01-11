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
            variableWidth: true,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />
        };

        const { photos: { pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, picVer1, picVer2, picVer3, picVer4, picVer5, picVer6, picVer7, classNameOne, classNameTwo, classNameThree } } = this.props

        return (
            <div className="CouplesSlider">
                <Slider {...settings}>
                    <div className="main-con" style={{ width: 460 }}>
                        <GridEven picOne={pic1} picTwo={pic2} />
                    </div>
                    <div className="main-con" style={{ width: 430 }}>
                        <GridTwoVertHoriz picVer1={picVer1} picVer2={picVer2} picHoriz={pic3} className={classNameOne} />
                    </div>
                    <div className="main-con" style={{ width: 460 }}>
                        <GridEven picOne={pic4} picTwo={pic5} />
                    </div>
                    {picVer3 &&
                        <div className="main-con" style={{ width: 420 }}>
                            <SingleVert picOne={picVer3} />
                        </div>
                    }
                    {pic6 && pic7 &&
                        <div className="main-con" style={{ width: 460 }}>
                            <GridEven picOne={pic6} picTwo={pic7} />
                        </div>
                    }
                    {pic8 && pic9 &&
                        <div className="main-con" style={{ width: 460 }}>
                            <GridEven picOne={pic8} picTwo={pic9} />
                        </div>
                    }
                    {pic10 && pic11 && pic12 && classNameTwo &&
                        <div className="main-con" style={{ width: 580 }}>
                            <GridThreeHoriz picOne={pic10} picTwo={pic11} picThree={pic12} className={classNameTwo} />
                        </div>
                    }
                    {pic13 && pic14 &&
                        <div className="main-con" style={{ width: 460 }}>
                            <GridEven picOne={pic13} picTwo={pic14} />
                        </div>
                    }
                    {picVer4 && pic15 &&
                        <div className="main-con" style={{ width: 262 }}>
                            <GridVertHoriz picOne={picVer4} picTwo={pic15} />
                        </div>
                    }
                    {picVer5 &&
                        <div className="main-con" style={{ width: 410 }}>
                            <SingleVert picOne={picVer5} />
                        </div>
                    }
                    {picVer6 && picVer7 && pic16 && classNameThree &&
                        <div className="main-con" style={{ width: 430 }}>
                            <GridTwoVertHoriz picVer1={picVer6} picVer2={picVer7} picHoriz={pic16} className={classNameThree} />
                        </div>
                    }
                </Slider>
            </div>
        )
    }
}

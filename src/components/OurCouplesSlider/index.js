import React, { Component } from 'react'
import './styles.scss'
import Slider from 'react-slick'
import chevRight from '../Icons/chevRight.svg'
import chevLeft from '../Icons/chevLeft.svg'
import ft1 from './ft1.png'
import ft2 from './ft2.png'


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

        return (
            <div className="CouplesSlider">
                <Slider {...settings}>
                    <div>
                        <div className="grid-even slider-box">
                            <div className="top">
                                <img src={ft1} alt="ft1"/>
                            </div>
                            <div className="bottom">
                                <img src={ft2} alt="ft2"/>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 600 }}>
                        <div className="slider-box">
                            <p>600</p>
                        </div>
                    </div>
                    <div style={{ width: 500 }}>
                        <div className="slider-box">
                            <p>500</p>
                        </div>
                    </div>
                    <div style={{ width: 700 }}>
                        <div className="slider-box">
                            <p>700</p>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

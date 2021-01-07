import React, { Component } from 'react'
import './styles.scss'
import Slider from 'react-slick'
import chevRight from '../Icons/chevRight.svg'
import chevLeft from '../Icons/chevLeft.svg'
import GridEven from './GridEven'
import GridTwoVertHoriz from './GridTwoVertHoriz'
import SingleVert from './SingleVert'
import ft1 from './ft1.png'
import ft2 from './ft2.png'
import ft3 from './ft3.png'
import ftVer1 from './ft-ver1.png'
import ftVer2 from './ft-ver2.png'
import ft4 from './ft4.png'
import ft5 from './ft5.png'
import ftVer3 from './ft-ver3.png'



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
                    <div className="main-con" style={{ width: 450 }}>
                        <GridEven picOne={ft1} picTwo={ft2} />
                    </div>
                    <div className="main-con" style={{ width: 410 }}>
                        <GridTwoVertHoriz picVer1={ftVer1} picVer2={ftVer2} picHoriz={ft3} className="twoVertHoriz"/>
                    </div>
                    <div className="main-con" style={{ width: 450 }}>
                        <GridEven picOne={ft4} picTwo={ft5} />
                    </div>
                    <div className="main-con" style={{ width: 420 }}>
                        <SingleVert picOne={ftVer3} />
                    </div>
                </Slider>
            </div>
        )
    }
}

import React from 'react';
import './styles.scss';
import Slider from 'react-slick';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        autoplay: false,  //zamienić na true później
        autoplaySpeed: 7000,
        cssEase: "linear"
    }

    const colors = {
        pink: "#DB8A8C",
        grey: "#AFAFAF",
        dark: "#31373E",
        mint: "#ADC8C1"
    }

    const references = [
        { name: "Nelli & Piotr", text: ".", photo: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", color: colors.pink },
        { name: "Paulina & Krzysiek", text: "", photo: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", color: colors.grey },
        { name: "Kasia & Marcin", text: "", photo: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80", color: colors.mint }
    ]

    return (
        <div className="Carousel">
            <div className="Carousel-container">
                <Slider {...settings}>
                    {references.map(({ name, text, photo, color }, index) => (
                        <div className="Carousel-container_item" key={index}>
                            <div className="content">
                                <img src={photo} alt={name} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
};

export default Carousel

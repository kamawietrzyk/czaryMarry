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
        autoplay: false, //poprawić!
        autoplaySpeed: 6000,
        cssEase: "linear"
    }

    const colors = {
        pink: "rgba(219, 138, 140, .8)",
        grey: "rgba(175, 175, 175, .8)",
        dark: "rgba(49, 55, 62, .8)",
        mint: "rgba(173, 200, 193, .8)"
    }

    const references = [
        { name: "Julia & Marcin", text: "Dziękujemy za koordynację, pomoc w sprawach organizacyjnych, perfekcjonistyczne podejście i wyczarowanie pięknego klimatu.", photo: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", color: colors.pink },
        { name: "Nelli & Piotr", text: "Dziewczyny z Czary Marry stały się dla nas czymś pomiędzy dobrymi wróżkami, a bliskimi przyjaciółkami. Żadna prośba nie była kłopotem, żaden problem nie do rozwiązania.", photo: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80", color: colors.grey },
        { name: "Paulina & Krzysiek", text: "Polecamy z całego serca - profesjonalizm, styl, klasa sama w sobie połączone z poczuciem humoru i totalnym luzem!", photo: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", color: colors.mint },
        { name: "Kasia & Marcin", text: "Dziewczyny sprawiły, że przygotowania do ślubu jak i wesela były ogromną frajdą! Nie było miejsca na stres, tylko radość z tego co miało nadejść.", photo: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80", color: colors.dark },
        { name: "Lili & Marcin", text: "Dzięki dziewczynom z Czary Marry nasz ślub był perfekcyjny pod każdym względem. Zero niedociągnięć. Było po prostu idealnie.", photo: "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80", color: colors.grey }
    ]

    return (
        <div className="Carousel">
            <div className="Carousel-container">
                <Slider {...settings}>
                    {references.map(({ name, text, photo, color }, index) => (
                        <div className="Carousel-container_item" key={index}>
                            <div className="content">
                                <img src={photo} alt={name} />
                                <div className={`text ${index % 2 && "flipped"}`} style={{ backgroundColor: color }}>
                                    <h2 className="couple">{name.toUpperCase()}</h2>
                                    <hr />
                                    <p className="reference">{text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
};

export default Carousel

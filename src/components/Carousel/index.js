import React from 'react';
import './styles.scss';
import Slider from 'react-slick';
import { JuliaMarcin, NelliPiotr, PaulinaKrzysiek, KasiaMarcin, LiliMarcin } from './pics';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        autoplay: true,
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
        { name: "Nelli & Piotr", text: "Dziewczyny z Czary Marry stały się dla nas czymś pomiędzy dobrymi wróżkami, a bliskimi przyjaciółkami. Żadna prośba nie była kłopotem, żaden problem nie do rozwiązania.", photo: NelliPiotr, alt: "nowożeńcy pozują do zdjęcia", color: colors.dark },
        { name: "Julia & Marcin", text: "Dziękujemy za koordynację, pomoc w sprawach organizacyjnych, perfekcjonistyczne podejście i wyczarowanie pięknego klimatu.", photo: JuliaMarcin, alt: "nowożeńcy spacerują po parku", color: colors.mint },
        { name: "Kasia & Marcin", text: "Dziewczyny sprawiły, że przygotowania do ślubu jak i wesela były ogromną frajdą! Nie było miejsca na stres, tylko radość z tego co miało nadejść.", photo: KasiaMarcin, alt: "młoda para na pomoście", color: colors.grey },
        { name: "Paulina & Krzysiek", text: "Polecamy z całego serca - profesjonalizm, styl, klasa sama w sobie połączone z poczuciem humoru i totalnym luzem!", photo: PaulinaKrzysiek, alt: "sesja zdjęciowa młodej pary", color: colors.mint },
        { name: "Lili & Marcin", text: "Dzięki dziewczynom z Czary Marry nasz ślub był perfekcyjny pod każdym względem. Zero niedociągnięć. Było po prostu idealnie.", photo: LiliMarcin, alt: "zakochani nad jeziorem", color: colors.pink }
    ]

    return (
        <div className="Carousel">
            <div className="Carousel-container">
                <Slider {...settings}>
                    {references.map(({ name, text, photo, alt, color }, index) => (
                        <div className="Carousel-container_item" key={index}>
                            <div className="content">
                                <img src={photo} alt={alt} />
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

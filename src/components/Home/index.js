import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import URLS from '../../utils/urls';
import './styles.scss';
import picOne from './one.png';
import picTwo from './two.png';
import picThree from './three.png';
import picFour from './four.png';
import Carousel from '../Carousel';
import ArrowToTop from '../ArrowToTop';
import instaPic1 from './instaPic1.jpg';
import instaPic2 from './instaPic2.jpg';
import instaPic3 from './instaPic3.jpg';
import konsultantki from './konsultantki-slubne-czary-marry-home.jpg';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

class Home extends Component {
    state = {
        position: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        const { position } = this.state
        const scrollY = window.scrollY
        if (scrollY >= 100 && !position) {
            this.setState({ position: true })

        } else if (scrollY < 100 && position) {
            this.setState({ position: false })
        }
    };

    render() {

        const instaPics = [
            { src: instaPic1, alt: "Food truck wedding Czary Marry" },
            { src: instaPic2, alt: "Wedding Czary Marry" },
            { src: instaPic3, alt: "Ola i Kasia Agencja Ślubna Czary Marry" }
        ]

        return (
            <div className="Home">
                <ScrollToTopOnMount />
                <ArrowToTop />
                <div className="Home-helloBox">
                    <Link className="hello" to={URLS.ABOUT}>Cześć.</Link>
                </div>
                <div className="Home-topContainer">
                    <div className="Home-topContainer_text">
                        <h1>
                            W <b>Agencji Ślubnej Czary Marry</b> <br /> zmieniamy marzenia w rzeczywistość.
                        </h1>
                        <div className="mt-4">
                            <p>Nie posługujemy się jednak czarodziejską różdżką ani nie prosimy o pomoc baśniowej wróżki. Korzystamy z doświadczenia i wiedzy, którą bezustannie pogłębiamy, pracując jako konsultantki ślubne oraz śledząc najnowsze trendy.</p>
                        </div>
                    </div>
                    <div className="Home-topContainer_pic">
                        <img src={konsultantki} alt="konsultantki ślubne z agencji ślubnej Czary Marry - organizatorki ślubów i wesel" />
                    </div>
                </div>
                <h2>Poznajmy <b>się!</b></h2>
                <div className="Home-arrows">
                    <div className="Home-arrows_picOne">
                        <Link to={URLS.ABOUT}><img src={picOne} alt="strzałka pierwsza" /></Link>
                    </div>
                    <div className="Home-arrows_textOne right">
                        <Link className="custom-link" to={URLS.ABOUT}>
                            <p>Zobacz zakładkę <b>o nas.</b> Chętnie opowiemy Ci, dlaczego uwielbiamy <b>organizację ślubów i wesel.</b></p>
                        </Link>
                    </div>
                    <div className="Home-arrows_picTwo">
                        <Link to={URLS.WORK}>
                            <img src={picTwo} alt="strzałka druga" />
                        </Link>
                    </div>
                    <div className="Home-arrows_textTwo left">
                        <Link className="custom-link" to={URLS.WORK}>
                            <p>Zobacz <b>jakie wartości</b> cenimy w pracy wedding plannera oraz jaki mamy styl pracy.</p>
                        </Link>
                    </div>
                    <div className="Home-arrows_picThree">
                        <Link to={URLS.COUPLES}>
                            <img src={picThree} alt="strzałka trzecia" />
                        </Link>
                    </div>
                    <div className="Home-arrows_textThree right">
                        <Link className="custom-link" to={URLS.COUPLES}>
                            <p>Zerknij na <b>piękne wesela par</b>, które obdarzyły nas zaufaniem.</p>
                        </Link>
                    </div>
                    <div className="Home-arrows_picFour">
                        <Link to={URLS.BLOG}>
                            <img src={picFour} alt="strzałka czwarta" />
                        </Link>
                    </div>
                    <div className="Home-arrows_textFour left">
                        <Link className="custom-link" to={URLS.BLOG}>
                            <p>
                                Na <b>blogu</b> znajdziesz <b>eksperckie porady</b> dotyczące organizacji ślubu i wesela. <br />Posłuchaj też <b>podcastu.</b>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="Home-bottomContainer">
                    <Link className="custom-link" to={URLS.WORK}>
                        <h2 className="text-right wide">
                            Agencja Ślubna <br /> Czary Marry <br />spełnia <b>marzenia</b>
                        </h2>
                    </Link>
                    <div className="Home-bottomContainer_instaPics">
                        {instaPics.map(({ src, alt }) => (
                            <a href="https://www.instagram.com/wedding_czarymarry/" target="_blank" rel="noopener noreferrer">
                                <div className="ig-box">
                                    <img src={src} alt={alt} />
                                    <div className="overlay"></div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <p><b>Czary Marry to coś więcej niż agencja ślubna.</b> To dwie doświadczone wedding plannerki, które zaopiekują się Wami zarówno podczas przygotowań jak i w dniu ślubu. Sprawimy, że czas przygotowań będzie przyjemny, a wesele stanie się ukoronowaniem naszej dotychczasowej współpracy.</p>
                    <div className="Home-bottomContainer_carousel">
                        <Carousel />
                    </div>
                    <Link className="custom-link" to={URLS.OFFER}>
                        <p>Podobają Wam nasz styl pracy oraz jej efekty? Chcielibyście się dowiedzieć w jakich aspektach organizacji wesela możemy Wam pomóc? <b>Zerknijcie tutaj.</b></p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home
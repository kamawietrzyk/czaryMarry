import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import URLS from '../../utils/urls';
import './styles.scss';
import picOne from './one.png';
import picTwo from './two.png';
import picThree from './three.png';
import picFour from './four.png';
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

    scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    render() {

        return (
            <div className="Home">
                <div className="Home-topArrow">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/54/54744.svg" alt="arrow top round" />
                </div>
                <div className="Home-helloBox">
                    <Link className="hello" to={URLS.ABOUT}>Cześć.</Link>
                </div>
                <div className="Home-topContainer">
                    <div className="Home-topContainer_text">
                        <h1>
                            W <b>Agencji Ślubnej Czary Marry</b> zmieniamy marzenia w rzeczywistość.
                </h1>
                        <div className="pl-4 mt-4">
                            <p>Nie posługujemy się jednak czarodziejską różdżką ani nie prosimy o pomoc baśniowej wróżki. Korzystamy z doświadczenia i wiedzy, którą bezustannie pogłębiamy, pracując jako konsultantki ślubne oraz śledząc najnowsze trendy.</p>
                        </div>
                    </div>
                    <div className="Home-topContainer_pic">
                        <img alt="Kasia i Ola z Czary Marry" src="https://static.wixstatic.com/media/ffe458_cca1546c871644b39aa402ac77b89590~mv2.jpg/v1/crop/x_13,y_0,w_1144,h_1691/fill/w_534,h_789,al_c,q_85,usm_0.66_1.00_0.01/Konsultantki-slubne-czary-marry_edited_j.webp" />
                    </div>
                </div>
                <h2>Poznajmy <b>się!</b></h2>
                <div className="Home-arrows">
                    <div className="Home-arrows_picOne">
                        <img src={picOne} alt="strzałka pierwsza" />
                    </div>
                    <div className="Home-arrows_textOne right">
                        <p>
                            Zobacz zakładkę <b>o nas.</b> Chętnie opowiemy Ci, dlaczego uwielbiamy <b>organizację ślubów i wesel.</b>
                        </p>
                    </div>
                    <div className="Home-arrows_picTwo">
                        <img src={picTwo} alt="strzałka druga" />
                    </div>
                    <div className="Home-arrows_textTwo left">
                        <p>Zobacz <b>jakie wartości</b> cenimy w pracy wedding plannera oraz jaki mamy styl pracy.</p>
                    </div>
                    <div className="Home-arrows_picThree">
                        <img src={picThree} alt="strzałka trzecia" />
                    </div>
                    <div className="Home-arrows_textThree right">
                        <p>Zerknij na <b>piękne wesela par</b>, które obdarzyły nas zaufaniem.</p>
                    </div>
                    <div className="Home-arrows_picFour">
                        <img src={picFour} alt="strzałka czwarta" />
                    </div>
                    <div className="Home-arrows_textFour left">
                        <p>
                            Na <b>blogu</b> znajdziesz <b>eksperckie porady</b> dotyczące organizacji ślubu i wesela. <br />Posłuchaj też <b>podcastu.</b>
                        </p>
                    </div>
                </div>
                <h2 className="text-right wide">
                    Agencja Ślubna <br /> Czary Marry <br />spełnia <b>marzenia</b>
                </h2>
            </div>
        )
    }
}

export default Home
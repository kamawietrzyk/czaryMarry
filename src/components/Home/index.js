import React from 'react';
import { Link } from 'react-router-dom';
import URLS from '../../utils/urls';
import './styles.scss';

const Home = () => (
    <div className="Home">
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
    </div>
)

export default Home
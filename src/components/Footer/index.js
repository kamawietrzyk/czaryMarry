import React from 'react';
import Contact from '../Contact';
import './styles.scss';
import footerPic from './konsultantki-slubne-czary-marry-kontakt.jpg';
import { Link, generatePath } from 'react-router-dom';
import URLS from '../../utils/urls';

const Footer = () => {

    return (
        <div className="Footer" id="footer">
            <div className="Footer-box">
                <img src={footerPic} alt="konsultantki ślubne z agencji ślubnej Czary Marry - organizatorki ślubów i wesel" />
                <div className="Footer-box_text">
                    <h2>Napisz <span>do nas!</span></h2>
                    <span className="bottom">
                        <p className="mb-1">kontakt@czarymarry.com</p>
                        <p>Kasia 577-900-036,<span className="mobile"><br /></span> Ola 726-594-267</p>
                        <p className="mt-4">Agencja ślubna Czary Marry</p>
                        <p>
                            <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="CustomLink text-white">Wrocław</Link>, <Link to={generatePath(URLS.LANDING, { path: 'wedding-planner-poznan' })} className="CustomLink text-white">Poznań</Link>, <Link to={generatePath(URLS.LANDING, { path: 'wedding-planner-warszawa' })} className="CustomLink text-white">Warszawa</Link>, <Link to={generatePath(URLS.LANDING, { path: 'wedding-planner-slask-katowice' })} className="CustomLink text-white">Katowice</Link>, <Link to={generatePath(URLS.LANDING, { path: 'wedding-planner-krakow' })} className="CustomLink text-white">Kraków</Link>, <Link to={generatePath(URLS.LANDING, { path: 'wedding-planner-lodz' })} className="CustomLink text-white">Łódź</Link>
                        </p>
                    </span>
                </div>
            </div>
            <div className="Footer-contact">
                <Contact />
            </div>
        </div>
    )
}

export default Footer

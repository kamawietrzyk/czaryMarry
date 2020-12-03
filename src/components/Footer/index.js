import React from 'react';
import Contact from '../Contact';
import './styles.scss';
import footerPic from './footerPic.jpg';

const Footer = () => {

    return (
        <div className="Footer">
            <div className="Footer-box">
                <img src={footerPic} alt="Stopka Kasia i Ola" />
                <div className="Footer-box_text">
                    <h2>Napisz <span>do nas!</span></h2>
                    <p>kontakt@czarymarry.com</p>
                    <p>Kasia 577-900-036,<span className="mobile"><br/></span> Ola 726-594-267</p>
                    <p className="bottom">Agencja ślubna Czary Marry <br/>Wrocław</p>
                </div>
            </div>
            <div className="Footer-contact">
                <Contact />
            </div>
        </div>
    )
}

export default Footer

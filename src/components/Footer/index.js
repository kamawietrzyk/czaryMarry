import React from 'react';
import Contact from '../Contact';
import './styles.scss';

const Footer = () => {

    return (
        <div className="Footer">
            <div className="Footer-box">
                <img src="https://static.wixstatic.com/media/ffe458_4ecd746bf31d433fbef9ff34aec33cd6~mv2.jpg/v1/fill/w_713,h_757,al_t,q_85,usm_0.66_1.00_0.01/ffe458_4ecd746bf31d433fbef9ff34aec33cd6~mv2.webp" alt="Stopka Kasia i Ola" />
                <div className="Footer-box_text">
                    <h2>Napisz <span>do nas!</span></h2>
                    <p>kontakt@czarymarry.com</p>
                    <p>Kasia 577-900-036,<span className="mobile"><br/></span> Ola 726-594-267</p>
                </div>
            </div>
            <div className="Footer-contact">
                <Contact />
            </div>
        </div>
    )
}

export default Footer

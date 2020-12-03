import React from 'react';
import './styles.scss';
import arrowToTop from '../Icons/arrowToTop.svg';

const ArrowToTop = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="ArrowToTop" onClick={scrollTop}>
            <img src={arrowToTop} alt="arrow top round" />
        </div>
    )
}

export default ArrowToTop
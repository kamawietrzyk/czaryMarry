import React from 'react'
import './styles.scss'

const ArrowToTop = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="ArrowToTop" onClick={scrollTop}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/54/54744.svg" alt="arrow top round" />
        </div>
    )
}

export default ArrowToTop
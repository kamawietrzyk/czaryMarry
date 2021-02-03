import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import URLS from '../../utils/urls'
import './styles.scss'

const tabs = [
    { label: 'Home', path: URLS.HOME },
    { label: 'O nas', path: URLS.ABOUT },
    { label: 'Jak pracujemy', path: URLS.WORK },
    { label: 'Nasze pary', path: URLS.COUPLES },
    { label: 'Blog', path: URLS.BLOG },
    { label: 'Oferta', path: URLS.OFFER }
]
const Navbar = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);
    const [status, setStatus] = useState('close');

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
        setStatus(status === 'open' ? 'close' : 'open');
    }

    const onClose = () => {
        setBurgerOpen(false);
        setStatus('close');
        setTimeout(() => {window.scrollTo({ top: 450, behavior: 'smooth' })}, 350)
    }

    const scrollToBottom = () => {
        const element = document.getElementById('footer');
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const timeOutScroll = () => {
        setTimeout(() => {scrollToBottom()}, 500);
    }

    const timeOutScrollMobile = () => {
        setTimeout(() => {scrollToContactMobile()}, 500);
    }

    const scrollToContactMobile = () => {
        setBurgerOpen(false);
        setStatus('close');
        const element = document.getElementById('contact');
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const onClickScroll = () => {
        setTimeout(() => {
            if (window.outerWidth >= 768 && window.outerWidth < 1024) {
                window.scrollTo({ top: 500, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 780, behavior: 'smooth' });
            }
        }, 350);
    }

    return (
        <div className="Navbar" id="home">
            <div className="Navbar-navigation">
                <nav className="navbar navbar-expand-md">
                    <div className="bg-div" style={{ position: `${burgerOpen ? "fixed" : "absolute"}`, zIndex: `${burgerOpen && 1001}` }}>
                        <button className="navbar-toggler p-1" onClick={toggleBurger} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="navbar-toggler-icon icon-wrapper" onClick={toggleBurger}>
                                <i className={status} />
                                <i className={status} />
                                <i className={status} />
                            </div>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            {tabs.map(({ label, path }, index) => (
                                <NavLink
                                    exact
                                    key={index}
                                    to={path}
                                    onClick={onClickScroll}
                                    role="tab"
                                    className="nav-item nav-link"
                                    activeClassName="active">
                                    {label}
                                </NavLink>
                            ))}
                            <NavLink
                                exact
                                key="kontakt"
                                to={URLS.CONTACT}
                                onClick={timeOutScroll}
                                role="tab"
                                className="nav-item nav-link"
                                activeClassName="active">
                                Kontakt
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
            { burgerOpen &&
                <div className="Navbar-mobile">
                    {tabs.map(({ label, path }, index) => (
                        <NavLink
                            key={index}
                            to={path}
                            onClick={onClose}
                            role="tab"
                            className="nav-item nav-link">
                            {label}
                        </NavLink>
                    ))}
                    <NavLink
                        key="kontakt"
                        to={URLS.HOME}
                        onClick={timeOutScrollMobile}
                        role="tab"
                        className="nav-item nav-link">
                        Kontakt
                    </NavLink>
                </div>
            }
        </div>
    )
}

export default withRouter(Navbar)

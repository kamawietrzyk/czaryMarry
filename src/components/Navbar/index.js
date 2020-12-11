import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import URLS from '../../utils/urls'
import './styles.scss'

const tabs = [
    { name: 'home', label: 'Home', url: URLS.HOME },
    { name: 'o-nas', label: 'O nas', url: URLS.ABOUT },
    { name: 'praca', label: 'Jak pracujemy', url: URLS.WORK },
    { name: 'realizacje', label: 'Nasze pary', url: URLS.COUPLES },
    { name: 'oferta', label: 'Oferta', url: URLS.OFFER },
    { name: 'blog', label: 'Blog', url: URLS.BLOG }
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
        window.scrollTo({ top: 540, behavior: 'smooth' });
    }

    const scrollToBottom = () => {
        const element = document.getElementById('footer');
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const timeOutScroll = () => {
        setTimeout(() => {scrollToBottom()}, 300);
    }

    const scrollToContactMobile = () => {
        setBurgerOpen(false);
        setStatus('close');
        const element = document.getElementById('contact');
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const scrollToStart = () => {
        window.scrollTo({ top: 780, behavior: 'smooth' });
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
                            {tabs.map(({ name, label, url }) => (
                                <Link
                                    key={name}
                                    to={url}
                                    onClick={scrollToStart}
                                    role="tab"
                                    className="nav-item nav-link">
                                    {label}
                                </Link>
                            ))}
                            <Link
                                key="kontakt"
                                to={URLS.CONTACT}
                                onClick={timeOutScroll}
                                role="tab"
                                className="nav-item nav-link">
                                Kontakt
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            { burgerOpen &&
                <div className="Navbar-mobile">
                    {tabs.map(({ name, label, url }) => (
                        <Link
                            key={name}
                            to={url}
                            onClick={onClose}
                            role="tab"
                            className="nav-item nav-link">
                            {label}
                        </Link>
                    ))}
                    <Link
                        key="kontakt"
                        to={URLS.HOME}
                        onClick={scrollToContactMobile}
                        role="tab"
                        className="nav-item nav-link">
                        Kontakt
                    </Link>
                </div>
            }
        </div>
    )
}

export default withRouter(Navbar)

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import URLS from '../../utils/urls'
import './styles.scss'

const tabs = [
    { name: 'home', label: 'Home', url: URLS.HOME },
    { name: 'o-nas', label: 'O nas', url: URLS.ABOUT },
    { name: 'praca', label: 'Jak pracujemy', url: URLS.WORK },
    { name: 'realizacje', label: 'Nasze pary', url: URLS.COUPLES },
    { name: 'oferta', label: 'Oferta', url: URLS.OFFER },
    { name: 'blog', label: 'Blog', url: URLS.BLOG },
    { name: 'kontakt', label: 'Kontakt', url: URLS.HOME } // tutaj dopisać automatyczny scroll do kontaktu na dole strony
]
const Navbar = ({ location }) => {
    return (
        <div className="Navbar" id="home">
            <div className="Navbar-navigation">
                <div className="Navbar-navigation_box">
                    <nav className="navbar navbar-expand-md">
                        <div className="bg-div">
                            <button className="navbar-toggler p-1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon dark-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav">
                                {tabs.map(({ name, label, url }) => (
                                    <Link
                                        key={name}
                                        to={url}
                                        role="tab"
                                        className={`nav-item nav-link ${url === location.pathname && 'active'}`}>
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* { mobile &&
                <div className="mobile">
                    {tabs.map(({ name, label, url }) => (
                        <Link
                            key={name}
                            to={url}
                            role="tab"
                            className={`nav-item nav-link ${url === location.pathname && 'active'}`}>
                            {label}
                        </Link>
                    ))}
                </div>
            } */}
        </div>
    )
}

export default withRouter(Navbar)

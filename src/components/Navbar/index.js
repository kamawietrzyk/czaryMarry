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
const Navbar = ({ location }) => (
    <div className="Navbar">
        <nav className="nav">
            {tabs.map(({ name, label, url }) => (
                <Link
                    key={name}
                    to={url}
                    role="tab"
                    className={`nav-item nav-link ${url === location.pathname && 'active'}`}>
                    {label}
                </Link>
            ))}
        </nav>
    </div>
)

export default withRouter(Navbar)

import React from 'react'
import { Link } from 'react-router-dom'
import URLS from '../../utils/urls'

const PageNotFound = () => (
    <div className="main-div" style={{ marginTop: '5rem', marginBottom: '3rem' }}>
        <h1 className="text-center pink mb-4">Błąd 404</h1>
        <h2 className="text-center" style={{ marginBottom: '5rem' }}>Wygląda na to, że taka strona nie istnieje!</h2>
        <Link to={URLS.BLOG} className="btn m-4">« Wróć do Bloga</Link>
    </div>
)

export default PageNotFound
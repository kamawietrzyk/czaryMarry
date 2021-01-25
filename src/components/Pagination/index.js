import React from 'react'
import { Link } from 'react-router-dom'
// import { generatePath } from 'react-router'
// import URLS from '../../utils/urls'
import chevLeft from '../Icons/chevLeft.svg'
import chevRight from '../Icons/chevRight.svg'
import doubleChev from '../Icons/doubleChev.svg'
import './styles.scss'

const Pagination = ({ onChange, currentPage, totalPages }) => {

    const pageNumbers = [];
    const window = 5

    let maxLeft = currentPage - Math.floor(window/2)
    let maxRight = currentPage + Math.floor(window/2)

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = window
    }

    if (maxRight > totalPages) {
        maxLeft = totalPages - (window - 1)
        maxRight = totalPages

        if (maxLeft < 1) {
            maxLeft = 1
        }
    }

    for (let i = maxLeft; i <= maxRight; i++) {
        pageNumbers.push(i);
    };

    return (
        <div className="Pagination">
            { totalPages === 0 ?
            <div className="empty">
                <p>Ups, w tej kategorii nie mamy jeszcze żadnych wpisów!</p>
            </div> :
            <nav aria-label="navigation">
                <ul className="pagination">
                    <li className={`page-item mr-1 ${currentPage === 1 && 'disabled'}`}>
                        <Link onClick={onChange(1, true)} className="page-link" to=" ">
                            <div className="double-chev-left">
                                <img src={doubleChev} alt="double chevron left" />
                            </div>
                        </Link>
                    </li>
                    <li className={`page-item mr-1 ${currentPage === 1 && 'disabled'}`}>
                        <Link onClick={onChange(-1)} className="page-link" to=" ">
                            <div className="icon-wrapper">
                                <img src={chevLeft} alt="chevron left" />
                            </div>
                        </Link>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className={`numbers-desktop page-item mx-2 ${currentPage === number && "active"}`}>
                            <Link onClick={onChange(number, true)} className="page-link page-numbers" to="" /*{generatePath(URLS.ROUTE, { url: `page/${number}`})} ?? */>{number}</Link>
                        </li>
                    ))}
                    <li className="numbers-mobile page-item mx-3">
                        <p>{currentPage}/{totalPages}</p>
                    </li>
                    <li className={`page-item ml-1 ${currentPage === totalPages && 'disabled'}`}>
                        <Link onClick={onChange(1)} className="page-link" to=" " >
                            <div className="icon-wrapper">
                                <img src={chevRight} alt="chevron right" />
                            </div>
                        </Link>
                    </li>
                    <li className={`page-item ml-1 ${currentPage === totalPages && 'disabled'}`}>
                        <Link onClick={onChange(totalPages, true)} className="page-link" to=" ">
                            <div className="double-chev-right">
                                <img src={doubleChev} alt="double chevron right" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
}
        </div>
    )
}

export default Pagination
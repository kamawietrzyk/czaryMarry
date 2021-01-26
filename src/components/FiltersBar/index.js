import React, { useState } from 'react'
import './styles.scss'

const FiltersBar = ({ filters, onFilterSelect }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [listOpen, setListOpen] = useState(false)

    return (
        <div className="FiltersBar">
            <div className="FiltersBar-mobile">
                <div className="dropdown" onClick={() => setListOpen(!listOpen)}>
                    <a className="btn mobile-dropdown" onClick={e => e.preventDefault()} id="dropdownMobileMenuButton" href=" " aria-expanded="false">
                        Filtruj
                    </a>
                    <div className={`dropdown-menu ${listOpen && "show"}`} aria-labelledby="dropdownMobileMenuButton">
                        {filters.map(({ name, tag }) => (
                            <a onClick={onFilterSelect(tag)} key={tag} className="dropdown-item" href=" ">{name}</a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="FiltersBar-desktop">
                {filters.slice(0, 3).map(({ name, tag }) => (
                    <a onClick={onFilterSelect(tag)} key={tag} href=" ">{name}</a>
                ))}
                <div className="dropdown" onMouseOver={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <a className="dropdown-toggle" onClick={e => e.preventDefault()} id="dropdownMenuButton" href=" " aria-expanded="false">
                        Więcej
                    </a>
                    <div className={`dropdown-menu ${dropdownOpen && "show"}`} aria-labelledby="dropdownMenuButton">
                        {filters.slice(3).map(({ name, tag }) => (
                            <a onClick={onFilterSelect(tag)} key={tag} className="dropdown-item" href=" ">{name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltersBar
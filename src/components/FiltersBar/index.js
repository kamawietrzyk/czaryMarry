import React, { useState } from 'react'
import './styles.scss'

const FiltersBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
        <div className="FiltersBar">
            <div className="FiltersBar-mobile">
                <div class="form-group">
                    <select className="form-control" id="select">
                        <option>Wszystkie wpisy</option>
                        <option>Niezbędnik przedŚLUBNY</option>
                        <option>Opowiadamy o naszych realizacjach</option>
                        <option>Wesela stulecia</option>
                        <option>Ślubne opowieści, czyli wesela dawniej</option>
                        <option>Śluby i wesela na świecie</option>
                        <option>Podcast</option>
                    </select>
                </div>
            </div>
            <div className="FiltersBar-desktop">
                <a href=" ">Wszystkie wpisy</a>
                <a href=" ">Niezbędnik przedŚLUBNY</a>
                <a href=" ">Opowiadamy o naszych realizacjach</a>
                <div className="dropdown" onMouseOver={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <a className="dropdown-toggle" id="dropdownMenuButton" href=" " dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                        Więcej
                    </a>
                    <div className={`dropdown-menu ${dropdownOpen && "show"}`} aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href=" ">Wesela stulecia</a>
                        <a className="dropdown-item" href=" ">Ślubne opowieści, czyli wesela dawniej</a>
                        <a className="dropdown-item" href=" ">Śluby i wesela na świecie</a>
                        <a className="dropdown-item" href=" ">Podcast</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltersBar
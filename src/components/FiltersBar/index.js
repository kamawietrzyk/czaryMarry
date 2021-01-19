import React, { useState } from 'react'
import magGlass from '../Icons/magGlass.svg'
import SearchInput from '../SearchInput'
import './styles.scss'

const FiltersBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [glassOpen, setGlassOpen] = useState(false)

    const onIconClick = () => {
        setGlassOpen(true)
    }

    const onClose = () => {
        setGlassOpen(false)
    }

    return (
        <div className="FiltersBar">
            <div className="FiltersBar-mobile">
                <div class="form-group">
                    <select className="custom-form-control" id="select">
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
                {!glassOpen && <a href=" ">Opowiadamy o naszych realizacjach</a>}
                <div className="dropdown" onMouseOver={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <a className="dropdown-toggle" onClick={e => e.preventDefault()} id="dropdownMenuButton" href=" " dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                        Więcej
                    </a>
                    <div className={`dropdown-menu ${dropdownOpen && "show"}`} aria-labelledby="dropdownMenuButton">
                        {glassOpen && <a className="dropdown-item" href=" ">Opowiadamy o naszych realizacjach</a>}
                        <a className="dropdown-item" href=" ">Wesela stulecia</a>
                        <a className="dropdown-item" href=" ">Ślubne opowieści, czyli wesela dawniej</a>
                        <a className="dropdown-item" href=" ">Śluby i wesela na świecie</a>
                        <a className="dropdown-item" href=" ">Podcast</a>
                    </div>
                </div>
                {!glassOpen ?
                    <div className="icon-wrapper" onClick={onIconClick}>
                        <img src={magGlass} alt="lupa" />
                    </div>
                    : <SearchInput onClose={onClose} />
                }
            </div>
        </div>
    )
}

export default FiltersBar
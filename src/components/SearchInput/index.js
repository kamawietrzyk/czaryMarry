import React from 'react'
import magGlass from '../Icons/magGlass.svg'
import close from '../Icons/x.svg'
import './styles.scss'

const SearchInput = ({ onClose }) => {
    return (
        <div className="SearchInput">
            <div class="input-group-prepend">
                <div className="icon">
                    <img src={magGlass} alt="search icon" />
                </div>
            </div>
            <input type="text" className="form-control" placeholder="Szukaj" />
            <div className="input-group-append">
                <div className="icon" onClick={onClose}>
                    <img src={close} alt="close icon" />
                </div>
            </div>
        </div>
    )
}

export default SearchInput
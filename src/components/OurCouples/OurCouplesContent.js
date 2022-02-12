import React from 'react'
import './styles.scss'

export const OurCouplesContent = ({ bgColor, title, details, orgLink, org, placeLink, place, photoLink, photo, photoTwo, photoLinkTwo, movie, movieLink, flowers, flowersLink }) => (
    <div className={`description ${bgColor}`}>
        <div className="content-box">
            <h2 className="top-h">{title}</h2>
            <p>{details}</p>
            <h2 className="small-h">Realizacja:</h2>
            <span>
                <p>Organizacja:
                    <a href={orgLink} alt={org} target="_blank" rel="noopener noreferrer"> {org}</a>
                </p>
                <p>Miejsce:
                    <a href={placeLink} alt={place} target="_blank" rel="noopener noreferrer"> {place}</a>
                </p>
                <p>Foto:
                    <a href={photoLink} alt={photo} target="_blank" rel="noopener noreferrer"> {photo}</a>
                    {photoTwo && <a href={photoLinkTwo} alt={photoTwo} target="_blank" rel="noopener noreferrer">, {photoTwo}</a>}
                </p>
                {movie &&
                    <p>Film:
                        <a href={movieLink} alt={movie} target="_blank" rel="noopener noreferrer"> {movie}</a>
                    </p>
                }
                {flowers &&
                    <p>Florystyka:
                        <a href={flowersLink} alt={flowers} target="_blank" rel="noopener noreferrer"> {flowers}</a>
                    </p>
                }
            </span>
        </div>
    </div>
)
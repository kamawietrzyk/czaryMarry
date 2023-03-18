// @ts-nocheck
import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import URLS from '../../utils/urls'

export const OurCouplesContent = ({ path, bgColor, title, details, orgLink, org, placeLink, place, photoLink, photo, photoTwo, photoLinkTwo, movie, movieLink, flowers, flowersLink, music, musicLink, decor, decorLink, cake, cakeLink }) => (
    <div className={`description ${bgColor}`}>
        <div className="content-box">
            {path ?
                <Link className="linkWhite" to={generatePath(URLS.COUPLES_EVENT, { path: path })}>
                    <h2 className="top-h">{title}</h2>
                </Link>
                :
                <h2 className="top-h">{title}</h2>}

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
                    <a href={photoLink}
                        alt={photo} target="_blank" rel="noopener noreferrer"> {photo}</a>
                    {photoTwo && <a href={photoLinkTwo}
                        alt={photoTwo} target="_blank" rel="noopener noreferrer">, {photoTwo}</a>}
                </p>
                {movie &&
                    <p>Film:
                        <a href={movieLink}
                            alt={movie} target="_blank" rel="noopener noreferrer"> {movie}</a>
                    </p>
                }
                {flowers &&
                    <p>Florystyka:
                        <a href={flowersLink}
                            alt={flowers} target="_blank" rel="noopener noreferrer"> {flowers}</a>
                    </p>
                }
                {music &&
                    <p>Muzyka:
                        <a href={musicLink}
                            alt={music} target="_blank" rel="noopener noreferrer"> {music}</a>
                    </p>
                }
                {decor &&
                    <p>Dekoracje:
                        <a href={decorLink}
                            alt={decor} target="_blank" rel="noopener noreferrer"> {decor}</a>
                    </p>
                }
                {cake &&
                    <p>Tort:
                        <a href={cakeLink}
                            alt={cake} target="_blank" rel="noopener noreferrer"> {cake}</a>
                    </p>
                }
            </span>
        </div>
    </div>
)
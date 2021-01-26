import React from 'react'
import ArrowToTop from '../ArrowToTop'
import CouplesSlider from '../OurCouplesSlider'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import weddings from '../OurCouples/weddings'
import './styles.scss'

const OurCouples = () => (
    <div className="OurCouples custom-div">
        <ScrollToTopOnMount />
        <ArrowToTop />
        <div className="page-header">
            <span className="number">03</span>
            <h2 className="page-title smaller">Nasze pary</h2>
        </div>
        <div className="OurCouples-content">
            <h1 className="main-header">
                Takimi momentami należy się chwalić, dlatego zachęcamy do zapoznania się z naszymi realizacjami.
            </h1>
            {weddings.map(({ bgColor, title, details, org, orgLink, place, placeLink, photo, photoLink, photoTwo, photoLinkTwo, movie, movieLink, flowers, flowersLink, photos }, index) => (
                <div key={index} className={`OurCouples-content_grid ${index % 2 && "flipped"}`}>
                    <div className="photos">
                        <CouplesSlider photos={photos} />
                    </div>
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
                </div>
            ))}
        </div>
    </div>
)

export default OurCouples
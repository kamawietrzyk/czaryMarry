import React from 'react'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import './styles.scss'

const weddings = [
    { bgColor: "bgMint", title: "Foodtruck Wedding", details: "Event branżowy połączony z sesją stylizowaną w stylu slow, czyli tak jak lubimy najbardziej. Garden party odbyło się w pałacowym ogrodzie, w którym stanęły pięknie odrestaurowane stare samochody. Nie zabrakło również dekoracji kwiatowych, stref chilloutu i dobrej muzyki.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Pałac Osowa Sień", placeLink: "https://www.palacosowasien.com/", photo: "Wosiak", photoLink: "https://wosiakfotografia.pl/", photoTwo: "Wojciech Makula", photoLinkTwo: "https://www.wojciechmakula.pl/", movie: "Primephoto", movieLink: "https://teledyskslubny.pl/", flowers: "Pracownia Zieleni", flowersLink: "http://pracowniazieleni.pl/" },
    { bgColor: "bgGrey", title: "Ewa & Manu", details: "To był prawdziwy polsko-hiszpański ogień. Mieszanka kultur i tradycji oraz masa świetnej zabawy. Właśnie dlatego uwielbiamy wesela międzynarodowe.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Golden Tulip Magnus", placeLink: "https://magnus-bielsko.goldentulip.com/pl/", photo: "Jakub Nowotyński", photoLink: "https://fotoreportazslubny.com/", movie: "BlackHart Film", movieLink: "http://www.blackhartfilms.com/", flowers: "Hola Studio Flo", flowersLink: "https://www.facebook.com/holastudioflo/"},
    { bgColor: "bgDark", title: "Angelika & Paweł", details: "Zamek Książ zachwyca niesamowitą architekturą i historią. Dzięki zaufaniu i otwartości Angeliki i Pawła oraz niezastąpionej ekipie udało nam się dopisać kolejny, cudowny rozdział tej historii i stworzyć niesamowity klimat. Postanowiliśmy nie walczyć z zamkiem i nawiązać do jego klimatu. Wyszło bajecznie.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Zamek Książ", placeLink: "https://www.ksiaz.walbrzych.pl/", photo: "Jam Studio", photoLink: "https://jamstudio.pl/", photoTwo: "Magdalena Adamczewska", photoLinkTwo: "https://www.facebook.com/magdalena.adamczewska", movie: "Cameralni", movieLink: "http://cameralni.com/", flowers: "ArtSize", flowersLink: "https://www.artsize.pl/"},
    { bgColor: "bgPink", title: "Olga & Piotr", details: "To klimatyczna sesja stylizowana. Połączenie surowych ruin zamku oraz eleganckich dekoracji. Sesja była zorganizowana z myślą o parach, którym Covid-19 pokrzyżował weselne plany.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Zamek Sarny", placeLink: "http://www.zameksarny.pl/", photo: "Małe Szare Studio", photoLink: "http://maleszarestudio.pl/", movie: "Sakramentalne tak", movieLink: "https://www.sakramentalnetak.com/", flowers: "Anello Decor", flowersLink: "https://www.facebook.com/anellodecor/"},
    { bgColor: "bgMint", title: "Ewelina & Łukasz", details: "Ślub kościelny w cudownej parkowej scenerii. Srebro, transparentność, morze kwiatów i namiot. Glamour w najczystszej formie, łączący się z pięknem otaczającej natury.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Pałac Pstrokonie", placeLink: "http://palac-pstrokonie.pl/", photo: "Wawrzykowski Team", photoLink: "https://wawrzykowski.pl/", flowers: "Florodesign", flowersLink: "https://floro.pl/"},
    { bgColor: "bgGrey", title: "Nelli & Piotr", details: "Wesele w stodole. Romantyczne dekoracje, piękna pogoda i strefa chill z barmanem na zewnątrz, a w niedzielę brunch połączony z leżakowaniem na trawie.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Folwark Wąsowo", placeLink: "Folwark Wąsowo", photo: "Svetlana Bennington", photoLink: "http://svetlanabennington.com/", flowers: "ArtSize", flowersLink: "http://www.artsize.pl/"},
    { bgColor: "bgPink", title: "Basia & Mariusz", details: "Jesienne wesela mają w sobie magię. Mimo że za oknem zimno i szaro, nam udało się wyczarować niezwykły klimat. Pomógł nam półmrok za oknem, światło świec i odważne połączenie kolorów.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Rezydencja Miętowe Wzgórza", placeLink: "http://www.mietowewzgorza.pl/wesela.html", photo: "Marta Brodziak", photoLink: "http://martabrodziak.com/", movie: "MW Jackiewicz", movieLink: "http://www.mwjackiewicz.com/", flowers: "Unique", flowersLink: "https://www.facebook.com/unique.pracownia/"},
    { bgColor: "bgGrey", title: "Marta & Marek", details: "Nowoczesność, elegancja, minimalizm i 1000 kalii.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Hotel Wodnik", placeLink: "http://wodnik-hotel.pl/", photo: "Bauaban Fotografia", photoLink: "https://bauaban.com/", flowers: "ArtSize", flowersLink: "http://www.artsize.pl/"},
    { bgColor: "bgMint", title: "Angie & Akshar", details: "To było typowe slow wedding. Goście spędzali czas na zewnątrz rozmawiając, grając w gry, popijając drinki. Było kameralnie i rodzinnie, czyli tak jak lubimy najbardziej.", org: "Agencja Ślubna Czary Marry", orgLink: "", place: "Folwark Białych Bocianów", placeLink: "https://www.folwarkbb.com/", photo: "Greg Solak", photoLink: "http://www.gregsolak.pl/Blog/", movie: "Greg Solak", movieLink: "http://www.gregsolak.pl/Blog/", flowers: "Marlena Chustecka", flowersLink: "https://www.facebook.com/pages/category/Artist/Chustecka-Marlena-1077253032301187/"}
]
const OurCouples = () => (
    <div className="OurCouples main-div">
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
            {weddings.map(({ bgColor, title, details, org, orgLink, place, placeLink, photo, photoLink, photoTwo, photoLinkTwo, movie, movieLink, flowers, flowersLink }, index) => (
                <div className={`OurCouples-content_grid ${index % 2 && "flipped"}`}>
                    <div className="photos">
                        <i>tu będzie komponent do przewijania zdjęć</i>
                    </div>
                    <div className={`description ${bgColor}`}>
                        <h2 className="top-h">{title}</h2>
                        <p>{details}</p>
                        <h2 className="small-h mt-3">Realizacja:</h2>
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
            ))}
        </div>
    </div>
)

export default OurCouples
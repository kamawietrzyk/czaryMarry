import React from 'react'
import ArrowToTop from '../ArrowToTop'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import './styles.scss'

const offerDetails = [
    { color: "bgPink", number: "01", title: "Kompleksowa organizacja", text: "To całkowita pomoc w organizacji oraz wsparcie na każdym etapie planowania wesela. Zaczynając od zaplanowania budżetu, poszukiwania sali, stworzenia harmonogramu przygotowań, poprzez poszukiwanie wszystkich wykonawców, skończywszy na stworzeniu scenariusza ślubnego i koordynacji przyjęcia." },
    { color: "bgMint", number: "02", title: "Koordynacja ślubu i wesela", text: "Będziemy do Waszej dyspozycji w dniu ślubu. Dopilnujemy, aby wszystko przebiegło tak jak to sobie zaplanowaliście, a Wam pozostawimy świętowanie. Stworzymy scenariusz uroczystości, będziemy w kontakcie z wykonawcami oraz salą weselną." },
    { color: "bgGrey", number: "03", title: "Wybrane elementy", text: "Potrzebujecie pomocy tylko przy części usług? To usługa stworzona specjalnie dla Was! To Wy decydujecie w jakim stopniu chcecie nas zaangażować w przygotowania." },
    { color: "bgDark", number: "04", title: "Szkolenie online", text: "Marzy Wam się wyjątkowy ślub i wesele, które zorganizujecie zupełnie sami? Z myślą o Was przygotowałyśmy kilkugodzinny webinar podczas którego dowiecie się wszystkich najważniejszych rzeczy dotyczących organizacji ślubu i wesela. Z przyjemnością odpowiemy na Wasze pytania, podzielimy się wiedzą i doświadczeniem." },
    { color: "bgPink", number: "05", title: "Ślubne SOS", text: "Kryzysowe i trudne sytuacje nie są dla nas niczym nowym. Nasza praca to planowanie różnych scenariuszy i rozwiązywanie niespodziewanych sytuacji. Warto w ciężkiej sytuacji zdać się na pomoc osoby doświadczonej. Pomożemy Wam ze znalezieniem nowego terminu lub miejsca, powiemy jakie macie możliwości w związku ze zmianą terminu, zrobimy aneksy do umów." }
]
const Offer = () => (
    <div className="Offer main-div">
        <ScrollToTopOnMount />
        <ArrowToTop />
        <div className="page-header">
            <span className="number">05</span>
            <h2 className="page-title">Oferta</h2>
        </div>
        <div className="Offer-content">
            <p className="main-header">
                Tak jak nie ma dwóch takich samych wesel, tak każda ze zgłaszających się do nas par ma inne oczekiwania i potrzeby. Każde zapytanie traktujemy indywidualnie, dlatego nie posługujemy się gotowymi rozwiązaniami oraz nie mamy sztywnego cennika usług. Wystarczy, że zadzwonisz do nas na krótką rozmowę lub umówisz się na kawę, a w ciągu 24h otrzymasz spersonalizowaną ofertę wraz z wyceną. Nie możemy się doczekać aż posłuchamy o Waszej wizji ślubu i wesela.
            </p>
            <div className="Offer-content_grid">
                {offerDetails.map(({ color, number, title, text }, index) => (
                    <div key={index} className={`grid-box ${color}`}>
                        <h3 className="num-small">{number}</h3>
                        <span>
                            <h4 className="title-small">{title}</h4>
                            <p>{text}</p>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Offer
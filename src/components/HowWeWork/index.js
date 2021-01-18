import React from 'react'
import ArrowToTop from '../ArrowToTop'
import './styles.scss'
import '../../utils/colors.scss'
import ScrollToTopOnMount from '../ScrollToTopOnMount'

const gridDetails = [
    { gridName: "div-one", color: "pink", number: "01", text: "Nie mamy sztywnych godzin pracy. Jesteśmy do Waszej dyspozycji bez limitu, o każdej porze dnia. To Wy decydujecie, jaka forma kontaktu jest dla Was najlepsza. Spotkanie przy kawie, rozmowa telefoniczna, e-mail, WhatsApp, Skype – wszędzie nas złapiecie." },
    { gridName: "div-two", color: "dark", number: "02", text: "Podczas przygotowań oraz koordynacji Waszego ślubu i wesela pracujemy we dwie. Dzięki temu proces przygotowań przebiega sprawnie i bezbłędnie, a Wy otrzymujecie dwa razy większe pokłady kreatywności oraz piękne, spójne i dopracowane w detalach wesele." },
    { gridName: "div-three", color: "mint", number: "03", text: "W kontaktach z parami stawiamy na szczerość i przyjazny, bezpośredni kontakt. Pozwala to na sprawną komunikację, lepsze poznanie Waszych oczekiwań oraz dużą oszczędność czasu i frustracji podczas organizacji ślubu i wesela." },
    { gridName: "div-four", color: "grey", number: "04", text: "Przy wyborze wykonawców kierujemy się ich umiejętnościami, profesjonalizmem i zaangażowaniem. Zależy nam, aby styl ich pracy pasował do  Was i Waszej wizji ślubu i wesela." }
]
const details = [
    { title: "Spotkanie", text: "Pierwszy i niezbędny etap organizacji wesela. Dla nas to świetna okazja, żeby posłuchać o Waszej wizji ślubu i wesela, odpowiedzieć na pytania oraz ustalić zakres naszych obowiązków. Dla Was, żeby przekonać się, czy dobrze czujecie się w naszym towarzystwie i czy nadajemy na tych samych falach. Na spotkanie możecie umówić się telefonicznie lub mailowo. Złapiecie na również na Instagram, Facebook oraz WhatsApp. Możemy spotkać się przy kawie lub online, wszystko zależy od Was.", color: "pink" },
    { title: "Oferta", text: "Po rozmowie, jeszcze tego samego dnia otrzymacie od nas szczegółową ofertę. Znajdziecie w niej zakres naszych usług, wycenę oraz szczegóły naszej współpracy.", color: "dark" },
    { title: "Umowa", text: "Skonstruowana jest w prosty i przejrzysty sposób, zabezpiecza interesy obu stron. Po jej podpisaniu i wpłaceniu pierwszej transzy naszego wynagrodzenia zaczynamy działać.", color: "mint" },
    { title: "Organizacja", text: "Startujemy od stworzenia budżetu wesela oraz harmonogramu prac. Następnie działamy według ustalonego planu, zaczynając od najważniejszych elementów takich jak poszukiwanie sali, DJ'a lub zespołu, fotografa itd. Co najważniejsze jesteśmy w stałym kontakcie. Na każdym etapie służymy Wam radą i naszym doświadczeniem.", color: "grey" },
    { title: "Koordynacja", text: "Tworzymy scenariusz dnia ślubu i wesela, a następnie działamy zgodnie z nim. Jesteśmy z Wami od początku przygotowań. Pilnujemy prac na sali weselnej. Jesteśmy w stałym kontakcie z wykonawcami, Waszymi gośćmi, ale co najważniejsze jesteśmy blisko Was, abyście mogli skupić się na tym, co najważniejsze, a nam powierzyć wszystkie obowiązki.", color: "dark" },
    { title: "Po weselu", text: "Wasz ślub i wesele było wspaniałe. Zostało jednak jeszcze trochę formalności i spraw do domknięcia. Tu też możecie liczyć na naszą pomoc i wsparcie.", color: "pink" }
]

const HowWeWork = () => (
    <div className="HowWeWork">
        <ScrollToTopOnMount />
        <ArrowToTop />
        <div className="page-header">
            <span className="num-span number">02</span>
            <h2 className="page-title smaller">Jak pracujemy</h2>
        </div>
        <div className="HowWeWork-content">
            <h1 className="main-header">
                Zobacz, jakie wartości cenimy w pracy <b>wedding plannera</b> oraz jaki mamy styl pracy.
            </h1>
            <div className="HowWeWork-content_grid">
                {gridDetails.map(({ gridName, color, number, text }, index) => (
                    <div className={gridName} key={index}>
                        <h2 className={`number-small ${color}`}>{number}</h2>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
            {details.map(({ title, color, text }, index) => (
                <div key={index}>
                    <h2 className={`header-small ${color}`}>{title}</h2>
                    <p className="work-p">{text}</p>
                </div>
            ))}
        </div>

    </div>
)

export default HowWeWork

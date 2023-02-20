import CustomOuterLink from 'components/CustomLink/CustomOuterLink';
import CustomPostLink from 'components/CustomLink/CustomPostLink';
import CustomRealisationLink from 'components/CustomLink/CustomRealisationLink';
import VideoEmbed from 'components/VideoEmbed';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import URLS from 'utils/urls';

import { mainPic as AniaMateuszMain, urSiedSt01, urSiedSt02, urSiedSt03, urSiedSt04, urSiedSt05, urSiedSt06, urSiedSt07, urSiedSt08, urSiedSt09, urSiedSt10, urSiedSt11, urSiedSt12, urSiedSt13, urSiedSt14, urSiedSt15, urSiedStGola01, urSiedStGola02, urSiedStGola03, urSiedStLux01, urSiedStLux02, urSiedStLux00, urSiedStOp01, urSiedStOp02, urSiedStOp03, urSiedStWesCena01, urSiedStWesCena02, urSiedStWesCena03, urSiedStWesOp01, urSiedStWesOp02, urSiedStWesOp03, urSiedStWesOp04, urSiedStWesOp05 } from "../OurCouplesPics/AniaMateusz/index"

export const AniaAndMateusz = {
    bgColor: "bgPink",
    title: "Wesele Ani i Mateusza w Uroczysku Siedmiu Stawów",
    path: "uroczysko-siedmiu-stawow-wesele",
    minHeight: true,
    seoTitle: "Uroczysko Siedmiu Stawów - wesele | Czary Marry agencja ślubna",
    seoText: "Zastanawiasz się czy nie zorganizować swojego wesela w Uroczysku Siedmiu Stawów? Zobacz jak w tym miejscu zorganizowała wesele marzeń agencja ślubna Czary Marry",
    mainPic: {
        src: AniaMateuszMain
    },
    details: "Bardzo często polecamy Uroczysko Siedmiu Stawów naszym parom i cieszymy się, gdy wybierają je na swoje miejsce weselne. Tak było również w przypadku Ani i Mateusza. Gdy odwiedzili je po raz pierwszy, wiedzieliśmy, że inna opcja nie wchodzi już w grę.",
    org: "Agencja Ślubna Czary Marry",
    orgLink: "",
    place: "Uroczysko Siedmiu Stawów",
    placeLink: "https://www.uroczysko7stawow.pl/",
    photo: "PieczkoPietras",
    photoLink: "https://pieczkopietras.pixieset.com/",
    movie: "Pepa Films",
    movieLink: "https://www.pepafilms.pl/",
    flowers: "Anello Decor",
    flowersLink: "https://www.facebook.com/anellodecor/",
    date: "27 mar 2022",
    textMain: "Uroczysko Siedmiu Stawów to jedno z najpiękniejszych miejsc weselnych na mapie Dolnego Śląska. Lubimy tam wracać głównie ze względu na jego zamkowy klimat oraz piękne otoczenie. Doceniamy profesjonalizm obsługi i troskę o naszych klientów. Na uwagę zasługuje również świetna kuchnia oraz kompleksowość tego miejsca. Bardzo często polecamy Uroczysko Siedmiu Stawów naszym parom i cieszymy się, gdy wybierają je na swoje miejsce weselne. Tak było również w przypadku Ani i Mateusza. Gdy odwiedzili je po raz pierwszy, wiedzieliśmy, że inna opcja nie wchodzi już w grę.",
    content: [
        {
            headerClassName: 'grey',
            headerSmall: 'Uroczysko Siedmiu Stawów — otoczenie.',
            text: <>Przekraczając bramy Uroczyska Siedmiu Stawów wiemy, że trafiliśmy w wyjątkowe miejsce. Zaledwie 40 minut na południe od <Link to={generatePath(URLS.LANDING, { path: 'wedding-planner-wroclaw' })} className="linkPink">Wrocławia</Link> wkraczamy na renesansowy zamek z XVI wieku, w którym obecnie mieści się restauracja oraz część pokoi hotelowych zachwyca swoją architekturą. Renowacje wykonywane na przestrzeni lat przywróciły mu dawną świetność oraz nadały luksusowego charakteru. Część zabudowań otrzymała drugie życie i znalazła nowe zastosowanie. Kilka lat temu oddano do użytku przestronną salę bankietową nawiązującą wyglądem do klimatu zamku. Całość dopełnia elegancki dziedziniec z pięknie zagospodarowaną zielenią i starodrzewiem. To idealne miejsce na organizację ceremonii plenerowej, ale również istny raj dla fotografów i filmowców ślubnych. Wystarczy kilka minut, żeby wykonać niesamowite zdjęcia na terenie obiektu. Znajdziemy tu wiele klimatycznych zakątków, które mogą stać się tłem dla niezwykle romantycznych ujęć.</>,
            pics: [
                {
                    src: urSiedSt01
                },
                {
                    src: urSiedSt02
                },
                {
                    src: urSiedSt03
                },
                {
                    src: urSiedSt04
                },
                {
                    src: urSiedSt05
                },
                {
                    src: urSiedSt06
                },
                {
                    src: urSiedSt07
                },
                {
                    src: urSiedSt08
                },
                {
                    src: urSiedSt09
                },
                {
                    src: urSiedSt10
                },
                {
                    src: urSiedSt11
                },
                {
                    src: urSiedSt12
                },
                {
                    src: urSiedSt13
                },
            ]
        },
        {
            headerClassName: 'grey',
            headerSmall: 'Uroczysko Siedmiu Stawów - luxury hotel.',
            text: 'Oczywistym ułatwieniem dla pary młodej i gości weselnych jest szeroka baza noclegowa i kompleksowość oferty Uroczyska Siedmiu Stawów. Znajdziemy tu pięćdziesiąt pięć komfortowych i klimatycznie urządzonych pokoi. Na szczególną uwagę zasługują oczywiście apartamenty, w których para młoda może przygotowywać się do swojego wielkiego dnia. Ponadto goście hotelowi mogą skorzystać ze strefy wellness, oraz spa lub wybrać się na kolację, czy drinka do restauracji. To idealne rozwiązanie dla osób, które chciałyby spędzić w Uroczysku nieco więcej czasu.',
            pics: [
                {
                    src: urSiedSt14
                },
                {
                    src: urSiedSt15
                },
                {
                    src: urSiedStLux00
                },
                {
                    src: urSiedStLux01
                },
                {
                    src: urSiedStLux02
                },
                {
                    src: urSiedStGola01
                },
                {
                    src: urSiedStGola02
                },
                {
                    src: urSiedStGola03
                },
            ]
        },
        {
            headerClassName: 'grey',
            headerSmall: 'Uroczysko Siedmiu Stawów — sala bankietowa.',
            text: <><CustomOuterLink text="Sala bankietowa Uroczyska Siedmiu Stawów" to="https://www.uroczysko7stawow.pl/oferta/wesela" className="linkPink" asFB={undefined} /> jest przeznaczona dla maksymalnie 140 osób i daje duże możliwości aranżacyjne. Kształtem przypomina prostokąt, co ułatwia optymalne ułożenie okrągłych stołów i dobrą komunikację między parą młodą a gośćmi. To przestrzeń wykończona kamieniem z monumentalnymi kolumnami w piaskowym kolorze oraz z dużym przeszkleniem i pięknym widokiem na park. Mimo swojego zamkowego charakteru sala jest bardzo plastyczna i pozwala na dużą swobodę w kwestii doboru dekoracji. Świetnie sprawdzą się tutaj kompozycje w romantycznym stylu, ale również nieco bardziej elegancki glamour czy luźniejsze w formie boho.</>,
            pics: [
                {
                    src: urSiedStOp01
                },
                {
                    src: urSiedStOp02
                },
                {
                    src: urSiedStOp03
                },
            ]
        },
        {
            headerClassName: 'grey',
            headerSmall: 'Uroczysko Siedmiu Stawów — menu.',
            text: 'Zarówno menu weselne, jak i dania serwowane w restauracji inspirowane są tradycyjną kuchnią polską przenikającą się z nowoczesnymi trendami. Potrawy są dopracowane pod względem smaku oraz sposobu podania. Synchroniczny serwis sprawia, że uroczysty weselny obiad staje się jeszcze bardziej wykwintny. Na uwagę zasługuje również przemiła i profesjonalna obsługa.',
            pics: [
                {
                    src: urSiedStWesCena01
                },
                {
                    src: urSiedStWesCena02
                },
                {
                    src: urSiedStWesCena03
                },
            ]
        },
        {
            headerClassName: 'grey',
            headerSmall: 'Uroczysko Siedmiu Stawów — nasza wizja',
            text: <><CustomPostLink text="Planując dekoracje" path="12-hey-wedding-podcast-dekoracje-slubne-florystyka" className="linkPink" /> dla Ani i Mateusza postawiliśmy na lekką i niewymuszoną elegancję. Naturalne kolory takie jak beż i odcienie koniaku uzupełniliśmy złotymi i transparentnymi detalami. Dzikość pampasów przełamaliśmy szlachetnymi odmianami kwiatów. Stoły gości zdobiły naprzemiennie wysokie i niskie kompozycje. Najważniejszym punktem sali był oczywiście stół pary młodej. Tłem dla dwuosobowego stołu prezydialnego była imponujących rozmiarów kwadratowa brama, która robiła niesamowite wrażenie i przykuwała uwagę. Zadbaliśmy również o atrakcje w postaci zewnętrznej strefy relaksu, gdzie goście mogli zaczerpnąć świeżego powietrza, spokojnie porozmawiać lub zrelaksować się z pysznym drinkiem w dłoni.</>,
            pics: [
                {
                    src: urSiedStWesOp01
                },
                {
                    src: urSiedStWesOp02
                },
                {
                    src: urSiedStWesOp03
                },
                {
                    src: urSiedStWesOp04
                },
                {
                    src: urSiedStWesOp05
                },
            ]
        },
        {
            text: <>Jeśli zastanawiacie się nad organizacją wesela w tym niesamowitym i klimatycznym miejscu, nie mogliście lepiej trafić. Z przyjemnością przeprowadzimy Was przez <CustomPostLink text="proces przygotowań" path="15-hey-wedding-jak-zorganizowac-wesele-krok-po-kroku" className="linkPink" />, podpowiemy, na co zwrócić uwagę, pomożemy w doborze wykonawców ślubnych, zaplanujemy wizję dekoracji. Chętnie będziemy Wam również towarzyszyć w dniu wesela, czuwając nad przebiegiem przygotowań, ceremonii oraz przyjęcia.
                <VideoEmbed title="Ania i Mateusz - Uroczysko Siedmiu Stawów" videoSrc="https://player.vimeo.com/video/626489318?h=ddc24aa8af" />
            </>,
        },
    ],
    extras: <>Spodobało Ci się wesele w Uroczysku Siedmiu Stawów? Może zainteresować Cię również:
        <ul style={{ marginTop: ".5rem" }}>
            <li><CustomPostLink text="Wesele w Zamku Książ w stylu Rose Gold" path="zamek-ksiaz-wesele-motyw-rose-gold" className="linkPink" /></li>
            <li><CustomPostLink text="Sesja stylizowana - Ślub, którego nie było" path="sesja-stylizowana-w-stylu-glamour" className="linkPink" /></li>
            <li><CustomRealisationLink text="Food truck wedding" path="food-truck-wesele" className="linkPink" /></li>
        </ul>
    </>
}
import CustomOuterLink from 'components/CustomLink/CustomOuterLink';
import CustomPostLink from 'components/CustomLink/CustomPostLink';
import VideoEmbed from 'components/VideoEmbed';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import URLS from 'utils/urls';

import { main as AngelikaDanielMain, stKru01, stKru02, stKru03, stKru04, stKruSala01, stKruSala02, stKruSala03, stKruSala04, stKruSala05, stKruSala06, stKruSala07, stKruSala08, stKruStok01, stKruStok02, stKruStok03, stKruStok04, stKruStok05, stKruStok06, stKruStok07, stKruStok08, stKruWe01, stKruWe02, stKruWe03, stKruWe04, stKruWe06, stKruWe07, stKruWe08, stKruWe09, stKruWe10, stKruWe11, stKruWe12, stKruWe13, stKruWe14, stKruWe15, stKruWe16 } from "../OurCouplesPics/AngelikaDaniel/index"

export const AngelikaAndDaniel = {
    bgColor: "bgGrey",
    title: "Kosmiczne wesele Angeliki i Daniela",
    path: "stara-kruszarnia-wesele-kosmos",
    minHeight: true,
    seoTitle: "Stara Kruszarnia - wesele z motywem kosmicznym",
    seoText: "Marzy Ci się wesele w Starej Kruszarni? Zobacz jaki kosmiczny motyw wyczarowała w tym miejscu agencja ślubna Czary Marry.",
    mainPic: {
        src: AngelikaDanielMain
    },
    details: "Angelika i Daniel zaufali nam i dali wolną rękę. Gdy dzieją się takie rzeczy, idziemy na całość i sięgamy gwiazd. Tak też stało się w tym przypadku. Kosmiczna energia udzieliła się wszystkim - parze młodej, gościom oraz obsłudze. Tego dnia Stara Kruszarnia zaświeciła tysiącem gwiazd.",
    org: "Agencja Ślubna Czary Marry",
    orgLink: "",
    place: "Stara Kruszarnia",
    placeLink: "http://sk.kopalniazlota.pl/",
    photo: "Yes, I do photography",
    photoLink: "https://www.facebook.com/yesidoweddingphotography",
    flowers: "Anello Decor",
    flowersLink: "https://www.facebook.com/anellodecor",
    movie: "Paweł Sawski",
    movieLink: "https://pawelsawski.pl/",
    date: "20 lut 2022",
    textMain: <>Ciężko nam sobie przypomnieć, kto wpadł na pomysł kosmicznego motywu przewodniego. Czy była to para młoda, florystka, czy my? Odmęty pamięci podpowiadają, że Angelika i Daniel zaufali nam i dali wolną rękę. Gdy dzieją się takie rzeczy, idziemy na całość i sięgamy gwiazd. Tak też stało się w tym przypadku. Kosmiczna energia udzieliła się wszystkim - parze młodej, gościom oraz obsłudze. Tego dnia <CustomOuterLink to="http://sk.kopalniazlota.pl/wesela/" text="Stara Kruszarnia" className="linkPink" asFB={undefined} /> zaświeciła tysiącem gwiazd.</>,
    topPic:
    {
        src: stKruWe01
    },
    content: [
        {
            headerSmall: "Stara Kruszarnia — Zaczęło się od miejsca.",
            headerClassName: "grey",
            text:
                <>Każdy, kto planuje <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="linkPink">wesele na Dolnym Śląsku</Link> i marzy o pięknej sali otoczonej lasem, powinien odwiedzić Starą Kruszarnię w Złotym Stoku. To jedno z najbardziej plastycznych miejsc weselnych, jakie znamy. Co to znaczy? Można tam wyczarować absolutnie wszystko. Ceglane wnętrze Starej Kruszarni może być tłem dla przeróżnych motywów przewodnich i stylów. Nas zachwyca nie tylko wnętrzem, ale również otwartością właścicieli oraz managera, pięknym otoczeniem i pyszną kuchnią, a od niedawna również klimatyczną strefą chilloutu. To samo urzekło Angelikę i Daniela, a ich wybór <CustomOuterLink to="http://sk.kopalniazlota.pl/wesela/" text="Starej Kruszarni" className="linkPink" asFB={undefined} /> był praktycznie tylko formalnością.</>,
            pics: [
                {
                    src: stKruWe02
                },
                {
                    src: stKruWe03
                },
                {
                    src: stKruWe04
                },
                {
                    src: stKruWe06
                },
                {
                    src: stKruWe07
                },
                {
                    src: stKruWe08
                },
                {
                    src: stKruWe09
                },
            ]
        },
        {
            headerSmall: "Kosmos w Starej Kruszarni.",
            headerClassName: "grey",
            text: <>Postanowiliśmy, że pójdziemy o krok dalej i nie będziemy się trzymać utartych schematów. Stworzymy własną interpretację kosmicznego wesela, nawiązując jednocześnie do jesieni, która wkradała się przez okna i drzwi Starej Kruszarni. Integralną częścią sali jest jej otoczenie. Nie mogliśmy go zignorować. Wraz z Anetą z <CustomPostLink path="12-hey-wedding-podcast-dekoracje-slubne-florystyka" text="Anello Decor" className="linkPink" /> oraz panną młodą skrupulatnie doprecyzowywałyśmy wizję i dobierałyśmy dodatki. Postanowiliśmy na pampasowy księżyc przy stole pary młodej, lustra z pampasowymi promieniami, przypominające gwiazdy i zawieszone pod sufitem. Była również kurtyna świetlna za parą młodą świecąca tysiącem drobnych lampek oraz ledowe gwiazdki. Wszystko to tworzyło niesamowity klimat po zmroku. Na stołach stanęły wysokie kompozycje w kolorach bordo. Całość uzupełniły złote podtalerze oraz sztućce, kamienie z ozdobną kaligrafią i granatowe kieliszki.</>,
            pics: [
                {
                    src: stKruWe10
                },
                {
                    src: stKruWe11
                },
                {
                    src: stKruWe12
                },
                {
                    src: stKruWe13
                },
                {
                    src: stKruWe14
                },
                {
                    src: stKruWe15
                },
                {
                    src: stKruWe16
                },
            ]
        },
        {
            headerSmall: "Ceremonia — niesamowite otoczenie Starej Kruszarni.",
            headerClassName: "grey",
            text: <>Stara Kruszarnia to jedna z najpiękniej położonych sal weselnych na Dolnym Śląsku. Samo miejsce przeznaczone na ceremonię powala. Jest to przestrzeń otoczona lasem, gdzie korony drzew tworzą baldachim, przez który przedziera się słońce. Bardzo często po zmroku rozpalane jest tak ognisko. Angelika i Daniel zdecydowali się na ceremonię humanistyczną, którą poprowadził  <CustomOuterLink to="https://djglosny.pl/celebrant-slubny/" text="celebrant ślubny Maciej Głos" className="linkPink" asFB={undefined} />. Było romantycznie i wzruszająco. Piękne otoczenie wprawiało gości w niesamowity nastrój, otaczając ich jesienną aurą.</>,
            pics: [
                {
                    src: stKru01
                },
                {
                    src: stKru02
                },
                {
                    src: stKru03
                },
                {
                    src: stKru04
                },
                {
                    src: stKruSala01
                },
                {
                    src: stKruSala02
                },
            ]
        },
        {
            headerSmall: "Strefa chilloutu w Starej Kruszarni.",
            headerClassName: "grey",
            text: "Poza wcześniej wspomnianą przestrzenią na zewnątrz Starej Kruszarni, gdzie można ogrzać się przy ognisku i pobujać w hamaku ma ona jeszcze jednego asa w rękawie. Piętro niżej sali jadalnej znajduje się strefa chilloutu z barem. To idealne miejsce, żeby odpocząć, spokojnie porozmawiać, napić się kawy. Jest przytulnie i klimatycznie, a co najważniejsze nie trzeba się przejmować pogodą panującą na zewnątrz jak przy zewnętrznych strefach relaksu.",
            pics: [
                {
                    src: stKruSala03
                },
                {
                    src: stKruSala04
                },
                {
                    src: stKruSala05
                },
                {
                    src: stKruSala06
                },
                {
                    src: stKruSala07
                },
                {
                    src: stKruSala08
                },
            ]
        },
        {
            headerSmall: "Ekipa do zadań specjalnych na weselu w Starej Kruszarni.",
            headerClassName: "grey",
            text: <>Nie znamy wykonawcy ślubnego, który nie lubiłby Starej Kruszarni. W Złotym Stoku można się zakochać, góry, lasy, cisza i spokój. Co prawda nasza ekipa nie szukała spokoju, to była raczej prawdziwa petarda energetyczna. Za konsolą aż dwóch DJ ów i to nie byle jakich — <CustomPostLink path="3-hey-wedding-ciekawe-przypadki-dj-a-jegomościa" text="DJ Jegomość" className="linkPink" /> i <CustomOuterLink to="https://djglosny.pl" text="DJ Głośny" className="linkPink" asFB={undefined} />, a na dokładkę <CustomOuterLink to="https://www.facebook.com/LudwickiLukasz/" text="Łukasz Ludwicki" className="linkPink" asFB /> na saksofonie. Team film i foto również zarażał wszystkich pozytywną energią. Klaudia z <CustomOuterLink to="https://www.facebook.com/yesidoweddingphotography" text="Yes, I Do Photography" className="linkPink" asFB /> przy wsparciu <CustomOuterLink to="https://ohstorytellers.com" text="Jacka Olszewskiego" className="linkPink" asFB={undefined} /> wykonali piękne zdjęcia. Za film odpowiedzialny był <CustomOuterLink to="https://pawelsawski.pl" text="Paweł Sawski" className="linkPink" asFB={undefined} />. Dekoracjami zajęła się wcześniej wspomniana Aneta z Anello Decor, a słodki stół i tort przygotowała Natalia z <CustomPostLink path="14-hey-wedding-o-tort-i-słodkości-weselne" text="Torty po Twojemu" className="linkPink" />. Nad całą organizacją wesela czuwaliśmy oczywiście my - <Link to={URLS.HOME} className="linkPink">Czary Marry</Link>. Mamy wrażenie, że tego dnia wszyscy nakręciliśmy się pozytywnie, a nasza kosmiczna energia rozsadzała Starą Kruszarnię.</>,
            pics: [
                {
                    src: stKruStok01
                },
                {
                    src: stKruStok02
                },
                {
                    src: stKruStok03
                },
                {
                    src: stKruStok04
                },
                {
                    src: stKruStok05
                },
                {
                    src: stKruStok06
                },
                {
                    src: stKruStok07
                },
            ]
        },
        {
            headerSmall: "Para Młoda na medal.",
            headerClassName: "grey",
            text: <>Mamy niesamowite szczęście do ludzi, trafiamy na super pary, we współpracy stawiamy na pozytywne relacje. To wszystko powoduje, że efekty są spektakularne. Dzięki otwartości Angeliki i Daniela udało się znaleźć niesamowite miejsce, wspaniałą ekipę oraz wyczarować coś niepowtarzalnego, co stało się inspiracją dla wielu par młodych. Udowadniamy, że można połączyć dwa bardzo wyraziste motywy jak jesień oraz kosmos w jedną spójną całość. O naszej weselnej przygodzie możecie posłuchać więcej w <CustomPostLink path="19-hey-wedding-ekipa-marzen-i-kosmiczne-wesele" text='19 odcinku podcastu “Hey wedding”' className="linkPink" />, a film z wesela Angeliki i Daniela zobaczycie tutaj:
                <VideoEmbed videoSrc="https://www.youtube.com/embed/qPfVAO1t-ZM" title="Angelika i Daniel Shortstory" />
                <br /><br />
                Nasi potencjalni klienci często pytają nas, jaki mamy styl oraz jakie wesela lubimy najbardziej. Nasze realizacje i ich klimat jest podyktowany tym, czego oczekuje od nas para młoda. To dlatego w naszym portfolio znajdziecie tak różne wesela. Tydzień po kosmicznym weselu Angeliki i Daniela w Starej Kruszarni, odbyło się piękne <span className="bold grey">jesienne przyjęcie Magdy i Szymona</span> w tym samym miejscu. Tym razem postawiłyśmy na kaktusy i letnie intensywne kolory, które pięknie łączyły się z kolorami złotej polskiej jesieni. Tym samym udowodniłyśmy, że Stara Kruszarnia jest miejscem niezwykle plastycznym i mimo swojego wyrazistego klimatu neutralnym.
            </>,
            pics: [
                {
                    src: stKruStok08
                },
            ]
        },
        {
            text: <>Spodobało się Wam kosmiczne wesele w Starej Kruszarni? Jeśli i Wy marzycie o wyjątkowym przyjęciu stworzonym na miarę Waszych oczekiwań, zapraszamy do <Link to={URLS.CONTACT} className='linkPink'>kontaktu</Link>. Do każdej pary i pomysłu podchodzimy indywidualnie. To Wasz dzień i powinien wyglądać dokładnie tak, jak sobie wymarzyliście.</>
        }
    ]
}
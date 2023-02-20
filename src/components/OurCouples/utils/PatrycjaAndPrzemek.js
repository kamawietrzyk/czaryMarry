import CustomOuterLink from 'components/CustomLink/CustomOuterLink';
import CustomPostLink from 'components/CustomLink/CustomPostLink';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import URLS from 'utils/urls';

import { main as PatrycjaPrzemekMain, cegCen01, cegCen02, cegCen03, cegCen04, cegCen05, cegJar01, cegJar02, cegJar03, cegJar04, cegJar05, cegJarOp01, cegJarOp02, cegJarOp03, cegJarOp04, cegJarOp05, cegWes01, cegWes02, cegWes03, cegWes04, cegWes05, cegWes06, cegWes07, cegWes08, cegWes09, cegWes10, cegWes11, cegWes12, cegWes13, cegWes14, cegWes15, cegWes16, cegWes17 } from '../OurCouplesPics/PatrycjaPrzemek/index'

export const PatrycjaAndPrzemek = {
    bgColor: "bgDark",
    title: "Patrycja i Przemek - wesele w Ceglarni Jarosławki",
    path: "ceglarnia-jaroslawki-wesele",
    minHeight: true,
    seoTitle: "Ceglarnia Jarosławki - wesele w wykonaniu Czary Marry",
    seoText: "Planujesz zorganizować swoje wesele w  Ceglarni Jarosławki? Zobacz realizację agencji ślubnej Czary Marry!",
    mainPic: {
        src: PatrycjaPrzemekMain
    },
    details: "Byłyśmy niezwykle szczęśliwe, kiedy Patrycja i Przemek zaprosili nas do współpracy w tym niesamowitym miejscu. Ciężko sobie wyobrazić, że nie tak dawno były to wyłącznie niszczejące budynki starego PGR-u.",
    org: "Agencja Ślubna Czary Marry",
    orgLink: "",
    place: "Ceglarnia Jarosławki",
    placeLink: "https://www.ceglarnia.com/",
    photo: "Jakub Nowotyński",
    photoLink: "https://fotoreportazslubny.com/",
    flowers: "Anello Decor",
    flowersLink: "https://www.facebook.com/anellodecor/",
    date: "06 mar 2022",
    textMain: <>Będziemy z Wami szczere - zarówno my, jak i większość branży ślubnej uwielbia wracać do <span className="bold mint">Ceglarni Jarosławki</span>. Byłyśmy niezwykle szczęśliwe, kiedy Patrycja i Przemek zaprosili nas do współpracy w tym niesamowitym miejscu. Odwiedzałyśmy ją wiele razy przy innych okazjach, ale jakoś nie było sposobności, żeby zorganizować tam wesele. Ceglarnia to nie tylko piękna stodoła, kochamy ją również za uniwersalność, otoczenie, kompleksowość i miłą atmosferę. Ciężko sobie wyobrazić, że nie tak dawno były to wyłącznie niszczejące budynki starego PGR-u.</>,
    topPic: {
        src: cegCen01
    },
    content: [
        {
            headerSmall: "Ceglarnia Jarosławki — piękne miejsce pośrodku niczego.".toUpperCase(),
            headerClassName: "dark",
            text: "Ceglarnia przez swoje położenie sprawia wrażenie bardzo tajemniczego miejsca. Jadąc tam po raz pierwszy, podekscytowanie wzrasta z każdą chwilą, nasuwa się myśl: czy na pewno dobrze jedziemy? Jeszcze do niedawna prowadziła tam dziurawa, szutrowa droga, o której w branży ślubnej krążyły legendy. Dziś dojedziecie tam już nowiutką asfaltówką. Lokalizacja Ceglarnii, jej oddalenie od zabudowań i duży teren dookoła czyni to miejsce niezwykle kameralnym i intymnym.",
            pics: [
                {
                    src: cegCen02
                },
                {
                    src: cegCen03
                },
                {
                    src: cegCen04
                },
                {
                    src: cegCen05
                },
            ]
        },
        {
            headerSmall: "Ceglarnia Jarosławki — kompleksowość, o której marzy każda para młoda.".toUpperCase(),
            headerClassName: "dark",
            text: <>Mało jest miejsc na weselnej mapie polski, które świadczyłyby tak kompleksową obsługę. W zasadzie <CustomOuterLink text="Ceglarnia" to="https://www.ceglarnia.com/" className="linkMint" asFB={undefined} /> jest samowystarczalna pod każdym względem.</>,
            pics: [
                {
                    src: cegJar01
                },
                {
                    src: cegJar02
                },
            ]
        },
        {
            headerSmall: "Otoczenie Ceglarni Jarosławki.",
            headerClassName: "mint",
            text: <>To 5h terenu, na które składa się plac przed salą z pięknie wystrzyżonym trawnikiem, sad, park oraz czego dusza zapragnie, żeby zorganizować ceremonię cywilną w plenerze. Konkretne miejsce możecie wybrać sami. W razie złej pogody nie musicie się martwić. Stodoły w Ceglarni Jarosławki są dwie. Tą mniejszą możecie wykorzystać jako miejsce ceremonii w razie opadów deszczu. Ponadto 11 kilometrów od sali, w miejscowości Gogolewo znajduje się zabytkowy, drewniany kościółek. Teren wokół sali daje ogromne możliwości fotografowi ślubnemu, który może poszaleć z parą młodą na sesji, nie opuszczając terenu Ceglarni. U nas za obiektywem stanął nieoceniony <CustomOuterLink text="Jakub Nowotyński" to="https://fotoreportazslubny.com" className="linkMint" asFB={undefined} />.</>,
            pics: [
                {
                    src: cegJar03
                },
                {
                    src: cegJar04
                },
                {
                    src: cegJar05
                },
            ]
        },
        {
            headerSmall: "Baza noclegowa.",
            headerClassName: "mint",
            text: "90 miejsc noclegowych w 2-,3- lub 4-osobowych pokojach. To jeszcze nie koniec, bo właściciel dzielnie pracuje nad powiększeniem tej bazy. Pokoje są utrzymane w industrialnym, a jednocześnie przytulnym klimacie. Mają bardzo dobre ceny, znajdują się zaraz przy sali, ale w odrębnym budynku. Ci, którzy chcieliby wcześniej pójść spać, nie będą słyszeć głośnej muzyki. To nie wszystko, na uwagę zasługuje Pałacyk, po drugiej stronie parku, gdzie para młoda może w kameralnym gronie przygotowywać się do wesela. Przeszklone pokoje, niesamowita przestrzeń wspólna i charakterystyczne czerwone drzwi. Zdarza się, że goście decydują się na przyjazd dzień wcześniej, żeby przedłużyć sobie weselny weekend.",
            pics: [
                {
                    src: cegJarOp01
                },
                {
                    src: cegJarOp02
                },
                {
                    src: cegJarOp03
                },
                {
                    src: cegJarOp04
                },
                {
                    src: cegJarOp05
                },
            ]
        },
        {
            headerSmall: "Catering.",
            headerClassName: "mint",
            text: <>Wielu przeraża zatrudnienie zewnętrznego cateringu, ale to świetne rozwiązanie, kiedy współpracujesz z odpowiednią i wykwalifikowaną ekipą. Zresztą właściciel lub manager pomoże Wam przejść przez ten proces. W zasadzie nie musicie robić nic więcej niż przy wyborze miejsca z własną kuchnią. Cegielnia Jarosławki współpracuje m.in. z cateringiem Modra. Potrawy przygotowywane są z sezonowych składników, a menu inspirowane tradycją ludową Polski i Europy. Jedzenie jest naprawdę smaczne. Jeśli nie wierzycie, koniecznie odwiedźcie <CustomOuterLink text="Restaurację Modra Kuchnia" to="https://www.facebook.com/ModraKuchnia/" asFB className="linkMint" /> w Poznaniu. W Ceglarnii zjecie też pyszne kontynentalne śniadanie po weselu lub zorganizujcie poprawinowego grilla.</>,
            pics: [
                {
                    src: cegWes01
                },
                {
                    src: cegWes02
                },
                {
                    src: cegWes03
                },
            ]
        },
        {
            headerSmall: "Wynajem dekoracji.",
            headerClassName: "mint",
            text: <>Magazyn Ceglarnii Jarosławki pęka w szwach. Znajdziecie tam wiele ciekawych wazonów, świeczników, skrzynek, starą szafę, proporczyki oraz oświetlenie sufitowe, a nawet drzewka na wynajem. Do tego florystka z Ceglarnii może przygotować dla Was dekoracje kwiatowe. Za te ze zdjęć odpowiada <CustomOuterLink text="Anello Decor" to="https://www.facebook.com/anellodecor/" asFB className="linkMint" />, jednak właściciel Ceglarni niczego Wam nie narzuca. Płacąc za wynajem przestrzeni możecie w niej zrobić to, czego dusza zapragnie. Oczywiście, jeżeli pozostawicie miejsce w nienaruszonym stanie.</>,
            pics: [
                {
                    src: cegWes04
                },
                {
                    src: cegWes05
                },
                {
                    src: cegWes06
                },
            ]
        },
        {
            headerSmall: "Rozrywka i chill out.",
            headerClassName: "mint",
            text: "Poza tym, że możecie poleniuchować na leżakach przed salą lub pospacerować, na terenie Ceglarni Jarosławki znajdziecie wspólną przestrzeń z wygodnymi kanapami i stołem bilardowym. To może być świetne miejsce na przygotowania dla pana młodego, jeśli para zdecydowała, że nie chce się widzieć przed ślubem.",
            pics: [
                {
                    src: cegWes07
                },
                {
                    src: cegWes08
                },
                {
                    src: cegWes09
                },
                {
                    src: cegWes10
                },
                {
                    src: cegWes11
                },
            ]
        },
        {
            headerSmall: "Ceglarnia — wesele.".toUpperCase(),
            headerClassName: "dark",
            text: "Było już o cateringu, noclegach, miejscach na ceremonię i przygotowaniach. To bardzo ważne elementy, ale o wyborze miejsca decyduje głównie wygląd sali. Stara stodoła z zewnątrz wygląda niepozornie. Tym bardziej zaskakuje jej wnętrze. Niby industrialne, a jednak przyjazne, niby na 250 osób, a jednak nie świeci pustką, gdy zorganizujemy tam wesele na 90 os. Drewno, bielone ściany, betonowa posadzka i piękne stoły z krzesłami przypominającymi nieco te szkolne z dawnych lat. Mimo że sala jest duża i strzelista nie wymaga wcale ogromnych nakładów dekoracji. W zasadzie sama się broni. Na dodatek jest klimatyzowana, co w przypadku stodół nie jest zbyt powszechne.",
            pics: [
                {
                    src: cegWes12
                },
                {
                    src: cegWes13
                },
                {
                    src: cegWes14
                },
                {
                    src: cegWes15
                },
                {
                    src: cegWes16
                },
                {
                    src: cegWes17
                },
            ]
        },
        {
            text: <>Jeśli jesteście zainteresowani organizacją wesela w Ceglarnii Jarosławki lub innym miejscu na terenie <Link to={generatePath(URLS.LANDING, { path: 'wedding-planner-poznan' })} className="linkMint">województwa wielkopolskiego</Link> zapraszamy do kontaktu. Mamy niezwykłą słabość do tych terenów i bardzo lubimy tam wracać. Jeśli marzy Wam się przyjęcie w równie klimatycznym miejscu, ale do Jarosławek trochę Wam za daleko piszcie śmiało, na pewno coś na to poradzimy.</>
        }
    ],
    extras: <>Może zainteresować Cię również:
        <ul style={{ marginTop: ".5rem" }}>
            <li><CustomPostLink text="Folwark Wąsowo - miejsce na wesele dające nieograniczone możliwości" path="folwark-wasowo-wesele" className="linkMint" /></li>
            <li>Załatw wszystkie <CustomPostLink text="formalności przed ślubem" path="przygotowania-do-slubu-formalnosci" className="linkMint" /></li>
            <li>Zorganizuj <CustomPostLink text="wesele w ogrodzie" path="wesele-w-ogrodzie-garden-party" className="linkMint" /></li>
        </ul>
    </>
}
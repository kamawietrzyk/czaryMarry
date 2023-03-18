// import VideoEmbed from 'components/VideoEmbed';
import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import URLS from 'utils/urls';
import { nataliaMattMain, natMatt01, natMatt02, natMatt03, natMatt04, natMatt05, natMatt06, natMatt07, natMatt08, natMatt09, natMatt10, natMatt11, natMatt12, natMatt13, natMatt14, natMatt16, natMatt17, natMatt18, natMatt19, natMatt20, natMatt21, natMatt22, natMatt23, natMatt24, natMatt25, natMatt26, natMatt27, natMatt28, natMatt29, natMatt30, natMatt31, natMatt32, natMatt33, natMatt34, natMatt35, natMatt36, natMatt37, natMatt38, natMatt39 } from '../OurCouplesPics/NataliaMatt';

export const NataliaAndMatt = {
    bgColor: "bgDark",
    title: "Złoty Jar - piękne wesele Natalii i Matta",
    path: "zloty-jar-wesele",
    minHeight: true,
    seoTitle: "Złoty Jar wesele | Czary Marry agencja ślubna",
    seoText: "Zastanawiasz się czy Złoty Jar to dobre miejsce na wesele?! Zobacz realizację przyjęcia weselnego, które urządziłyśmy Natalii i Matowi w tym niezwykłym miejscu.",
    mainPic: {
        src: nataliaMattMain
    },
    details: "Są miejsca, które już od progu uderzają swoją magią i niepowtarzalnością. Urzekają swoją gościnnością, dobrą energią i niewymuszoną naturalnością. Taką właśnie przestrzenią jest Złoty Jar, idealne miejsce na ślub i wesele na luzie w gronie najbliższych.",
    org: "Agencja Ślubna Czary Marry",
    orgLink: "",
    place: "Złoty Jar",
    placeLink: "https://zlotyjar.pl/wesele/",
    photo: "Nikola Baron",
    photoLink: "https://www.nikolabaron.com/",
    decor: "Klub Ślub",
    decorLink: "https://www.facebook.com/klubslub/",
    music: "Imprezy po byku",
    musicLink: "https://www.imprezy-pobyku.pl/",
    cake: "Torty z Mojesza",
    cakeLink: "https://www.facebook.com/TortyzMojesza/",
    date: "18 mar 2023",
    textMain: <>
        Są miejsca, które już od progu uderzają swoją magią i niepowtarzalnością. Otoczone pięknym lasem i górami, z nutką tajemniczości sprawiają, że nie można przestać się zachwycać. Urzekają swoją gościnnością, dobrą energią i niewymuszoną naturalnością. Taką właśnie przestrzenią jest Złoty Jar, idealne miejsce na ślub i wesele na luzie w gronie najbliższych.
    </>,
    topPic: {
        src: natMatt01
    },
    content: [
        {
            headerSmall: "ZŁOTY JAR - OPINIE",
            headerClassName: "dark",
            text: <>
                Natalia i Matt zdecydowali się na organizację swojego ślubu i wesela w Złotym Jarze w Złotym Stoku właśnie ze względu na jego niepowtarzalny klimat. Zakochali się w jego urokliwej architekturze i historii.
            </>,
            pics: [
                {
                    src: natMatt02
                },
                {
                    src: natMatt03
                },
                {
                    src: natMatt04
                },
                {
                    src: natMatt05
                },
                {
                    src: natMatt06
                },
            ]
        },
        {
            text: <>
                W Złotym Jarze podchodzi się z miłością do organizacji rodzinnych wydarzeń. Każda Para traktowana jest wyjątkowo i bardzo serdecznie. To miejsce z duszą, idealne na wesele w stylu domówka-party. W Złotym Jarze jest wszystko: pyszna kuchnia, nocleg dla waszych gości, kameralna atmosfera i zaangażowana ekipa. Nic dziwnego, że miejsce to cieszy się nienagannymi opiniami.
            </>,
            pics: [
                {
                    src: natMatt07
                },
                {
                    src: natMatt08
                },
                {
                    src: natMatt09
                },
                {
                    src: natMatt10
                },
                {
                    src: natMatt11
                },
                {
                    src: natMatt12
                },
                {
                    src: natMatt13
                },
                {
                    src: natMatt14
                },
                {
                    src: natMatt16
                },
            ]
        },
        {
            headerSmall: "NATALIA I MATT - WESELE W ZŁOTYM JARZE",
            headerClassName: "dark",
            text: <>
                Pomysłów na miejsce ich uroczystości było kilka. Para szukała kameralnego miejsca z dobrą wegetariańską kuchnią, ale także dobrze skomunikowanego dla gości podróżujących z zagranicy. W pierwszej kolejności szukaliśmy czegoś <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="linkLight">we Wrocławiu</Link> lub na jego obrzeżach, jednak po poznaniu Złotego Jaru decyzja zapadła bardzo szybko. Zarówno para młoda jak i my czułyśmy, że w tym miejscu stworzymy uroczystość bez nadęcia, na luzie i w gronie bliskich. <br />
                Natalia z Mattem na co dzień mieszkają w Szwajcarii. Uwielbiają obcowanie z naturą, piesze wycieczki, dobrą kuchnię i proste przyjemności. Złoty Jar idealnie wpasował się w ich styl.
            </>,
            pics: [
                { src: natMatt17 },
                { src: natMatt18 },
                { src: natMatt19 },
                { src: natMatt20 },
                { src: natMatt21 },
            ]
        },
        {
            headerSmall: "ZŁOTY JAR - ŚLUB W PLENERZE",
            headerClassName: "dark",
            text: <>
                Złoty Jar ma piękny teren wokół. Znajduje się na uboczu, z dala od ruchu turystycznego. Otoczony jest dostojnym lasem, gdzie w tle słychać szum strumyka i świergot ptaków. Decyzja więc o organizacji uroczystości symbolicznej w plenerze wydawała się jedyną i słuszną.
            </>,
            pics: [
                { src: natMatt22 },
                { src: natMatt23 },
            ]
        },
        {
            text: <>Śluby symboliczne to uroczystości bardzo osobiste. Natalia z Mattem zdecydowali się właśnie na taki rodzaj ślubu ze względu na to, że mogli nadać uroczystości niepowtarzalny i spersonalizowany charakter. Na osoby prowadzące uroczystość wybrali swoich dwóch przyjaciół i to była świetna decyzja. O oprawę muzyczną  ślubu zadbał świetny duet: Krzysiek - wokalista i Grzesiek grający na gitarze. Chłopaki zaaranżowali ukochane utwory pary młodej, nawiązujące do ważnych momentów w ich życiu. Od początku uroczystość była bardzo wzruszająca. Przyjaciółka Natalii zaczęła słowami “obiecałam sobie, że nie będę płakać...”, po czym połowa gości - z nią na czele - zaczęła popłakiwać ze wzruszenia.</>,
            pics: [
                { src: natMatt24 },
                { src: natMatt25 },
                { src: natMatt26 },
            ]
        },
        {
            headerSmall: "APERITIF NA TARASIE ZŁOTEGO JARU",
            headerClassName: "dark",
            text: <>
                Natalii z Mattem bardzo zależało na naturalnym i niewymuszonym przebiegu swojej uroczystości. Chcieli cieszyć się czasem z bliskimi i celebrować każdy moment. Dlatego po ceremonii humanistycznej zaplanowali prawie dwugodzinny chill na tarasie Złotego Jaru. W przypadku tego wesela był to strzał w 10! Po pierwsze z racji tego, że Natalia i Matt kochają celebrować czas z bliskimi, ale także dlatego, że jest to szwajcarska tradycja, którą chciał zachować Matt. A co na to goście? Mam wrażenie, że zakochali się w tym miejscu i koncepcji tego wesela od samego początku. Pyszne przekąski, dobre wino, swobodna i luźna atmosfera przy akompaniamencie gitary i śpiewu Krzyśka sprawiła, że nikomu nie spieszyło się na główną część, czyli oficjalny obiad.
            </>,
            pics: [
                { src: natMatt27 },
                { src: natMatt28 },
                { src: natMatt29 },
                { src: natMatt30 },
                { src: natMatt31 },
                { src: natMatt32 },
            ]
        },
        {
            headerSmall: "ZŁOTY JAR - WESELE",
            headerClassName: "",
            text: <>
                Pierwsza część wesela była zdecydowanie w stylu slow wedding. Po relaksie na tarasie para młoda i goście przeszli do sali głównej, gdzie został zaserwowany obiad, a następnie bliscy znajomi Matta i Natalii przygotowali show nawiązujące do ich poznania. Tak samo, jak w przypadku aperitif, tak i obiad odbył się w spokojnej i niespiesznej atmosferze. Znalazł się czas na przemowy, wspólne zdjęcia, rozmowy i śmiechy.
            </>,
            pics: [
                { src: natMatt33 },
                { src: natMatt34 },
                { src: natMatt35 },
            ]
        },
        {
            text: <>
                Jednak kiedy przyszedł czas na tańce, parkiet zawrzał. Kiedy DJ zaczął grać, goście nie czekali ani minuty. Szumnie ruszyli na parkiet i zostali tam już do białego rana.
                <br /><br />
                Na potwierdzenie tego, że Złoty Jar hipnotyzuje mamy to, że po skończonej imprezie nad ranem nie wszyscy mieli ochotę wracać do pokojów. Znaleźli się tacy, którzy witali wschód słońca siedząc na starym, drewnianym tarasie.

            </>,
            pics: [
                { src: natMatt36 },
                { src: natMatt37 },
                { src: natMatt38 },
            ]
        },
        {
            text: <>
                Wesela w tak pięknych okolicznościach przyrody i architektury są dla nas zawsze niesamowitym przeżyciem. Towarzyszenie Mattowi i Natalii w tak ważnym dla nas dniu była dla nas czystą przyjemnością. Magicznie było przeżywać ten dzień z nimi i ich gośćmi.
            </>,
            pics: [
                { src: natMatt39 },
            ]
        },
        {
            headerSmall: "ZORGANIZUJEMY CI NIEZAPOMNIANE WESELE W ZŁOTYM JARZE",
            headerClassName: "dark",
            text: <>
                Spodobała się Wam nasza koncepcja wesela w Złotym Jarze? Chętnie zorganizujemy dla Was równie niepowtarzalne wesele w tym urokliwym miejscu Dolnego Śląska. <Link to={URLS.HOME} className="linkLight">Napisz do nas</Link> a my zajmiemy się całą resztą!
            </>
        }
    ]
}
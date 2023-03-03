import CustomPostLink from 'components/CustomLink/CustomPostLink';
import CustomRealisationLink from 'components/CustomLink/CustomRealisationLink';
import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import URLS from 'utils/urls';
import { aniaAdam01, aniaAdam02, aniaAdam03, aniaAdam04, aniaAdam05, aniaAdam06, aniaAdam07, aniaAdam08, aniaAdam09, aniaAdam10, aniaAdam11, aniaAdam12, aniaAdam13, aniaAdam14, aniaAdam15, aniaAdam16, aniaAdam17, aniaAdam18, aniaAdam19, aniaAdam20, aniaAdam21, aniaAdam22, aniaAdam23, aniaAdam24, aniaAdam25, aniaAdam26, aniaAdam27, aniaAdam28, AniaAdamMain } from '../OurCouplesPics/AniaAdam';

export const AniaAndAdam = {
    bgColor: "bgMint",
    title: "Wesele ze strefą chillout",
    path: "strefa-chillout-wesele",
    minHeight: true,
    seoTitle: "Strefa chillout wesele | Czary Marry agencja ślubna",
    seoText: "Zastanawiasz się nad strefą chillout na wesele? Zobacz naszą realizację wesela plenerowego z niezwykłą strefą relaksu.",
    mainPic: {
        src: AniaAdamMain
    },
    details: "Przyjęcie weselne Ani i Adama odbyło się w urokliwej stodole, jest ono jednak przykładem jak idealnie zaaranżować przestrzeń wokół sali i połączyć tradycyjne zasiadane przyjęcie z nowoczesnym podejściem i relaksem na świeżym powietrzu.",
    org: "Agencja Ślubna Czary Marry",
    orgLink: "",
    place: "Hacjenda Dolina Żab",
    placeLink: "http://www.dolinazab.pl/",
    photo: "Małe szare studio",
    photoLink: "https://www.maleszarestudio.pl/",
    flowers: "Anello Decor",
    flowersLink: "https://www.facebook.com/anellodecor",
    movie: "Paweł Sawski",
    movieLink: "https://pawelsawski.pl/",
    date: "03 mar 2023",
    textMain: <>Szukając wymarzonego miejsca na wesele, nie musisz ograniczać się do restauracji czy domów
        weselnych. Możesz wyjść poza mury budynku i zorganizować wesele w całości lub częściowo w
        plenerze. Organizacja imprezy na świeżym powietrzu składa się z wielu etapów, ale jednocześnie ma
        nieograniczone możliwości aranżacyjne w tym opcja strefy chillout na weselu. Dla wielu par może
        rodzić wiele obaw o niesprzyjające warunki atmosferyczne, ale zapewniamy, że właśnie dlatego
        wesela pod chmurką są bardzo przemyślane – z planem B i to nie jednym. <br /><br />
        O tym przekonali się Ania i Adam, którzy zdecydowali się na ceremonię na łonie natury. Swój ślub i
        wesele chcieli zorganizować na świeżym powietrzu, w którym szczególne miejsce zajmowałaby strefa
        chillout. Od czego zaczęli?
    </>,
    topPic: {
        src: aniaAdam21
    },
    content: [
        {
            headerSmall: "Wesele na świeżym powietrzu – wybór miejsca",
            headerClassName: "mint",
            text: <><p>Niezależnie od tego, czy Para Młoda zamierza wybrać miejsce zaślubin w całkowicie otwartej
                przestrzeni, czy w częściowo zadaszonym miejscu, piękno natury podkreśli klimat całej ceremonii. A
                do tego będzie idealnym punktem do stworzenia <span className='bold'>strefy chillout, która stanowi nie tylko atrakcję wesela, lecz także jest idealnym miejscem na relaks.</span></p>
            </>,
            pics: [
                {
                    src: aniaAdam10,
                },
                {
                    src: aniaAdam15
                },
                {
                    src: aniaAdam16
                },
                {
                    src: aniaAdam22
                },
            ]
        },
        {
            text: <>Ania i Adam piękno natury chcieli uchwycić niedaleko <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="linkMint">Wrocławia</Link>. Swoją ceremonię zaplanowali w
                Hacjendzie Dolinie Żab – wiejskiej stodole, która otoczona jest łąkami i lasem dębowo-świerkowym.
                To miejsce okazało się idealne ze względu na ogromną zieloną przestrzeń i właśnie tę klimatyczną,
                wtopioną w krajobraz stodołę, w której goście weselni mogli zjeść tradycyjny weselny obiad oraz
                bawić się na parkiecie. Sama ceremonia zaślubin odbyła się na zewnątrz, w obrządku
                humanistycznym, a czerwcowe słońce sprzyjało wzruszającym przemowom.</>,
            pics: [
                {
                    src: aniaAdam05,
                },
                {
                    src: aniaAdam02,
                },
                {
                    src: aniaAdam12
                },
                {
                    src: aniaAdam13
                },
                {
                    src: aniaAdam01
                },
                {
                    src: aniaAdam14
                },
            ]
        },
        {
            headerSmall: "Dekoracje i motyw na weselu pod chmurką",
            headerClassName: "mint",
            text: <>W zależności od pory roku natura sama może wyznaczyć motyw przewodni dekoracji, który warto w
                dowolny sposób podkreślić. Nie istnieje jeden kolor czy <CustomPostLink path="motyw-przewodni-wesela" text="motyw przewodni wesela" className="linkMint" />, który będzie
                idealnie komponował się z roślinnością. Pary Młode mogą wybrać zarówno pastelowe, jak i
                kontrastujące kolorem kwiaty czy dodatki. Na stołach mogą królować szklane i miedziane elementy,
                w stylu industrialnym, boho czy rustykalnym. Sprawdzi się także surowe, naturalne drewno i akcenty
                w kolorze palonej cegły. jeśli tak jak w przypadku Ani i Adama planujecie ceremonię zaślubin na
                zewnątrz, warto wyróżnić ten obszar osobną dekoracją. Może to być łuk pełen kwiatów/ liści/ girland
                świetlnych, który będzie później stanowił idealne miejsce na składanie życzeń Młodej Parze. Osobną
                sprawą jest aranżacja strefy relaksu dla gości weselnych jaką jest strefa chillout.</>,
            pics: [
                {
                    src: aniaAdam03,
                },
                {
                    src: aniaAdam06
                },
                {
                    src: aniaAdam18
                },
                {
                    src: aniaAdam17
                },
                {
                    src: aniaAdam19
                },
            ]
        },
        {
            headerSmall: "Strefa chillout na weselu",
            headerClassName: "mint",
            text: <>Jeśli zależy nam na <CustomPostLink path="wesele-w-plenerze" text="weselu w plenerze" className="linkMint" />, na którym chcemy w wyjątkowy sposób zagospodarować <CustomPostLink path="wesele-w-ogrodzie-garden-party" text="ogród" className="linkMint" />, warto pomyśleć nad specjalną strefą chillout. <span className="bold">Strefa chillout to przestrzeń z miejscami
                siedzącymi, w której goście weselni mogą odpocząć od głośnej muzyki, zrelaksować się, popijając
                ulubiony drink czy po prostu porozmawiać ze sobą.</span> Włączenie strefy relaksu do elementów wesela to świetny sposób na podkreślenie motywu ślubu i zaakcentowanie jego oryginalności.</>,
            pics: [
                {
                    src: aniaAdam07
                },
                {
                    src: aniaAdam08
                },
                {
                    src: aniaAdam20
                },
            ]
        },
        {
            text: <>Bez strefy chillout na weselu nie wyobrażamy sobie żadnego <CustomRealisationLink text="wesela w stylu slow" path="slow-wedding" className="linkMint" />. To tu twoi goście
                poczują się komfortowo i będą mogli dać sobie chwilę wytchnienia od weselnych pląsów.<br /><br />
                Na taki krok zdecydowali się Ania i Adam – ich weselna strefa chillout została stworzona przy zejściu z
                tarasu na trawie. Jej fenomen tkwił w nietypowym otoczeniu, ponieważ tworzyły ją leżaki, drewniane
                stoliki, i szereg atrakcji, a wśród nich fotobudka, coctail bar i barista. Wszystko to w zabytkowych
                samochodach nawiązujących do słynnych hipisowskich ogórków. Dodatkową atrakcją były również
                animacje dla dzieci – wykonywane w plenerze.</>,
            pics: [
                {
                    src: aniaAdam04,
                },
                {
                    src: aniaAdam09,
                },
                {
                    src: aniaAdam11,
                },
                {
                    src: aniaAdam23
                }
            ]
        },
        {
            headerSmall: "Co jeszcze może znaleźć się w strefie chillout?",
            headerClassName: "mint",
            text: <>Pary Młode mogą dziś wybierać spośród wielu atrakcji plenerowych. Wymieniamy te, z którymi
                spotykamy się najczęściej, ale lista jest o wiele dłuższa:
                <ol style={{ marginTop: ".5rem" }}>
                    <li>Stoisko z lodami, goframi czy watą cukrową.</li>
                    <li>Czekoladowa fontanna.</li>
                    <li>Food trucki z międzynarodową kuchnią – od amerykańskich specjałów, czyli pizzy burgerów,
                        po kuchnie tajską czy chińską.</li>
                    <li>Prosecco van lub bar piwny, czyli nielimitowana dostawa bąbelków.</li>
                    <li>Stanowisko z dostępem do lemoniady.</li>
                    <li>Gry plenerowe – np. big jenga lub weselne bingo.</li>
                    <li>Wspólne przygotowywanie posiłków z gośćmi (fingerfoods).</li>
                    <li>Pokazy sztucznych ogni.</li>
                    <li>Tańce pod gołym niebem, czyli stanowisko DJ na zewnątrz, który pod osłoną nocy przenosi
                        imprezę pod dach...</li>
                </ol>
                Jak widzisz prócz miejsc siedzących strefa chillout na weselu może obfitować w mnogość atrakcji i
                możliwości. Chętnie pomożemy Ci zaaranżować taką strefę chillout na Twoim weselu.
            </>,
            pics: [
                {
                    src: aniaAdam24
                },
                {
                    src: aniaAdam25
                },
                {
                    src: aniaAdam26
                },
                {
                    src: aniaAdam27
                },
            ]
        },
        {
            headerSmall: "Strefa chillout – wskazówki od wedding planera o tym jak zaaranżować przestrzeń relaksu dla gości weselnych?".toUpperCase(),
            headerClassName: "mint",
            text: <>Na koniec kilka praktycznych wskazówek od <Link to={URLS.HOME} className="linkMint">wedding plannerek</Link> dotyczących aranżacji strefy chillout na weselu. Aby zaaranżować przestrzeń chillout dla gości weselnych, należy:
                <ul style={{ marginTop: ".5rem" }}>
                    <li>Wybrać odpowiednie miejsce - powinno być wygodne i ciche, z dala od głośnych dźwięków
                        wesela. Nie przesadnie oddalone od miejsca zabawy, lecz nie w głównym ciągu
                        komunikacyjnym.</li>
                    <li>Zaplanować odpowiednie meble - wygodne fotele, sofy, hamaki, pufy, worki sako itp. Jeśli
                        wasza sala weselna nie posiada takich mebli z łatwością możemy wynająć strefę chillout na
                        wesele.</li>
                    <li>Zadbać o oświetlenie - dodaj delikatne oświetlenie, takie jak świece, lampki, girlandy
                        oświetleniowe, aby stworzyć przytulną atmosferę.</li>
                    <li>Zaaranżować dekoracje - dodaj rośliny, poduszki, dywany, aby nadać przestrzeni charakteru.</li>
                    <li>Dostarczyć rozrywki - udostępnij gry planszowe, przekąski i napitki, aby goście mogli
                        wypocząć.</li>
                    <li>Zadbać o dodatki - udostępnij chłodne napoje, lekkie przekąski, aby goście czuli się
                        komfortowo. Pomyśl o dodatkowych atrakcjach.</li>
                    <li>Zadbać o komfort termiczny - upewnij się, że temperatura w strefie chillout na weselu jest
                        odpowiednia dla gości. W gorące dni możesz pozostawić wachlarze lub przenośne
                        wentylatorki zaś w chłodne wieczory kocyki, pledy czy lampy grzejne.</li>
                    <li>Zadbaj o czystość strefy chillout - upewnij się, że strefa jest czysta i schludna, są dostępne
                        chusteczki/serwetki a niedaleko są kosze czy popielniczki, aby goście czuli się komfortowo.</li>
                </ul>
                Pamiętaj, że strefa chillout na weselu powinna być przestrzenią relaksu dla gości, więc zadbaj o to,
                aby była komfortowa i atrakcyjna.
            </>,
            pics: [
                {
                    src: aniaAdam28
                }
            ]
        },
    ],
    extras: <>Spodobała Ci się nasza realizacja plenerowego wesela ze strefą chillout? Pewnie przypadnie Ci do
        gustu również:
        <ul style={{ marginTop: ".5rem" }}>
            <li><CustomRealisationLink text="wesele w Uroczysku Siedmiu Stawów" path="uroczysko-siedmiu-stawow-wesele" className="linkMint" /></li>
            <li><CustomRealisationLink text="foodtruck na weselu" path="food-truck-wesele" className="linkMint" /></li>
            <li><CustomRealisationLink text="wesele w Ceglarni Jarosławki" path="ceglarnia-jaroslawki-wesele" className="linkMint" /></li>
        </ul>
    </>
}
import CustomOuterLink from 'components/CustomLink/CustomOuterLink';
import CustomPostLink from 'components/CustomLink/CustomPostLink';
import VideoEmbed from 'components/VideoEmbed';
import React from 'react';
import { Link } from 'react-router-dom';
import URLS from 'utils/urls';

import { main as FoodTruckMain, ftWed01, ftWed02, ftWed03, ftWed04, ftWed05, ftWed06, ftWed07, ftWed08, ftWed09, ftWed10, ftWed11, ftWed12, ftWed13, ftWed14, ftWed15, ftWed16, ftWed16A, ftWed17, ftWed18, ftWed19, ftWed20, ftWed21, ftWed22, ftWed23, ftWed24, ftWed25, ftWed26, szelest, królleski, hasztagKawa, photoBus, vw, craicford, dym } from "../OurCouplesPics/FoodtruckWedding/index"

export const FoodtruckWedding = {
    bgColor: "bgMint",
    title: "Foodtruck Wedding",
    path: "food-truck-wesele",
    minHeight: true,
    seoTitle: "Food truck wedding - food truck na wesele",
    mainPic: {
        src: FoodTruckMain
    },
    details: "Event branżowy połączony z sesją stylizowaną w stylu slow, czyli tak jak lubimy najbardziej. Garden party odbyło się w pałacowym ogrodzie, w którym stanęły pięknie odrestaurowane stare samochody. Nie zabrakło również dekoracji kwiatowych, stref chilloutu i dobrej muzyki.",
    org: "Agencja Ślubna Czary Marry",
    orgLink: "",
    place: "Pałac Osowa Sień",
    placeLink: "https://www.palacosowasien.com/",
    photo: "Wosiak",
    photoLink: "https://wosiakfotografia.pl/",
    photoTwo: "Wojciech Makula",
    photoLinkTwo: "https://www.wojciechmakula.pl/",
    movie: "Primephoto",
    movieLink: "https://teledyskslubny.pl/",
    flowers: "Pracownia Zieleni",
    flowersLink: "http://pracowniazieleni.pl/",
    date: "12 lut 2022",
    textMain: "Był środek pandemii, zakaz organizacji wesel i kiepski rok dla par młodych i branży ślubnej. Wszyscy z niepokojem czekali na rozluźnienie obostrzeń, które miało nadejść lada moment. Pomyślałyśmy, że nie możemy stać w miejscu i warto zorganizować sesję stylizowaną… ale sesji nie lubimy. Brakuje w nich szczerych emocji par młodych, czyli tego, co w weselach lubimy najbardziej. Nieco bez przekonania zaczęliśmy szukać inspiracji.",
    topPic:
    {
        src: ftWed10
    },
    content: [
        {
            text: <>Wtedy pojawił się on, z czeluści internetu przemówił do nas swoim żółtym kolorem. Pięknie odnowione Renault Estafette o wdzięcznej nazwie <CustomOuterLink to="https://www.szelestbus.pl" text="Szelest Bus" className="linkMint" asFB={undefined} />. Jeszcze tego samego dnia napisaliśmy do Wojtka, właściciela Szelesta. Zapadła decyzja — robimy sesję stylizowaną food truck wedding. Bardzo szybko zorientowałyśmy się, organizacja sesji nie wykorzysta potencjału tego, co udało nam się zorganizować i należy zrobić kameralny event branżowy przypominający wesele i będący inspiracją dla par młodych. Dziś bazując na naszym foodtruckowym i wedding plannerskim doświadczeniu opowiemy Wam, jak zorganizować food truckowe wesele oraz o czym należy pamiętać, wybierając food truck na wesele.</>,
            pics: [
                {
                    src: ftWed01
                },
            ]
        },
        {
            headerSmall: 'Food truck na wesele — miejsce',
            headerClassName: 'mint',
            text:
                <>Bez względu na to, czy zdecydujecie się na jeden samochód, czy kilka, musicie znaleźć odpowiednie miejsce. Potrzebujecie ogrodu, skwerku lub kawałka łąki, gdzie będą mogły stanąć food trucki. Zdecydowanie łatwiej będzie je postawić niedaleko pałacu, restauracji, stodoły czy innego weselnego obiektu. Świetnie sprawdzi się też postawienie <CustomPostLink text="namiotu w plenerze" path="wesele-pod-namiotem" className="linkMint" />, ale to rozwiązanie bardzo wysoko budżetowe. Warto zastanowić się również, czy Wasze wesele ma się odbyć pod gołym niebem, czy w sali weselnej. Osobiście odradzamy organizacji wesela pod chmurką bez planu B, ponieważ pogoda w Polsce bywa kapryśna. Idealnie byłoby znaleźć piękne miejsce z wyjściem na ogród. Dzięki temu unikniecie niepotrzebnego stresu i dodatkowych kosztów. Jeśli już znajdziecie wymarzone miejsce weselne, które Waszym zdaniem nadaje się pod organizację wesela z food truckami, zapytajcie właściciela, jak zapatruje się na Wasz pomysł. Nieoczywiste rozwiązania wymagają otwartości, odwagi, niosą też ze sobą ryzyko, które nie każdy chce ponieść.
                </>,
            pics: [
                {
                    src: ftWed02
                },
                {
                    src: ftWed03
                },
                {
                    src: ftWed04
                },
                {
                    src: ftWed05
                },
            ]
        },
        {
            text: <>O co zapytać właściciela miejsca przed wynajęciem food trucka na wesele:
                <ol style={{ marginTop: ".5rem" }}>
                    <li>Czy nie ma nic przeciwko, że auta wjadą na trawę?</li>
                    <li>Czy jest jakieś wyznaczone lub sugerowane miejsce, gdzie mogą stanąć samochody?</li>
                    <li>Gdzie jest najbliższe podpięcie do wody i prądu?</li>
                    <li>Na jakie natężenie prądu możecie liczyć? Przy kilku samochodach niezbędne będzie podpięcie do siły.</li>
                    <li>Czy są jakieś ograniczenia godzinowe dotyczące korzystania z ogrodu np. cisza nocna?</li>
                    <li>Czy ogród jest oświetlony wieczorem? To bardzo ważne, jeżeli chcecie z niego korzystać również po zmroku.</li>
                </ol></>,
            pics: [
                {
                    src: ftWed06
                },
                {
                    src: ftWed07
                },
                {
                    src: ftWed08
                }
            ]
        },
        {
            headerSmall: 'Food truck na wesele — gdzie go szukać',
            headerClassName: 'mint',
            text: "Food trucki od lat cieszą się popularnością w Polsce i za granicą. Na początku były tylko atrakcją, która przywędrowała do nas z Ameryki, dziś obsługują większość festiwali organizowanych na świeżym powietrzu, a w wielu miastach znajdziemy całe food truckowe strefy gastronomiczne. Nie powinno więc dziwić, że wiele par zaczęło je zapraszać również na własne wesela. Szlaki przetarły photo busy i prosecco vany, ale niebawem równie popularne stały się mobilne bary, różnego rodzaju fast foody, lodziarnie. Miałyśmy to szczęście, że nasz pomysł był na tyle oryginalny, że wszyscy wykonawcy, do których się zgłosiłyśmy, niemal od razu podłapali nasz pomysł i oferowali chęć do współpracy.",
            pics: [
                {
                    src: ftWed09
                },
                {
                    src: ftWed11
                },
                {
                    src: ftWed12
                },
            ]
        },
        {
            text: <>O ile znalezienie wspomnianego foto busa, czy prosecco vana nie powinno być żadnym problemem, schody mogą się pojawić przy nieco mniej weselnych usługach. Na szczęście istnieją firmy, dysponujące sporą ilością zabytkowych aut przerobionych na mobilne bary i DJ-ki, czy lodziarnie. Tu polecamy Wam firmę <CustomOuterLink to="https://craicford.pl/uslugi/mobilne-bary/" text="Craicford" className="linkMint" asFB={undefined} />, którą zaprosiłyśmy do współpracy przy food truck wedding. Znajdziecie tam sporo pięknych klasyków, których funkcję możecie dostosować do własnych potrzeb.</>,
            pics: [
                {
                    src: ftWed13
                },
                {
                    src: ftWed14
                },
                {
                    src: ftWed15
                },
            ]
        },
        {
            text: <>Najtrudniej będzie z typowymi truckami serwującymi street food oraz zarabiających głównie na dużych festiwalach. Często są to samochody bardzo mocno eksploatowane, a ich estetyka pozostawia wiele do życzenia. Poszukiwania nie były łatwe, ale udało się znaleźć kilka absolutnie przepięknych food trucków serwujących smaczne jedzenie. Szukałyśmy ich głównie na food truckowych grupach na Facebooku i uwierzcie nam, znalazło się kilka prawdziwych perełek. Wśród nich zasługujący na swoje miano <CustomOuterLink to="https://www.krolleskiburger.pl" text="Królleski Burger" className="linkMint" asFB={undefined} />. Piękny biały bus i przepyszne jedzenie, a za sterami dwójka przemiłych zapaleńców. Pamiętajcie, że tego typu samochody nie specjalizują się w weselach, często obsługują duże masowe imprezy lub mają stałą miejscówkę. Ściągniecie food trucka na wesele, wiąże się więc z nieco większymi kosztami. Przeszukajcie weselne portale, wybierzcie się na targi ślubne, szukajcie również w Google, w mediach społecznościowych oraz na grupach food truckowych.</>,
            pics: [
                {
                    src: ftWed16
                },
                {
                    src: ftWed16A
                },
                {
                    src: ftWed17
                },
                {
                    src: ftWed18
                },
            ]
        },
        {
            text: "Poniżej lista food trucków na wesele, które z powodzeniem działają w branży ślubnej i uświetniły nasz food truck wedding:"
        },
        {
            text: <><span className="dark bold">1.</span> <CustomOuterLink to="https://www.szelestbus.pl" text="Szelest Bus" className="linkDark" asFB={undefined} /> - Czyli wcześniej wspomniana mobilna DJ-ka. To nie tylko piękny samochód, ale i świetny DJ za konsolą. Jego poczynania możecie obserwować na Facebooku i Instagramie, jest też bywalcem targów ślubnych. Ma doświadczenie w prowadzeniu wesel plenerowych, eventów często pary młode decydują się na jego obecność na poprawinach.</>,
            pics: [
                {
                    src: szelest
                },
            ]
        },
        {
            text: <><span className="dark bold">2.</span> <CustomOuterLink to="https://www.krolleskiburger.pl" text="Królleski Burger" className="linkDark" asFB={undefined} /> - To idealna opcja dla fanów wołowiny i pięknych samochodów. W menu znajdziecie pyszne burgery, stripsy, nuggetsy, sałatki i frytki. Chłopaki potrafią też w wege.</>,
            pics: [
                {
                    src: królleski
                },
            ]
        },
        {
            text: <><span className="dark bold">3.</span> <CustomOuterLink to="https://dymilustra.pl" text="Dym i lustra" className="linkDark" asFB={undefined} /> - Kiedy planowałyśmy nasz event, auto było jeszcze u mechanika, dziś widzimy je na wielu zdjęciach z pięknych wesel. Warto było na niego poczekać. Dym i lustra podbija branżę ślubną i nic dziwnego. To piękny samochód z szerokim asortymentem piw rzemieślniczych, drinków, koktajli i prosecco.</>,
            pics: [
                {
                    src: dym
                },
            ]
        },
        {
            text: <><span className="dark bold">4.</span> <CustomOuterLink to="https://craicford.pl/uslugi/mobilne-bary/" text="Craicford" className="linkDark" asFB={undefined} /> - To w zasadzie wypożyczenia food trucków na wesele. W ofercie znajdziecie mobilne bary, fotobudki, DJ-ki, busy ze słodkościami, lodami i wiele innych. Powiedzcie Szymonowi jaki macie pomysł, a jesteśmy pewne, że znajdzie dla Was coś ekstra. My zdecydowałyśmy się na pyszne gofry i lody oraz przepięknego Citroena HY.</>,
            pics: [
                {
                    src: craicford
                },
            ]
        },
        {
            text: <><span className="dark bold">5.</span> <CustomOuterLink to="https://www.facebook.com/hasztagkawa" text="Hasztag kawa" className="linkDark" asFB /> - Czyli barista na wesele serwujący tzw. kawę specialty, uznaliśmy, że to niezbędny element naszej foodtruckowej układanki. Hasztag kawa uświetniła już niejedno wesele. Ten stary pocztowy mercedes zachwyca aromatem kawy i wyglądem.</>,
            pics: [
                {
                    src: hasztagKawa
                },
            ]
        },
        {
            text: <><span className="dark bold">6.</span> <CustomOuterLink to="https://photobus.pl" text="Photo bus" className="linkDark" asFB={undefined} /> - To auto, które przetarło weselne szlaki pozostałym. Kasia i Grzesiek kochają swój samochód i to, co robią. Piękny błękitny photo bus i Kasia w sukience w tym samym kolorze. Dbają o każdy detal, począwszy od dekoracji busa, a skończywszy na trosce i opiece nad gośćmi, którzy ich odwiedzają.</>,
            pics: [
                {
                    src: photoBus
                },
            ]
        },
        {
            text: <><span className="dark bold">7.</span> <CustomOuterLink to="https://www.facebook.com/elvispriscillavwlovers" text="Elvis & Priscilla VW Lovers" className="linkDark" asFB /> - Właścicielką tych pięknych volkswagenów jest Kasia  <CustomOuterLink to="https://wosiakfotografia.pl/" text="Wosiak" className="linkMint" asFB={undefined} />, fenomenalna fotografka ślubna. Kasię zaprosiliśmy do projektu ze względu na jej talent i zamiłowanie do fotografii, ale i Priscillę, czyli pięknego beżowego ogórka. Nam służył jako miejsce relaksu, sesji, ale również jako platforma do tańca. To również idealny transport dla pary młodej w dniu wesela.</>,
            pics: [
                {
                    src: vw
                },
            ]
        },
        {
            headerSmall: 'Food truck na wesele - co dalej',
            headerClassName: 'mint',
            text: <>Mieliśmy już piękne food trucki i wszystkie dane techniczne, żeby ustawić je na polanie koło pałacu <CustomOuterLink to="https://www.palacosowasien.com" text="Osowa Sień" className="linkMint" asFB={undefined} />. Zaprosiliśmy około 50 osób z branży ślubnej, w tym Monikę i Pawła — naszych modeli, którzy mieli wziąć udział w evencie, tyle że ubrani jak para młoda. Zależało nam na osobach, które naprawdę są parą, będą spontaniczne i naturalne. Tak właśnie było. Postawiliśmy na nieco luźniejsze stroje — suknię ślubną od <CustomOuterLink to="https://patriciaszlazko.com" text="Patrycji Szlazko" className="linkMint" asFB={undefined} /> oraz garnitur zamówiony przez <CustomOuterLink to="https://www.asos.com/pl" text="ASOS" className="linkMint" asFB={undefined} />. Mają tam spory wybór garniturów dla panów, którzy cenią sobie bardziej casualowy styl. <CustomOuterLink to="https://www.facebook.com/MonikaWitek.MakeUp" text="Monika jest makijażystką" className="linkMint" asFB />, więc o swój look zadbała sama.</>,
        },
        {
            text: <>Zbliżała się połowa września, a my z niepewnością czekaliśmy na prognozę pogody. Czy będzie padać, a może uda się i zorganizujemy food truck wedding pod gołym niebem? Pogoda była idealna. To był chyba najpiękniejszy dzień września. W ogrodzie stanęły food trucki oraz długi drewniany stół, krzesłami wspomogła nas <CustomOuterLink to="https://www.manufakturastaroci.pl" text="Manufaktura Staroci" className="linkMint" asFB={undefined} />, która przyjechała do nas z Krakowa z ciężarówką wypchaną po brzegi antycznymi meblami do strefy chilloutu. O dekorację stołów zadbała fenomenalna Magda z <CustomOuterLink to="http://pracowniazieleni.pl" text="Pracowni Zieleni" className="linkMint" asFB={undefined} />. Dodatkami wspomogły nas Manufaktura staroci oraz <CustomOuterLink to="https://slubnapodwiazka.com.pl/slubny-stol/" text="Ślubny stół" className="linkMint" asFB={undefined} />.</>,
            pics: [
                {
                    src: ftWed18
                },
                {
                    src: ftWed19
                },
                {
                    src: ftWed20
                },
                {
                    src: ftWed21
                },
            ]
        },
        {
            text: <>O czym należy pamiętać, decydując się na food truck na wesele:
                <ol style={{ marginTop: ".5rem" }}>
                    <li>Zapytajcie o zgodę na postawienie food trucka właściciela miejsca weselnego.</li>
                    <li>Upewnijcie się jakiego rodzaju przyłączami dysponuje miejsce i gdzie się one znajdują.</li>
                    <li>Dowiedzcie się, jaki jest pobór prądu danego samochodu i czy są jakieś inne wymagania, które musicie spełnić np. dostęp do bieżącej wody, dodatkowe przedłużacze, rozdzielacze prądu, wzmacniacze itp.</li>
                    <li>Niestety food trucki nie mają większego sensu przy bardzo brzydkiej pogodzie - to ryzyko, z którym musicie się liczyć.</li>
                </ol>
            </>,
            pics: [
                {
                    src: ftWed22
                },
                {
                    src: ftWed23
                },
            ]
        },
        {
            text: <>Kiedy sprawdzi się food truck na wesele:
                <ol style={{ marginTop: ".5rem" }}>
                    <li><CustomPostLink text="Wesele w stylu slow" path="slow-wedding" className="linkMint" /></li>
                    <li><CustomPostLink text="Wesele w sali z dostępem do ogrodu" path="wesele-w-ogrodzie-garden-party" className="linkMint" /></li>
                    <li><CustomPostLink text="Wesele pod namiotem" path="wesele-pod-namiotem" className="linkMint" /></li>
                    <li><CustomPostLink text="Wesele w plenerze" path="wesele-w-plenerze" className="linkMint" /></li>
                    <li>Wesela organizowane w ciepłych miesiącach</li>
                    <li>Dla osób lubiących nieoczywiste rozwiązania i atrakcje weselne, które zaskoczą gości</li>
                </ol></>,
            pics: [
                {
                    src: ftWed24
                },
                {
                    src: ftWed25
                },
                {
                    src: ftWed26
                },
            ]
        },
        {
            text: <>Jeśli Wasze wesele zawiera w sobie powyższe założenia, to food truck wedding zostało stworzone właśnie z myślą o Was. Mamy nadzieję, że stanie się dla Was inspiracją, a powyższy artykuł i zdjęcia kompendium wiedzy. Jeżeli podoba Wam się idea, ale organizacja już niekoniecznie i czujecie się zagubieni w tym lub innym temacie, to czekamy Waszą wiadomość. Jako weselne czarodziejki z <Link to={URLS.HOME} className='linkDark'>agencji ślubnej Czary Marry</Link> chętnie pomożemy Wam zamienić przygotowania do wymarzonego wesela w niezapomnianą przygodę.
                <br />
                <VideoEmbed title="Monika i Paweł - Foodtruck Wedding" videoSrc="https://player.vimeo.com/video/466633872?h=d770149649" />
            </>
        },
    ],
    extras: <>
        <p className='mb-2'>Pozostali partnerzy sesji:</p>
        <span>Foto: <CustomOuterLink to="https://wosiakfotografia.pl/" text="Wosiak fotografia" className="linkMint" asFB={undefined} />, <CustomOuterLink to="https://www.wojciechmakula.pl" text="Makula Photography" className="linkMint" asFB={undefined} /><br />
            Film: <CustomOuterLink to="https://teledyskslubny.pl" text="Primephoto" className="linkMint" asFB={undefined} /><br />
            Gry plenerowe: <CustomOuterLink to="forrestgames.pl" text="ForRest Games" className="linkMint" asFB={undefined} /><br />
            Tablice powitalne i drogowskazy: <CustomOuterLink to="https://www.slubwdeche.pl" text="Ślub w dechę" className="linkMint" asFB={undefined} /><br />
            Papeteria: <CustomOuterLink to="https://www.facebook.com/katelovcalligraphy/" text="Katelov Calligraphy" className="linkMint" asFB /><br />
            Biżuteria: <CustomOuterLink to="https://decolove.pl/" text="Decolove" className="linkMint" asFB={undefined} />
        </span>
    </>
}
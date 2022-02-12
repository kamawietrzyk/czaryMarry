import React from 'react'
import { Link } from 'react-router-dom'
import CustomPostLink from "../CustomLink/CustomPostLink"
import CustomOuterLink from "../CustomLink/CustomOuterLink"
import URLS from '../../utils/urls'

const weddings = [
    {
        bgColor: "bgDark",
        title: "Beata & Paweł",
        details: "Mimo niesprzyjającej aury na zewnątrz udało się wyczarować coś niesamowitego. Prostota, elegancja, geometria, złote dodatki, szarość, zieleń i biel - jesienne wesela mają moc.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Pałac Łagów",
        placeLink: "https://palac-lagow.pl/",
        photo: "Ania Kopeć Serdeczności",
        photoLink: "https://serdecznosci.com.pl/",
        flowers: "My Precious",
        flowersLink: "http://myprecious.pl/",
        photos: {
            pic1: require('./OurCouplesPics/BeataPawel/01.jpg').default,
            pic2: require('./OurCouplesPics/BeataPawel/02.jpg').default,
            pic3: require('./OurCouplesPics/BeataPawel/03.jpg').default,
            pic4: require('./OurCouplesPics/BeataPawel/04.jpg').default,
            pic5: require('./OurCouplesPics/BeataPawel/05.jpg').default,
            pic6: require('./OurCouplesPics/BeataPawel/06.jpg').default,
            pic7: require('./OurCouplesPics/BeataPawel/07.jpg').default,
            pic8: require('./OurCouplesPics/BeataPawel/08.jpg').default,
            pic9: require('./OurCouplesPics/BeataPawel/09.jpg').default,
            pic13: require('./OurCouplesPics/BeataPawel/13.jpg').default,
            pic14: require('./OurCouplesPics/BeataPawel/14.jpg').default,
            pic15: require('./OurCouplesPics/BeataPawel/15.jpg').default,
            pic16: require('./OurCouplesPics/BeataPawel/16.jpg').default,
            picVer1: require('./OurCouplesPics/BeataPawel/ver1.jpg').default,
            picVer2: require('./OurCouplesPics/BeataPawel/ver2.jpg').default,
            picVer3: require('./OurCouplesPics/BeataPawel/ver3.jpg').default,
            picVer4: require('./OurCouplesPics/BeataPawel/ver4.jpg').default,
            picVer5: require('./OurCouplesPics/BeataPawel/ver5.jpg').default,
            picVer6: require('./OurCouplesPics/BeataPawel/ver6.jpg').default,
            picVer7: require('./OurCouplesPics/BeataPawel/ver7.jpg').default,
            classNameOne: "twoVertHorizFlipped",
            classNameThree: "twoVertHoriz"
        }
    },
    {
        bgColor: "bgMint",
        title: "Foodtruck Wedding",
        path: "food-truck-wesele",
        minHeight: true,
        seoTitle: "Food truck wedding - food truck na wesele",
        mainPic: {
            src: require('./OurCouplesPics/FoodtruckWedding/main-pic.JPG').default
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
        textMain: <>Był środek pandemii, zakaz organizacji wesel i kiepski rok dla par młodych i branży ślubnej. Wszyscy z niepokojem czekali na rozluźnienie obostrzeń, które miało nadejść lada moment. Pomyślałyśmy, że nie możemy stać w miejscu i warto zorganizować sesję stylizowaną… ale sesji nie lubimy. Brakuje w nich szczerych emocji par młodych, czyli tego, co w weselach lubimy najbardziej. Nieco bez przekonania zaczęliśmy szukać inspiracji. Wtedy pojawił się on, z czeluści internetu przemówił do nas swoim żółtym kolorem. Pięknie odnowione Renault Estafette o wdzięcznej nazwie <CustomOuterLink to="https://www.szelestbus.pl" text="Szelest Bus" className="linkMint" />. Jeszcze tego samego dnia napisaliśmy do Wojtka, właściciela Szelesta. Zapadła decyzja — robimy sesję stylizowaną food truck wedding. Bardzo szybko zorientowałyśmy się, organizacja sesji nie wykorzysta potencjału tego, co udało nam się zorganizować i należy zrobić kameralny event branżowy przypominający wesele i będący inspiracją dla par młodych. Dziś bazując na naszym foodtruckowym i wedding plannerskim doświadczeniu opowiemy Wam, jak zorganizować food truckowe wesele oraz o czym należy pamiętać, wybierając food truck na wesele.</>,
        topPic: {
            src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-01.jpg').default,
        },
        content: [
            {
                headerSmall: 'Food truck na wesele — miejsce',
                headerClassName: 'mint',
                text:
                    <>Bez względu na to, czy zdecydujecie się na jeden samochód, czy kilka, musicie znaleźć odpowiednie miejsce. Potrzebujecie ogrodu, skwerku lub kawałka łąki, gdzie będą mogły stanąć food trucki. Zdecydowanie łatwiej będzie je postawić niedaleko pałacu, restauracji, stodoły czy innego weselnego obiektu. Świetnie sprawdzi się też postawienie <CustomPostLink text="namiotu w plenerze" path="wesele-pod-namiotem" className="linkMint" />, ale to rozwiązanie bardzo wysoko budżetowe. Warto zastanowić się również, czy Wasze wesele ma się odbyć pod gołym niebem, czy w sali weselnej. Osobiście odradzamy organizacji wesela pod chmurką bez planu B, ponieważ pogoda w Polsce bywa kapryśna. Idealnie byłoby znaleźć piękne miejsce z wyjściem na ogród. Dzięki temu unikniecie niepotrzebnego stresu i dodatkowych kosztów. Jeśli już znajdziecie wymarzone miejsce weselne, które Waszym zdaniem nadaje się pod organizację wesela z food truckami, zapytajcie właściciela, jak zapatruje się na Wasz pomysł. Nieoczywiste rozwiązania wymagają otwartości, odwagi, niosą też ze sobą ryzyko, które nie każdy chce ponieść.
                    </>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-02.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-03.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-04.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-05.jpg').default,
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
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-06.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-07.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-08.jpg').default,
                    }
                ]
            },
            {
                headerSmall: 'Food truck na wesele — gdzie go szukać',
                headerClassName: 'mint',
                text: "Food trucki od lat cieszą się popularnością w Polsce i za granicą. Na początku były tylko atrakcją, która przywędrowała do nas z Ameryki, dziś obsługują większość festiwali organizowanych na świeżym powietrzu, a w wielu miastach znajdziemy całe food truckowe strefy gastronomiczne. Nie powinno więc dziwić, że wiele par zaczęło je zapraszać również na własne wesela. Szlaki przetarły photo busy i prosecco vany, ale niebawem równie popularne stały się mobilne bary, różnego rodzaju fast foody, lodziarnie. Miałyśmy to szczęście, że nasz pomysł był na tyle oryginalny, że wszyscy wykonawcy, do których się zgłosiłyśmy, niemal od razu podłapali nasz pomysł i oferowali chęć do współpracy.",
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-09.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-10.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-11.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-12.JPG').default,
                    },
                ]
            },
            {
                text: <>O ile znalezienie wspomnianego foto busa, czy prosecco vana nie powinno być żadnym problemem, schody mogą się pojawić przy nieco mniej weselnych usługach. Na szczęście istnieją firmy, dysponujące sporą ilością zabytkowych aut przerobionych na mobilne bary i DJ-ki, czy lodziarnie. Tu polecamy Wam firmę <CustomOuterLink to="https://craicford.pl/uslugi/mobilne-bary/" text="Craicford" className="linkMint" />, którą zaprosiłyśmy do współpracy przy food truck wedding. Znajdziecie tam sporo pięknych klasyków, których funkcję możecie dostosować do własnych potrzeb.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-13.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-14.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-15.JPG').default,
                    },
                ]
            },
            {
                text: <>Najtrudniej będzie z typowymi truckami serwującymi street food oraz zarabiających głównie na dużych festiwalach. Często są to samochody bardzo mocno eksploatowane, a ich estetyka pozostawia wiele do życzenia. Poszukiwania nie były łatwe, ale udało się znaleźć kilka absolutnie przepięknych food trucków serwujących smaczne jedzenie. Szukałyśmy ich głównie na food truckowych grupach na Facebooku i uwierzcie nam, znalazło się kilka prawdziwych perełek. Wśród nich zasługujący na swoje miano <CustomOuterLink to="https://www.krolleskiburger.pl" text="Królleski Burger" className="linkMint" />. Piękny biały bus i przepyszne jedzenie, a za sterami dwójka przemiłych zapaleńców. Pamiętajcie, że tego typu samochody nie specjalizują się w weselach, często obsługują duże masowe imprezy lub mają stałą miejscówkę. Ściągniecie food trucka na wesele, wiąże się więc z nieco większymi kosztami. Przeszukajcie weselne portale, wybierzcie się na targi ślubne, szukajcie również w Google, w mediach społecznościowych oraz na grupach food truckowych.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-16.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-16A.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-17.jpg').default,
                    },
                ]
            },
            {
                text: "Poniżej lista food trucków na wesele, które z powodzeniem działają w branży ślubnej i uświetniły nasz food truck wedding:"
            },
            {
                text: <><span className="dark bold">1.</span> <CustomOuterLink to="https://www.szelestbus.pl" text="Szelest Bus" className="linkDark" /> - Czyli wcześniej wspomniana mobilna DJ-ka. To nie tylko piękny samochód, ale i świetny DJ za konsolą. Jego poczynania możecie obserwować na Facebooku i Instagramie, jest też bywalcem targów ślubnych. Ma doświadczenie w prowadzeniu wesel plenerowych, eventów często pary młode decydują się na jego obecność na poprawinach.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/SZELEST.jpg').default,
                    },
                ]
            },
            {
                text: <><span className="dark bold">2.</span> <CustomOuterLink to="https://www.krolleskiburger.pl" text="Królleski Burger" className="linkDark" /> - To idealna opcja dla fanów wołowiny i pięknych samochodów. W menu znajdziecie pyszne burgery, stripsy, nuggetsy, sałatki i frytki. Chłopaki potrafią też w wege.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/KRÓLLESKI.JPG').default,
                    },
                ]
            },
            {
                text: <><span className="dark bold">3.</span> <CustomOuterLink to="https://dymilustra.pl" text="Dym i lustra" className="linkDark" /> - Kiedy planowałyśmy nasz event, auto było jeszcze u mechanika, dziś widzimy je na wielu zdjęciach z pięknych wesel. Warto było na niego poczekać. Dym i lustra podbija branżę ślubną i nic dziwnego. To piękny samochód z szerokim asortymentem piw rzemieślniczych, drinków, koktajli i prosecco.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/DYM-I-LUSTRA.JPG').default,
                    },
                ]
            },
            {
                text: <><span className="dark bold">4.</span> <CustomOuterLink to="https://craicford.pl/uslugi/mobilne-bary/" text="Craicford" className="linkDark" /> - To w zasadzie wypożyczenia food trucków na wesele. W ofercie znajdziecie mobilne bary, fotobudki, DJ-ki, busy ze słodkościami, lodami i wiele innych. Powiedzcie Szymonowi jaki macie pomysł, a jesteśmy pewne, że znajdzie dla Was coś ekstra. My zdecydowałyśmy się na pyszne gofry i lody oraz przepięknego Citroena HY.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/CRAICFORD.JPG').default,
                    },
                ]
            },
            {
                text: <><span className="dark bold">5.</span> <CustomOuterLink to="https://www.facebook.com/hasztagkawa" text="Hasztag kawa" className="linkDark" /> - Czyli barista na wesele serwujący tzw. kawę specialty, uznaliśmy, że to niezbędny element naszej foodtruckowej układanki. Hasztag kawa uświetniła już niejedno wesele. Ten stary pocztowy mercedes zachwyca aromatem kawy i wyglądem.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/HASZTAG-KAWA.jpg').default,
                    },
                ]
            },
            {
                text: <><span className="dark bold">6.</span> <CustomOuterLink to="https://photobus.pl" text="Photo bus" className="linkDark" /> - To auto, które przetarło weselne szlaki pozostałym. Kasia i Grzesiek kochają swój samochód i to, co robią. Piękny błękitny photo bus i Kasia w sukience w tym samym kolorze. Dbają o każdy detal, począwszy od dekoracji busa, a skończywszy na trosce i opiece nad gośćmi, którzy ich odwiedzają.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/PHOTO-BUS.jpg').default,
                    },
                ]
            },
            {
                text: <><span className="dark bold">7.</span> <CustomOuterLink to="https://www.facebook.com/elvispriscillavwlovers" text="Elvis & Priscilla VW Lovers" className="linkDark" /> - Właścicielką tych pięknych volkswagenów jest Kasia  <CustomOuterLink to="https://wosiakfotografia.pl/" text="Wosiak" className="linkMint" />, fenomenalna fotografka ślubna. Kasię zaprosiliśmy do projektu ze względu na jej talent i zamiłowanie do fotografii, ale i Priscillę, czyli pięknego beżowego ogórka. Nam służył jako miejsce relaksu, sesji, ale również jako platforma do tańca. To również idealny transport dla pary młodej w dniu wesela.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/VW-LOVERS.JPG').default,
                    },
                ]
            },
            {
                headerSmall: 'Food truck na wesele - co dalej',
                headerClassName: 'mint',
                text: <>Mieliśmy już piękne food trucki i wszystkie dane techniczne, żeby ustawić je na polanie koło pałacu <CustomOuterLink to="https://www.palacosowasien.com" text="Osowa Sień" className="linkMint" />. Zaprosiliśmy około 50 osób z branży ślubnej, w tym Monikę i Pawła — naszych modeli, którzy mieli wziąć udział w evencie, tyle że ubrani jak para młoda. Zależało nam na osobach, które naprawdę są parą, będą spontaniczne i naturalne. Tak właśnie było. Postawiliśmy na nieco luźniejsze stroje — suknię ślubną od <CustomOuterLink to="https://patriciaszlazko.com" text="Patrycji Szlazko" className="linkMint" /> oraz garnitur zamówiony przez <CustomOuterLink to="https://www.asos.com/pl" text="ASOS" className="linkMint" />. Mają tam spory wybór garniturów dla panów, którzy cenią sobie bardziej casualowy styl. <CustomOuterLink to="https://www.facebook.com/MonikaWitek.MakeUp" text="Monika jest makijażystką" className="linkMint" />, więc o swój look zadbała sama.</>,
            },
            {
                text: <>Zbliżała się połowa września, a my z niepewnością czekaliśmy na prognozę pogody. Czy będzie padać, a może uda się i zorganizujemy food truck wedding pod gołym niebem? Pogoda była idealna. To był chyba najpiękniejszy dzień września. W ogrodzie stanęły food trucki oraz długi drewniany stół, krzesłami wspomogła nas <CustomOuterLink to="https://www.manufakturastaroci.pl" text="Manufaktura Staroci" className="linkMint" />, która przyjechała do nas z Krakowa z ciężarówką wypchaną po brzegi antycznymi meblami do strefy chilloutu. O dekorację stołów zadbała fenomenalna Magda z <CustomOuterLink to="http://pracowniazieleni.pl" text="Pracowni Zieleni" className="linkMint" />. Dodatkami wspomogły nas Manufaktura staroci oraz <CustomOuterLink to="https://slubnapodwiazka.com.pl/slubny-stol/" text="Ślubny stół" className="linkMint" />.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-18.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-19.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-20.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-21.jpg').default,
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
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-22.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-23.jpg').default,
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
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-24.JPG').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-25.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-26.JPG').default,
                    },
                ]
            },
            {
                text: <>Jeśli Wasze wesele zawiera w sobie powyższe założenia, to food truck wedding zostało stworzone właśnie z myślą o Was. Mamy nadzieję, że stanie się dla Was inspiracją, a powyższy artykuł i zdjęcia kompendium wiedzy. Jeżeli podoba Wam się idea, ale organizacja już niekoniecznie i czujecie się zagubieni w tym lub innym temacie, to czekamy Waszą wiadomość. Jako weselne czarodziejki z <Link to={URLS.HOME} className='linkDark'>agencji ślubnej Czary Marry</Link> chętnie pomożemy Wam zamienić przygotowania do wymarzonego wesela w niezapomnianą przygodę.</>
            },
        ],
        extras: <>
            <p className='mb-2'>Pozostali partnerzy sesji:</p>
            <span>Foto: <CustomOuterLink to="https://wosiakfotografia.pl/" text="Wosiak fotografia" className="linkMint" />, <CustomOuterLink to="https://www.wojciechmakula.pl" text="Makula Photography" className="linkMint" /><br />
                Film: <CustomOuterLink to="https://teledyskslubny.pl" text="Primephoto" className="linkMint" /><br />
                Gry plenerowe: <CustomOuterLink to="forrestgames.pl" text="ForRest Games" className="linkMint" /><br />
                Tablice powitalne i drogowskazy: <CustomOuterLink to="https://www.slubwdeche.pl" text="Ślub w dechę" className="linkMint" /><br />
                Papeteria: <CustomOuterLink to="https://www.facebook.com/katelovcalligraphy/" text="Katelov Calligraphy" className="linkMint" /><br />
                Biżuteria: <CustomOuterLink to="https://decolove.pl/" text="Decolove" className="linkMint" />
            </span>
        </>
    },
    {
        bgColor: "bgGrey",
        title: "Ewa & Manu",
        details: "To był prawdziwy polsko-hiszpański ogień. Mieszanka kultur i tradycji oraz masa świetnej zabawy. Właśnie dlatego uwielbiamy wesela międzynarodowe.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Golden Tulip Magnus",
        placeLink: "https://magnus-bielsko.goldentulip.com/pl/",
        photo: "Jakub Nowotyński",
        photoLink: "https://fotoreportazslubny.com/",
        movie: "BlackHart Film",
        movieLink: "http://www.blackhartfilms.com/",
        flowers: "Hola Studio Flo",
        flowersLink: "https://www.facebook.com/holastudioflo/",
        photos: {
            pic1: require('./OurCouplesPics/EwaManu/01.jpg').default,
            pic2: require('./OurCouplesPics/EwaManu/03.jpg').default,
            pic4: require('./OurCouplesPics/EwaManu/04.jpg').default,
            pic5: require('./OurCouplesPics/EwaManu/05.jpg').default,
            pic6: require('./OurCouplesPics/EwaManu/08.jpg').default,
            pic7: require('./OurCouplesPics/EwaManu/11.jpg').default,
            pic8: require('./OurCouplesPics/EwaManu/09.jpg').default,
            pic9: require('./OurCouplesPics/EwaManu/10.jpg').default,
            pic10: require('./OurCouplesPics/EwaManu/06.jpg').default,
            pic11: require('./OurCouplesPics/EwaManu/07.jpg').default,
            pic12: require('./OurCouplesPics/EwaManu/02.jpg').default,
            pic14: require('./OurCouplesPics/EwaManu/16.jpg').default,
            pic15: require('./OurCouplesPics/EwaManu/17.jpg').default,
            pic17: require('./OurCouplesPics/EwaManu/15.jpg').default,
            pic18: require('./OurCouplesPics/EwaManu/12.jpg').default,
            pic19: require('./OurCouplesPics/EwaManu/13.jpg').default,
            picVer4: require('./OurCouplesPics/EwaManu/ver01.jpg').default,
            classNameTwo: "threeHoriz",
            classNameFive: "threeHorizFlipped"
        }
    },
    {
        bgColor: "bgDark",
        title: "Angelika & Paweł",
        details: "Zamek Książ zachwyca niesamowitą architekturą i historią. Dzięki zaufaniu i otwartości pary oraz niezastąpionej ekipie udało nam się dopisać kolejny, cudowny rozdział tej historii i stworzyć niesamowity klimat.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Zamek Książ",
        placeLink: "https://www.ksiaz.walbrzych.pl/",
        photo: "Jam Studio",
        photoLink: "https://jamstudio.pl/",
        photoTwo: "Magdalena Adamczewska",
        photoLinkTwo: "https://www.facebook.com/magdalena.adamczewska",
        movie: "Cameralni",
        movieLink: "http://cameralni.com/",
        flowers: "ArtSize",
        flowersLink: "https://www.artsize.pl/",
        photos: {
            pic1: require('./OurCouplesPics/AngelikaPawel/01.jpg').default,
            pic2: require('./OurCouplesPics/AngelikaPawel/02.jpg').default,
            pic3: require('./OurCouplesPics/AngelikaPawel/03.jpg').default,
            pic4: require('./OurCouplesPics/AngelikaPawel/04.jpg').default,
            pic5: require('./OurCouplesPics/AngelikaPawel/05.jpg').default,
            pic6: require('./OurCouplesPics/AngelikaPawel/06.jpg').default,
            pic7: require('./OurCouplesPics/AngelikaPawel/07.jpg').default,
            pic8: require('./OurCouplesPics/AngelikaPawel/08.jpg').default,
            pic9: require('./OurCouplesPics/AngelikaPawel/09.jpg').default,
            pic10: require('./OurCouplesPics/AngelikaPawel/11.jpg').default,
            pic11: require('./OurCouplesPics/AngelikaPawel/12.jpg').default,
            pic12: require('./OurCouplesPics/AngelikaPawel/10.jpg').default,
            pic16: require('./OurCouplesPics/AngelikaPawel/16.jpg').default,
            pic17: require('./OurCouplesPics/AngelikaPawel/17.jpg').default,
            pic18: require('./OurCouplesPics/AngelikaPawel/18.jpg').default,
            pic19: require('./OurCouplesPics/AngelikaPawel/19.jpg').default,
            picVer1: require('./OurCouplesPics/AngelikaPawel/ver2.jpg').default,
            picVer2: require('./OurCouplesPics/AngelikaPawel/ver4.jpg').default,
            picVer3: require('./OurCouplesPics/AngelikaPawel/ver3.jpg').default,
            picVer6: require('./OurCouplesPics/AngelikaPawel/ver6.jpg').default,
            picVer7: require('./OurCouplesPics/AngelikaPawel/ver7.jpg').default,
            classNameOne: "twoVertHorizFlipped",
            classNameTwo: "threeHoriz",
            classNameThree: "twoVertHoriz",
            classNameFive: "threeHorizFlipped"
        }
    },
    {
        bgColor: "bgPink",
        title: "Olga & Piotr",
        details: "To klimatyczna sesja stylizowana. Połączenie surowych ruin zamku oraz eleganckich dekoracji. Sesja była zorganizowana z myślą o parach, którym Covid-19 pokrzyżował weselne plany.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Zamek Sarny",
        placeLink: "http://www.zameksarny.pl/",
        photo: "Małe Szare Studio",
        photoLink: "http://maleszarestudio.pl/",
        movie: "Sakramentalne tak",
        movieLink: "https://www.sakramentalnetak.com/",
        flowers: "Anello Decor",
        flowersLink: "https://www.facebook.com/anellodecor/",
        photos: {
            pic1: require('./OurCouplesPics/OlgaPiotr/01.jpg').default,
            pic2: require('./OurCouplesPics/OlgaPiotr/03.jpg').default,
            pic3: require('./OurCouplesPics/OlgaPiotr/02.jpg').default,
            pic4: require('./OurCouplesPics/OlgaPiotr/04.jpg').default,
            pic5: require('./OurCouplesPics/OlgaPiotr/05.jpg').default,
            pic6: require('./OurCouplesPics/OlgaPiotr/07.jpg').default,
            pic7: require('./OurCouplesPics/OlgaPiotr/06.jpg').default,
            pic14: require('./OurCouplesPics/OlgaPiotr/14.jpg').default,
            pic15: require('./OurCouplesPics/OlgaPiotr/15.jpg').default,
            pic16: require('./OurCouplesPics/OlgaPiotr/16.jpg').default,
            pic17: require('./OurCouplesPics/OlgaPiotr/17.jpg').default,
            picVer1: require('./OurCouplesPics/OlgaPiotr/ver3.jpg').default,
            picVer2: require('./OurCouplesPics/OlgaPiotr/ver2.jpg').default,
            picVer3: require('./OurCouplesPics/OlgaPiotr/ver1.jpg').default,
            picVer4: require('./OurCouplesPics/OlgaPiotr/ver4.jpg').default,
            picVer6: require('./OurCouplesPics/OlgaPiotr/ver7.jpg').default,
            picVer7: require('./OurCouplesPics/OlgaPiotr/ver6.jpg').default,
            picVer8: require('./OurCouplesPics/OlgaPiotr/ver8.jpg').default,
            picVer9: require('./OurCouplesPics/OlgaPiotr/ver9.jpg').default,
            picVer10: require('./OurCouplesPics/OlgaPiotr/ver5.jpg').default,
            classNameOne: "twoVertHoriz",
            classNameThree: "twoVertHorizFlipped",
            classNameFour: "twoVertHorizFlipped"
        }
    },
    {
        bgColor: "bgMint",
        title: "Ewelina & Łukasz",
        details: <><CustomPostLink text="Ślub kościelny" path="dokumenty-do-slubu-koscielnego-konkordatowego" className="bold" /> w cudownej parkowej scenerii. Srebro, transparentność, morze kwiatów i namiot. Glamour w najczystszej formie, łączący się z pięknem otaczającej natury.</>,
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Pałac Pstrokonie",
        placeLink: "http://palac-pstrokonie.pl/",
        photo: "Wawrzykowski Team",
        photoLink: "https://wawrzykowski.pl/",
        flowers: "Florodesign",
        flowersLink: "https://floro.pl/",
        photos: {
            pic1: require('./OurCouplesPics/EwelinaLukasz/01.jpg').default,
            pic2: require('./OurCouplesPics/EwelinaLukasz/04.jpg').default,
            pic4: require('./OurCouplesPics/EwelinaLukasz/06.jpg').default,
            pic5: require('./OurCouplesPics/EwelinaLukasz/07.jpg').default,
            pic6: require('./OurCouplesPics/EwelinaLukasz/16.jpg').default,
            pic7: require('./OurCouplesPics/EwelinaLukasz/09.jpg').default,
            pic8: require('./OurCouplesPics/EwelinaLukasz/11.jpg').default,
            pic9: require('./OurCouplesPics/EwelinaLukasz/13.jpg').default,
            pic10: require('./OurCouplesPics/EwelinaLukasz/15.jpg').default,
            pic11: require('./OurCouplesPics/EwelinaLukasz/08.jpg').default,
            pic12: require('./OurCouplesPics/EwelinaLukasz/05.jpg').default,
            pic14: require('./OurCouplesPics/EwelinaLukasz/03.jpg').default,
            pic15: require('./OurCouplesPics/EwelinaLukasz/02.jpg').default,
            pic17: require('./OurCouplesPics/EwelinaLukasz/10.jpg').default,
            pic18: require('./OurCouplesPics/EwelinaLukasz/12.jpg').default,
            pic19: require('./OurCouplesPics/EwelinaLukasz/14.jpg').default,
            picVer3: require('./OurCouplesPics/EwelinaLukasz/ver1.jpg').default,
            classNameTwo: "threeHorizFlipped",
            classNameFive: "threeHoriz"
        }
    },
    {
        bgColor: "bgGrey",
        title: "Nelli & Piotr",
        details: "Wesele w stodole. Romantyczne dekoracje, piękna pogoda i strefa chill z barmanem na zewnątrz, a w niedzielę brunch połączony z leżakowaniem na trawie.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Folwark Wąsowo",
        placeLink: "Folwark Wąsowo",
        photo: "Svetlana Bennington",
        photoLink: "http://svetlanabennington.com/",
        flowers: "ArtSize",
        flowersLink: "http://www.artsize.pl/",
        photos: {
            pic1: require('./OurCouplesPics/NellyPiotr/01.JPG').default,
            pic2: require('./OurCouplesPics/NellyPiotr/02.JPG').default,
            pic3: require('./OurCouplesPics/NellyPiotr/03.JPG').default,
            pic4: require('./OurCouplesPics/NellyPiotr/04.JPG').default,
            pic5: require('./OurCouplesPics/NellyPiotr/05.JPG').default,
            pic6: require('./OurCouplesPics/NellyPiotr/06.JPG').default,
            pic7: require('./OurCouplesPics/NellyPiotr/07.JPG').default,
            pic10: require('./OurCouplesPics/NellyPiotr/11.JPG').default,
            pic11: require('./OurCouplesPics/NellyPiotr/10.JPG').default,
            pic12: require('./OurCouplesPics/NellyPiotr/12.JPG').default,
            pic13: require('./OurCouplesPics/NellyPiotr/13.JPG').default,
            pic16: require('./OurCouplesPics/NellyPiotr/16.JPG').default,
            pic17: require('./OurCouplesPics/NellyPiotr/17.JPG').default,
            pic18: require('./OurCouplesPics/NellyPiotr/18.JPG').default,
            pic19: require('./OurCouplesPics/NellyPiotr/19.JPG').default,
            picVer1: require('./OurCouplesPics/NellyPiotr/ver01.jpg').default,
            picVer2: require('./OurCouplesPics/NellyPiotr/ver02.jpg').default,
            picVer3: require('./OurCouplesPics/NellyPiotr/ver03.jpg').default,
            picVer4: require('./OurCouplesPics/NellyPiotr/ver07.jpg').default,
            picVer5: require('./OurCouplesPics/NellyPiotr/ver06.jpg').default,
            picVer6: require('./OurCouplesPics/NellyPiotr/ver04.jpg').default,
            picVer7: require('./OurCouplesPics/NellyPiotr/ver8.jpg').default,
            classNameOne: "twoVertHorizFlipped",
            classNameTwo: "threeHoriz",
            classNameThree: "twoVertHorizFlipped",
            classNameFive: "threeHorizFlipped"
        }
    },
    {
        bgColor: "bgPink",
        title: "Basia & Mariusz",
        details: "Jesienne wesela mają w sobie magię. Mimo że za oknem zimno i szaro, nam udało się wyczarować niezwykły klimat. Pomógł nam półmrok za oknem, światło świec i odważne połączenie kolorów.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Rezydencja Miętowe Wzgórza",
        placeLink: "http://www.mietowewzgorza.pl/wesela.html",
        photo: "Marta Brodziak",
        photoLink: "http://martabrodziak.com/",
        movie: "MW Jackiewicz",
        movieLink: "http://www.mwjackiewicz.com/",
        flowers: "Unique",
        flowersLink: "https://www.facebook.com/unique.pracownia/",
        photos: {
            pic1: require('./OurCouplesPics/BasiaMariusz/02.jpg').default,
            pic2: require('./OurCouplesPics/BasiaMariusz/01.jpg').default,
            pic3: require('./OurCouplesPics/BasiaMariusz/03.jpg').default,
            pic4: require('./OurCouplesPics/BasiaMariusz/04.jpg').default,
            pic5: require('./OurCouplesPics/BasiaMariusz/05.jpg').default,
            pic6: require('./OurCouplesPics/BasiaMariusz/09.jpg').default,
            pic7: require('./OurCouplesPics/BasiaMariusz/11.jpg').default,
            pic8: require('./OurCouplesPics/BasiaMariusz/12.jpg').default,
            pic9: require('./OurCouplesPics/BasiaMariusz/13.jpg').default,
            pic10: require('./OurCouplesPics/BasiaMariusz/06.jpg').default,
            pic11: require('./OurCouplesPics/BasiaMariusz/08.jpg').default,
            pic12: require('./OurCouplesPics/BasiaMariusz/07.jpg').default,
            pic16: require('./OurCouplesPics/BasiaMariusz/10.jpg').default,
            pic17: require('./OurCouplesPics/BasiaMariusz/14.jpg').default,
            picVer1: require('./OurCouplesPics/BasiaMariusz/ver3.jpg').default,
            picVer2: require('./OurCouplesPics/BasiaMariusz/ver1.jpg').default,
            picVer3: require('./OurCouplesPics/BasiaMariusz/ver2.jpg').default,
            picVer6: require('./OurCouplesPics/BasiaMariusz/ver5.jpg').default,
            picVer7: require('./OurCouplesPics/BasiaMariusz/ver4.jpg').default,
            picVer8: require('./OurCouplesPics/BasiaMariusz/ver6.jpg').default,
            picVer9: require('./OurCouplesPics/BasiaMariusz/ver7.jpg').default,
            classNameOne: "twoVertHoriz",
            classNameTwo: "threeHoriz",
            classNameThree: "twoVertHorizFlipped",
            classNameFour: "twoVertHorizFlipped"
        }
    },
    {
        bgColor: "bgGrey",
        title: "Marta & Marek",
        details: "Nowoczesność, elegancja, minimalizm i 1000 kalii.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Hotel Wodnik",
        placeLink: "http://wodnik-hotel.pl/",
        photo: "Bauaban Fotografia",
        photoLink: "https://bauaban.com/",
        flowers: "ArtSize",
        flowersLink: "http://www.artsize.pl/",
        photos: {
            pic1: require('./OurCouplesPics/MartaMarek/01.jpg').default,
            pic2: require('./OurCouplesPics/MartaMarek/02.jpg').default,
            pic4: require('./OurCouplesPics/MartaMarek/04.jpg').default,
            pic5: require('./OurCouplesPics/MartaMarek/05.jpg').default,
            pic6: require('./OurCouplesPics/MartaMarek/06.jpg').default,
            pic7: require('./OurCouplesPics/MartaMarek/07.jpg').default,
            pic8: require('./OurCouplesPics/MartaMarek/08.jpg').default,
            pic9: require('./OurCouplesPics/MartaMarek/09.jpg').default,
            pic10: require('./OurCouplesPics/MartaMarek/10.jpg').default,
            pic11: require('./OurCouplesPics/MartaMarek/12.jpg').default,
            pic12: require('./OurCouplesPics/MartaMarek/11.jpg').default,
            pic13: require('./OurCouplesPics/MartaMarek/13.jpg').default,
            pic14: require('./OurCouplesPics/MartaMarek/14.jpg').default,
            pic15: require('./OurCouplesPics/MartaMarek/15.jpg').default,
            picVer3: require('./OurCouplesPics/MartaMarek/ver3.jpg').default,
            picVer4: require('./OurCouplesPics/MartaMarek/ver4.jpg').default,
            picVer5: require('./OurCouplesPics/MartaMarek/ver5.jpg').default,
            classNameTwo: "threeHoriz"
        }
    },
    {
        bgColor: "bgMint",
        title: "Angie & Akshar",
        details: "To było typowe slow wedding. Goście spędzali czas na zewnątrz rozmawiając, grając w gry, popijając drinki. Było kameralnie i rodzinnie, czyli tak jak lubimy najbardziej.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Folwark Białych Bocianów",
        placeLink: "https://www.folwarkbb.com/",
        photo: "Greg Solak",
        photoLink: "http://www.gregsolak.pl/Blog/",
        movie: "Greg Solak",
        movieLink: "http://www.gregsolak.pl/Blog/",
        flowers: "Marlena Chustecka",
        flowersLink: "https://www.facebook.com/pages/category/Artist/Chustecka-Marlena-1077253032301187/",
        photos: {
            pic1: require('./OurCouplesPics/AngieAkshar/01.jpg').default,
            pic2: require('./OurCouplesPics/AngieAkshar/02.jpg').default,
            pic4: require('./OurCouplesPics/AngieAkshar/04.jpg').default,
            pic5: require('./OurCouplesPics/AngieAkshar/05.jpg').default,
            pic6: require('./OurCouplesPics/AngieAkshar/06.jpg').default,
            pic7: require('./OurCouplesPics/AngieAkshar/07.jpg').default,
            pic8: require('./OurCouplesPics/AngieAkshar/08.jpg').default,
            pic9: require('./OurCouplesPics/AngieAkshar/09.jpg').default,
            pic10: require('./OurCouplesPics/AngieAkshar/10.jpg').default,
            pic11: require('./OurCouplesPics/AngieAkshar/11.jpg').default,
            pic12: require('./OurCouplesPics/AngieAkshar/12.jpg').default,
            pic14: require('./OurCouplesPics/AngieAkshar/14.jpg').default,
            pic15: require('./OurCouplesPics/AngieAkshar/15.jpg').default,
            pic17: require('./OurCouplesPics/AngieAkshar/17.jpg').default,
            pic18: require('./OurCouplesPics/AngieAkshar/18.jpg').default,
            pic19: require('./OurCouplesPics/AngieAkshar/19.jpg').default,
            picVer10: require('./OurCouplesPics/AngieAkshar/ver10.jpg').default,
            classNameTwo: "threeHorizFlipped",
            classNameFive: "threeHoriz"
        }
    }
]

export default weddings
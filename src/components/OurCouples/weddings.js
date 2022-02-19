import React from 'react'
import { Link } from 'react-router-dom'
import CustomPostLink from "../CustomLink/CustomPostLink"
import CustomOuterLink from "../CustomLink/CustomOuterLink"
import URLS from '../../utils/urls'

const weddings = [
    {
        bgColor: "bgDark",
        title: "Slow wedding u Ani i Bena",
        path: "slow-wedding",
        minHeight: true,
        seoTitle: "Slow wedding | agencja ślubna Czary Marry",
        seoText: "Pragniesz urządzić swoje wesele w stylu slow? Zobacz naszą realizację i poznaj zasady organizacji wesela w stylu slow.",
        mainPic: {
            src: require('./OurCouplesPics/AniaBen/main.jpg').default
        },
        details: "Bez pośpiechu, stresu i oglądania się na to, co powiedzą inni. Kameralnie i na własnych zasadach. W otoczeniu przyrody i najbliższych..",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Ziębówka",
        placeLink: "https://www.facebook.com/Ziebowka/",
        photo: "Jakub Nowotyński",
        photoLink: "https://fotoreportazslubny.com/",
        flowers: "Anello Decor",
        flowersLink: "https://www.facebook.com/anellodecor/",
        date: "19 lut 2022",
        textMain: <><span className="dark bold">Wesele w stylu slow</span> to przyjęcie toczące się własnym rytmem. Bez niepotrzebnego pośpiechu, stresu i oglądania się na to, co powiedzą inni. To czas na celebrowanie chwil w gronie serdecznych Wam osób, gdzie schematy zastępuje spontaniczność, a na pierwszym miejscu jesteście Wy i przysięga, którą sobie składacie. To, jak będzie wyglądało Wasze <span className="dark bold">slow wedding</span>, zależy wyłącznie od Was. Pozwólcie, że opowiemy Wam, jak było w przypadku jednej naszych par. Mamy nadzieję, że ich historia stanie się dla Was inspiracją.</>,
        topPic:
        {
            src: require('./OurCouplesPics/AniaBen/slow-wedding-01.jpg').default,
        },
        content: [
            {
                text: <><span className="dark bold">Ania i Ben</span> trafili do nas z polecenia jednej z naszych byłych par młodych. Na co dzień mieszkają w Atlancie, w związku z czym nie byli w stanie samodzielnie zorganizować wesela i potrzebowali naszej pomocy. Od razu znaleźliśmy nić porozumienia i pokochałyśmy wizję wesela, jaką przedstawili. Marzyło im się kameralne <CustomPostLink text="wesele w górach" path="slub-wesele-w-gorach" className="linkPink" />, najlepiej w okolicach Zakopanego. Sprawnie przeszliśmy przez formalności i zabraliśmy się do pracy. Połowę zaproszonych gości stanowili Amerykanie, drugą połowę Polacy. Parze zależało na uniknięciu utartych schematów przy jednoczesnym poszanowaniu polskich i amerykańskich tradycji i zwyczajów. To było dla nas wyzwanie, którego z przyjemnością się podjęłyśmy.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-02.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-03.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-04.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-05.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Wesele w stylu slow — Poszukiwanie odpowiedniej lokalizacji.",
                headerClassName: "pink",
                text: "Ania z Benem opowiedzieli nam o początkach swojej znajomości, o tym, jak ważną rolę odgrywają dla nich Tatry, jakie piękne wspomnienia łączą ich z tym miejscem. Wiedziałyśmy, że to właśnie tam musimy rozpocząć poszukiwania. Zależało nam na kameralnym i spokojnym miejscu z pięknym ogrodem. Priorytetem był jednak widok, marzyło nam się miejsce z panoramą Tatr w tle. Uruchomiłyśmy kontakty, przegrzebałyśmy czeluści internetu i przedstawiłyśmy parze kilka propozycji. Niestety ze względu na pandemię wiedziałyśmy, że para młoda nie będzie w stanie samodzielnie odwiedzić wybranych miejsc. Nie zastanawiając się długo, wsiadłyśmy w samochód i pojechałyśmy na wizytację. Odwiedziłyśmy miejsca, które Ani i Benowi najbardziej przypadły do gustu, przy okazji zaglądając chyba do każdej okolicznej restauracji, hotelu i karczmy.",
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-06.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-07.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-08.jpg').default,
                    },
                ]
            },
            {
                text: "Kiedy przekroczyłyśmy próg Restauracji Ziębówka poczuliśmy, że to właśnie to miejsce, którego szukaliśmy, para młoda, poczuła dokładnie to samo. Restauracja jest położona w miejscowości Witów, nieco dalej od zakopiańskiego zgiełku, ale bliżej Tatr i Śpiącego Rycerza, niedaleko doliny Chochołowskiej. Otacza ją piękny dziki ogród i las. To w zasadzie gotowa strefa chilloutu, idealna przestrzeń na wesele na luzie. Pełno tam urokliwych zakamarków ze stolikami. Na jednym z drzew zawieszona jest huśtawka, na innym hamak. Na środku znajduje się drewniana platforma — idealne miejsce na ceremonię plenerową lub zewnętrzny parkiet. Oczami wyobraźni widzieliśmy wrześniowy ciepły dzień i gości relaksujących się w ogrodzie. Jak się później okazało, nasze wyobrażenia całkowicie pokryły się z rzeczywistością.",
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-09.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-10.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-11.jpg').default,
                    },
                ]
            },
            {
                text: "Sama Ziębówka jest góralską chatą utrzymaną w tradycyjnym stylu. Wchodząc do środka, zobaczycie piękny kaflowy piec, niesamowite meble, góralskie drewniane ornamenty. Widać tam niezwykły szacunek do tradycji, ale bez zbędnych bibelotów, które mogłyby sprawić, że klimat miejsca się zatraci i będzie męczący. Na drugim piętrze znajduje się kolejna sala, do której prowadzą szerokie drewniane schody. Tam całą uwagę przyciąga duże zdobione okno z niesamowitym widokiem na góry, który możecie podziwiać na jednym ze zdjęć. Uznaliśmy, że dzielona struktura sali nie będzie przeszkodą. Potraktowaliśmy ją jako atut. Strefa jadalna na górze pozwoli gościom spokojnie porozmawiać i odpocząć, podczas gdy najwytrwalsi fani parkietu będą mogli szaleć do woli. Od początku nie chcieliśmy niczego narzucać gościom, nie baliśmy się, że będą rozproszeni, czy nie trafią na parkiet. Wiedzieliśmy, że slow wedding rządzi się własnymi prawami.",
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-12.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-13.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-14.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Slow wedding — Wykonawcy ślubni, którzy zrozumieją naszą wizję.",
                headerClassName: "pink",
                text: "Dobór odpowiedniej ekipy to zawsze kluczowa sprawa podczas organizacji wesela. Skoro samo przyjęcie weselne jest na luzie to i wykonawcy muszą tacy być. Ważne by para młoda czuła się przy nich swobodnie i obdarzyła ich zaufaniem.",
            },
            {
                headerSmall: "DJ na luzie",
                headerClassName: "dark",
                text: <>Nasze poszukiwania rozpoczęliśmy od osoby, która będzie odpowiedzialna za poprowadzenie przyjęcia oraz oprawę muzyczną. Postawiliśmy na osoby posługujące się biegle językiem angielskim, które rozumieją, o co chodzi w slow wedding. Takie, które nie będą zamartwiały się frekwencją na parkiecie i na siłę wyciągały gości do tańca lub przesadnie kontrolowały rytm przyjęcia. Zależało nam na osobie, która popłynie z prądem i będzie się świetnie bawić wraz z gośćmi bez względu na to, jaką formę zabawy wybiorą. Decyzja mogła być tylko jedna, padło na <CustomOuterLink to="https://thejegomosc.pl" text="DJ-a Jegomościa" className="linkPink" />. Krzysiek bardzo szybko złapał wspólne flow z parą młodą i uważnie słuchał, na czym im zależy. Zachwycił wszystkich swoją elastycznością, luźną konferansjerką, świetnie dobraną muzyką i energią. W pewnym momencie grał na dwa parkiety — na zewnątrz i wewnątrz, a każdy z nich płonął i ciężko było uwierzyć, że gdzieś obok jest inny parkiet, na którym również szaleją goście. Zabawa trwała dwa dni, a Krzysiek dzielnie stał za konsolą i podbijał serca zarówno polskich, jak i amerykańskich gości.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/slow-wedding-15.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-na-luzie-01.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Fotograf — nie reżyser.",
                headerClassName: "dark",
                text: <>Poznając Anię i Bena coraz bardziej, słuchając opowieści o ich gościach oraz oglądając relacje z imprez, w których uczestniczą, wiedziałyśmy, że zapowiada się świetna zabawa. Ania i Ben od razu zaznaczyli, że nie zależy im na długiej sesji w dniu ślubu i że ten czas wolą spędzić w gronie najbliższych. Wiedziałyśmy, że potrzebujemy kogoś z reporterskim zacięciem, kto nie będzie reżyserem, a cichym obserwatorem. No może nie takim cichym, potrzebny był ktoś, kto nie boi się wejść między gości i stać się częścią <span className='dark bold'>slow wedding</span>. Wszystko dla pięknych ujęć, które oddadzą charakter przyjęcia. Padło na <CustomOuterLink to="https://fotoreportazslubny.com" text="Jakuba Nowotyńskiego" className="linkPink" />. Nazwisko, które powinien znać każdy, kto ceni sobie naturalne, niebanalne i odważne ujęcia. Bez udawania i lukru. Jak mawiają fotografowie w branży ślubnej samo reporterskie mięso. Jak się okazało, Kuba sprawdził się równie dobrze przy fotografowaniu detali, dekoracji, czy backstagu z naszej pracy.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-na-luzie-02.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-na-luzie-03.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Florystyka — dekorujemy, nie walczymy.",
                headerClassName: "dark",
                text: <><CustomPostLink text="Planując dekoracje" path="12-hey-wedding-podcast-dekoracje-slubne-florystyka" className="linkPink" /> zależało nam na poszanowaniu klimatu miejsca, nie chcieliśmy z nim walczyć tylko podkreślić jego urok. Postanowiliśmy unikać oczywistych nawiązań jak folklor, nadać miejscu nieco lekkości i romantyzmu. Elegancko, ale bez zbędnego nadęcia jak przystało na wesele na luzie. Ania marzyła o bardzo intensywnych kolorach jak czerwień, żółty, pomarańczowy, dla podbicia efektu postawiliśmy na błękitne tekstylia. Wraz z <CustomOuterLink to="https://www.facebook.com/anellodecor/" text="Anello Decor" className="linkPink" asFB /> i parą skrupulatnie dopieszczałyśmy wizję, dodając bieżniki, kolorowe kieliszki i podtalerze. Ogromnym wsparciem okazała się szeroka oferta wypożyczalni ślubnych, z których korzystałyśmy - <CustomOuterLink to="https://www.manufakturastaroci.pl/kontakt" text="Manufaktura Staroci" className="linkPink" /> oraz <CustomOuterLink to="https://www.facebook.com/Rent4wedding-336214527034724/" text="Rent for wedding" className="linkPink" asFB />.
                </>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-na-luzie-04.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-na-luzie-05.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Papeteria — czyli zapowiedź wesela w stylu slow.",
                headerClassName: "dark",
                text: <> Nie można zapraszać gości na <span className='dark bold'>slow wedding</span>, nie informując ich wcześniej o charakterze przyjęcia. Tworzenie zaproszeń, a w zasadzie ich treści zajęło nam sporo czasu. Para postanowiła przylecieć do polski tydzień przed weselem i trochę pozwiedzać. W zaproszeniu zachęcili swoich gości do tego do wspólnego podróżowania. Był plan wycieczki, który zaczynał się w Warszawie, zahaczał o rodzinny dom Ani i kończył się w Zakopanem. To fantastyczne rozwiązanie, szczególnie dla wesel międzynarodowych, gdzie goście postanawiają zrobić sobie przedłużone wakacje. Cała papeteria była utrzymana w górsko-leśnym klimacie. Motyw gór był nieco mocniejszy przy zaproszeniach oraz bardzo subtelny i delikatny przy pozostałej papeterii jak winietki, menu, czy table plan. Wraz z Magdą z <CustomOuterLink to="https://weddinggraf.pl" text="Weddinggraf" className="linkPink" /> dopracowywałyśmy każdy detal, wszystko w dwóch wersjach językowych.
                </>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-na-luzie-06.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Atrakcje, które nie męczą.",
                headerClassName: "dark",
                text: <>Zawsze powtarzamy, że najlepsze atrakcje weselne to takie, które są alternatywą, a nie nieprzyjemnym obowiązkiem. Chcieliśmy uniknąć sytuacji, gdzie goście bezustannie są wywoływani do kolejnych aktywności na parkiecie. <span className='dark bold'>Wesele w stylu slow</span> musi toczyć się własnym, niewymuszonym rytmem. Postawiliśmy na regionalne jedzenie, słodki stół, strefę chilloutu z foto przyczepą i drewnianą nartę z otworami na kieliszki. Był to atrybut, który para przywiozła ze sobą z podróży i okazał się ważnym elementem całego wesela. Foto przyczepa od <CustomOuterLink to="http://www.fotosztos.pl" text="Foto Sztos" className="linkPink" /> cieszyła się ogromnym zainteresowaniem gości i była dodatkową ozdobą ogrodu. Menu było wypełnione tradycyjnymi potrawami w smacznym i lekkim wydaniu. Znalazła się w nim kwaśnica, baranina, moskale, pierogi z oscypkiem i kapustą i wiele innych. Amerykanie byli zachwyceni nowymi smakami, a Polacy usatysfakcjonowani, że w menu znajdują się typowo polskie specjały. Wszystko dopełnił tort słodki stół od <CustomOuterLink to="https://www.facebook.com/ciastkico" text="Ciastki & Co" className="linkPink" asFB />, którym nie zabrakło smakowitych minimalistycznych deserów, ale i tradycyjnych ciast jak makowiec, czy szarlotka.
                </>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-na-luzie-07.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-na-luzie-08.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Slow wedding — Dzień wesela.",
                headerClassName: "pink",
                text: "Ania z Benem obdarzyli nas i innych wykonawców ogromnym zaufaniem. Jednocześnie ich wizja wesela na luzie od początku była bardzo klarowna. Mimo kilkudniowego pobytu w Zakopanem postanowili, że swoje miejsce weselne po raz pierwszy zobaczą dopiero w dniu ślubu. Wcześniej widzieli je tylko na relacji filmowej, którą przygotowałyśmy dla nich podczas wizytacji. Na miesiąc przed ślubem ustaliliśmy wszystkie szczegóły związane z przebiegiem tego dnia. Przygotowałyśmy scenariusz, który skonfrontowałyśmy z wszystkimi wykonawcami. Zawsze mamy na uwadze, że jest to narzędzie, które ma nam wyznaczać pewne ramy, ale wesele to żywy organizm i to my powinniśmy się dostosować do przebiegu przyjęcia, zamiast na siłę egzekwować to, co zostało ustalone w scenariuszu.",
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-w-stylu-slow-01.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-w-stylu-slow-02.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Wesele na luzie — Ceremonia inna niż wszystkie.",
                headerClassName: "pink",
                text: <>Oczekiwanie na ceremonię umilały dźwięki elektrycznych skrzypiec, goście częstowali się prosecco i fingerfoodami. Nikomu się nie spieszyło, wszyscy delektowali się piękną pogodą i otoczeniem gór. W tym czasie para młoda miała się zobaczyć po raz pierwszy. First look odbył się nad górskim potokiem, a ceremonia się pod gołym niebem. Po jednej stronie mieli góry, a po drugiej piękną dekorację, która w oczywisty sposób nawiązywała do motywu przewodniego. Ponieważ Ania i Ben zdecydowali się na <CustomPostLink text="ceremonię symboliczną" path="5-hey-wedding-ślub-humanistyczny-a-na-co-to-komu" className="linkPink" /> prowadzoną przez <CustomOuterLink to="https://www.slubhumanistyczny.com" text="Jacka Siedleckiego" className="linkPink" />, mieli ogromną wolność w tym, jaki będzie jej przebieg i charakter. Nie zabrakło przemów, które są typowe dla kultury amerykańskiej, ale i własnych przysiąg, masy wzruszeń i śmiechu.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-w-stylu-slow-03.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "Wesele w stylu slow — czyli nigdzie się nam nie spieszy.",
                headerClassName: "pink",
                text: <>Po ceremonii para młoda wzniosła toast i zachęciła gości do spędzenia czasu na zewnątrz, co również jest typowym zwyczajem, który przywędrował do nas z Ameryki. Oczywiście nie trzeba było ich długo namawiać i wszyscy chętnie korzystali z promieni jesiennego słońca. Następnie udali się na uroczysty obiad, powitani na sali chlebem i solą przez rodziców pary młodej. Ten stary zwyczaj cieszy się ogromnym zainteresowaniem wśród gości z zagranicy. Pierwszy taniec odbył się po zmroku, w świetle gwiazd na zewnętrznym parkiecie. Mimo chłodnego górskiego powietrza goście bawili się na nim jeszcze do późnych godzin wieczornych, nieco później impreza przeniosła się do wewnątrz. Następnego dnia wszyscy ponownie spotkali się w Ziębówce, tym razem na poprawinach <span className='dark bold'>w stylu slow</span>. Było ognisko z kiełbaskami, wielki kocioł bigosu, tańce i relaks, a to wszystko pod gołym niebem. Pogoda była wymarzona, więc klimat sprzyjał leniwemu celebrowaniu ostatniego dnia wesela, tylko trochę szkoda było kończyć.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-w-stylu-slow-04.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-w-stylu-slow-05.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-w-stylu-slow-06.jpg').default,
                    },
                ]
            },
            {
                headerSmall: "10 przykazań dla par, które marzą o slow wedding:",
                headerClassName: "dark",
                text: <><ol style={{ marginTop: ".5rem" }}>
                    <li className='mt-3'>Wyluzujcie się. Stres i pośpiech to nie są sprzymierzeńcy wesela w stylu slow. To Wy nadajecie charakter Waszemu przyjęciu, a Wasze emocje udzielają się gościom.</li>
                    <li className='mt-3'>Skupcie się na sobie, to Wasz wielki dzień. Pomyślcie, co Was relaksuje i sprawia przyjemność. Co dla Was oznacza slow wedding.</li>
                    <li className='mt-3'>Znajdźcie odpowiednie miejsce, które sprzyja organizacji wesela w stylu slow. Ciężko byłoby zorganizować wesele na luzie w eleganckiej sali hotelowej bez dostępu do ogrodu lub tarasu.</li>
                    <li className='mt-3'>Dokonuje świadomych wyborów — Wybierajcie profesjonalistów, ludzi, w których towarzystwie dobrze się czujecie, takich, którzy zadbają o Was w dniu wesela i zdejmą z Was jak najwięcej obowiązków. Im mniej macie na głowie, tym większa szansa, na wesele na luzie.</li>
                    <li className='mt-3'>Zapraszajcie osoby, z którymi lubicie spędzać czas. Nie przejmujcie się maruderami. Goście są na weselu po to, żeby wraz z Wami celebrować najważniejszy dzień w życiu. Nie zapraszajcie nikogo, bo tak wypada.</li>
                    <li className='mt-3'>Nie planujcie zbyt wielu atrakcji. Przyjęcie weselne ma sporo naturalnych przerw na posiłki, tort czy oczepiny. Jeśli zaplanujecie zbyt dużo atrakcji, będzie to uciążliwe, goście nie będą mieli czasu na relaks, a slow wedding zmieni się w prawdziwy kierat.</li>
                    <li className='mt-3'>Delektujcie się chwilami z bliskimi. Dajcie Waszym gościom robić to, na co mają ochotę. Nie wyciągajcie ich na parkiet lub nie wyganiajcie z ogrodu, bo za długo tam siedzą. Slow wedding niczego nie narzuca.</li>
                    <li className='mt-3'>Bądźcie konsekwentni. Starajcie się, aby klimat przyjęcia i Wasze wybory były spójne. Jeśli decydujecie się na wesele w stylu slow, postarajcie się, żeby przejawiał się on w różnych aspektach wesela.</li>
                    <li className='mt-3'>Przygotujcie scenariusz, ale nie bądźcie jego więźniami. Nie planujcie przebiegu przyjęcia co do sekundy. Nie przejmujcie się, jeśli coś się przesunie lub rozjedzie ze scenariuszem. W dniu ślubu scenariusz jest narzędziem pomocnym dla wykonawców, najlepiej wymażcie jego istnienie z pamięci.</li>
                    <li className='mt-3'>Zatrudnijcie <Link to={URLS.HOME} className='linkPink'>wedding plannera</Link> — najlepiej sprawdzi się kompleksowa pomoc. Pamiętajcie, że organizacja wesela nie ogranicza się do jednego dnia, tylko kilkunastu miesięcy. Fajnie byłoby, gdyby już same przygotowania odbywały się w stylu slow. Jeśli nie chcecie korzystać z kompleksowej oferty agencji ślubnej, rozważcie obecność konsultanta w dniu ślubu i wesela, który zajmie się koordynacją przyjęcia.</li>
                </ol>
                </>,
                pics: [
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-w-stylu-slow-07.jpg').default,
                    },
                    {
                        src: require('./OurCouplesPics/AniaBen/wesele-w-stylu-slow-08.jpg').default,
                    },
                ]
            },
            {
                text: <>Jeśli jesteście zainteresowani organizacją wesela na luzie, ale pod kontrolą profesjonalistek zapraszamy do <Link to={URLS.CONTACT} className='linkPink'>kontaktu</Link>. Mamy spore doświadczenie w tej kwestii. Większość przyjęć, które organizujemy to wesela w stylu slow. We współpracy z parami stawiamy na pozytywne emocje i relacje. Chętnie pomożemy Wam w organizacji Waszego slow wedding cokolwiek to dla Was oznacza.</>,
            }
        ],
        extras: <>Może zainteresować Cię również:
            <ul style={{ marginTop: ".5rem" }}>
                <li><CustomPostLink text="Harmonogram dnia ślubu krok po kroku" path="plan-wesela-harmonogram-dnia-slubu-krok-po-kroku" className="linkPink" /></li>
                <li>Załatw wszystkie <CustomPostLink text="formalności przed ślubem" path="przygotowania-do-slubu-formalnosci" className="linkPink" /></li>
                <li>Zorganizuj <CustomPostLink text="wesele w ogrodzie" path="wesele-w-ogrodzie-garden-party" className="linkPink" /></li>
            </ul>
        </>
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
        textMain: "Był środek pandemii, zakaz organizacji wesel i kiepski rok dla par młodych i branży ślubnej. Wszyscy z niepokojem czekali na rozluźnienie obostrzeń, które miało nadejść lada moment. Pomyślałyśmy, że nie możemy stać w miejscu i warto zorganizować sesję stylizowaną… ale sesji nie lubimy. Brakuje w nich szczerych emocji par młodych, czyli tego, co w weselach lubimy najbardziej. Nieco bez przekonania zaczęliśmy szukać inspiracji.",
        topPic:
        {
            src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-10.jpg').default,
        },
        content: [
            {
                text: <>Wtedy pojawił się on, z czeluści internetu przemówił do nas swoim żółtym kolorem. Pięknie odnowione Renault Estafette o wdzięcznej nazwie <CustomOuterLink to="https://www.szelestbus.pl" text="Szelest Bus" className="linkMint" />. Jeszcze tego samego dnia napisaliśmy do Wojtka, właściciela Szelesta. Zapadła decyzja — robimy sesję stylizowaną food truck wedding. Bardzo szybko zorientowałyśmy się, organizacja sesji nie wykorzysta potencjału tego, co udało nam się zorganizować i należy zrobić kameralny event branżowy przypominający wesele i będący inspiracją dla par młodych. Dziś bazując na naszym foodtruckowym i wedding plannerskim doświadczeniu opowiemy Wam, jak zorganizować food truckowe wesele oraz o czym należy pamiętać, wybierając food truck na wesele.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/food-truck-na-wesele-01.jpg').default,
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
                text: <><span className="dark bold">5.</span> <CustomOuterLink to="https://www.facebook.com/hasztagkawa" text="Hasztag kawa" className="linkDark" asFB /> - Czyli barista na wesele serwujący tzw. kawę specialty, uznaliśmy, że to niezbędny element naszej foodtruckowej układanki. Hasztag kawa uświetniła już niejedno wesele. Ten stary pocztowy mercedes zachwyca aromatem kawy i wyglądem.</>,
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
                text: <><span className="dark bold">7.</span> <CustomOuterLink to="https://www.facebook.com/elvispriscillavwlovers" text="Elvis & Priscilla VW Lovers" className="linkDark" asFB /> - Właścicielką tych pięknych volkswagenów jest Kasia  <CustomOuterLink to="https://wosiakfotografia.pl/" text="Wosiak" className="linkMint" />, fenomenalna fotografka ślubna. Kasię zaprosiliśmy do projektu ze względu na jej talent i zamiłowanie do fotografii, ale i Priscillę, czyli pięknego beżowego ogórka. Nam służył jako miejsce relaksu, sesji, ale również jako platforma do tańca. To również idealny transport dla pary młodej w dniu wesela.</>,
                pics: [
                    {
                        src: require('./OurCouplesPics/FoodtruckWedding/VW-LOVERS.JPG').default,
                    },
                ]
            },
            {
                headerSmall: 'Food truck na wesele - co dalej',
                headerClassName: 'mint',
                text: <>Mieliśmy już piękne food trucki i wszystkie dane techniczne, żeby ustawić je na polanie koło pałacu <CustomOuterLink to="https://www.palacosowasien.com" text="Osowa Sień" className="linkMint" />. Zaprosiliśmy około 50 osób z branży ślubnej, w tym Monikę i Pawła — naszych modeli, którzy mieli wziąć udział w evencie, tyle że ubrani jak para młoda. Zależało nam na osobach, które naprawdę są parą, będą spontaniczne i naturalne. Tak właśnie było. Postawiliśmy na nieco luźniejsze stroje — suknię ślubną od <CustomOuterLink to="https://patriciaszlazko.com" text="Patrycji Szlazko" className="linkMint" /> oraz garnitur zamówiony przez <CustomOuterLink to="https://www.asos.com/pl" text="ASOS" className="linkMint" />. Mają tam spory wybór garniturów dla panów, którzy cenią sobie bardziej casualowy styl. <CustomOuterLink to="https://www.facebook.com/MonikaWitek.MakeUp" text="Monika jest makijażystką" className="linkMint" asFB />, więc o swój look zadbała sama.</>,
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
                Papeteria: <CustomOuterLink to="https://www.facebook.com/katelovcalligraphy/" text="Katelov Calligraphy" className="linkMint" asFB /><br />
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
import React from 'react'
import { Link, generatePath } from 'react-router-dom'
import CustomPostLink from "../CustomLink/CustomPostLink"
import CustomOuterLink from "../CustomLink/CustomOuterLink"
import CustomRealisationLink from '../CustomLink/CustomRealisationLink'
import URLS from '../../utils/urls'
import YoutubeEmbed from '../YoutubeEmbed'
import { main as AniaBenMain, slowWed01, slowWed02, slowWed03, slowWed04, slowWed05, slowWed06, slowWed07, slowWed08, slowWed09, slowWed10, slowWed11, slowWed12, slowWed13, slowWed14, slowWed15, wesLuz01, wesLuz02, wesLuz03, wesLuz04, wesLuz05, wesLuz06, wesLuz07, wesLuz08, wesSlow01, wesSlow02, wesSlow03, wesSlow04, wesSlow05, wesSlow06, wesSlow07, wesSlow08 } from './OurCouplesPics/AniaBen/index'

import { main as PatrycjaPrzemekMain, cegCen01, cegCen02, cegCen03, cegCen04, cegCen05, cegJar01, cegJar02, cegJar03, cegJar04, cegJar05, cegJarOp01, cegJarOp02, cegJarOp03, cegJarOp04, cegJarOp05, cegWes01, cegWes02, cegWes03, cegWes04, cegWes05, cegWes06, cegWes07, cegWes08, cegWes09, cegWes10, cegWes11, cegWes12, cegWes13, cegWes14, cegWes15, cegWes16, cegWes17 } from './OurCouplesPics/PatrycjaPrzemek/index'

import { main as AngelikaDanielMain, stKru01, stKru02, stKru03, stKru04, stKruSala01, stKruSala02, stKruSala03, stKruSala04, stKruSala05, stKruSala06, stKruSala07, stKruSala08, stKruStok01, stKruStok02, stKruStok03, stKruStok04, stKruStok05, stKruStok06, stKruStok07, stKruStok08, stKruWe01, stKruWe02, stKruWe03, stKruWe04, stKruWe06, stKruWe07, stKruWe08, stKruWe09, stKruWe10, stKruWe11, stKruWe12, stKruWe13, stKruWe14, stKruWe15, stKruWe16 } from "./OurCouplesPics/AngelikaDaniel/index"

import { main as FoodTruckMain, ftWed01, ftWed02, ftWed03, ftWed04, ftWed05, ftWed06, ftWed07, ftWed08, ftWed09, ftWed10, ftWed11, ftWed12, ftWed13, ftWed14, ftWed15, ftWed16, ftWed16A, ftWed17, ftWed18, ftWed19, ftWed20, ftWed21, ftWed22, ftWed23, ftWed24, ftWed25, ftWed26, szelest, królleski, hasztagKawa, photoBus, vw, craicford, dym } from "./OurCouplesPics/FoodtruckWedding/index"

import { main as MagdaSzymonMain, jakiKolSuk, jesDekoKość, jesWes01, jesWes02, jesWes03, jesWes03A, jesWes04, jesWes05, jesWes06, jesWes07, jesWes08, jesWes09, jesWes11, jesWes12, jesWes13, jesWes14, jesWes15, jesWes16, jesWesInsp, motPrzewWeJes, stylNaWesJes, sukienkaNaJesWes, sukienkiNaWesJes, zaprNaSlubJes01, zaprNaSlubJes02, zaprNaSlubJes03, wesJes01, wesJes02, wesJes03, wesJes04, wesJes05, butyNaWesJes } from "./OurCouplesPics/MagdaSzymon/index"

const weddings = [
    {
        bgColor: "bgDark",
        title: "Slow wedding u Ani i Bena",
        path: "slow-wedding",
        minHeight: true,
        seoTitle: "Slow wedding | agencja ślubna Czary Marry",
        seoText: "Pragniesz urządzić swoje wesele w stylu slow? Zobacz naszą realizację i poznaj zasady organizacji wesela w stylu slow.",
        mainPic: {
            src: AniaBenMain
        },
        details: "Bez pośpiechu, stresu i oglądania się na to, co powiedzą inni. Kameralnie i na własnych zasadach. W otoczeniu przyrody i najbliższych.",
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
            src: slowWed01,
        },
        content: [
            {
                text: <><span className="dark bold">Ania i Ben</span> trafili do nas z polecenia jednej z naszych byłych par młodych. Na co dzień mieszkają w Atlancie, w związku z czym nie byli w stanie samodzielnie zorganizować wesela i potrzebowali naszej pomocy. Od razu znaleźliśmy nić porozumienia i pokochałyśmy wizję wesela, jaką przedstawili. Marzyło im się kameralne <CustomPostLink text="wesele w górach" path="slub-wesele-w-gorach" className="linkPink" />, najlepiej w okolicach Zakopanego. Sprawnie przeszliśmy przez formalności i zabraliśmy się do pracy. Połowę zaproszonych gości stanowili Amerykanie, drugą połowę Polacy. Parze zależało na uniknięciu utartych schematów przy jednoczesnym poszanowaniu polskich i amerykańskich tradycji i zwyczajów. To było dla nas wyzwanie, którego z przyjemnością się podjęłyśmy.</>,
                pics: [
                    {
                        src: slowWed02,
                    },
                    {
                        src: slowWed03,
                    },
                    {
                        src: slowWed04,
                    },
                    {
                        src: slowWed05,
                    },
                ]
            },
            {
                headerSmall: "Wesele w stylu slow — Poszukiwanie odpowiedniej lokalizacji.",
                headerClassName: "pink",
                text: "Ania z Benem opowiedzieli nam o początkach swojej znajomości, o tym, jak ważną rolę odgrywają dla nich Tatry, jakie piękne wspomnienia łączą ich z tym miejscem. Wiedziałyśmy, że to właśnie tam musimy rozpocząć poszukiwania. Zależało nam na kameralnym i spokojnym miejscu z pięknym ogrodem. Priorytetem był jednak widok, marzyło nam się miejsce z panoramą Tatr w tle. Uruchomiłyśmy kontakty, przegrzebałyśmy czeluści internetu i przedstawiłyśmy parze kilka propozycji. Niestety ze względu na pandemię wiedziałyśmy, że para młoda nie będzie w stanie samodzielnie odwiedzić wybranych miejsc. Nie zastanawiając się długo, wsiadłyśmy w samochód i pojechałyśmy na wizytację. Odwiedziłyśmy miejsca, które Ani i Benowi najbardziej przypadły do gustu, przy okazji zaglądając chyba do każdej okolicznej restauracji, hotelu i karczmy.",
                pics: [
                    {
                        src: slowWed06,
                    },
                    {
                        src: slowWed07,
                    },
                    {
                        src: slowWed08,
                    },
                ]
            },
            {
                text: "Kiedy przekroczyłyśmy próg Restauracji Ziębówka poczuliśmy, że to właśnie to miejsce, którego szukaliśmy, para młoda, poczuła dokładnie to samo. Restauracja jest położona w miejscowości Witów, nieco dalej od zakopiańskiego zgiełku, ale bliżej Tatr i Śpiącego Rycerza, niedaleko doliny Chochołowskiej. Otacza ją piękny dziki ogród i las. To w zasadzie gotowa strefa chilloutu, idealna przestrzeń na wesele na luzie. Pełno tam urokliwych zakamarków ze stolikami. Na jednym z drzew zawieszona jest huśtawka, na innym hamak. Na środku znajduje się drewniana platforma — idealne miejsce na ceremonię plenerową lub zewnętrzny parkiet. Oczami wyobraźni widzieliśmy wrześniowy ciepły dzień i gości relaksujących się w ogrodzie. Jak się później okazało, nasze wyobrażenia całkowicie pokryły się z rzeczywistością.",
                pics: [
                    {
                        src: slowWed09,
                    },
                    {
                        src: slowWed10,
                    },
                    {
                        src: slowWed11,
                    },
                ]
            },
            {
                text: "Sama Ziębówka jest góralską chatą utrzymaną w tradycyjnym stylu. Wchodząc do środka, zobaczycie piękny kaflowy piec, niesamowite meble, góralskie drewniane ornamenty. Widać tam niezwykły szacunek do tradycji, ale bez zbędnych bibelotów, które mogłyby sprawić, że klimat miejsca się zatraci i będzie męczący. Na drugim piętrze znajduje się kolejna sala, do której prowadzą szerokie drewniane schody. Tam całą uwagę przyciąga duże zdobione okno z niesamowitym widokiem na góry, który możecie podziwiać na jednym ze zdjęć. Uznaliśmy, że dzielona struktura sali nie będzie przeszkodą. Potraktowaliśmy ją jako atut. Strefa jadalna na górze pozwoli gościom spokojnie porozmawiać i odpocząć, podczas gdy najwytrwalsi fani parkietu będą mogli szaleć do woli. Od początku nie chcieliśmy niczego narzucać gościom, nie baliśmy się, że będą rozproszeni, czy nie trafią na parkiet. Wiedzieliśmy, że slow wedding rządzi się własnymi prawami.",
                pics: [
                    {
                        src: slowWed12,
                    },
                    {
                        src: slowWed13,
                    },
                    {
                        src: slowWed14,
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
                        src: slowWed15
                    },
                    {
                        src: wesLuz01
                    },
                ]
            },
            {
                headerSmall: "Fotograf — nie reżyser.",
                headerClassName: "dark",
                text: <>Poznając Anię i Bena coraz bardziej, słuchając opowieści o ich gościach oraz oglądając relacje z imprez, w których uczestniczą, wiedziałyśmy, że zapowiada się świetna zabawa. Ania i Ben od razu zaznaczyli, że nie zależy im na długiej sesji w dniu ślubu i że ten czas wolą spędzić w gronie najbliższych. Wiedziałyśmy, że potrzebujemy kogoś z reporterskim zacięciem, kto nie będzie reżyserem, a cichym obserwatorem. No może nie takim cichym, potrzebny był ktoś, kto nie boi się wejść między gości i stać się częścią <span className='dark bold'>slow wedding</span>. Wszystko dla pięknych ujęć, które oddadzą charakter przyjęcia. Padło na <CustomOuterLink to="https://fotoreportazslubny.com" text="Jakuba Nowotyńskiego" className="linkPink" />. Nazwisko, które powinien znać każdy, kto ceni sobie naturalne, niebanalne i odważne ujęcia. Bez udawania i lukru. Jak mawiają fotografowie w branży ślubnej samo reporterskie mięso. Jak się okazało, Kuba sprawdził się równie dobrze przy fotografowaniu detali, dekoracji, czy backstagu z naszej pracy.</>,
                pics: [
                    {
                        src: wesLuz02
                    },
                    {
                        src: wesLuz03
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
                        src: wesLuz04
                    },
                    {
                        src: wesLuz05
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
                        src: wesLuz06
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
                        src: wesLuz07
                    },
                    {
                        src: wesLuz08
                    },
                ]
            },
            {
                headerSmall: "Slow wedding — Dzień wesela.",
                headerClassName: "pink",
                text: "Ania z Benem obdarzyli nas i innych wykonawców ogromnym zaufaniem. Jednocześnie ich wizja wesela na luzie od początku była bardzo klarowna. Mimo kilkudniowego pobytu w Zakopanem postanowili, że swoje miejsce weselne po raz pierwszy zobaczą dopiero w dniu ślubu. Wcześniej widzieli je tylko na relacji filmowej, którą przygotowałyśmy dla nich podczas wizytacji. Na miesiąc przed ślubem ustaliliśmy wszystkie szczegóły związane z przebiegiem tego dnia. Przygotowałyśmy scenariusz, który skonfrontowałyśmy z wszystkimi wykonawcami. Zawsze mamy na uwadze, że jest to narzędzie, które ma nam wyznaczać pewne ramy, ale wesele to żywy organizm i to my powinniśmy się dostosować do przebiegu przyjęcia, zamiast na siłę egzekwować to, co zostało ustalone w scenariuszu.",
                pics: [
                    {
                        src: wesSlow01
                    },
                    {
                        src: wesSlow02
                    },
                ]
            },
            {
                headerSmall: "Wesele na luzie — Ceremonia inna niż wszystkie.",
                headerClassName: "pink",
                text: <>Oczekiwanie na ceremonię umilały dźwięki elektrycznych skrzypiec, goście częstowali się prosecco i fingerfoodami. Nikomu się nie spieszyło, wszyscy delektowali się piękną pogodą i otoczeniem gór. W tym czasie para młoda miała się zobaczyć po raz pierwszy. First look odbył się nad górskim potokiem, a ceremonia się pod gołym niebem. Po jednej stronie mieli góry, a po drugiej piękną dekorację, która w oczywisty sposób nawiązywała do motywu przewodniego. Ponieważ Ania i Ben zdecydowali się na <CustomPostLink text="ceremonię symboliczną" path="5-hey-wedding-ślub-humanistyczny-a-na-co-to-komu" className="linkPink" /> prowadzoną przez <CustomOuterLink to="https://www.slubhumanistyczny.com" text="Jacka Siedleckiego" className="linkPink" />, mieli ogromną wolność w tym, jaki będzie jej przebieg i charakter. Nie zabrakło przemów, które są typowe dla kultury amerykańskiej, ale i własnych przysiąg, masy wzruszeń i śmiechu.</>,
                pics: [
                    {
                        src: wesSlow03
                    },
                ]
            },
            {
                headerSmall: "Wesele w stylu slow — czyli nigdzie się nam nie spieszy.",
                headerClassName: "pink",
                text: <>Po ceremonii para młoda wzniosła toast i zachęciła gości do spędzenia czasu na zewnątrz, co również jest typowym zwyczajem, który przywędrował do nas z Ameryki. Oczywiście nie trzeba było ich długo namawiać i wszyscy chętnie korzystali z promieni jesiennego słońca. Następnie udali się na uroczysty obiad, powitani na sali chlebem i solą przez rodziców pary młodej. Ten stary zwyczaj cieszy się ogromnym zainteresowaniem wśród gości z zagranicy. Pierwszy taniec odbył się po zmroku, w świetle gwiazd na zewnętrznym parkiecie. Mimo chłodnego górskiego powietrza goście bawili się na nim jeszcze do późnych godzin wieczornych, nieco później impreza przeniosła się do wewnątrz. Następnego dnia wszyscy ponownie spotkali się w Ziębówce, tym razem na poprawinach <span className='dark bold'>w stylu slow</span>. Było ognisko z kiełbaskami, wielki kocioł bigosu, tańce i relaks, a to wszystko pod gołym niebem. Pogoda była wymarzona, więc klimat sprzyjał leniwemu celebrowaniu ostatniego dnia wesela, tylko trochę szkoda było kończyć.</>,
                pics: [
                    {
                        src: wesSlow04
                    },
                    {
                        src: wesSlow05
                    },
                    {
                        src: wesSlow06
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
                        src: wesSlow07
                    },
                    {
                        src: wesSlow08
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
                text: <>Wtedy pojawił się on, z czeluści internetu przemówił do nas swoim żółtym kolorem. Pięknie odnowione Renault Estafette o wdzięcznej nazwie <CustomOuterLink to="https://www.szelestbus.pl" text="Szelest Bus" className="linkMint" />. Jeszcze tego samego dnia napisaliśmy do Wojtka, właściciela Szelesta. Zapadła decyzja — robimy sesję stylizowaną food truck wedding. Bardzo szybko zorientowałyśmy się, organizacja sesji nie wykorzysta potencjału tego, co udało nam się zorganizować i należy zrobić kameralny event branżowy przypominający wesele i będący inspiracją dla par młodych. Dziś bazując na naszym foodtruckowym i wedding plannerskim doświadczeniu opowiemy Wam, jak zorganizować food truckowe wesele oraz o czym należy pamiętać, wybierając food truck na wesele.</>,
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
                text: <>O ile znalezienie wspomnianego foto busa, czy prosecco vana nie powinno być żadnym problemem, schody mogą się pojawić przy nieco mniej weselnych usługach. Na szczęście istnieją firmy, dysponujące sporą ilością zabytkowych aut przerobionych na mobilne bary i DJ-ki, czy lodziarnie. Tu polecamy Wam firmę <CustomOuterLink to="https://craicford.pl/uslugi/mobilne-bary/" text="Craicford" className="linkMint" />, którą zaprosiłyśmy do współpracy przy food truck wedding. Znajdziecie tam sporo pięknych klasyków, których funkcję możecie dostosować do własnych potrzeb.</>,
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
                text: <>Najtrudniej będzie z typowymi truckami serwującymi street food oraz zarabiających głównie na dużych festiwalach. Często są to samochody bardzo mocno eksploatowane, a ich estetyka pozostawia wiele do życzenia. Poszukiwania nie były łatwe, ale udało się znaleźć kilka absolutnie przepięknych food trucków serwujących smaczne jedzenie. Szukałyśmy ich głównie na food truckowych grupach na Facebooku i uwierzcie nam, znalazło się kilka prawdziwych perełek. Wśród nich zasługujący na swoje miano <CustomOuterLink to="https://www.krolleskiburger.pl" text="Królleski Burger" className="linkMint" />. Piękny biały bus i przepyszne jedzenie, a za sterami dwójka przemiłych zapaleńców. Pamiętajcie, że tego typu samochody nie specjalizują się w weselach, często obsługują duże masowe imprezy lub mają stałą miejscówkę. Ściągniecie food trucka na wesele, wiąże się więc z nieco większymi kosztami. Przeszukajcie weselne portale, wybierzcie się na targi ślubne, szukajcie również w Google, w mediach społecznościowych oraz na grupach food truckowych.</>,
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
                text: <><span className="dark bold">1.</span> <CustomOuterLink to="https://www.szelestbus.pl" text="Szelest Bus" className="linkDark" /> - Czyli wcześniej wspomniana mobilna DJ-ka. To nie tylko piękny samochód, ale i świetny DJ za konsolą. Jego poczynania możecie obserwować na Facebooku i Instagramie, jest też bywalcem targów ślubnych. Ma doświadczenie w prowadzeniu wesel plenerowych, eventów często pary młode decydują się na jego obecność na poprawinach.</>,
                pics: [
                    {
                        src: szelest
                    },
                ]
            },
            {
                text: <><span className="dark bold">2.</span> <CustomOuterLink to="https://www.krolleskiburger.pl" text="Królleski Burger" className="linkDark" /> - To idealna opcja dla fanów wołowiny i pięknych samochodów. W menu znajdziecie pyszne burgery, stripsy, nuggetsy, sałatki i frytki. Chłopaki potrafią też w wege.</>,
                pics: [
                    {
                        src: królleski
                    },
                ]
            },
            {
                text: <><span className="dark bold">3.</span> <CustomOuterLink to="https://dymilustra.pl" text="Dym i lustra" className="linkDark" /> - Kiedy planowałyśmy nasz event, auto było jeszcze u mechanika, dziś widzimy je na wielu zdjęciach z pięknych wesel. Warto było na niego poczekać. Dym i lustra podbija branżę ślubną i nic dziwnego. To piękny samochód z szerokim asortymentem piw rzemieślniczych, drinków, koktajli i prosecco.</>,
                pics: [
                    {
                        src: dym
                    },
                ]
            },
            {
                text: <><span className="dark bold">4.</span> <CustomOuterLink to="https://craicford.pl/uslugi/mobilne-bary/" text="Craicford" className="linkDark" /> - To w zasadzie wypożyczenia food trucków na wesele. W ofercie znajdziecie mobilne bary, fotobudki, DJ-ki, busy ze słodkościami, lodami i wiele innych. Powiedzcie Szymonowi jaki macie pomysł, a jesteśmy pewne, że znajdzie dla Was coś ekstra. My zdecydowałyśmy się na pyszne gofry i lody oraz przepięknego Citroena HY.</>,
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
                text: <><span className="dark bold">6.</span> <CustomOuterLink to="https://photobus.pl" text="Photo bus" className="linkDark" /> - To auto, które przetarło weselne szlaki pozostałym. Kasia i Grzesiek kochają swój samochód i to, co robią. Piękny błękitny photo bus i Kasia w sukience w tym samym kolorze. Dbają o każdy detal, począwszy od dekoracji busa, a skończywszy na trosce i opiece nad gośćmi, którzy ich odwiedzają.</>,
                pics: [
                    {
                        src: photoBus
                    },
                ]
            },
            {
                text: <><span className="dark bold">7.</span> <CustomOuterLink to="https://www.facebook.com/elvispriscillavwlovers" text="Elvis & Priscilla VW Lovers" className="linkDark" asFB /> - Właścicielką tych pięknych volkswagenów jest Kasia  <CustomOuterLink to="https://wosiakfotografia.pl/" text="Wosiak" className="linkMint" />, fenomenalna fotografka ślubna. Kasię zaprosiliśmy do projektu ze względu na jej talent i zamiłowanie do fotografii, ale i Priscillę, czyli pięknego beżowego ogórka. Nam służył jako miejsce relaksu, sesji, ale również jako platforma do tańca. To również idealny transport dla pary młodej w dniu wesela.</>,
                pics: [
                    {
                        src: vw
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
        textMain: <>Ciężko nam sobie przypomnieć, kto wpadł na pomysł kosmicznego motywu przewodniego. Czy była to para młoda, florystka, czy my? Odmęty pamięci podpowiadają, że Angelika i Daniel zaufali nam i dali wolną rękę. Gdy dzieją się takie rzeczy, idziemy na całość i sięgamy gwiazd. Tak też stało się w tym przypadku. Kosmiczna energia udzieliła się wszystkim - parze młodej, gościom oraz obsłudze. Tego dnia <CustomOuterLink to="http://sk.kopalniazlota.pl/wesela/" text="Stara Kruszarnia" className="linkPink" /> zaświeciła tysiącem gwiazd.</>,
        topPic:
        {
            src: stKruWe01
        },
        content: [
            {
                headerSmall: "Stara Kruszarnia — Zaczęło się od miejsca.",
                headerClassName: "grey",
                text:
                    <>Każdy, kto planuje <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="linkPink">wesele na Dolnym Śląsku</Link> i marzy o pięknej sali otoczonej lasem, powinien odwiedzić Starą Kruszarnię w Złotym Stoku. To jedno z najbardziej plastycznych miejsc weselnych, jakie znamy. Co to znaczy? Można tam wyczarować absolutnie wszystko. Ceglane wnętrze Starej Kruszarni może być tłem dla przeróżnych motywów przewodnich i stylów. Nas zachwyca nie tylko wnętrzem, ale również otwartością właścicieli oraz managera, pięknym otoczeniem i pyszną kuchnią, a od niedawna również klimatyczną strefą chilloutu. To samo urzekło Angelikę i Daniela, a ich wybór <CustomOuterLink to="http://sk.kopalniazlota.pl/wesela/" text="Starej Kruszarni" className="linkPink" /> był praktycznie tylko formalnością.</>,
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
                text: <>Stara Kruszarnia to jedna z najpiękniej położonych sal weselnych na Dolnym Śląsku. Samo miejsce przeznaczone na ceremonię powala. Jest to przestrzeń otoczona lasem, gdzie korony drzew tworzą baldachim, przez który przedziera się słońce. Bardzo często po zmroku rozpalane jest tak ognisko. Angelika i Daniel zdecydowali się na ceremonię humanistyczną, którą poprowadził  <CustomOuterLink to="https://djglosny.pl/celebrant-slubny/" text="celebrant ślubny Maciej Głos" className="linkPink" />. Było romantycznie i wzruszająco. Piękne otoczenie wprawiało gości w niesamowity nastrój, otaczając ich jesienną aurą.</>,
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
                text: <>Nie znamy wykonawcy ślubnego, który nie lubiłby Starej Kruszarni. W Złotym Stoku można się zakochać, góry, lasy, cisza i spokój. Co prawda nasza ekipa nie szukała spokoju, to była raczej prawdziwa petarda energetyczna. Za konsolą aż dwóch DJ ów i to nie byle jakich — <CustomPostLink path="3-hey-wedding-ciekawe-przypadki-dj-a-jegomościa" text="DJ Jegomość" className="linkPink" /> i <CustomOuterLink to="https://djglosny.pl" text="DJ Głośny" className="linkPink" />, a na dokładkę <CustomOuterLink to="https://www.facebook.com/LudwickiLukasz/" text="Łukasz Ludwicki" className="linkPink" asFB /> na saksofonie. Team film i foto również zarażał wszystkich pozytywną energią. Klaudia z <CustomOuterLink to="https://www.facebook.com/yesidoweddingphotography" text="Yes, I Do Photography" className="linkPink" asFB /> przy wsparciu <CustomOuterLink to="https://ohstorytellers.com" text="Jacka Olszewskiego" className="linkPink" /> wykonali piękne zdjęcia. Za film odpowiedzialny był <CustomOuterLink to="https://pawelsawski.pl" text="Paweł Sawski" className="linkPink" />. Dekoracjami zajęła się wcześniej wspomniana Aneta z Anello Decor, a słodki stół i tort przygotowała Natalia z <CustomPostLink path="14-hey-wedding-o-tort-i-słodkości-weselne" text="Torty po Twojemu" className="linkPink" />. Nad całą organizacją wesela czuwaliśmy oczywiście my - <Link to={URLS.HOME} className="linkPink">Czary Marry</Link>. Mamy wrażenie, że tego dnia wszyscy nakręciliśmy się pozytywnie, a nasza kosmiczna energia rozsadzała Starą Kruszarnię.</>,
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
                    <YoutubeEmbed videoId="qPfVAO1t-ZM" title="Angelika i Daniel Shortstory" />
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
    },
    {
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
                text: <>Mało jest miejsc na weselnej mapie polski, które świadczyłyby tak kompleksową obsługę. W zasadzie <CustomOuterLink text="Ceglarnia" to="https://www.ceglarnia.com/" className="linkMint" /> jest samowystarczalna pod każdym względem.</>,
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
                text: <>To 5h terenu, na które składa się plac przed salą z pięknie wystrzyżonym trawnikiem, sad, park oraz czego dusza zapragnie, żeby zorganizować ceremonię cywilną w plenerze. Konkretne miejsce możecie wybrać sami. W razie złej pogody nie musicie się martwić. Stodoły w Ceglarni Jarosławki są dwie. Tą mniejszą możecie wykorzystać jako miejsce ceremonii w razie opadów deszczu. Ponadto 11 kilometrów od sali, w miejscowości Gogolewo znajduje się zabytkowy, drewniany kościółek. Teren wokół sali daje ogromne możliwości fotografowi ślubnemu, który może poszaleć z parą młodą na sesji, nie opuszczając terenu Ceglarni. U nas za obiektywem stanął nieoceniony <CustomOuterLink text="Jakub Nowotyński" to="https://fotoreportazslubny.com" className="linkMint" />.</>,
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
    },
    {
        bgColor: "bgPink",
        title: "Jesienne wesele Magdy i Szymona",
        path: "slub-jesienia-wesele",
        minHeight: true,
        seoTitle: "Ślub jesienią | jesienne wesele inspiracje",
        seoText: "Planujesz organizację ślubu i wesela jesienią? Zobacz naszą realizację, inspiracje i pomysły na jesienne wesele.",
        mainPic: {
            src: MagdaSzymonMain
        },
        details: "Tego dnia wydarzyło się wiele pięknych rzeczy, a Stara Kruszarnia zadrżała w posadach od tańców do białego rana. Było oryginalnie i kolorowo i to nie tylko za sprawą pięknej jesiennej aury otaczającej Złoty Stok.",
        org: "Agencja Ślubna Czary Marry",
        orgLink: "",
        place: "Stara Kruszarnia",
        placeLink: "http://sk.kopalniazlota.pl/",
        photo: "Krzysiek Kudła",
        photoLink: "https://kudlakrzysiek.pl/",
        flowers: "Anello Decor",
        flowersLink: "https://www.facebook.com/anellodecor/",
        date: '17 mar 2022',
        textMain: <>Tego dnia wydarzyło się wiele pięknych rzeczy, a Stara Kruszarnia zadrżała w posadach od tańców do białego rana. Było oryginalnie i kolorowo i to nie tylko za sprawą pięknej jesiennej aury otaczającej <span className='pink bold'>Złoty Stok</span>.<br /><br />
            Magdę i Szymona pokochałyśmy od pierwszego spotkania. Wiedziałyśmy, że z nimi nie będziemy się nudzić i wyczarujemy coś niezwykłego. Za każdym razem, gdy się z nimi spotykałyśmy, miałyśmy wrażenie, że spędzamy czas z bliskimi znajomymi, a nie klientami. Otwarci, sympatyczni, spontaniczni, pełni zaufania i zrozumienia naszej pracy.
        </>,
        topPic: {
            src: MagdaSzymonMain
        },
        content: [
            {
                headerClassName: "pink",
                headerSmall: 'Jesienne wesele — świadoma decyzja, czy kwestia przypadku.',
                text: <>Propozycji miejsc weselnych było wiele, odwiedziliśmy wspólnie kilka z nich, ale ostatecznie para młoda zdecydowała się na Starą Kruszarnię. Najbliższy wolny termin to 23 października 2021 roku. Pojawiły się chwilowe wątpliwości. Magda i Szymon marzyli o ceremonii na zewnątrz i dekoracjach w kolorze lata. Czy to się uda? Czy pogoda nie pokrzyżuje nam planów? Szybko przekonałyśmy Magdę i Szymona, że ślub jesienią może być równie piękny, co ten w środku lata, a jesienne wesele ma wiele plusów.<br /><br />
                    Jesienne wesele plusy:
                    <ul style={{ marginTop: ".5rem" }}>
                        <li>Większa dostępność wykonawców i miejsc weselnych.</li>
                        <li>Złota polska jesień to najpiękniejsza dekoracja.</li>
                        <li>Nie jest za gorąco.</li>
                        <li>Większa dostępność gości - wakacje potrafią znacznie wpłynąć na frekwencję.</li>
                        <li>Pyszna kuchnia sezonowa.</li>
                    </ul>
                </>,
                pics: [
                    {
                        src: butyNaWesJes
                    }
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Jesienne wesele — pogoda, która potrafi płatać figle.",
                text:
                    <>
                        Czy należy się obawiać, że organizując wesele jesienią, pogoda może pokrzyżować nasz <CustomPostLink path='plan-wesela-harmonogram-dnia-slubu-krok-po-kroku' className='linkPink' text='plan dnia ślubu' />? Teoretycznie tak, podobnie, gdy organizujemy wesele wiosną, latem, czy zimą. Miałyśmy okazję koordynować deszczowe wesela w lecie i słoneczne ceremonie plenerowe w zimie. Najważniejsze, by nie dać się zwariować. W zeszłym roku zorganizowałyśmy pięć jesiennych wesel. Pogoda była różna, ale ani razu nie pozwoliliśmy jej na psucie atmosfery. 23 października był dniem, w którym deszcz na zmianę zastępowało piękne słońce. Do ostatniej sekundy czekaliśmy na decyzję, gdzie odbędzie się ceremonia. Ponieważ zaplanowaliśmy ceremonię humanistyczną, mogliśmy sobie pozwolić na elastyczność. Postanowiliśmy z parą, że jeśli w ciągu 15 minut się nie wypogodzi, zaczniemy obiadem, a ceremonię przełożymy na później. Poprosiliśmy zebranych gości o chwilę cierpliwości. Nikt nie protestował, goście rozmawiali ze sobą i czekali na decyzję. Gdy tylko wyszło słońce i deszcz przestał padać, rozdaliśmy gościom parasolki i koce. Ostatecznie ruszyliśmy z pięciominutowym opóźnieniem. Celebrant poinformował, że jeśli znowu zacznie padać, robimy akcję ewakuację i kończymy na sali. Okazało się, że tego dnia więcej nie padało. Być może pomyślicie, że panował zamęt i dezinformacja. Nie zgodzimy się z tym, to było totalnie naturalne, na luzie, para dobrze czuła się z takim rozwiązaniem, nikt się nie stresował, nigdzie się nam nie spieszyło.
                    </>,
                pics: [
                    {
                        src: jesWes11
                    },
                    {
                        src: jesWes12
                    },
                    {
                        src: jesWes13
                    },
                    {
                        src: jesWes14
                    },
                    {
                        src: jesWes15
                    }
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Ślub jesienią — ceremonia humanistyczna.",
                text:
                    <>Pamiętamy, jak Magda z Szymonem zapytali, co myślimy o tym, żeby ceremonię humanistyczną poprowadził ich przyjaciel Mateusz. Uznałyśmy, że to świetny pomysł, ale wiedziałyśmy, że to bardzo odpowiedzialne i trudne zadanie. Chwilę później umówiliśmy się z parą i Mateuszem na spotkanie. Wtedy zrozumiałyśmy, dlaczego Magda z Szymonem chcieli powierzyć tę funkcję właśnie jemu. Wspólnie omówiliśmy <CustomPostLink path='5-hey-wedding-ślub-humanistyczny-a-na-co-to-komu' className='linkPink' text='założenia i idee ślubu humanistycznego' />. Mateusz przygotował scenariusz, który wysłał nam do konsultacji, jego treść miała być niespodzianką dla pary. Ceremonia powaliła parę, gości i nas na kolana. Była zabawna, wzruszająca i pełna osobistych nawiązań.
                    </>,
                pics: [
                    {
                        src: jesWes16
                    },
                    {
                        src: jesWesInsp
                    },
                    {
                        src: motPrzewWeJes
                    },
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Jesienne wesele a plener ślubny.",
                text: "Należy pamiętać, że jesienne wesele to nie tylko wrzesień, ale także październik czy listopad. Im bliżej końca roku tym dni stają się krótsze, a co za tym idzie, możemy nie zdążyć ze zdjęciami plenerowymi przed zachodem słońca. Dlatego podczas jesiennych realizacji sugerujemy parom zaplanowanie first looku połączonego z dłuższą sesją plenerową przed ceremonią. Zwykle planujemy na nią około 40 minut do godziny. To piękny czas, który pozwoli Wam wejść w weselny klimat, wyciszyć się i spędzić chwilę czasu tylko we dwoje. Krótka sesja zorganizowana po obiedzie, czy pierwszym tańcu będzie wartością dodaną. Jeśli nie zdążycie się na nią wybrać, nic nie szkodzi.",
                pics: [
                    {
                        src: jesDekoKość
                    },
                    {
                        src: jakiKolSuk
                    }
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Sukienka na jesienne wesele — na co się zdecydować.",
                text: <>Naszym zdaniem należy ubrać się komfortowo. Szkoda byłoby ryzykować przeziębieniem tylko po to, żeby zaprezentować się w sukni z odkrytymi ramionami, która nie jest dostosowana do aury panującej na zewnątrz. Radzimy wybrać <CustomPostLink path='suknia-slubna-jak-wybrac' text='suknię' className='linkPink' /> z długim rękawem lub ciekawe okrycie wierzchnie. Jeśli pójdziecie w to drugie, opcji jest bardzo wiele, wszystko zależy od stylu samej sukienki i przyjęcia. Do bardziej eleganckich stylizacji świetnie sprawdzą się futerka lub wełniane etole, do luźniejszych kurtki, katany i ramoneski. Kolor sukienki na wesele jesienią powinien być dostosowany do karnacji i typu urody panny młodej, ale wszelkiego rodzaju kremy czy beże, nieco lepiej wpiszą się w kolory jesieni. Wybierając buty na wesele jesienią, postawcie na wygodę i odrzućcie sandałki na bok. Nie tylko będzie Wam zimno, ale mogą się okazać niebezpieczne.</>,
                pics: [
                    {
                        src: stylNaWesJes
                    }
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Garnitur na jesienne wesele — na co się zdecydować.",
                text: "To istny raj dla panów, którzy chcieliby postawić na nieoczywiste wybory. Możecie zaszaleć ze strukturą i wybrać nieco grubszy materiał, dodać do stylizacji kamizelkę lub szelki. W klimat jesiennych wesel świetnie wpisują się kolory takie jak śliwkowy, brązowy, czy bordo, możecie też zdecydować się na kratę jak nasz pan młody Szymon.",
                pics: [
                    {
                        src: sukienkiNaWesJes
                    },
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Jesienne wesele a zabawa na parkiecie.",
                text: <>Wspominałyśmy już, że, organizacja wesela jesienią wymusza na nas pewne rozwiązania. Nie da się ukryć, wieczory są chłodne, a dni krótsze. Jednak dla wielu osób mogą to być idealne warunki do rozkręcenia niesamowitej zabawy na parkiecie. Jeśli przeraża Was, że goście rozejdą się po <CustomPostLink text='ogrodzie' path='wesele-w-ogrodzie-garden-party' className='linkPink' />, nie będą tańczyć do momentu aż zapadnie półmrok, to jesienne wesele jest idealnym rozwiązaniem dla Was. Goście będą wychodzić wyłącznie na papierosa i szybko wracać na salę, a impreza rozkręci się znacznie szybciej, niż ma to miejsce w lecie.</>,
                pics: [
                    {
                        src: sukienkaNaJesWes
                    },
                    {
                        src: wesJes01
                    },
                    {
                        src: wesJes02
                    },
                    {
                        src: wesJes03
                    },
                    {
                        src: wesJes04
                    },
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Ślub jesienią - dekoracje.",
                text: <>Jesienne wesele zachwyca kolorami. Soczyste pomarańcze, brązy, żółcienie, bordo to typowe kolory jesieni. Czy jest to jednak jedyne rozwiązanie? Organizując ślub jesienią, nie musicie się ograniczać wyłącznie do tego <CustomPostLink text='motywu przewodniego' path='motyw-przewodni-wesela' className='linkPink' />. Jesienne wesele to nie tylko dynie, jarzębina i spadające liście. Wszystko zależy, jak opowiecie swoją historię i czy uda Wam się wprowadzić gości w odpowiedni klimat. Dla przykładu nasza panna młoda Magda marzyła o letnich kolorach i nietuzinkowych dekoracjach. Postanowiliśmy wyczarować coś energetycznego i oryginalnego. Postawiliśmy na kaktusy w ceramicznych osłonkach i kwiaty w odcieniach intensywnego różu, zieleni, pomarańczy i żółtego. Goście byli oczarowani tym kontrastem. Ceglane, industrialne wnętrze Kruszarni po raz kolejny okazało się niezwykle plastycznym tłem dla dekoracji. Ciężko było uwierzyć, że zaledwie tydzień wcześniej jej wnętrza zamieniliśmy w kosmiczną przestrzeń pełną gwiazd i astronomicznych nawiązań dekorując salę na przyjęcie Angeliki i Daniela. Pełny reportaż z tego wesela znajdziecie tutaj - <CustomRealisationLink text='wesele w Starej Kruszarni' path='stara-kruszarnia-wesele-kosmos' className='linkPink' />.</>,
                pics: [
                    {
                        src: jesWes01
                    },
                    {
                        src: jesWes02
                    },
                    {
                        src: jesWes03
                    },
                    {
                        src: jesWes03A
                    },
                    {
                        src: jesWes04
                    },
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Jesienne kwiaty na wesele.",
                text: "Zazwyczaj zachęcamy do wyboru sezonowych roślin. Ma to wpływ na dostępność, jakość oraz cenę kwiatów. Dalie i chryzantemy to zdecydowanie królowe jesieni. Mimo to podczas tworzenia dekoracji poszliśmy w zupełnie innym kierunku. Naszą królową była protea, czyli narodowy symbol RPA, to właśnie tam wychowała się nasza panna młoda. Ten spektakularny, duży kwiat stał się główną ozdobą jej bukietu. Do tego wcześniej wspomniane kaktusy na stołach uzupełnione pojedynczymi kwiatami w szklanych buteleczkach. Nad głową pary młodej zawiesiliśmy trzy wiklinowe kosze, z których wprost wylewały się kwiaty opadające w dół.",
                pics: [
                    {
                        src: jesWes05
                    },
                    {
                        src: jesWes06
                    },
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Jesienne wesele — tekstylia i dodatki.",
                text: "Naszym weselnym must have są zdecydowanie kolorowe obrusy lub bieżniki. Rezygnacja z popularnej bieli może zadziałać cuda. Dobrze dobrana struktura materiału oraz kolor podbije efekt nawet skromnych dekoracji. Wypożyczalnie dysponują ogromną ilością barw, warto przemyśleć taki wydatek. Podczas organizacji wesela Magdy i Szymona dobór kolorów był tematem numer jeden, chwilami spędzał nam sen z powiek. Ostatecznie wyszło pięknie i oryginalnie. Na stołach gości postawiliśmy na łososiowe bieżniki, stół pary młodej zdobił musztardowy obrus, do tego serwety w kolorze butelkowej zieleni. Całość uzupełniliśmy wiklinowymi podkładkami. Brzmi jak szaleństwo? Przyznajcie, że wyszło pięknie.",
                pics: [
                    {
                        src: jesWes07
                    },
                    {
                        src: jesWes08
                    },
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Zaproszenia na ślub jesienią.",
                text: "Była już mowa o wprowadzenie gości w odpowiedni klimat jesiennego wesela. Najlepszą zapowiedzią tego, co może ich czekać, jest samo zaproszenie. Zawsze powinno ono nawiązywać do motywu przewodniego wesela. Dlatego najpierw planujemy dekoracje, a dopiero później zabieramy się za papeterię. W tym przypadku postawiliśmy na kolory przewodnie naszego jesiennego wesela, wyszło dość odważnie. Intensywny pomarańczowy, łososiowy oraz butelkowa zieleń. Mimo tak nieoczywistych kolorów zarówno para młoda, jak i goście byli zachwyceni. Podobne kolory pojawiły się w papeterii na weselu. Naszego pomarańczowego table planu nie sposób było przegapić.",
                pics: [
                    {
                        src: jesWes09
                    },
                    {
                        src: zaprNaSlubJes01
                    },
                    {
                        src: zaprNaSlubJes02
                    },
                    {
                        src: zaprNaSlubJes03
                    },
                ]
            },
            {
                headerClassName: "pink",
                headerSmall: "Jesienne wesele — menu.",
                text: "Najlepsze zostawiliśmy sobie na koniec. Tu możecie naprawdę zaszaleć. Świetnie sprawdzą się wszelkiego rodzaju rozgrzewające zupy-kremy jak dyniowa, marchewkowa, ziemniaczana. Warto przemyśleć również borowikową, ale z doświadczenia wiemy, że jest sporo osób, które nie tolerują grzybów. Mogą się one również pojawić w daniu głównym czy kolacji, ważne, żeby nie było ich za dużo, ponieważ są ciężkostrawne. Fajnym rozwiązaniem jest serwowanie faszerowanych warzyw lub mięs w towarzystwie sezonowych owoców jak jabłko, gruszka czy śliwka. Owoce te warto też przemycić w deserach.",
                pics: [
                    { src: wesJes05 },
                ]
            },
            {
                text: "Jeśli jesteście zainteresowani organizacją jesiennego wesela, zapraszamy do kontaktu. Chętnie zorganizujemy dla Was również wesele wiosną, latem czy jesienią. Jesteśmy przekonane, że o każdej porze roku możemy wyczarować coś niesamowitego i po Waszemu."
            },
        ],
        extras: <>Może zainteresować Cię również:
            <ul style={{ marginTop: ".5rem" }}>
                <li><CustomPostLink text="Znowu musimy przełożyć wesele - Rozmowa z Beatą i Pawłem." path="11-hey-wedding-musze-przelozyc-wesele-z-powodu-koronawirusa" className="linkPink" /></li>
                <li><CustomPostLink text="Ekipa marzeń i kosmiczne wesele - Rozmowa z Angeliką i Danielem." path="19-hey-wedding-ekipa-marzen-i-kosmiczne-wesele" className="linkPink" /></li>
                <li><CustomPostLink text="Wesele w Folwarku Wąsowo" path="folwark-wasowo-wesele" className="linkPink" /></li>
                <li><CustomPostLink text="Wesele w Zamku Książ" path="zamek-ksiaz-wesele-motyw-rose-gold" className="linkPink" /></li>
                <li><CustomPostLink text="Ślub i wesele w górach - organizacja + lista miejsc." path="slub-wesele-w-gorach" className="linkPink" /></li>
            </ul>
        </>
    },
]

export default weddings
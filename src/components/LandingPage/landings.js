import CustomOuterLink from '../CustomLink/CustomOuterLink'
import { generatePath, Link } from 'react-router-dom';
import URLS from '../../utils/urls'
import CustomCategoryLink from '../CustomLink/CustomCategoryLink';

const landings = [
    {
        path: 'wedding-planner-poznan',
        mainHeader: 'Wedding Planner Poznań - profesjonalna organizacja ślubów i wesel',
        boxTitle: 'Wedding planner Poznań - Jak wybrać najlepszego.',
        textOne:
        <>
        Szukacie konsultanta ślubnego, który zorganizuje Wam wymarzone wesele w Poznaniu lub okolicach? Dobrze trafiliście. Chętnie podpowiemy Wam, jakimi kryteriami kierować się podczas wyboru wedding plannera w Poznaniu oraz jak wygląda współpraca z nami – <Link className="bgColorPink" to={URLS.HOME}>Agencją Ślubną Czary Marry</Link>. <br/>Wybór idealnego wedding plannera to w końcu jedna z ważniejszych decyzji jaką przyjdzie Wam podjąć podczas organizacji wesela w Poznaniu lub okolicach. Nie da się ukryć, że z osobą, która będzie organizować Wasz dzień spędzicie parę dobrych miesięcy. Warto podjąć decyzję o współpracy świadomie.
        </>,
        textTwo: 'Pewnie zastanawiacie się, czy powinniście szukać wyłącznie firm z województwa wielkopolskiego, a może warto zdecydować się na agencję ślubną działającą na terenie całej Polski? Naszym zdaniem sama lokalizacja nie ma większego znaczenia. Najważniejsza jest znajomość rynku i szerokie kontakty.',
        placePics: [
            require('./LandingPics/lan2.JPG').default,
            require('./LandingPics/lan3.JPG').default,
            require('./LandingPics/lan1.JPG').default
        ],
        content: [
            {
                title: 'Organizacja wesel Poznań - dlaczego warto wybrać wedding plannera organizującego wesela w całej Polsce.',
                titleBgColor: 'bgMint',
                color: 'dark',
                text:
                <>
                <p>Mimo że marzycie o weselu w Poznaniu lub okolicach w województwie wielkopolskim, warto rozważyć również firmy, które działają na skalę ogólnopolską. Dlaczego? Każde województwo rządzi się swoimi prawami - dzięki temu, że pracujemy w różnych częściach kraju znamy najnowsze trendy i rozwiązania, poszerzamy horyzonty. Mamy szerokie kontakty wśród wykonawców z całej Polski. Dzięki temu znajdziemy dla Was najlepsze oferty, idealnie odpowiadające na Wasze preferencje, nie ograniczając się wyłącznie do lokalizacji.</p>
                <p>Ze względu na aktywny tryb życia naszych par najczęściej kontaktujemy się z nimi online, jesteśmy dla nich dyspozycyjne o każdej porze dnia, kontaktując się przez WhatsApp, mail czy Skype. I choć na co dzień mieszkamy we <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="bgColorMint" target="_blank">Wrocławiu</Link> to dobrze wiemy, że odległość nie ma znaczenia przy organizacji wesel. Poznań to jedno z miast, które bardzo lubimy, które nas inspiruje i w którym mamy doświadczenie w organizacji wesel, dlatego w razie potrzeby chętnie Was odwiedzimy.
                </p>
                </>
            },
            {
                title: 'Profesjonalny wedding planner Poznań - kryteria wyboru.',
                titleBgColor: 'bgDark',
                color: 'text-white',
                text:
                <>
                <p>Poszukiwania wedding plannera najlepiej rozpocząć od przejrzenia jego <Link to={URLS.COUPLES} className="bgColorLight">portfolio realizacji ślubnych</Link>. Jeżeli realizacje i styl pracy danej agencji ślubnej przypadną Wam do gustu, możecie być pewni, że zrozumie zrealizuje również Waszą wizję. Kolejny niezwykle ważny krok to spotkanie. Koniecznie musicie poznać i porozmawiać ze swoim przyszłym konsultantem ślubnym.</p>
                <p>
                Powinniście poczuć, że nadajecie na tych samych falach i dobrze czujecie się w jego towarzystwie, będzie Wam towarzyszył w jednych z najważniejszych chwil Waszego życia. Warto zerknąć również na dodatkowe aktywności rozważanego wedding plannera np.<Link className="bgColorLight" to={URLS.BLOG}>blog</Link>, <CustomCategoryLink path="podcast" className="bgColorLight" text="podcast"/>, publikacje w mediach branżowych. Na koniec zróbcie dokładny research, zapoznajcie się z opiniami na temat wybranych konsultantów ślubnych z Poznania, nieoceniony okaże się tu FB i wizytówka Google.
                </p>
                </>
            },
        ],
        gridHeader: 'Czary Marry - Twój wymarzony konsultant ślubny w Poznaniu.',
        gridBgColor: 'bgGrey',
        gridTextOne:
        <p>
            W Agencji Ślubnej Czary Marry zmieniamy marzenia w rzeczywistość. Organizujemy piękne uroczystości, pełne wzruszeń i radości oraz niezapomnianych momentów spędzonych w gronie najbliższych osób. Zajmujemy się organizacją ślubów nie tylko w Poznaniu ale działamy na terenie całej Polski. Choć musimy przyznać, że mamy szczególną słabość do Wielkopolski. Uwielbiamy klimat starych stodół, klimatycznych folwarków, przeszklonych oranżerii – wybór świetnych sal weselnych nieopodal <CustomOuterLink to="https://www.poznan.pl/" text="Poznania" className="bgColorLight"/> przyprawia o zawrót głowy.
        </p>,
        gridTextTwo:
        <p>
            W pracy konsultanta ślubnego cenimy sobie relacje, zależy nam, żeby proces organizacji wesela przebiegał w przyjaznej atmosferze, a wspólnie spędzony czas był wspaniałą przygodą. Współpraca z nami to gwarancja niebanalnej, perfekcyjnie zaplanowanej uroczystości oraz komfortu i poczucia bezpieczeństwa. Pozwólcie nam sprawić, by organizacja Waszego wymarzonego wesela w Poznaniu stała się przyjemnością.
        </p>,
        gridPics:
        [
            require('../Home/konsultantki-slubne-czary-marry-home.jpg').default,
            require('../AboutUs/kasia.jpg').default,
            require('../AboutUs/ola.jpg').default,
            require('../Home/instaPic3.jpg').default,
        ],
        numsTitle: 'Organizacja ślubów Poznań - zakres obowiązków konsultanta ślubnego.',
        numsContent: [
            {
                bgColor: 'bgPink',
                number: '01',
                title: 'Kompleksowa organizacja',
                text: 'To całościowa pomoc w przygotowaniach na każdym etapie organizacji ślubu i wesela. Począwszy od zaplanowania wydatków, znalezienia sali, przygotowania harmonogramu prac, przedstawienia propozycji wszystkich wykonawców ślubnych, kończąc na zaplanowaniu przebiegu dnia ślubu i wesela oraz jego koordynacji. To wszystko czego potrzebujecie, organizując wesele w Poznaniu i okolicach.'
            },
            {
                bgColor: 'bgMint',
                number: '02',
                title: 'Koordynacja ślubu i wesela',
                text: 'Podczas koordynacji dnia ślubu i wesela jesteśmy nie tylko do Waszej dyspozycji, ale i wykonawców oraz gości weselnych. Przygotujemy scenariusz dnia ślubu i wesela, który będzie zawierał wszystkie Wasze wskazówki. Skoordynujemy przygotowania trwające na sali weselnej, prace dekoratorskie, będziemy w kontakcie z wszystkimi kontraktorami. Będziemy Wam towarzyszyć podczas przygotowań, ceremonii i przyjęcia weselnego. Zadbamy, abyście mogli skupić się wyłącznie na świętowaniu, zdejmując z Was ciężar przygotowań i decyzji, które niejednokrotnie należy podjąć w dniu ślubu przy organizacji wesela w Poznaniu i okolicach.'
            },
            {
                bgColor: 'bgGrey',
                number: '03',
                title: 'Wybrane elementy',
                text: 'Potrzebujecie wsparcia wyłącznie przy części organizacji usług? To oferta stworzona jest z myślą o Was! To od Was zależy w jakim wymiarze chcecie nas włączyć w proces przygotowań i organizacji Waszego ślubu w Poznaniu.'
            }
        ],
        bottomTitle: 'Organizacja wesela Poznań',
        bottomText:
        <>
        <p>Jeśli postanowiliście, że samodzielnie zajmiecie się organizacją ślubu i wesela w Poznaniu, nie zapominajcie, że zawsze możecie skorzystać z konsultacji online z profesjonalnymi organizatorami ślubów i wesel. Czasami warto zapytać o zdanie doświadczonych wedding plannerek, szczególnie, gdy do podjęcia jest dużo niezwykle ważnych decyzji. Mamy duże doświadczenie w organizacji wesel w Poznaniu i chętnie podzielimy się z Wami naszą wiedzą. Koniecznie zerknijcie na naszą ofertę szkoleń dla Par Młodych, które zdecydowały się na samodzielną organizację ślubu i wesela, ale marzą o niepowtarzalnych i pięknych uroczystościach. Więcej informacji znajdziecie tu: <CustomOuterLink className="bgColorMint" to="https://www.wedding-know-how.com/" text="Wedding-Know-How"/>.</p>
        <p>Jeśli szukacie profesjonalnego wedding plannera, doświadczonego w organizacji ślubów i planujecie organizację wesela w Poznaniu i okolicach to serdecznie zapraszamy do kontaktu. Zorganizujemy dla Was ślub waszych marzeń.</p>
        </>

    },

    {
        path: 'organizacja-wesel-wroclaw',
        mainHeader: 'Konsultant Ślubny Wrocław',
        boxTitle: 'Wedding planner Wrocław - Czy to konieczne?',
        textOne:
            <>
                Zastanawiacie się, czy zdecydować się na współpracę z konsultantem ślubnym? Szukacie wedding plannera, który podobnie jak Wy pochodzi z Wrocławia? A może wprost przeciwnie, jesteście z daleka, ale to właśnie we Wrocławiu lub na Dolnym Śląsku chcecie zorganizować Wasze wymarzone wesele? Jeśli na któreś z tych pytań odpowiedzieliście twierdząco, to świetnie się składa. Chętnie zdradzimy Wam, czym kierować się podczas poszukiwań idealnego wedding plannera z Wrocławia oraz jak wygląda współpraca z nami. <br />
                Czy warto decydować się na wedding plannera z Wrocławia? Czy ma to znaczenie w organizacji ślubu i wesela w stolicy Dolnego Śląska? Naszym zdaniem ogromne. <CustomOuterLink className="bgColorPink" to="https://www.wroclaw.pl/" text="Wrocław" /> jest naszym rodzinnym miastem, Dolny Śląsk i okolice znamy jak własną kieszeń. Jest to nie tylko nasze miejsce pracy jako konsultantek ślubnych, ale również centrum wszystkich spraw.
            </>,
        textTwo: 'Marzy Wam się wesele w Sudetach, Karkonoszach lub Górach Stołowych? Schodziłyśmy je wielokrotnie wzdłuż i wszerz, znamy najpiękniejsze zakamarki. A może urzekają Was okoliczne pałace i zamki? Jest ich więcej, niż Wam się wydaje. Znamy je chyba wszystkie. Chętnie je Wam pokażemy. Mamy dla Was bogatą bazę lokalnych usługodawców ślubnych z Wrocławia. Jeśli rozważacie wesele we Wrocławiu i okolicach, nie wahajcie się i wybierzcie lokalnego wedding plannera z Wrocławia. Będziecie mogli liczyć na jego pełne wsparcie w organizacji Waszego ślubu i wesela marzeń.',
        placePics: [
            require('../OurCouples/OurCouplesPics/FoodtruckWedding/ftVer6.jpg').default,
            require('../OurCouples/OurCouplesPics/FoodtruckWedding/ftVer1.jpg').default,
            require('../OurCouples/OurCouplesPics/FoodtruckWedding/ftVer3.jpg').default,
            require('../OurCouples/OurCouplesPics/FoodtruckWedding/ftVer5.jpg').default
        ],
        content: [
            {
                title: 'Konsultant ślubny Wrocław - jak wybrać tego najlepszego?',
                titleBgColor: 'bgMint',
                color: 'dark',
                text:
                    <>
                        <p>Zacznij od przeglądu portfolio lokalnych konsultantów ślubnych we Wrocławiu. Powinny podobać Wam się ich <Link className="bgColorMint" to={URLS.COUPLES}>realizacje</Link>, bo dzięki temu możecie być pewni, że spełni on także Waszą wizję. Wiele zaręczonych par dokonuje jednak  wyboru wyłącznie na podstawie realizacji konsultantów ślubnych, a to duży błąd. Dobry wedding planner powinien umieć zrealizować każde stylistyczne marzenie, mieć głowę otwartą na różne style i najnowsze treny. Dużo ważniejsze jest jednak poznanie swojego przyszłego organizatora ślubu i wesela we Wrocławiu. Ważne jest, abyście poczuli, że nadajecie na tych samych falach z Waszym konsultantem ślubnym i styl pracy jaki Wam przedstawił będzie odpowiadać również waszemu. Spotkajcie się z konsultantem ślubnym bezpośrednio we Wrocławiu i porozmawiajcie o współpracy przy organizacji Waszego ślubu i wesela marzeń.</p>
                        <p>Przejrzyj także kilka wpisów na <Link className="bgColorMint" to={URLS.BLOG}>blogu</Link> wedding plannera, aby ocenić jakie ma podejście do ślubnych tematów. Z tekstów można bardzo dobrze poznać charakter wybranej osoby.</p>
                        <p>Poznajcie opinie na temat wybranych konsultantów ślubnych z Wrocławia lub okolic. Opinie i doświadczenia innych par młodych są bezcenne.
                </p>
                    </>
            }
        ],
        gridHeader: 'Czary Marry - Najlepsza Agencja Ślubna we Wrocławiu',
        gridBgColor: 'bgGrey',
        gridTextOne:
            <p><Link className="bgColorLight" to={URLS.HOME}>Agencja Ślubna Czary Marry</Link> to firma, która powstała na bazie 15-letniej przyjaźni. Urodziłyśmy się i dorastałyśmy na Dolnym Śląsku, do Wrocławia przyjechałyśmy na studia i tak już zostało. Chociaż pracujemy w całej Polsce to możliwość organizacji wesel na terenach z których pochodzimy zawsze ogromnie nas cieszy. Czy to we Wrocławiu, czy innym zakątku Polski, tworzymy piękne uroczystości pełne uśmiechów, wzruszeń i chwil spędzonych z bliskimi. Jako konsultantki ślubne z Wrocławia myślimy „weselami” – zawsze i wszędzie szukamy nowych inspiracji i pomysłów, dzięki czemu z powodzeniem realizujemy zarówno te piękne, klasyczne wesela, jak i te szalone i nieszablonowe.</p>,
        gridTextTwo:
            <p>Bardzo zależy nam, aby proces organizacji dnia ślubu i wesela przebiegał w przyjaznej i swobodnej atmosferze. Staramy się, aby był to świetnie spędzony czas, który będziecie wspominać równie miło jak sam dzień ślubu i wesela. Współpraca z nami to poczucie spokoju i komfort, a także pewność, że wszystko będzie perfekcyjnie zaplanowanie i dopięte na ostatni guzik. Pozwólcie by organizacja wesela we Wrocławiu stała się przyjemnością.</p>,
        gridPics:
            [
                require('../Home/konsultantki-slubne-czary-marry-home.jpg').default,
                require('../AboutUs/kasia.jpg').default,
                require('../AboutUs/ola.jpg').default,
                require('../Home/instaPic3.jpg').default,
            ],
        numsTitle: 'Ogranizacja Ślubów Wrocław - zakres prac konsultanta ślubnego',
        numsText: 'Zanim ostatecznie zdecydujecie się na współpracę z wedding planner’em warto poznać zakres usług Czary Marry - konsultantek ślubnych z Wrocławia. Uważamy, że najlepsza formą współpracy jest kompleksowa pomoc w organizacji ślubów, ponieważ przynosi ona najlepsze efekty. Poniżej przedstawiamy Wam zakres naszych usług:',
        numsContent: [
            {
                bgColor: 'bgPink',
                number: '01',
                title: 'Kompleksowa organizacja',
                text: 'To całkowita pomoc w organizacji ślubu oraz wsparcie na każdym etapie planowania wesela. Zaczynając od zaplanowania budżetu, poszukiwania sali, stworzenia harmonogramu przygotowań, poprzez poszukiwanie wszystkich wykonawców, skończywszy na stworzeniu scenariusza ślubnego i koordynacji przyjęcia. Wszystko co potrzebujecie od profesjonalnego wedding planner’a z Wrocławia.'
            },
            {
                bgColor: 'bgMint',
                number: '02',
                title: 'Koordynacja ślubu i wesela',
                text: 'Będziemy do Waszej dyspozycji w dniu ślubu.  Dopilnujemy, aby wszystko przebiegło tak jak to sobie zaplanowaliście, a Wam pozostawimy świętowanie. Stworzymy scenariusz uroczystości, będziemy w kontakcie z wykonawcami oraz salą weselną.'
            },
            {
                bgColor: 'bgGrey',
                number: '03',
                title: 'Wybrane elementy',
                text: 'Będziemy do Waszej dyspozycji w dniu ślubu.  Dopilnujemy, aby wszystko przebiegło tak jak to sobie zaplanowaliście, a Wam pozostawimy świętowanie Waszego najpiękniejszego dnia. Stworzymy scenariusz uroczystości ślubnej we Wrocławiu, będziemy w kontakcie z wykonawcami oraz salą weselną.'
            }
        ],
        bottomTitle: 'Organizacja Wesel Wrocław',
        bottomText:
        <>
        <p>
        Jeśli ostatecznie podjęliście decyzję, że organizacją ślubu i wesela we Wrocławiu zajmiecie się samodzielnie to pamiętajcie, że na każdym etapie przygotowań możecie skorzystać z konsultacji online. Spraw do ogarnięcia i decyzji do podjęcia potrafi być dużo i warto zapytać o zdanie specjalisty czyli doświadczonych konsultantek ślubnych. Zwłaszcza jeśli jest z okolic i organizowały niejeden ślub we Wrocławiu. Organizację wesel mamy we krwi!
        </p>
        <p>
        Zajrzyjcie też na ofertę szkoleń dla Par, które działają same, ale chcą, aby ich ślub i wesele były piękne i niepowtarzalne. Więcej przeczytacie tu: <CustomOuterLink className="bgColorMint" to="https://www.wedding-know-how.com/" text="Wedding-Know-How"/>.
        </p>
        <p>
        A jeśli chcecie umilić sobie czas ślubnych przygotowań to zapraszamy na nasz <CustomOuterLink className="bgColorMint" to="https://open.spotify.com/show/7Lj581I8xRqkY3lRwkOvrc" text="podcast" />.
        </p>
        </>
    }
]

export default landings
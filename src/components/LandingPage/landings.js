import CustomOuterLink from '../CustomLink/CustomOuterLink'
import { generatePath, Link } from 'react-router-dom';
import URLS from '../../utils/urls'
import CustomCategoryLink from '../CustomLink/CustomCategoryLink';

const landings = [
    {
        path: 'wedding-planner-warszawa',
        seoTitle: 'Wedding planner Warszawa - Czary Marry organizacja ślubów i wesel Warszawa',
        seoText: 'Planujecie zorganizować ślub marzeń w Warszawie? Szukacie profesjonalnego wedding plannera który perfekcyjnie urządzi Wasze wesele w Warszawie?',
        mainHeader: 'Wedding planner Warszawa - organizacja ślubów i wesel',
        boxTitle: 'Wedding planner Warszawa - Jak dokonać najlepszego wyboru.',
        boxColor: 'bgMint',
        textOne:
            'Czeka Was organizacja wesela? Warszawa i jej okolice dają ogromne możliwości. Znajdziecie tu piękne miejsca weselne, niesamowitych wykonawców ślubnych oraz wielu profesjonalnych wedding plannerów. Chętnie podpowiemy Wam, jakimi kryteriami kierować się podczas wyboru konsultanta ślubnego w Warszawie oraz jak wygląda współpraca z nami. Pamiętajcie, że to jedna z najważniejszych decyzji, jaką będziecie musieli podjąć podczas organizacji ślubu i wesela w Warszawie. Jeśli podejmiecie decyzję świadomie, unikniecie rozczarowań, a proces przygotowań zamieni się w niesamowitą przygodę.',
        textTwo:
            'Na początku powinniście zadać sobie pytanie, czy organizując ślub i wesele w Warszawie należy wybierać tylko spośród lokalnych wedding plannerów. Naszym zdaniem ograniczanie się ze względu na lokalizację nie jest dobrym rozwiązaniem. Specyfika branży ślubnej powoduje, że podróże i poznawanie nowych miejsc w całej Polsce to dla nas codzienność. To, na co na pewno warto zwrócić uwagę to doświadczenie, znajomość rynku oraz nić porozumienia, jaką nawiążecie z danym konsultantem ślubnym.',
        placePics: [
            require('./LandingPics/wawaPlace2.jpg').default,
            require('./LandingPics/wawaPlace3.jpg').default,
            require('./LandingPics/wawaPlace4.jpg').default,
            require('./LandingPics/wawaPlace1.jpg').default
        ],
        content: [
            {
                title: 'Organizacja ślubu i wesela Warszawa — dlaczego warto wybrać wedding plannera organizującego wesela w całej Polsce.',
                titleBgColor: 'bgPink',
                color: 'dark',
                text:
                    <>
                        <p>Wykonując zawód konsultanta ślubnego na terenie całej Polski mamy nieco szersze spojrzenie na organizację wesel w Warszawie. Z powodzeniem organizowałyśmy wesela nie tylko w stolicy, ale również w takich miastach jak <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="linkPink" target="_blank">Wrocław</Link>, <Link to={generatePath(URLS.LANDING, { path: 'wedding-planner-poznan' })} className="linkPink" target="_blank">Poznań</Link> czy Kraków. Zauważyłyśmy, że każde województwo rządzi się nieco innymi prawami. Dzięki tej wiedzy możemy zaproponować Wam zupełnie inne rozwiązania, a nasza baza wykonawców sięga daleko poza granice województwa mazowieckiego. Niejednokrotnie okazuje się to bardzo przydatne. Możecie być pewni, że znajdziemy dla Was najlepsze oferty, które spełnią Wasze oczekiwania jakościowe oraz budżetowe, a nie jedynie lokalizacyjne.
                </p>
                        <p>Zauważyłyśmy, że nasi klienci ze względu na swój aktywny tryb życia zdecydowanie bardziej upodobali sobie kontakt online. Jesteśmy dla nich do dyspozycyjne o każdej porze dnia, kontaktując się przez WhatsApp, mail, czy Skype. Dlatego dobrze wiemy, że odległość nie ma znaczenia przy organizacji ślubu i wesela. Warszawa to jedno z najbardziej zakorkowanych miast w Polsce, po co tracić Wasz czas na spotkania osobiste, na które trzeba przecież dojechać? Możemy wspólnie organizować Wasze wesele z perspektywy wygodnej kanapy w Waszym domu. To od Was zależy częstotliwość naszych spotkań oraz stopień, w jakim chcecie się zaangażować w organizację ślubu i wesela. Warszawa to miasto, do którego mamy szczególny sentyment. Jeśli będzie taka potrzeba, chętnie wsiądziemy w auto i odwiedzimy z Wami salę weselną.</p>
                    </>
            },
        ],
        gridHeader: 'Czary Marry — organizacja wesel Warszawa.',
        gridBgColor: 'bgGrey',
        gridTextOne:
            <>
                <p>W <Link className="linkLight" to={URLS.HOME}>Agencji Ślubnej Czary Marry</Link> myślimy weselami.</p>
                <p>Co to oznacza?</p>
                <p>Wszędzie szukamy nowych pomysłów i inspiracji. Dzięki temu z realizujemy zarówno piękne i  klasyczne wesela, jak i te szalone i nieszablonowe. Nie potrafimy przestać gadać trendach, naszych ślubnych pomysłach i idealnych rozwiązaniach dla naszych par młodych. Agencja ślubna Czary Marry powstała na bazie 15-letniej przyjaźni. W swoim towarzystwie czujemy się bezpiecznie, swobodnie i wiemy, że razem możemy więcej, bo idealnie się uzupełniamy. Dzięki temu tworzymy piękne uroczystości, pełne uśmiechów, wzruszeń i chwil spędzonych z bliskimi.
                </p>
            </>,
        gridPics:
            [
                require('./LandingPics/lan5.jpg').default,
                require('./LandingPics/lan4.jpg').default,
                require('./LandingPics/lan6.jpg').default,
                require('../Home/konsultantki-slubne-czary-marry-home.jpg').default
            ],
        numsTitle: 'Konsultant ślubny Warszawa - kryteria i etapy wyboru.',
        numsText: 'Skoro wiemy już, że lokalizacja nie ma znaczenia, przejdźmy do czynników, których nie można pominąć dokonując wyboru wedding plannera w Warszawie oraz każdym innym mieście w Polsce.',
        numsContent: [
            {
                bgColor: 'bgMint',
                number: '01',
                title: 'Pierwsze wrażenie',
                text: 'Podobają się Wam się nasze realizacje i styl pracy? Czujecie, że nadajemy na tych samych falach? To dobry znak. Warto się jednak upewnić, czy na pewno powierzacie organizację Waszego ślubu i wesela w odpowiednie ręce.'
            },
            {
                bgColor: 'bgPink',
                number: '02',
                title: 'Spotkanie',
                text: 'Będzie to okazja, żebyście opowiedzieli nam o Waszej wizji wesela, oczekiwaniach i preferencjach. My odpowiemy na wszystkie pytania, rozwiejemy wątpliwości i opowiemy o tym, jak pracujemy. Co najważniejsze - będziemy mogli lepiej się poznać.'
            },
            {
                bgColor: 'bgGrey',
                number: '03',
                title: 'Oferta',
                text:
                    <>Po spotkaniu przygotujemy dla Was <Link className="linkDark" to={URLS.OFFER}>ofertę</Link>. Znajdziecie w niej podsumowanie naszej rozmowy i kilka dodatkowych informacji o nas. Podczas dokonywania wyboru zachęcamy do kierowania się zarówno rozumem, jak i sercem.</>
            },
            {
                bgColor: 'bgMint',
                number: '04',
                title: 'Research',
                text:
                    'Jeśli nadal się wahacie i nie możecie się zdecydować na tę jedyną agencję ślubną, warto zerknąć również na dodatkowe aktywności rozważanego wedding plannera. Być może prowadzi blog, podcast, udziela się w mediach branżowych, publikując artykuły. Nie zapominajcie o zrobieniu dokładnego researchu, zapoznajcie się z opiniami na temat wybranych konsultantów ślubnych z Warszawy, nieoceniony okaże się tu FB i wizytówka Google.'
            }
        ],
        extras:
            <>
                <h2 className="bgPink">Wedding planner Warszawa - zakres obowiązków.</h2>
                <p>
                    Pomoc w przygotowaniach na każdym etapie organizacji ślubu i wesela:
                </p>
                <ul>
                    <li>Przygotowanie budżetu wesela i harmonogramu prac,</li>
                    <li>Pomoc w formalnościach przedślubnych,</li>
                    <li>Znalezienie sali oraz wszelkie ustalenia z miejscem weselnym,</li>
                    <li>Przedstawienie propozycji wykonawców (m.in. oprawa muzyczna, fotograficzna, filmowa wesela),</li>
                    <li>Logistyka (noclegi oraz transport dla gości),</li>
                    <li>Zaplanowanie stylu oraz dekoracji przyjęcia weselnego (florystyka, oświetlenie, papeteria, dodatki),</li>
                    <li>Zaplanowanie atrakcji weselnych (np. candy bar, barman, strefy chillout),</li>
                    <li>Pomoc w znalezieniu fryzjera i makijażystki oraz doborze strojów,</li>
                    <li>Zaplanowanie i koordynacja przebiegu dnia ślubu i wesela,</li>
                    <li>...oraz wszystko, czego potrzebujecie organizując wesele w Warszawie i okolicach.</li>
                </ul>

                <h2 className="bgGrey mt-5">Koordynacja ślubu i wesela w Warszawie.</h2>
                <p>
                    Kompleksowa organizacja ślubu i wesela Warszawa:
                </p>
                <ul>
                    <li>Przygotowanie scenariusza dnia ślubu i przyjęcia weselnego,</li>
                    <li>Nadzorowanie pracy wykonawców,</li>
                    <li>Kontakt sms-owy lub mailowy z gośćmi na dzień przed weselem,</li>
                    <li>Koordynacja ceremonii ślubnej i przyjęcia weselnego,</li>
                    <li>Dopilnowanie, aby wszystkie ustalenia i życzenia Pary Młodej zostały zrealizowane,</li>
                    <li>Pomoc w sytuacjach niespodziewanych, rozwiązywanie bieżących problemów,</li>
                    <li>Opieka nad Parą Młodą i gośćmi weselnymi,</li>
                    <li>Rozliczenie z usługodawcami,</li>
                    <li>Spotkanie w celu podsumowania przebiegu wesela i organizacji.</li>
                </ul>
            </>,
        bottomTitle: 'Organizacja ślubu i wesela Warszawa',
        bottomText:
            <p>
                Postanowiliście samodzielnie zorganizować ślub i wesele w <CustomOuterLink className="linkMint" to="https://www.um.warszawa.pl/" text="Warszawie" />? Zachęcamy do skorzystania z konsultacji online. Mamy duże doświadczenie w organizacji wesel w Warszawie i chętnie podzielimy się z Wami naszą wiedzą.
            </p>
    },
    {
        path: 'wedding-planner-poznan',
        seoTitle: 'Wedding planner Poznań – organizacja ślubów i wesel - konsultant ślubny Poznań',
        seoText: 'Planujecie zorganizować swój ślub i wesele w okolicy Poznania? Szukacie wedding plannera, który dobrze zna okoliczne miejsca oraz miejscowych usługodawców ślubnych?',
        mainHeader: 'Wedding Planner Poznań - profesjonalna organizacja ślubów i wesel',
        boxTitle: 'Wedding planner Poznań - Jak wybrać najlepszego.',
        boxColor: 'bgPink',
        textOne:
            <>
                Szukacie konsultanta ślubnego, który zorganizuje Wam wymarzone wesele w Poznaniu lub okolicach? Dobrze trafiliście. Chętnie podpowiemy Wam, jakimi kryteriami kierować się podczas wyboru wedding plannera w Poznaniu oraz jak wygląda współpraca z nami – <Link className="linkPink" to={URLS.HOME}>Agencją Ślubną Czary Marry</Link>. <br />Wybór idealnego wedding plannera to w końcu jedna z ważniejszych decyzji jaką przyjdzie Wam podjąć podczas organizacji wesela w Poznaniu lub okolicach. Nie da się ukryć, że z osobą, która będzie organizować Wasz dzień spędzicie parę dobrych miesięcy. Warto podjąć decyzję o współpracy świadomie.
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
                        <p>Ze względu na aktywny tryb życia naszych par najczęściej kontaktujemy się z nimi online, jesteśmy dla nich dyspozycyjne o każdej porze dnia, kontaktując się przez WhatsApp, mail czy Skype. I choć na co dzień mieszkamy we <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="linkMint" target="_blank">Wrocławiu</Link> to dobrze wiemy, że odległość nie ma znaczenia przy organizacji wesel. Poznań to jedno z miast, które bardzo lubimy, które nas inspiruje i w którym mamy doświadczenie w organizacji wesel, dlatego w razie potrzeby chętnie Was odwiedzimy.
                </p>
                    </>
            },
            {
                title: 'Profesjonalny wedding planner Poznań - kryteria wyboru.',
                titleBgColor: 'bgDark',
                color: 'text-white',
                text:
                    <>
                        <p>Poszukiwania wedding plannera najlepiej rozpocząć od przejrzenia jego <Link to={URLS.COUPLES} className="linkLight">portfolio realizacji ślubnych</Link>. Jeżeli realizacje i styl pracy danej agencji ślubnej przypadną Wam do gustu, możecie być pewni, że zrozumie zrealizuje również Waszą wizję. Kolejny niezwykle ważny krok to spotkanie. Koniecznie musicie poznać i porozmawiać ze swoim przyszłym konsultantem ślubnym.</p>
                        <p>
                            Powinniście poczuć, że nadajecie na tych samych falach i dobrze czujecie się w jego towarzystwie, będzie Wam towarzyszył w jednych z najważniejszych chwil Waszego życia. Warto zerknąć również na dodatkowe aktywności rozważanego wedding plannera np.<Link className="linkLight" to={URLS.BLOG}>blog</Link>, <CustomCategoryLink path="podcast" className="linkLight" text="podcast" />, publikacje w mediach branżowych. Na koniec zróbcie dokładny research, zapoznajcie się z opiniami na temat wybranych konsultantów ślubnych z Poznania, nieoceniony okaże się tu FB i wizytówka Google.
                </p>
                    </>
            },
        ],
        gridHeader: 'Czary Marry - Twój wymarzony konsultant ślubny w Poznaniu.',
        gridBgColor: 'bgGrey',
        gridTextOne:
            <p>
                W Agencji Ślubnej Czary Marry zmieniamy marzenia w rzeczywistość. Organizujemy piękne uroczystości, pełne wzruszeń i radości oraz niezapomnianych momentów spędzonych w gronie najbliższych osób. Zajmujemy się organizacją ślubów nie tylko w Poznaniu ale działamy na terenie całej Polski. Choć musimy przyznać, że mamy szczególną słabość do Wielkopolski. Uwielbiamy klimat starych stodół, klimatycznych folwarków, przeszklonych oranżerii – wybór świetnych sal weselnych nieopodal <CustomOuterLink to="https://www.poznan.pl/" text="Poznania" className="linkLight" /> przyprawia o zawrót głowy.
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
                <p>Jeśli postanowiliście, że samodzielnie zajmiecie się organizacją ślubu i wesela w Poznaniu, nie zapominajcie, że zawsze możecie skorzystać z konsultacji online z profesjonalnymi organizatorami ślubów i wesel. Czasami warto zapytać o zdanie doświadczonych wedding plannerek, szczególnie, gdy do podjęcia jest dużo niezwykle ważnych decyzji. Mamy duże doświadczenie w organizacji wesel w Poznaniu i chętnie podzielimy się z Wami naszą wiedzą.</p>
                <p>Jeśli szukacie profesjonalnego wedding plannera, doświadczonego w organizacji ślubów i planujecie organizację wesela w Poznaniu i okolicach to serdecznie zapraszamy do kontaktu. Zorganizujemy dla Was ślub waszych marzeń.</p>
            </>

    },

    {
        path: 'organizacja-wesel-wroclaw',
        seoTitle: 'Organizacja wesel – Wrocław – Agencja ślubna Czary Marry wedding planners',
        seoText: 'Planujecie zorganizować swój ślub i wesele w okolicy Wrocławia? Szukacie lokalnego wedding plannera, który dobrze zna okoliczne miejsca oraz miejscowych usługodawców ślubnych?',
        mainHeader: 'Konsultant Ślubny Wrocław',
        boxTitle: 'Wedding planner Wrocław - Czy to konieczne?',
        boxColor: 'bgPink',
        textOne:
            <>
                Zastanawiacie się, czy zdecydować się na współpracę z konsultantem ślubnym? Szukacie wedding plannera, który podobnie jak Wy pochodzi z Wrocławia? A może wprost przeciwnie, jesteście z daleka, ale to właśnie we Wrocławiu lub na Dolnym Śląsku chcecie zorganizować Wasze wymarzone wesele? Jeśli na któreś z tych pytań odpowiedzieliście twierdząco, to świetnie się składa. Chętnie zdradzimy Wam, czym kierować się podczas poszukiwań idealnego wedding plannera z Wrocławia oraz jak wygląda współpraca z nami. <br />
                Czy warto decydować się na wedding plannera z Wrocławia? Czy ma to znaczenie w organizacji ślubu i wesela w stolicy Dolnego Śląska? Naszym zdaniem ogromne. <CustomOuterLink className="linkPink" to="https://www.wroclaw.pl/" text="Wrocław" /> jest naszym rodzinnym miastem, Dolny Śląsk i okolice znamy jak własną kieszeń. Jest to nie tylko nasze miejsce pracy jako konsultantek ślubnych, ale również centrum wszystkich spraw.
            </>,
        textTwo: 'Marzy Wam się wesele w Sudetach, Karkonoszach lub Górach Stołowych? Schodziłyśmy je wielokrotnie wzdłuż i wszerz, znamy najpiękniejsze zakamarki. A może urzekają Was okoliczne pałace i zamki? Jest ich więcej, niż Wam się wydaje. Znamy je chyba wszystkie. Chętnie je Wam pokażemy. Mamy dla Was bogatą bazę lokalnych usługodawców ślubnych z Wrocławia. Jeśli rozważacie wesele we Wrocławiu i okolicach, nie wahajcie się i wybierzcie lokalnego wedding plannera z Wrocławia. Będziecie mogli liczyć na jego pełne wsparcie w organizacji Waszego ślubu i wesela marzeń.',
        placePics: [
            require('../OurCouples/OurCouplesPics/FoodtruckWedding/ver6.jpg').default,
            require('../OurCouples/OurCouplesPics/FoodtruckWedding/ver1.jpg').default,
            require('../OurCouples/OurCouplesPics/FoodtruckWedding/ver3.jpg').default,
            require('../OurCouples/OurCouplesPics/FoodtruckWedding/ver5.jpg').default
        ],
        content: [
            {
                title: 'Konsultant ślubny Wrocław - jak wybrać tego najlepszego?',
                titleBgColor: 'bgMint',
                color: 'dark',
                text:
                    <>
                        <p>Zacznij od przeglądu portfolio lokalnych konsultantów ślubnych we Wrocławiu. Powinny podobać Wam się ich <Link className="linkMint" to={URLS.COUPLES}>realizacje</Link>, bo dzięki temu możecie być pewni, że spełni on także Waszą wizję. Wiele zaręczonych par dokonuje jednak  wyboru wyłącznie na podstawie realizacji konsultantów ślubnych, a to duży błąd. Dobry wedding planner powinien umieć zrealizować każde stylistyczne marzenie, mieć głowę otwartą na różne style i najnowsze treny. Dużo ważniejsze jest jednak poznanie swojego przyszłego organizatora ślubu i wesela we Wrocławiu. Ważne jest, abyście poczuli, że nadajecie na tych samych falach z Waszym konsultantem ślubnym i styl pracy jaki Wam przedstawił będzie odpowiadać również waszemu. Spotkajcie się z konsultantem ślubnym bezpośrednio we Wrocławiu i porozmawiajcie o współpracy przy organizacji Waszego ślubu i wesela marzeń.</p>
                        <p>Przejrzyj także kilka wpisów na <Link className="linkMint" to={URLS.BLOG}>blogu</Link> wedding plannera, aby ocenić jakie ma podejście do ślubnych tematów. Z tekstów można bardzo dobrze poznać charakter wybranej osoby.</p>
                        <p>Poznajcie opinie na temat wybranych konsultantów ślubnych z Wrocławia lub okolic. Opinie i doświadczenia innych par młodych są bezcenne.
                </p>
                    </>
            }
        ],
        gridHeader: 'Czary Marry - Najlepsza Agencja Ślubna we Wrocławiu',
        gridBgColor: 'bgGrey',
        gridTextOne:
            <p><Link className="linkLight" to={URLS.HOME}>Agencja Ślubna Czary Marry</Link> to firma, która powstała na bazie 15-letniej przyjaźni. Urodziłyśmy się i dorastałyśmy na Dolnym Śląsku, do Wrocławia przyjechałyśmy na studia i tak już zostało. Chociaż pracujemy w całej Polsce to możliwość organizacji wesel na terenach z których pochodzimy zawsze ogromnie nas cieszy. Czy to we Wrocławiu, czy innym zakątku Polski, tworzymy piękne uroczystości pełne uśmiechów, wzruszeń i chwil spędzonych z bliskimi. Jako konsultantki ślubne z Wrocławia myślimy „weselami” – zawsze i wszędzie szukamy nowych inspiracji i pomysłów, dzięki czemu z powodzeniem realizujemy zarówno te piękne, klasyczne wesela, jak i te szalone i nieszablonowe.</p>,
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
                    A jeśli chcecie umilić sobie czas ślubnych przygotowań to zapraszamy na nasz <CustomOuterLink className="linkMint" to="https://open.spotify.com/show/7Lj581I8xRqkY3lRwkOvrc" text="podcast" />.
        </p>
            </>
    }
]

export default landings

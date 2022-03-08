import { Fragment } from "react"
import CustomOuterLink from '../CustomLink/CustomOuterLink'
import { generatePath, Link } from 'react-router-dom'
import URLS from '../../utils/urls'
import CustomCategoryLink from '../CustomLink/CustomCategoryLink'
import CustomPostLink from '../CustomLink/CustomPostLink'

import { lan01, lan02, lan03, lan04, lan05, lan06, lan07, lan08, wawaPlace01, wawaPlace02, wawaPlace03, wawaPlace04 } from "./LandingPics/Main/index"

import { lanCzarŁódź01, lanKonsŁódź02, lanWedPlŁódź03, lanWesŁódź04, agŚlŁódź, konsŚlŁódź, orgŚlŁódź, wedPlŁódź } from "./LandingPics/Łódź/index"

import { lanKrk1, lanKrk2, lanKrk3, lanKrk4, cus1Krk01, cus1Krk02, cus1Krk03, cus1Krk04, cus2Krk01, cus2Krk02, cus2Krk03, cus2Krk04 } from "./LandingPics/Kraków/index"

import { cus1Poz01, cus1Poz02, cus1Poz03, cus1Poz04, cus2Poz01, cus2Poz02, cus2Poz03 } from "./LandingPics/Poznań/index"

import { konsWro01, konsWro02, konsWro03, konsWro04, miejsWro01, miejsWro02, miejsWro03, miejsWro04, cus1Wro01, cus1Wro02, cus1Wro03, cus1Wro04, cus2Wro01, cus2Wro02, cus2Wro03, cus2Wro04 } from "./LandingPics/Wrocław/index"

import { lanAgŚl, lanAgŚlKato, lanOrgWeKato, lanWedPlKato, lanWedPlkiŚl, lanWedPlŚl, cus01kato1, cus01kato2, cus01kato3, cus01kato4 } from "./LandingPics/Katowice/index"

import { instaPic3, konsultantki } from "../Home/pics"
import { kasia, ola } from "../AboutUs/pics"

const landings = [
    {
        path: 'wedding-planner-lodz',
        seoTitle: 'Wedding planner Łódź - Czary Marry agencja ślubna Łódź',
        seoText: 'Poszukujesz wedding plannera, który organizuje wesela marzeń na terenie Łodzi? Sprawdź agencję ślubną Czary Marry!',
        mainHeader: 'Wedding planner Łódź - agencja ślubna Czary Marry',
        boxTitle: 'Kim jesteśmy? Agencja ślubna Łódź',
        boxColor: 'bgPink',
        textOne: "Gratulujemy decyzji o ślubie! Przed Wami organizacja wesela. Łódź i okolice to lokalizacja, którą rozważacie? Chcielibyście zdecydować się na współpracę z wedding plannerem? Jeśli na któreś z tych pytań odpowiedzieliście twierdząco, to świetnie się składa. Podpowiemy Wam, jakimi kryteriami kierować się, żeby świadomie wybrać odpowiedniego wedding plannera, który zorganizuje Wam piękne wesele w Łodzi.",
        textTwo:
            <>
                Jedni nazywają nas czarodziejkami, inni dobrymi wróżkami, bo prawdą jest, że zmienimy Wasze marzenia w rzeczywistość. Nie używamy czarodziejskiej różdżki i nie prosimy o pomocy baśniowej matki chrzestnej. Bazujemy na wiedzy i doświadczeniu, którą bezustannie pogłębiamy, wykonując zawód wedding plannera. <Link to={URLS.HOME} className="linkPink">Agencję ślubną Czary Marry</Link> zbudowałyśmy na 15-letniej przyjaźni oraz serdecznych relacjach z parami młodym. Więcej informacji o nas znajdziecie <Link to={URLS.ABOUT} className="linkPink">tutaj</Link>.
            </>,
        placePics: [
            lan05,
            lan07,
            lan08,
            lan04,
        ],
        content: [
            {
                title: 'Wedding planner Łódź — Lokalizacja.',
                titleBgColor: 'bgDark',
                color: 'text-light',
                text:
                    <p>Powyższy tytuł nie pozostawia wątpliwości. Skoro zdecydowaliście się na organizację wesela w Łodzi, musicie znaleźć konsultanta ślubnego z okolicy. Nic bardziej mylnego. Lokalizacja nie powinna być kluczową wytyczną zarówno podczas wyboru wedding plannera, jak i każdego innego wykonawcy. Macie cały wachlarz możliwości, po co ograniczać się już na samym początku. Większość osób związanych z branżą ślubną pracuje na terenie całej Polski. Uwielbiamy odwiedzać nowe lokalizacje, a przy okazji poszerzać horyzonty. Dzięki podróżom uciekamy od rutyny i utartych schematów, a każde nowe miejsce jest dla nas inspirującym wyzwaniem. Ale dość o nas. Co daje wybór wedding plannera działającego na terenie całej Polski? Nieograniczoną bazę wykonawców dostosowanych do Waszych indywidualnych potrzeb i jeszcze sprawniejszy kontakt. Musimy jakoś nadrobić dzielącą nas odległość, dlatego jesteśmy do Waszej dyspozycji przez cały dzień, siedem dni w tygodniu. Komunikujemy się mailowo, spotykamy online, ale naszą podstawową formą kontaktu jest dedykowana grupa na Whatsappie. Bywa, że z naszymi klientami dzielą nas tysiące kilometrów, różnice językowe i czasowe. Świetnie się w tym odnajdujemy.</p>
            },
            {
                title: 'Zakres obowiązków — organizacja ślubu Łódź.',
                titleBgColor: 'bgGrey',
                color: 'dark',
                text:
                    <>
                        <p>
                            Prawdopodobnie wiecie już, że wedding planner to nieoceniona pomoc podczas organizacji wesela w Łodzi i okolicach. Poniżej znajdziecie informacje o tym, jakie obowiązki wchodzą w skład obowiązków konsultanta ślubnego:
                            <ul className="mt-3">
                                <li>Przygotowanie harmonogramu prac oraz budżetu wesela.</li>
                                <li>Pomoc i doradztwo związane z formalnościami przedślubnymi.</li>
                                <li>Poszukiwanie sali, wizytacje miejsc weselnych, dogrywanie umowy, oraz ustalenia z managerem.</li>
                                <li>Poszukiwanie wykonawców ślubnych takich jak DJ, zespół, fotograf itd.</li>
                                <li>Logistyka — czyli noclegi i transporty dla Was i Waszych gości.</li>
                                <li>Dekoracje, florystyka, oświetlenie.</li>
                                <li>Zaplanowanie atrakcji weselnych — strefy relaksu, barman, fotobudka i co tylko sobie wymarzycie.</li>
                                <li>Pomoc w znalezieniu fryzjera i makijażystki oraz w doborze strojów.</li>
                                <li>Zaplanowanie i koordynacja przebiegu dnia ślubu i wesela.</li>
                                <li>...oraz wszystko, czego potrzebujecie, organizując wesele w Łodzi i okolicach.</li>
                            </ul>
                        </p>
                    </>
            }
        ],
        gridHeader: 'Kryteria wyboru. Konsultant ślubny Łódź.',
        gridBgColor: 'bgMint',
        gridTextOne:
            <>
                <p>Wiemy już, czym nie warto się kierować. Pora ustalić jakie kryteria powinniście brać pod uwagę.</p>

                <h4 className="bold mint mt-4">Doświadczenie.</h4>
                <p>Zaangażowanie i świeże podejście do tematu są super. Niejednokrotnie mniejsze doświadczenie wiąże się również z atrakcyjniejszą ceną za usługę organizacji wesela. Bardzo kibicujemy naszym koleżankom i kolegom, którzy stawiają pierwsze kroki w branży weddingowej, w końcu każdy kiedyś zaczynał. Jednak lata doświadczeń pokazały, jak wiele daje praktyka i doświadczenie. Przerobiliśmy setki scenariuszy, a nadal wiele rzeczy potrafi nas zaskoczyć. Jesteśmy jednak bogatsze o doświadczenie, które powoduje, że potrafimy zachować zimną krew nawet w najbardziej niespodziewanych sytuacjach.</p>
            </>,
        gridTextTwo:
            <>
                <h4 className="bold mint">Portfolio i sposób komunikacji.</h4>
                <p>To Wasz pierwszy kontakt z wedding plannerem. Jeśli podoba Wam się, w jaki sposób dana agencja ślubna prezentuje się w internecie, w jaki sposób opisuje swoją pracę, a zdjęcia z realizacji zapierają dech w piersiach to bardzo dobry początek.</p>

                <h4 className="bold mint mt-4">Kontakt, kontakt i jeszcze raz kontakt.</h4>
                <p>Jeśli wysłaliście zapytanie do wedding plannera, na które od tygodnia nie dostaliście odpowiedzi lub agencja ślubna zwleka z wysłaniem do Was oferty i musicie się jej przypominać, to bardzo zły znak. Możemy śmiało założyć, że tak będzie wyglądał cały proces organizacji. To konsultant ślubny jest od przypominania się Wam, a nie odwrotnie.</p>

                <h4 className="bold mint mt-4">Wspólny vibe.</h4>
                <p>Brzmi trochę młodzieżowo, ale to bardzo ważne. Podczas organizacji wesela wymienicie tysiące wiadomości i przeprowadzicie masę rozmów z Waszym konsultantem ślubnym. Prawdopodobnie spędzicie wspólnie około półtora roku, planując przyjęcie weselne. Wybrana agencja ślubna będzie Wam towarzyszyć również w dniu ślubu, byłoby bardzo fatalnie, gdyby wedding planner działał Wam na nerwy. Powinniście czuć się w jego towarzystwie swobodnie i nadawać na podobnych falach.</p>
            </>,
        gridPics:
            [
                lanWesŁódź04,
                lanKonsŁódź02,
                lanWedPlŁódź03,
                lanCzarŁódź01,
            ],
        numsTitle: 'Nasze wartości - organizacja wesela Łódź.',
        numsText: 'Wiecie już, kim jesteśmy i czym się zajmujemy, teraz opowiemy Wam, co jest dla nas ważne we współpracy z parami młodymi. Nie będziemy Wam pisać o profesjonalizmie i kreatywności, bo to oczywista sprawa.',
        numsContent: [
            {
                bgColor: 'bgMint',
                number: '01',
                text: 'Jesteśmy do Waszej dyspozycji o każdej porze dnia, bez limitu, stawiamy na sprawny kontakt. Organizując wesela w Łodzi, bazujemy na kontakcie online, używając maila WhatsApp oraz narzędzi do telekonferencji.'
            },
            {
                bgColor: 'bgPink',
                number: '02',
                text: 'Pracujemy w duecie. Wspólnie organizujemy i koordynujemy Wasze wesele. Dzięki temu proces przygotowań przebiega sprawnie oraz bez wpadek...'
            },
            {
                bgColor: 'bgGrey',
                number: '03',
                text: 'W kontaktach z parami stawiamy na szczerość i dobrą atmosferę. Organizacja wesel w Łódzkiem, powinna być mile spędzonym czasem bez niepotrzebnego stresu i frustracji.'
            }
        ],
        extras:
            <p>Jeśli dotarliście do tego momentu to znaczy, że zrobiłyśmy na Was całkiem niezłe wrażenie. Nie pozostaje nam nic innego jak zaprosić Was do kontaktu. Jeśli jesteście zainteresowani współpracą, piszcie lub dzwońcie. Zorganizujemy dla Was wesele marzeń w <CustomOuterLink to="https://uml.lodz.pl/" className="linkPink" text="Łodzi" />.
            </p>,

        extraSliderLastPics: [
            wedPlŁódź,
            agŚlŁódź,
            konsŚlŁódź,
            orgŚlŁódź
        ]
    },
    {
        path: 'wedding-planner-krakow',
        seoTitle: 'Wedding planner Kraków - Czary Marry agencja ślubna Kraków',
        seoText: 'Poszukujecie wedding plannera w Krakowie, który przygotuje Wasz ślub na tip-top? Agencja ślubna Czary Marry perfekcyjnie zorganizuje Twój wyjątkowy dzień!',
        mainHeader: "Najlepszy wedding planner w Krakowie? Postaw na Czary Marry",
        boxTitle: 'Organizacja wesel w Krakowie',
        boxColor: "bgMint",
        textOne:
            <>
                Zastanawiacie się nad skorzystaniem z pomocy wedding plannera? Kraków to Wasze miejsce zamieszkania lub ukochane miasto, w którym postanowiliście zorganizować wesele? Tak się składa, że trafiliście na dwie konsultantki ślubne, które mają ogromną słabość do organizacji ślubów w Krakowie.
                Jesteśmy również laureatkami plebiscytu zorganizowanego przez branżowy portal Zankyou na <CustomOuterLink text="najlepsze konsultantki ślubne w Krakowie" to="https://www.zankyou.pl/p/najlepsze-wedding-plannerki-w-krakowie-zaplanuj-uroczystosc-slubna-swoich-marzen-46022" className="linkMint" />.
            </>,
        textTwo:
            <>
                Na początek chciałybyśmy ułatwić Wam podjęcie pierwszej ważnej decyzji, z jaką będziecie musieli się zmierzyć podczas organizacji wesela w Małopolsce. Podpowiemy Wam jakimi kryteriami kierować się podczas wyboru agencji ślubnej w Krakowie oraz jak wygląda współpraca z nami. Podjęcie świadomej decyzji pozwoli na uniknięcie rozczarowań i sprawi, że przygotowania będą niesamowitą przygodą. <br /> <br />
                <i style={{ color: "#77a196f6", marginLeft: "1rem" }}>”Kasia i Ola – Czary Marry = duet idealny. Od pierwszego spotkania wiedzieliśmy, że to będzie owocna współpraca, bo dziewczyny zrobiły na nas ogromne wrażenie. Nie wyobrażamy sobie zresztą, żeby komuś nie zaimponował sposób pracy tej dwójki”.</i>
            </>,
        placePics: [
            lanKrk3,
            lanKrk1,
            lanKrk4,
            lanKrk2,
        ],
        content: [
            {
                title: 'Wedding planner Kraków — Czy lokalizacja ma znaczenie?',
                titleBgColor: 'bgPink',
                color: 'dark',
                text:
                    <>
                        <div className="extra-content bgPinkLight shadowBox">
                            <p><i>„Doświadczenie, pracowitość, wyobraźnia, połączone z niesamowicie pozytywną energią sprawiały, że każdy kontakt z dziewczynami powodował uśmiech na naszych twarzach.”</i></p>
                        </div>

                        <p>Może się wydawać, że skoro zdecydowaliście się na <span className="bold pink">organizację ślubu w Krakowie</span>, to idąc za ciosem jedynym słusznym wyborem będzie konsultant ślubny z okolicy. Z pewnością zna Małopolskę jak własną kieszeń oraz ma szerokie kontakty wśród lokalnych wykonawców. Czy jest jedynym słusznym wyborem? Absolutnie nie. Ograniczanie wyboru wedding plannera wyłącznie do lokalnych usługodawców jest błędem. Najważniejszymi kryteriami wyboru powinno być wzajemne porozumienie i wspólna wizja Waszego wesela, a także elastyczność i spersonalizowana oferta. Pamiętajcie, że specyfika branży ślubnej powoduje, że większość usługodawców pracuje na terenie całej Polski. Umożliwia to ciągłe poszerzanie horyzontów, zdobywanie doświadczenia oraz unikanie schematów. Nasza baza wykonawców sięga daleko poza granice województwa małopolskiego. Znajdziemy dla Was najlepsze oferty, które spełnią Wasze oczekiwania jakościowe oraz budżetowe, a nie jedynie lokalizacyjne.</p>

                        <div className="extra-content bgPinkLight shadowBox">
                            <p><i>„Jeśli musielibyśmy opisać współpracę z Czary Marry w jednym zdaniem, to byłoby to „mówisz i masz". Zanim sobie coś pomyśleliśmy i o to poprosiliśmy, dziewczyny już to zrobiły i wszystko było przygotowane. Po prostu magia.”</i></p>
                        </div>
                    </>
            },
            {
                title: 'Organizacja ślubów Kraków — Co ze spotkaniami face to face?',
                titleBgColor: 'bgGrey',
                color: 'dark',
                text:
                    <><p>Zauważyłyśmy, że nasi klienci ze względu na swój aktywny tryb życia zdecydowanie bardziej upodobali sobie kontakt online. Będziemy do Waszej dyspozycji o każdej porze dnia, kontaktując się przez WhatsApp, mail, czy Skype. Super byłoby spotkać się w kawiarni, planując Wasz ślub i wesele, ale możemy Wam zaoferować coś znacznie lepszego. Możecie się z nami spotykać i podejmować najważniejsze decyzje nie ruszając się z własnej kanapy i nie tracąc czasu na dojazdy. Pracując głównie z parami z zagranicy, dobrze wiemy, że odległość nie ma najmniejszego znaczenia przy organizacji ślubu i wesela. Kraków to miasto, które darzymy ogromnym sentymentem. Jeśli będzie taka potrzeba, chętnie wsiądziemy do auta i odwiedzimy z Wami salę weselną.</p>
                        <div className="extra-content bgGreyLight shadowBox">
                            <p><i>„Korzystnych epitetów można byłoby wymieniać bez końca, ale najważniejszymi jest zdecydowanie bezproblemowość i dbałość nawet o najmniejsze szczegóły. Dzięki tej współpracy zarówno przygotowania, jak i dzień wesela przebiegały bezstresowo i z poczuciem pełnej kontroli nad tym, co się dzieje.”
                            </i></p>
                        </div>
                    </>
            },
            {
                title: 'Organizacja ślubów Kraków — Zakres obowiązków.',
                titleBgColor: 'bgMint',
                color: 'dark',
                text: <>
                    <h3 className="bold mint">01</h3>
                    <p>Stworzenie budżetu wesela i harmonogramu prac.</p>

                    <h3 className="bold pink">02</h3>
                    <p>Przeprowadzenie przez formalności przedślubne.</p>

                    <h3 className="bold grey">03</h3>
                    <p>Poszukiwania sali weselnej w okolicach Krakowa oraz ustalenia z miejscem weselnym.</p>

                    <h3 className="bold dark">04</h3>
                    <p>Pomoc w wyborze wykonawców (m.in. zespół/DJ, fotograf, film).</p>

                    <h3 className="bold pink">05</h3>
                    <p>Ustalenie wizji wesela, dekoracji, papeterii.</p>

                    <h3 className="bold grey">06</h3>
                    <p>Logistyka (noclegi oraz transport dla gości).</p>

                    <h3 className="bold mint">07</h3>
                    <p>Zaproponowanie atrakcji weselnych (np. barman, strefy chillout, słodki stół).</p>

                    <h3 className="bold dark">08</h3>
                    <p>Pomoc w znalezieniu makijażystki, fryzjera oraz w wyborze stylizacji pary młodej i orszaku weselnego.</p>

                    <h3 className="bold pink">09</h3>
                    <p>Zaplanowanie i koordynacja przebiegu dnia ślubu i wesela.</p>

                    <h3 className="bold grey">10</h3>
                    <p>Oraz wszystko, czego potrzebujecie <span className="bold dark">organizując wesele w Krakowie.</span></p>
                </>
            }
        ],
        gridHeader: 'Czary Marry — Wasza wymarzona agencja ślubna Kraków.',
        gridBgColor: 'bgGrey',
        gridTextOne:
            <>
                <p>
                    Nasze pary często nazywają nas dobrymi wróżkami lub czarodziejkami. Daleko nam jednak do baśniowej matki chrzestnej. Zamiast liczyć na cud ciężko pracujemy, bazując na doświadczeniu i wiedzy, którą bezustannie pogłębiamy, wykonując zawód wedding plannera. Mamy ogromne szczęście, ponieważ kochamy wesela i naszą pracę. ”Myślimy weselami”. Co to oznacza? Wszędzie szukamy nowych inspiracji i pomysłów. Codziennością są nasze długie rozmowy o branży, trendach i nieszablonowych rozwiązaniach. Więcej informacji o nas znajdziecie <Link to={URLS.ABOUT} className="linkLight">tutaj</Link>.
                </p>
            </>,
        gridTextTwo:
            <div className="extra-content bgGreyLight shadowBox">
                <p><i>
                    „Żadna prośba nie była kłopotem. Żaden problem nie do rozwiązania. Wszystko to sprawiło, że nasz ślub i wesele były dokładnie takie, jak chcieliśmy — magiczne, romantyczne i pełne luzu!”
                </i></p>
            </div>,
        gridPics:
            [
                lan04,
                lan05,
                lan06,
            ],

        numsTitle: 'Konsultanci ślubni Kraków — proces wyboru.',
        numsContent: [
            {
                bgColor: 'bgMint',
                number: '01',
                title: 'Portfolio',
                text: <>Jeśli podobają Wam się <Link className="linkDark" to={URLS.COUPLES}>realizacje</Link> danej agencji ślubnej to zapewne macie podobny gust i możecie być pewni, że wedding planner odnajdzie się również w Waszej wizji wesela.</>
            },
            {
                bgColor: 'bgPink',
                number: '02',
                title: 'Opinie',
                text: <>Zróbcie dokładny research, zapoznajcie się z recenzjami na temat wybranych konsultantów ślubnych z Krakowa, nieoceniony okaże się tu <CustomOuterLink text="FB" to="https://www.facebook.com/Agencja.Slubna.CzaryMarry/reviews/?ref=page_internal" className="linkDark" /> i wizytówka Google.</>
            },
            {
                bgColor: 'bgGrey',
                number: '03',
                title: 'Aktywność w branży ślubnej',
                text:
                    <>Warto zwrócić uwagę na dodatkowe aktywności rozważanego konsultanta ślubnego np. <Link className="linkDark" to={URLS.BLOG}>blog</Link>, <CustomOuterLink text="podcast" to="https://open.spotify.com/show/7Lj581I8xRqkY3lRwkOvrc?si=LIgR_pXtTD6zwGUSDULRnA" className="linkDark" />, publikacje w mediach branżowych, wyróżnienia.</>
            },
            {
                bgColor: 'bgMint',
                number: '04',
                title: 'Oferta',
                text:
                    'Po spotkaniu z wedding plannerem otrzymacie spersonalizowaną ofertę, zapoznajcie się z nią dokładnie. Zwróćcie uwagę na zakres proponowanych obowiązków. Nie bójcie się zadawać pytań, mówcie o wątpliwościach.'
            },
            {
                bgColor: 'bgPink',
                number: '05',
                title: 'Sprawny kontakt',
                text:
                    'To podstawa dobrej organizacji. Jeżeli wedding planner nie ma czasu na przesłanie oferty i musicie mu się przypominać to prawdopodobnie będzie zaniedbywał również swoje obowiązki.'
            },
            {
                bgColor: 'bgGrey',
                number: '06',
                title: 'Umowa',
                text:
                    'Powinna chronić interesy dwóch stron i dawać Wam poczucie bezpieczeństwa. Przeczytajcie ją dokładnie i nie bójcie się wyjaśniać niejasności. Szczerość to podstawa dobrej współpracy.'
            }
        ],
        extras: <p>To Wy podejmujecie decyzję, w jakim stopniu chcecie nas zaangażować w organizację wesela. Oczywiście zachęcamy Was do skorzystania z kompleksowej pomocy, ponieważ daje ona najlepsze efekty. Mimo to możecie zdecydować się tylko na wybrane usługi, koordynację dnia ślubu i wesela lub patronat ślubny. Serdecznie zapraszamy do kontaktu. Zorganizujmy razem Twój ślub i wesele marzeń w <CustomOuterLink text="Krakowie" to="https://www.krakow.pl/" className="linkMint" />!</p>,

        extraSliderHorizontalPics: [
            cus2Krk01, cus2Krk02, cus2Krk03, cus2Krk04
        ],
        extraSliderLastPics: [
            cus1Krk02, cus1Krk01, cus1Krk03, cus1Krk04
        ],
        isExtraSliderLastHorizontal: true,
    },
    {
        path: 'wedding-planner-slask-katowice',
        seoTitle: 'Wedding planner Śląsk | Czary Marry agencja ślubna Katowice',
        seoText: 'Poszukujecie profesjonalnego wedding plannera na Śląsku? Zapraszamy do współpracy. Z przyjemnością pomożemy Wam w organizacji ślubu i wesela.',
        mainHeader: 'Czary Marry - sprawdzony wedding planner na Śląsku',
        boxTitle: 'Organizacja wesela Śląsk ≠ agencja ślubna Śląsk.',
        boxColor: 'bgGrey',
        textOne: <>Jeśli trafiliście na tę stronę to prawdopodobnie jesteście zaręczeni i rozpoczynacie swoją przygodę z organizacją wesela na śląsku. Gratulujemy! Mimo że to Wasze pierwsze kroki, jak dotąd podejmujecie same dobre decyzje. Rozważacie pomoc wedding plannera i wybraliście świetną lokalizację na Wasze wesele. Oby tak dalej! Poniżej znajdziecie kilka cennych wskazówek dotyczących wyboru odpowiedniej agencji ślubnej na Śląsku. Przeczytacie o tym, jak pracujemy i jakimi wartościami się kierujemy oraz dowiecie się, dlaczego tak jak Wy lubimy Katowice, Zabrze, Czechowice-Dziedzice i inne śląskie miasta.<br /><br />
            Intuicja podpowiada, że skoro zdecydowaliście się na organizację wesela w Katowicach lub województwie śląskim to powinniście poszukać wedding plannera z tej okolicy. Można przypuszczać, że świetnie zna lokalne sale oraz wykonawców. Przemyślcie to jednak zanim zamkniecie się na wachlarz innych możliwości. Większość wykonawców ślubnych, w tym wedding plannerów, pracuje na terenie całej polski. Dzięki temu mamy duże doświadczenie, nie ulegamy schematom, a każde miejsce i wesele jest dla nas inspirującym i nowym wyzwaniem. Miło jest spotkać się w klimatycznej kawiarni, ale my oferujemy Wam coś znacznie lepszego. Możecie w każdej chwili wypić z nami kawę i podjąć najważniejsze decyzje dotyczące Waszego wesela nie ruszając się z własnej kanapy.</>,
        textTwo: 'Zauważyliśmy, że nasi klienci preferują kontakt online, dlatego jesteśmy do Waszej dyspozycji o każdej porze dnia, komunikując się przez Whatsapp, mail oraz telekonferencje. Współpracujemy z parami z całego świata, często dzielą nas tysiące kilometrów oraz różnice czasowe. W związku z tym organizacja wesela na śląsku nie stanowi dla nas żadnego problemu. Tym bardziej że lubimy podróże i chętnie odwiedzimy z Wami salę weselną, jeśli będziecie mieli na to ochotę. Podobnie jest z polecanymi przez nas wykonawcami.Kryterium wyboru nie jest lokalizacja, tylko Wasze oczekiwania oraz preferencje.',
        placePics: [
            lanWedPlKato,
            lanAgŚl,
            lanWedPlŚl,
            lanAgŚlKato
        ],
        content: [
            {
                title: 'Wedding planner Śląsk - czym się kierować przy wyborze.',
                titleBgColor: 'bgMint',
                color: 'dark',
                text:
                    <>
                        <p>Wiecie już, co naszym zdaniem nie ma znaczenia. Teraz zdradzimy Wam, na co warto zwrócić uwagę, zanim dokonacie ostatecznego wyboru wedding plannera.</p>
                        <p><span className="bold mint">Portfolio</span> — podobają Wam się <Link to={URLS.COUPLES} className="linkDark">realizacje</Link> danej agencji ślubnej oraz jej styl pracy. To dobry znak, prawdopodobnie nadajecie na tych samych falach.</p>
                        <p><span className="bold mint">Opinie</span> — warto pogrzebać nieco głębiej i zapoznać się z recenzjami na temat danego konsultanta ślubnego.</p>
                        <p><span className="bold mint">Spotkanie</span> — najczęściej jest niezbędne do przygotowania spersonalizowanej oferty, która będzie odpowiedzią na Wasze potrzeby. Spotkanie jest też świetną okazją do upewnienia się, że odpowiada Wam styl pracy, a nawet osobowość wedding plannera, któremu powierzycie organizację Waszego wesela.</p>
                        <p><span className="bold mint">Oferta</span> — zapoznajcie się z nią dokładnie, nie bójcie się zadawać pytań, mówcie o wątpliwościach. Organizacja wesela to skomplikowany proces złożony z wielu elementów. Ważne, żebyście mieli pewność, że nic nie zostało pominięte.</p>
                        <p><span className="bold mint">Sprawny kontakt</span> — jeżeli musicie w nieskończoność czekać na odpowiedź od wedding plannera i wysyłać mu maile z przypomnieniem nie wróży to owocnej współpracy.</p>
                    </>
            },
            {
                title: 'Organizacja wesel Śląsk - za co go lubimy.',
                titleBgColor: 'bgGrey',
                color: 'dark',
                text: <>
                    <p>
                        Obiecałyśmy opowiedzieć Wam, dlaczego lubimy <CustomOuterLink text="Śląsk" to="https://pl.wikipedia.org/wiki/%C5%9Al%C4%85sk" className="linkLight" />. Głównie za niepowtarzalny charakter. Uważamy, że wiele osób nie docenia tych regionów, a przecież są one unikatowe pod względem kulturowym, architektonicznym, kulinarnym, czy językowym. W ostatnich czasach stały się również łakomym kąskiem ze względu na industrialne przestrzenie, które otwierają ogromne możliwości. Przygotowując propozycje miejsc weselnych dla naszych klientów, Katowice pojawiają się w nich równie często, jak Warszawa, Wrocław, Kraków czy Poznań. Znamy też wielu niesamowitych wykonawców ślubnych z województwa śląskiego, z którymi chętnie współpracujemy na weselach w całej Polsce.
                    </p>
                </>
            },
            {
                title: 'Kompleksowa organizacja wesel Śląsk — nasze wartości.',
                titleBgColor: 'bgPink',
                color: 'dark',
                text: <>
                    <h3 className="bold pink">01</h3>
                    <p>Jesteśmy do Waszej dyspozycji o każdej porze dnia i bez limitu. Organizując wesela na Śląsku stawiamy na kontakt online, posługując się narzędziami do telekonferencji oraz mailem. Do codziennej komunikacji służy nam Whatsapp.</p>

                    <h3 className="bold pink">02</h3>
                    <p>Pracujemy we dwie. Wspólnie koordynujemy również dzień ślubu. Dzięki temu proces przygotowań przebiega sprawnie, a Wasze wesele będzie dopracowane.</p>

                    <h3 className="bold pink">03</h3>
                    <p>W naszej pracy stawiamy na szczerość i przyjazną atmosferę. Zależy nam, żeby organizacja wesela była dla Was mile spędzonym czasem.</p>
                </>
            }
        ],
        gridHeader: 'Czary Marry — Wasza wymarzona Agencja Ślubna Śląsk.',
        gridBgColor: 'bgGrey',
        gridTextOne:
            <>
                <p>
                    Jedni nazywają nas dobrymi wróżkami lub czarodziejkami, nieco odważniejsi czarownicami. Prawdą jest, że zmienimy Wasze marzenia w rzeczywistość. Bez użycia czarodziejskiej różdżki i pomocy baśniowej matki chrzestnej. Bazujemy na doświadczeniu i wiedzy, którą bezustannie pogłębiamy, wykonując zawód wedding plannera. Agencję ślubną Czary Marry zbudowałyśmy na serdecznych relacjach z parami młodymi i naszej 15-letniej przyjaźni. Więcej informacji o nas znajdziecie <Link to={URLS.ABOUT} className="linkLight">tutaj</Link>.
                </p>
            </>,
        gridPics:
            [
                lanWedPlkiŚl,
                lanOrgWeKato,
                lan06,
                lan04,
            ],

        numsTitle: 'Organizacja wesela Śląsk — etapy współpracy.',
        numsContent: [
            {
                bgColor: 'bgMint',
                number: '01',
                title: 'Spotkanie',
                text: ' To świetna okazja, żeby się poznać i odpowiedzieć na Wasze pytania oraz posłuchać o Waszej wizji ślubu i wesela. Spotkanie umożliwia też określenie zakresu naszych obowiązków.'
            },
            {
                bgColor: 'bgPink',
                number: '02',
                title: 'Oferta',
                text: 'Po rozmowie otrzymacie od nas indywidualną ofertę organizacji wesela na śląsku wraz z wyceną naszych usług.'
            },
            {
                bgColor: 'bgGrey',
                number: '03',
                title: 'Umowa',
                text:
                    'Zabezpiecza interesy obu stron. Po jej podpisaniu i wpłaceniu pierwszej transzy naszego wynagrodzenia niezwłocznie bierzemy się do pracy.'
            },
            {
                bgColor: 'bgMint',
                number: '04',
                title: 'Organizacja wesela Śląsk',
                text:
                    'Rozpoczynamy ją od stworzenia budżetu oraz harmonogramu prac. Następnie realizujemy ustalony plan. Jesteśmy z Wami w kontakcie na każdym etapie przygotowań.'
            },
            {
                bgColor: 'bgPink',
                number: '05',
                title: 'Koordynacja',
                text:
                    <>Rozpiszemy <CustomPostLink text="scenariusz dnia ślubu i wesela" path="plan-wesela-harmonogram-dnia-slubu-krok-po-kroku" className="linkDark" />. Na jego podstawie będziemy koordynować przygotowania i przyjęcie weselne. Dzięki temu będziecie mogli skupić się na tym, co najważniejsze, a nam powierzyć wszystkie obowiązki.</>
            }
        ],

        bottomTitle: 'Wedding planner Śląsk - zakres obowiązków.',
        bottomText:
            <>
                <p>To od Was zależy, w jakim stopniu chcecie nas zaangażować w przygotowania. Z doświadczenia wiemy, że najlepiej sprawdza się kompleksowa pomoc. Mimo to możecie zdecydować się tylko na wybrane usługi, koordynację dnia ślubu i wesela lub konsultacje online. Serdecznie zapraszamy do kontaktu. Zorganizujemy dla Was ślub Waszych marzeń.</p>
                <p>Zachęcamy do przesłuchania naszego podcastu <CustomOuterLink className="linkPink" to="https://open.spotify.com/show/7Lj581I8xRqkY3lRwkOvrc?si=Kt_f171HSBar9aWWzwbRsg&nd=1" text="Hey Wedding" />. Znajdziecie tam rozmowy z naszymi parami młodymi i wiele ciekawych rad dotyczących organizacji ślubu i wesela. </p>
            </>,
        extraSliderHorizontalPics: [
            cus01kato4, cus01kato3, cus01kato1, cus01kato2,
        ]
    },

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
            wawaPlace02,
            wawaPlace03,
            wawaPlace04,
            wawaPlace01
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
                lan05,
                lan04,
                lan06
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
                    <ul className="mt-3">
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
                </p>

                <h2 className="bgGrey mt-5">Koordynacja ślubu i wesela w Warszawie.</h2>
                <p>
                    Kompleksowa organizacja ślubu i wesela Warszawa:
                    <ul className="mt-3">
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
                </p>
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
            lan02,
            lan03,
            lan01,
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
                title: 'Profesjonalny wedding planner Poznań - kryteria wyboru',
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
                konsultantki,
                kasia,
                ola,
                instaPic3
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
            </>,
        extraSliderHorizontalPics: [
            cus2Poz02, cus2Poz03, cus2Poz01
        ],
        extraSliderLastPics: [
            cus1Poz03, cus1Poz04, cus1Poz01, cus1Poz02
        ],
        isExtraSliderLastHorizontal: true,
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
        textTwo:
            <>Marzy Wam się <CustomPostLink path="slub-wesele-w-gorach" text="wesele w Sudetach, Karkonoszach lub Górach Stołowych" className="linkPink" />? Schodziłyśmy je wielokrotnie wzdłuż i wszerz, znamy najpiękniejsze zakamarki. A może urzekają Was okoliczne pałace i zamki? Jest ich więcej, niż Wam się wydaje. Znamy je chyba wszystkie. Chętnie je Wam pokażemy. Mamy dla Was bogatą bazę lokalnych usługodawców ślubnych z Wrocławia. Jeśli rozważacie wesele we Wrocławiu i okolicach, nie wahajcie się i wybierzcie lokalnego wedding plannera z Wrocławia. Będziecie mogli liczyć na jego pełne wsparcie w organizacji Waszego ślubu i wesela marzeń.</>,
        placePics: [
            miejsWro01, miejsWro02, miejsWro03, miejsWro04
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
                konsWro01, konsWro02, konsWro03, konsWro04
            ],
        numsTitle: 'Ogranizacja Ślubów Wrocław - zakres prac konsultanta ślubnego',
        numsText: 'Zanim ostatecznie zdecydujecie się na współpracę z wedding plannerem warto poznać zakres usług Czary Marry - konsultantek ślubnych z Wrocławia. Uważamy, że najlepsza formą współpracy jest kompleksowa pomoc w organizacji ślubów, ponieważ przynosi ona najlepsze efekty. Poniżej przedstawiamy Wam zakres naszych usług:',
        numsContent: [
            {
                bgColor: 'bgPink',
                number: '01',
                title: 'Kompleksowa organizacja',
                text: 'To całkowita pomoc w organizacji ślubu oraz wsparcie na każdym etapie planowania wesela. Zaczynając od zaplanowania budżetu, poszukiwania sali, stworzenia harmonogramu przygotowań, poprzez poszukiwanie wszystkich wykonawców, skończywszy na stworzeniu scenariusza ślubnego i koordynacji przyjęcia. Wszystko co potrzebujecie od profesjonalnego wedding plannera z Wrocławia.'
            },
            {
                bgColor: 'bgMint',
                number: '02',
                title: 'Koordynacja ślubu i wesela',
                text: <>Będziemy do Waszej dyspozycji w dniu ślubu. Dopilnujemy, aby wszystko przebiegło tak jak to sobie zaplanowaliście, a Wam pozostawimy świętowanie Waszego najpiękniejszego dnia. Stworzymy <CustomPostLink text="scenariusz uroczystości" path="plan-wesela-harmonogram-dnia-slubu-krok-po-kroku" className="linkDark" /> ślubnej we Wrocławiu, będziemy w kontakcie z wykonawcami oraz salą weselną.</>
            },
            {
                bgColor: 'bgGrey',
                number: '03',
                title: 'Wybrane elementy',
                text:
                    'Potrzebujecie wsparcia wyłącznie przy części organizacji usług? To oferta stworzona jest z myślą o Was! To od Was zależy w jakim wymiarze chcecie nas włączyć w proces przygotowań i organizacji Waszego ślubu we Wrocławiu.'
            }
        ],
        bottomTitle: 'Organizacja Wesel Wrocław',
        bottomText:
            <>
                <p>
                    Jeśli ostatecznie podjęliście decyzję, że organizacją ślubu i wesela we Wrocławiu zajmiecie się samodzielnie to pamiętajcie, że na każdym etapie przygotowań możecie skorzystać z konsultacji online. Spraw do ogarnięcia i decyzji do podjęcia potrafi być dużo i warto zapytać o zdanie specjalisty czyli doświadczonych konsultantek ślubnych. Zwłaszcza jeśli jest z okolic i organizowały niejeden ślub we Wrocławiu. Organizację wesel mamy we krwi!
                </p>
                <p>
                    A jeśli chcecie umilić sobie czas <CustomPostLink text="ślubnych przygotowań" path="przygotowania-do-slubu-formalnosci" className="linkMint" /> to zapraszamy na nasz <CustomOuterLink className="linkMint" to="https://open.spotify.com/show/7Lj581I8xRqkY3lRwkOvrc" text="podcast" />.
                </p>
            </>,
        extraSliderHorizontalPics: [
            cus2Wro01, cus2Wro02, cus2Wro03, cus2Wro04
        ],
        extraSliderLastPics: [
            cus1Wro01, cus1Wro02, cus1Wro03, cus1Wro04
        ]
    }
]

export default landings

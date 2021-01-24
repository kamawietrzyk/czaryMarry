import React from 'react'
import CustomInnerLink from '../components/CustomLink/CustomInnerLink'
import CustomOuterLink from '../components/CustomLink/CustomOuterLink'

const posts = [

    // {
    //     path: 'o-gościach-nie-idealnych',
    //     title: "O gościach (nie)idealnych",
    //     seoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus quis risus nec molestie.",
    //     date: "7 mar 2017",
    //     edited: "8 lip 2020",
    //     tag: '',
    //     textShort: "Mało jest rzeczy, które budzą tyle emocji, co śluby i wesela. Mają jakąś magiczną moc wpędzania ludzi w amok – i nie mówię tu o Młodej Parze, u której to bardzo zrozumiałe, ale o gościach. Całkiem rozsądni na co dzień ludzie...",
    //     mainPic: {
    //         src: require('./BlogPics/Post2/post2.jpg').default
    //     },
    //     textMain:
    //         <>
    //             Mało jest rzeczy, które budzą tyle emocji, co śluby i wesela. Mają jakąś magiczną moc wpędzania ludzi w amok – i nie mówię tu o Młodej Parze, u której to bardzo zrozumiałe, ale o gościach. Całkiem rozsądni na co dzień ludzie wraz ze wskoczeniem w sukienkę czy garnitur wpadają w wir dziwnych przekonań i przepychanek. I to właśnie o nich i ich zachowaniach chciałam dzisiaj napisać. Przed Wami siedem rzeczy, z którymi całkiem regularnie spotykam się na weselach i ślubach. <br/>
    //             A więc czego nie robić na weselach?
    //         </>,
    //     content: [
    //         {
    //             headerSmall:
    //             <>
    //                 <span className="pink">1. Nie zakładać czegoś, w czym nie jest nam wygodnie.</span>
    //             </>,
    //             text: "Pokutuje w nas przekonanie, a zwłaszcza wśród pań, że na wesele trzeba iść w czymś, w czym się jeszcze nigdy na innej imprezie nie było. Mam wrażenie, że kupno nowej sukienki specjalnie na tę okazję stało się obowiązkiem. A już pójście na dwa wesela w tym samym stroju postrzegane jest jako jedna z największych zbrodni. Dlatego przychodzimy w niewygodnych, nierozchodzonych butach, w nowej sukience, do której jednak nie zdążyłyśmy tak do końca schudnąć (ten pomysł nigdy nie wychodzi!) czy odkręcającej się spódnicy. Nie ma możliwości, żebyśmy dobrze wyglądały – dłużej niż przez kwadrans na wdechu – w czymś, co powoduje u nas dyskomfort. Tymczasem spokojnie można znaleźć wygodne ubrania, w których będziemy czuć się dobrze i przede wszystkim pozostaniemy sobą, a one nadal będą pasować do okazji. To nic złego, jeśli tę kreację będziemy nosić regularnie na wszystkie oficjalne uroczystości. Różnorodność możemy osiągnąć dzięki dodatkom.",
    //             pics: [
    //                 {src: require('./BlogPics/Post2/post2a.jpg').default}
    //             ]
    //         },
    //         {
    //             headerSmall:
    //             <>
    //
    //             </>,
    //             text: "",
    //         },
    //         {
    //             headerSmall:
    //             <>
    //
    //             </>,
    //             text: "Lista tematów do narzekania jest długa i zawiera zwykle: u Baśki było lepiej/ile trzeba czekać na rosół/jak to nie ma drink-baru/nie wysilili się za bardzo/po co komu [wstawić dowolną atrakcję] /ciekawe kto za to wszystko płacił/strasznie brzydka sukienka, a podobno zapłaciła pięć tysięcy – i tak dalej. Nie da się policzyć ile takich rozmów/uwag podsłuchałam w toalecie albo podczas czekania na Młodą Parę. Uroczystości weselne rozkręciły się do niesamowitych rozmiarów. Wesele bez foto-budki, pokazu sztucznych ogni i porwania przez piratów wypada tak jakoś blado. Warto się jednak przy takiej okazji zatrzymać i zastanowić, o co tak naprawdę w tym dniu chodzi. I ugryźć się w język, bo nie dość, że takie uwagi są niegrzeczne i bardzo nie na miejscu, to i są sygnałem, że łykamy cały ten weselny konsumpcjonizm. Nigdy też nie wiemy, kto stoi za nami.",
    //             pics: [
    //                 {src: require('./BlogPics/Post2/post2b.jpg').default}
    //             ]
    //         },
    //         {
    //             headerSmall:
    //             <>
    //                 <span className="pink">4. Nie przychodzić na wesele, jeśli nie lubimy zapraszających.</span>
    //             </>,
    //             text: ""
    //         },
    //         {
    //             headerSmall:
    //             <>
    //                 <span className="pink">5. Nie zmuszać się/innych do picia czy tańczenia.</span>
    //             </>,
    //             text: "Pewnie nie raz słyszeliście: „Za Młodych się nie napijesz?!” lub „No jak to, ze mną nie chcesz zatańczyć? Nie bądź taki sztywniak!” Weźmy pod uwagę, że ludzie mają różne upodobania i pozwólmy każdemu bawić się tak, jak ma ochotę. Wmuszanie w kogoś kieliszka wódki niemal na siłę i namolne dopytywanie o powody odmowy jest naprawdę bardzo niegrzeczne. O próbach zmuszenia do uczestnictwa w zabawach weselnych kogoś, kto nie ma na nie ochoty, nawet nie będę wspominać. Zasady te działają również w drugą stronę. Jeśli na co dzień nie jadasz słodyczy,nie zmuszaj się i nie biegnij jako pierwszy po kawałek tortu weselnego. Magia uroczystości nie sprawi nagle, że krem truskawkowy zacznie Ci smakować."
    //         },
    //         {
    //             headerSmall:
    //             <>
    //                 <span className="pink">6. Nie wpychać się wszędzie z aparatem czy telefonem.</span>
    //             </>,
    //             text: "Po pierwsze, utrudnia to pracę fotografowi. Po drugie, odziera całe doświadczenie z magii – naszym zadaniem jest być i przeżywać, nie zrobić milion zdjęć. Amatorskie fotki mają swój urok i fajnie je sobie w jakimś mniej oficjalnym momencie przyjęcia zrobić, ale rzucanie się z obiektywem na recytującą przysięgę albo tańczącą pierwszy taniec Parę Młodą to nie jest dobry pomysł.",
    //             pics: [
    //                 {src: require('./BlogPics/Post2/post2c.jpg').default}
    //             ]
    //         },

    //     ]
    // },
    {
        path: 'o-gościach-nie-idealnych',
        title: "O gościach (nie)idealnych",
        seoText: "Lorem ipsum dolor sit amet.",
        date: "7 mar 2017",
        edited: "8 lip 2020",
        tag: "Niezbędnik przed ŚLUBNY",
        textShort: "Mało jest rzeczy, które budzą tyle emocji, co śluby i wesela. Mają jakąś magiczną moc wpędzania ludzi w amok – i nie mówię tu o Młodej Parze, u której to bardzo zrozumiałe, ale o gościach. Całkiem rozsądni na co dzień ludzie...",
        mainPic: {
            src: require('./BlogPics/Post2/post2.jpg').default
        },
        textMain:
            <>
                Mało jest rzeczy, które budzą tyle emocji, co śluby i wesela. Mają jakąś magiczną moc wpędzania ludzi w amok – i nie mówię tu o Młodej Parze, u której to bardzo zrozumiałe, ale o gościach. Całkiem rozsądni na co dzień ludzie wraz ze wskoczeniem w sukienkę czy garnitur wpadają w wir dziwnych przekonań i przepychanek. I to właśnie o nich i ich zachowaniach chciałam dzisiaj napisać. Przed Wami siedem rzeczy, z którymi całkiem regularnie spotykam się na weselach i ślubach. <br/> A więc czego nie robić na weselach?
            </>,
        content: [
            {
                pics: [
                    { src: require('./BlogPics/Post2/post2a.jpg').default },
                ],
                headerSmall: <span className="pink">1. Nie zakładać czegoś, w czym nie jest nam wygodnie.</span>,
                text: "Pokutuje w nas przekonanie, a zwłaszcza wśród pań, że na wesele trzeba iść w czymś, w czym się jeszcze nigdy na innej imprezie nie było. Mam wrażenie, że kupno nowej sukienki specjalnie na tę okazję stało się obowiązkiem. A już pójście na dwa wesela w tym samym stroju postrzegane jest jako jedna z największych zbrodni. Dlatego przychodzimy w niewygodnych, nierozchodzonych butach, w nowej sukience, do której jednak nie zdążyłyśmy tak do końca schudnąć (ten pomysł nigdy nie wychodzi!) czy odkręcającej się spódnicy. Nie ma możliwości, żebyśmy dobrze wyglądały - dłużej niż przez kwadrans na wdechu – w czymś, co powoduje u nas dyskomfort. Tymczasem spokojnie można znaleźć wygodne ubrania, w których będziemy czuć się dobrze i przede wszystkim pozostaniemy sobą, a one nadal będą pasować do okazji. To nic złego, jeśli tę kreację będziemy nosić regularnie na wszystkie oficjalne uroczystości. Różnorodność możemy osiągnąć dzięki dodatkom."
            },
            {
                headerSmall: <span className="pink">2. Nie uczestniczyć w konkursie na wygląd.</span>,
                text: 'Okazji do eleganckiego, imprezowego ubioru mamy w ciągu roku raczej mało - może dlatego zdarza nam się przedobrzyć. Stresujemy się, uruchamiamy niepotrzebne diety, wpadamy w zakupowy amok, martwimy się, że nie zdążymy skoordynować kosmetyczki z fryzjerem. Przyjęcie weselne, z radosnej uroczystości celebrowania zawarcia małżeństwa przez kogoś bliskiego, zamienia się w konkurs piękności, gdzie naszym celem staje się bycie najgorętszym towarem na sali. Fajnie jest dobrze wyglądać, ale nerwowa napinka często powoduje efekt starałam się za bardzo". Dobrze jest zachować balans i pamiętać, po co tak naprawdę jesteśmy na tym weselu. "Wcale nie chodzi tu o nas – naszym zadaniem jest wyglądać adekwatnie do charakteru przyjęcia, czuć się dobrze w swoim stroju i super się bawić.'
            }
        ]
    },
    {
        path: 'motyw-przewodni-wesela',
        title: "Motyw przewodni wesela",
        seoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus quis risus nec molestie.",
        date: "9 lut 2017",
        edited: "23 paź 2020",
        tag: "Niezbędnik przed ŚLUBNY",
        textShort: "Organizując swój ślub i wesele, staracie się zaplanować każdy najdrobniejszy szczegół. Godzinami przeglądacie ślubne blogi, szukając inspiracji, oglądacie zdjęcia w poszukiwaniu idealnych kreacji, czytacie branżową prasę...",
        mainPic: {
            src: require('./BlogPics/post1.jpg').default,
        },
        textMain:
            <>
                Organizując swój ślub i wesele, staracie się zaplanować każdy najdrobniejszy szczegół. Godzinami przeglądacie ślubne blogi, szukając inspiracji, oglądacie zdjęcia w poszukiwaniu idealnych kreacji, czytacie branżową prasę, zapisujecie każdy pomysł na przekąski i główny obiad. Jednak nie myślicie o czymś, co sprawi, że <b>wszystkie zaplanowane przez Was elementy złączą się w jedną niezapomnianą całość.</b> Zapominacie o czymś, co spowoduje, że ten dzień będzie Waszym dniem, a nie kolejnym weselem. Tym czymś jest <b>motyw przewodni wesela</b> – może nim być tematyka, kolor czy po prostu styl, w jakim wyprawicie swoje przyjęcie weselne. Zaplanujcie swój indywidualny motyw przewodni ślubu!
            </>,
        content: [
            {
                headerSmall: "Jak wybrać motyw przewodni wesela?",
                text:
                    <>
                        <p>Jeśli zastanawiacie się, jak wybrać motyw przewodni wesela i ślubu, aby pasował do Młodej Pary, a nie tylko był kolejną spójną wizją tak, aby odzwierciedlał Was, Wasze charaktery, zainteresowania, wystarczy, że będziecie kierować się kilkoma prostymi zasadami.</p>
                        <p className="bold"><span className="pink">Krok 1: </span>Indywidualnie dobrany motyw na wesele</p>
                        <p>
                        Poszukując motywu przewodniego wesela, pomyślcie o tym, co oboje lubicie, jak spędzacie wolny czas, co Was cieszy i co Wam się podoba. Odłóżcie na bok myślenie, czy spodoba się to Waszym rodzicom, co powie o tym ciocia, jak zareagują znajomi. Jeśli łączą Was wspólne pasje, wybór tematu przewodniego wesela, który będzie spoiwem łączącym elementy na Waszym ślubie i weselu, będzie oczywisty. Lubicie podróżować? Pomyślcie w takim razie o miejscach, które wspólnie odwiedziliście jako o motywie przewodnim wesela. Namiętnie czytacie kryminały — niech to będzie start na Wasz książkowy motyw weselny. Pamiętajcie, że nie ogranicza Was nic. Każdy element, który Was łączy, może stać się motywem przewodnim wesela. Nie macie wspólnych zainteresowań? Nic nie szkodzi! Na pewno jest coś, co robicie zawsze razem, albo może niech motywem przewodnim będzie miejsce, w którym się poznaliście lub które razem odwiedziliście. Z każdego małego, łączącego Was elementu naprawdę da się stworzyć motyw przewodni ślubu, który mówi coś więcej o Was jako parze. Rozejrzyjcie się wokół was – inspiracji na motywy ślubne jest wiele.
                        </p>
                        <p className="bold"><span className="pink">Krok 2: </span>Modny motyw przewodni wesela? Niekoniecznie!</p>
                        <p>
                        Przeglądając blogi ślubne, znajdujecie wiele artykułów o trendach na najbliższy rok – nie trudno ulec wpływowi mody na różne motywy przewodnie wesela. Nic bardziej błędnego! Sugerowanie się wpisami na blogach i forach internetowych oraz przemycanie na Wasze wesele inspiracji z nich zaczerpniętych może spowodować, że Wasi goście będą na trzecim w tym roku weselu, gdzie motywem przewodnim jest fiolet lub marynarski styl. Nikt wtedy nie będzie po imprezie wspominał Was, każdy będzie po prostu porównywał to wesele do poprzednich. A Wy? A Wy możecie poczuć, że ten dzień mógłby być jeszcze wspanialszy...
                        </p>
                        <p className="bold"><span className="pink">Krok 3: </span>Motyw przewodni wesela a pora roku</p>
                        <p>
                        Wybierając motyw przewodni ślubu i wesela, warto zwrócić uwagę na datę ślubu. Jeśli zaplanowaliście wesele latem, a Wasz motyw przewodni to wspólne zamiłowanie od snowboardu, może być ciężko oddać zimowy klimat w temperaturze 30 stopni. Spróbujcie poszukać trochę dalej. Pomyślcie, gdzie najczęściej jeździcie razem na snowboardzie. Jeśli co roku spędzacie zimowe ferie we Włoszech, może niech to właśnie Włochy będą motywem przewodnim wesela. Pamiętajcie także, że pora roku ma znaczenie przy wyborze dekoracji. Nie zrobicie lawendowego wesela wiosną, ponieważ kwitnie ona w od połowy czerwca do końca września.
                        </p>
                        <p className="bold"><span className="pink">Krok 4: </span>Motyw przewodni ślubu nie na siłę</p>
                        <p>
                        Nie chcecie, aby Wasze wesele była mocno spersonalizowane. Ulubiony serial, uprawiany przez Was sport to motyw przewodni nie w Waszym stylu. Nie martwcie się! Kolor przewodni wesela to rozwiązanie dla Was. Pomyślcie o Waszym wspólnym ulubionym kolorze i zorganizujcie wesele we wszystkich jego odcieniach. Wybierzcie barwy, które Was określają i zobaczcie czy da się je połączyć. A może oboje lubicie spędzać czas na łonie natury? Uwzględnijcie to w Waszych dekoracjach ślubnych! Zobaczcie nasza realizację ślubno-weselną z kolorem przewodnim Rose Gold.
                        </p>
                        <p className="bold"><span className="pink">Krok 5: </span>Motyw przewodni wesela – od ogółu do szczegółu</p>
                        <p>
                        Zdecydowaliście, że PODRÓŻE, to Wasz motyw przewodni wesela. Świetnie. Teraz zastanówcie się, co w podróżowaniu podoba Wam się najbardziej. Lubicie krótkie wyjazdy za miasto i łono natury, czy może duże metropolie i gwar miasta. Może to będzie na Wasze wesele motyw przewodni? Pamiętajcie, aby nie przesadzić. Dbajcie o drobne szczegóły i subtelne dodatki. Nie łączcie elementów plażowania i ekskluzywnych hoteli z pieszymi wycieczkami. Takie podejście do motywu przewodniego wesela będzie przydatne podczas wyboru zaproszeń, dań czy tortu weselnego. Trzymajcie się jednego konkretnego stylu i bądźcie konsekwenctni w nim przy doborze dodatków, dekoracji i detali tak jak było w przypadku naszej sesji w stylu glamour.
                        </p>
                        <p>Wiecie już, jak wybrać motyw przewodni wesela, a jak tego nie robić. Mamy nadzieję, że nasze rady będą pomocne przy planowaniu najważniejszego dnia w Waszym życiu, a jeśli potrzebujecie wsparcia, chętnie pomożemy w organizacja Waszego ślubu i doborze motywu przewodniego wesela!</p>
                        <p>Inne inspiracje: <br/>
                        <CustomOuterLink to="https://pl.pinterest.com/czarymarry/wedding-themes/" text="Pinterest Czary Marry - wedding themes" className="bgColor" />
                        </p>
                    </>
            }
        ],
        extras:
            <>
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY"/></span>
            </>
    },

    // {
    //     path: 'drugi-post-z-takim-nie-za-dlugim-tytulem',
    //     title: "Drugi post z takim nie za długim tytułem",
    //     date: "15 sty 2021",
    //     // edited: "20 sty 2021",
    //     tag: 'tag2',
    //     textShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus quis risus nec molestie. In scelerisque luctus tortor id semper.",
    //     mainPic: {
    //         src: require('../components/OurCouples/OurCouplesPics/FoodtruckWedding/ft16.JPG').default,
    //         author: "Zofia Nałkowska",
    //     },
    //     textMain:
    //         <>
    //             Lorem ipsum <CustomInnerLink className="bgColor" path="folwark-wasowo" text="Folwark Wąsowo" />, consectetur adipiscing elit. Nulla sit amet libero at diam suscipit malesuada. Nullam porttitor nisl sed tempor ornare. Etiam consectetur auctor rutrum. Nulla sed metus dignissim, sollicitudin mi a, tempus lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim nisi vel elit imperdiet <CustomOuterLink className="bgColor" to="https://www.ksiaz.walbrzych.pl/" text="Zamek Ksiąz" /> bibendum. Sed egestas, felis at pulvinar scelerisque, diam orci tristique elit, ac lobortis tortor nibh eu justo. Aliquam erat volutpat.
    //         </>,
    //     content: [
    //         {
    //             pics: [
    //         { src: require('../components/OurCouples/OurCouplesPics/FoodtruckWedding/ft10.JPG').default },
    //             ],
    //             headerSmall: "Pierwszy mniejszy header",
    //             text: "Sed non diam dui. Nullam vitae molestie tellus, ac pharetra ante. Morbi nisl nisi, laoreet nec elit cursus, vehicula faucibus diam. Quisque magna est, interdum eget iaculis a, pharetra et magna. Proin arcu risus, sagittis vel nunc sit amet, auctor viverra nisl. Vivamus quis tortor sit amet turpis sagittis facilisis. Nulla ac molestie dolor. Aliquam erat volutpat. Sed ut feugiat magna. Aliquam quis aliquet ligula. Phasellus suscipit mollis nisi, tempor condimentum orci pharetra eget. Morbi vulputate dui ante, faucibus rhoncus nisl aliquam et. Donec facilisis a dolor aliquam euismod."
    //         },
    //         {
    //             pics: [
    //                 { src: require('../components/OurCouples/OurCouplesPics/FoodtruckWedding/ft10.JPG').default ,
    //                 author: "zdziszek wereszczak"},
    //                 {src: require('../components/OurCouples/OurCouplesPics/FoodtruckWedding/ftVer2.jpg').default}
    //             ],
    //             headerSmall: "Drugi mniejszy header",
    //             text: "Sed non diam dui. Nullam vitae molestie tellus, ac pharetra ante. Morbi nisl nisi, laoreet nec elit cursus, vehicula faucibus diam. Quisque magna est, interdum eget iaculis a, pharetra et magna. Proin arcu risus, sagittis vel nunc sit amet, auctor viverra nisl. Vivamus quis tortor sit amet turpis sagittis facilisis. Nulla ac molestie dolor. Aliquam erat volutpat. Sed ut feugiat magna."
    //         },
    //     ]
    // }

]

export default posts
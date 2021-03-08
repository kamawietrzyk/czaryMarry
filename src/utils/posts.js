import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import CustomPostLink from '../components/CustomLink/CustomPostLink'
import CustomCategoryLink from '../components/CustomLink/CustomCategoryLink'
import CustomOuterLink from '../components/CustomLink/CustomOuterLink'
import URLS from './urls'

const posts = [
    {
        path: '15-hey-wedding-jak-zorganizowac-wesele-krok-po-kroku',
        title: '#15 Hey Wedding - Jak zorganizować wesele krok po kroku',
        seoText: 'Zastanawiacie się od czego zacząć planowanie wesela? W 15 odcinku podcastu Hey Wedding odpowiadamy na to i wiele innych pytań.',
        date: '05 mar 2021',
        tag: 'podcast',
        textShort: 'Zastanawiacie się, od czego zacząć planowanie wesela? W 15 odcinku podcastu Hey Wedding odpowiadamy na to i wiele innych pytań. Dowiecie się również, o czym...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                Zastanawiacie się, <span className="bold mint">od czego zacząć planowanie wesela?</span> W 15 odcinku podcastu Hey Wedding odpowiadamy na to i wiele innych pytań. Dowiecie się również, <span className="bold mint">o czym pamiętać przy organizacji wesela</span> oraz jakimi zasadami warto się kierować. Zdradzimy jak przygotować budżet, harmonogram przygotowań oraz do czego może się przydać scenariusz ślubu i wesela. Podpowiemy, kiedy najlepiej zająć się organizacją i poszukiwaniem poszczególnych usług. Nie zabraknie również cennych rad, które pozwolą Wam uniknąć najczęstszych błędów popełnianych przez pary młode podczas samodzielnej organizacji ślubu. Koniecznie przesłuchajcie do końca.
            </>,
        links:
            <>
                <iframe title="#15 Hey Wedding - Jak zorganizować wesele krok po kroku." height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/n8v9e-fcb2d5?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'wesele-w-ogrodzie-garden-party',
        title: 'WESELE W OGRODZIE',
        seoTitle: 'Wesele w ogrodzie | Garden party z foodtruckami',
        seoText: 'Planujesz zorganizować wesele w ogrodzie? Zobacz garść oryginalnych inspiracji na garden party w stylu Czary Marry.',
        date: '01 mar 2021',
        textShort: 'Ślub w plenerze nikogo już nie dziwi. Od jakiegoś czasu uroczystości ślubne organizowane na łonie natury stały się bardzo popularne i na stałe weszły do kanonu trendów ślubnych. Trochę inaczej jest, gdy...',
        mainPic: {
            src: require('./BlogPics/Post29/post29.jpg').default
        },
        textMain:
            <>
                Ślub w plenerze nikogo już nie dziwi. Od jakiegoś czasu uroczystości ślubne organizowane na łonie natury stały się bardzo popularne i na stałe weszły do kanonu trendów ślubnych. Trochę inaczej jest, gdy mówimy o organizacji przyjęcia weselnego na łonie natury. <span className="bold grey">Wesele w ogrodzie</span> pojawiło się w marzeniach już niejednej Pary Młodej, jednak strach przed rzeczami, których nie są w stanie przewidzieć, jak np. zła pogoda, blokuje wielu narzeczonych przed organizacją przyjęcia weselnego w ogrodzie.
            </>,
        topPic: {
            src: require('./BlogPics/Post29/post29.jpg').default,
            author: 'Wojciech Makula'
        },
        content: [
            {
                headerSmall: <span className="grey">WESELE W OGRODZIE - LOKALIZACJA</span>,
                text:
                    <>
                        Najlepszym rozwiązaniem jest znalezienie typowego miejsca weselnego, które dysponuje pięknym terenem zielonym wokół dostosowanym do <CustomPostLink text="wesel w plenerze" path="wesele-w-plenerze" className="linkDark" />. Wynajęcie od sali weselnej ich ogrodu pozwoli na wiele usprawnień i też na oszczędności. Przy takim rozwiązaniu możemy dogadać się z salą i skorzystać z ich menu, obsługi, mebli czy zastawy stołowej. Takie rozwiązanie to też świetna alternatywa, kiedy nie dopisze nam pogoda. Odchodzi stres i załatwianie na szybko kosztownego zadaszenia. Wtedy po prostu przenosimy przyjęcie weselne w grodzie na salę weselną.
                    Oryginalnym rozwiązaniem będzie wesele we własnym ogrodzie. Logistycznie jest to dużo większe wyzwanie ale w dobie obostrzeń weselnych może się okazać idealną alternatywą. Jeśli planujecie wesele w ogrodzie w domu to z chęcią pomożemy w organizacji takiego przedsięwzięcia.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post29/post29a.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post29/post29b.jpg').default,
                        author: "Kasia Wosiak",
                    },
                ],
            },
            {
                headerSmall: <span className="grey">WESELE W OGRODZIE - WROCŁAW</span>,
                text:
                    <>
                        Organizowaliśmy już parę przyjęć na łonie natury, ale szczególnie wspominamy nasze <span className="grey bold">garden party pt. FOODTRUCK WEDDING</span> zorganizowane w parku pięknego pałacu na Dolnym Śląsku. Pałac Osowa Sień to idealne miejsce na <CustomPostLink text="kameralne" path="kameralne-wesele-czy-huczne" className="linkDark" />  przyjęcie weselne w ogrodzie. Na terenach zielonych obiektu znajdziecie i podłączenie do prądu, dostęp do wody, jak i piękne drzewa, pod którymi można zorganizować strefy chilloutu dla Waszych gości. Obiekt ma też bazę noclegową, co jest szczególnie ważne podczas całonocnej zabawy. <br />
                        Bardzo polecamy Wam województwo dolnośląskie jako miejsce na organizację wesela w ogrodzie. Okolice <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-wroclaw' })} className="linkDark">Wrocławia</Link> czy Jeleniej Góry słyną z pięknych zamków i pałaców, które posiadają piękne tereny zielone, a co najważniejsze organizują również przyjęcia weselne w ogrodzie.
                    </>
            },
            {
                headerSmall: <span className="grey">WESELE W OGRODZIE - DEKORACJE</span>,
                text:
                    <>
                        Przyjęcie weselne w ogrodzie może być piękne i romantyczne, ale również zaskakujące, nietuzinkowe i wyróżniające Was.Wybierając zabawę na świeżym powietrzu możemy zdecydować się na każdy styl i <CustomPostLink text="motyw przewodni" path="motyw-przewodni-wesela" className="linkDark" />. Do pięknej ogrodowej zieleni będą pasować zarówno pastelowe kwiaty, jak i boho dodatki. Nie ma koloru na który nie moglibyście się zdecydować. W takiej scenerii idealnie sprawdzi się też miks kolorów i faktur dodatków. Śmiało możecie łączyć szklane elementy z surowym drewnem czy miedzianymi dodatkami.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post29/post29c.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post29/post29d.jpg').default,
                    },
                    {
                        src: require('./BlogPics/Post29/post29e.jpg').default,
                    },
                    {
                        src: require('./BlogPics/Post29/post29f.jpg').default,
                    },
                    {
                        src: require('./BlogPics/Post29/post29g.jpg').default,
                        author: 'Wojciech Makula'
                    },
                ],
            },
            {
                headerSmall: <span className="grey">WESELE W OGRODZIE - MUZYKA</span>,
                text:
                    <>
                        Dobrej muzyki nie może zabraknąć również na przyjęciu organizowanym w ogrodzie. Zarówno zespół, jak i dobry DJ powinni świetnie sobie poradzić. Pamiętajcie tylko, aby przed wyborem którejś z opcji omówić wszystkie techniczne kwestie. Trzeba będzie dobrze sprawdzić czy mamy odpowiednią ilość gniazdek, oraz czy może nie będzie potrzebna organizacja sceny i parkietu. Dobrym rozwiązaniem jest też przygotowanie fajnej playlisty z zróżnicowanymi stylami muzycznymi, aby każdy gość mógł się pobawić. Przy tym rozwiązaniu redukujemy koszty, jednak musimy pamiętać o zorganizowaniu komputera lub laptopa oraz dobrym nagłośnieniu.
                        My polecamy Wam pójście o krok dalej i zdecydowanie się na <CustomOuterLink to="https://www.szelestbus.pl/" className="linkDark" text="DJ w busie" />. To nie tylko gwarancja dobrej zabawy, ale także nadanie niepowtarzalnego klimatu wesela w ogrodzie, jak i zaskoczenie dla Waszych gości.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post29/post29h.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post29/post29i.jpg').default,
                        author: "Kasia Wosiak",
                    },
                ],
            },
            {
                headerSmall: <span className="grey">WESELE W OGRODZIE - JAK SIĘ UBRAĆ</span>,
                text:
                    <>
                        Przede wszystkim tak jak tego chcecie i jak będzie Wam wygodnie. Nic nie stoi na przeszkodzie, aby Panna Młoda miała piekną białą suknie do samej ziemi, a Pan Młody wystąpił w eleganckim garniturze. Na pewno warto pomyśleć o obuwiu na zmianę dla Panny Młodej czy narzucie, kiedy przyjdzie już wieczór i zrobi się chłodno.
                        Stylistyka boho idealnie wkomponuje się w klimat ogrodu. Krótkie modele i kombinezony to nowoczesne podejście do mody ślubnej, które doskonale podkreśli kreatywne <span className="bold grey">garden party</span>. Zaś minimalistyczne fasony będą w punkt, jeżeli zależy Wam na eleganckim, ale komfortowym looku.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post29/post29j.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post29/post29k.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post29/post29l.jpg').default,
                        author: "Kasia Wosiak",
                    },
                ],
            }
        ]
    },
    {
        path: '14-hey-wedding-o-tort-i-słodkości-weselne',
        title: '#14 Hey Wedding - Tortowa w akcji, czyli o tortach i słodkościach weselnych',
        seoText: 'Jeśli jesteś na diecie i chcesz ograniczyć spożycie cukru nie słuchaj tego odcinka! Tym razem rozmawiamy z wicemistrzynią Europy w zdobieniu tortów — Natalią Szymańską.',
        tag: 'podcast',
        date: '18 sty 2021',
        textShort: 'Jeśli jesteś na diecie i chcesz ograniczyć spożycie cukru, nie słuchaj tego odcinka! Tym razem rozmawiamy z wicemistrzynią Europy w...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                Jeśli jesteś na diecie i chcesz ograniczyć spożycie cukru, nie słuchaj tego odcinka! Tym razem rozmawiamy z wicemistrzynią Europy w zdobieniu tortów — <span className="bgMintLight">Natalią Szymańską</span>. Dowiecie się między innymi, czy każdy może zostać cukiernikiem i jak zaczęła się jej słodka przygoda. <span className="bgMintLight"></span>
            </>,
        content: [
            {
                text: 'Zastanawiacie się, kiedy rozpocząć poszukiwania tortu weselnego i słodkiego stołu? Nie wiecie, ile słodkości powinniście zamówić? Na jakie smaki się zdecydować? Ten podcast rozwieje Wasze wątpliwości. Poza tym kilka rzeczy, o których być może nie mieliście pojęcia. Dlaczego powinno się wyciągnąć tort z lodówki na godzinę przed jego zaserwowaniem i nie czekać z serwisem do północy. Dlaczego warto zdecydować się na kilka smaków tortu. Jak stworzyć candy bar zgodny z motywem przewodnim wesela.'
            },
            {
                text: 'Natalia zdradzi również, co jest dla niej największym wyzwaniem w pracy przy weselach i dlaczego pary młode oraz wedding planerzy nie odbierają od niej telefonów przed ślubem. Jak zwykle nie zabraknie humoru i ciekawych anegdot. Będzie pysznie!'
            },
            {
                text:
                    <>Link do Instagrama Natalii: <CustomOuterLink to="https://www.instagram.com/tortowawakcji/" text="Tortowa w Akcji" className="linkMint" /> </>
            }
        ],
        links:
            <>
                <iframe title="#14 Hey Wedding - Tortowa w akcji - czyli o tortach i słodkościach weselnych." height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/dmp9w-f7efdb?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: '13-hey-wedding-wesele-w-zamku-ksiaz',
        title: '#13 Hey Wedding - Bajkowe wesele Angeliki i Pawła',
        seoText: 'Rozmowa z jedną z naszych par, której wesele odbyło się w Zamku Książ. Opowiemy o ciekawych rozwiązaniach i nieoczekiwanych zwrotach akcji które spotkały nas podczas organizacji wesela.',
        tag: 'podcast',
        date: '18 gru 2020',
        textShort: 'Gośćmi 13 odcinka podcastu Hey Wedding byli Angelika i Paweł. Rozmawialiśmy o ich bajkowym weselu w Zamku Książ. O spektakularnych dekoracjach, o tym z czym...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                Gośćmi 13 odcinka podcastu <span className="bgMintLight">Hey Wedding</span> byli <span className="bgMintLight">Angelika i Paweł</span>. Rozmawialiśmy o ich bajkowym weselu w Zamku Książ. O spektakularnych dekoracjach, o tym z czym wiąże się organizacja wesela w turystycznym miejscu oraz o współpracy przy projekcie, który wymagał skoordynowania bardzo dużego zespołu wykonawców.
            </>,
        links:
            <>
                <iframe title="#13 Hey Wedding - Bajkowe wesele Angeliki i Pawła" height="122" width="100%" style={{ border: 'none' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/qhrrz-f55d39?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>

    },
    {
        path: 'folwark-wasowo-wesele',
        seoTitle: 'Folwark Wąsowo - wesele w romantycznym stylu | Czary Marry',
        seoText: 'Planujecie zorganizować Wasze wesele marzeń w Folwarku Wąsowo? Zobaczcie naszą nieoczywistą realizację łączącą odcienie bladego różu obrusów z bielą piwonii oraz surowym wnętrzem stodoły.',
        date: '10 gru 2020',
        title: 'Folwark Wąsowo - miejsce na wesele dające nieograniczone możliwości.',
        textShort: 'Widok na kuźnię, która znajduje się na terenie Folwarku Wąsowo.',
        mainPic: {
            src: require('./BlogPics/Post28/post28.jpg').default
        },
        textMain:
            <>
                Można pokusić się o stwierdzenie, że każdy, kto poszukuje pięknej i klimatycznej stodoły na wesele na terenie województwa wielkopolskiego, musi prędzej czy później trafić na <span className="bgGreyLight">Folwark Wąsowo</span>. To niezwykłe miejsce niedaleko Poznania cieszy się popularnością nie tylko wśród par młodych, ale i wykonawców ślubnych. Pamiętamy, gdy po raz pierwszy miałyśmy okazję odwiedzić Folwark Wąsowo. Byłyśmy oczarowane jego klimatem i możliwościami, jakie oferuje. W poniższym artykule opowiemy Wam o jego największych zaletach.
            </>,
        content: [
            {
                pics: [
                    {
                        src: require('./BlogPics/Post28/post28a.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28b.jpg').default
                    },
                ]
            },
            {
                headerSmall: <span className="grey">Folwark Wąsowo — nie tylko na rustykalne wesele.</span>,
                text:
                    <>
                        Mogłoby się wydawać, że stodoła Wąsowo jest miejscem bardzo określonym przez swój klimat. Jednak gwarantujemy Wam, że można tam zorganizować przyjęcia weselne nie tylko w stylu rustykalnym. Świetnie obronią się tam również bardziej nowoczesne klimaty, a także styl boho oraz bardzo popularne w ostatnich sezonach romantyczne dekoracje zakrawające na niewymuszoną elegancję. Przykładem może być wesele jednej z naszych par, które zorganizowałyśmy w Folwarku Wąsowo jakiś czas temu. Para wymarzyła sobie nieco inny klimat, a przy pomocy zespołu <span className="bgGreyLight">ART SIZE</span> udało się go wyczarować. Folwark w Wąsowie udekorowały różowe połyskliwe obrusy i biało-różowe piwonie z elementami zieleni.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post28/post28c.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28d.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28e.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28f.jpg').default
                    },
                ]
            },
            {
                headerSmall: <span className="grey">Wąsowo Folwark - Infrastruktura, która rozpieszcza.</span>,
                text:
                    <>
                        To bardzo ważny element, szczególnie jeżeli planujecie noclegi dla gości lub przedłużony weekend weselny. Na terenie Folwarku Wąsowo znajduje się aż 90 miejsc noclegowych w trzech zabytkowych budynkach. Ponadto możecie skorzystać z gościnności <span className="bgGreyLight">Źrebięciarni</span>, gdzie istnieje możliwość zjedzenia obiadu, wypicia kawy lub regionalnego piwa. Dzięki takiemu zapleczu wesele w Wąsowie zorganizujecie gładko i bezproblemowo.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post28/post28g.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28h.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="grey">Folwark w Wąsowie - Idealne miejsce na ceremonię cywilną i nie tylko.</span>,
                text:
                    <>
                        Folwark Wąsowo daje ogromne możliwości aranżacyjne przestrzeni poza stodołą. To jedna z cech, za które lubimy go najbardziej. Uwielbiamy <CustomPostLink path='wesele-w-plenerze' className="linkLight">wesela plenerowe</CustomPostLink>, strefy chill out, zewnętrzny bar. Przestrzeń przed wejściem do stodoły Wąsowo jest bardzo duża, znajdziemy tam estetyczne parasole i stoliki. Ma to również szczególne znaczenie podczas organizacji poprawin. Kucharz będzie przygotowywał dla Was i Waszych gości pyszne specjały z grilla, a Wy możecie wylegiwać się na trawie lub ukryć w zaciszu stodoły i odpoczywać po weselu.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post28/post28i.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28j.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28k.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28l.jpg').default
                    }
                ]
            },
            {
                text: 'W Wąsowie miejsc na ceremonię ślubną jest kilka, my mamy swoje ulubione, które zobaczycie na zdjęciach poniżej. Nie brakuje tu również pięknych zakątków, które staną się niepowtarzalnym tłem dla Waszej sesji plenerowej.',
                pics: [
                    {
                        src: require('./BlogPics/Post28/post28m.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28n.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="grey">Stodoła Wąsowo - wybitnie dobra kuchnia.</span>,
                text:
                    'Folwark Wąsowo ogromną wagę przywiązuje do jedzenia - sezonowe potrawy, lokalne produkty, własny ogród warzywny i tradycyjny smak w nowoczesny wydaniu. To musi się udać. Do dziś z rozrzewnieniem wspominamy przepyszną zupę borowikową i niezwykle dopracowany sposób serwowania dań.',
                pics: [
                    {
                        src: require('./BlogPics/Post28/post28o.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="grey">No i te koty...</span>,
                pics: [
                    {
                        src: require('./BlogPics/Post28/post28p.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post28/post28q.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="grey">Folwark wąsowo - opinie</span>,
                text: 'W naszej karierze wedding plannera organizowałyśmy wesela w wielu pięknych miejscach. Według naszej opinii wesele w Folwarku Wąsowo to gwarancja niezapomnianych wspomnień i pewności, że wszystko zostanie dopracowane w najmniejszym detalu.'
            },
            {
                text:
                    <>
                        Jeżeli marzy Ci się wyjątkowe wesele na terenie <span className="bgGreyLight">Poznania</span> lub województwa wielkopolskiego, napisz lub zadzwoń. Pomożemy Ci zrealizować nawet najśmielsze marzenia.
                    </>
            }
        ],
        links:
            <>
                <p>
                    Organizacja: <Link to={URLS.HOME} className="CustomLink">Agencja Ślubna Czary Marry</Link> <br />
            Wesele: <CustomOuterLink to="http://folwarkwasowo.pl/" text="Folwark Wąsowo" /> <br />
            Dekoracje: <CustomOuterLink to="https://www.artsize.pl/" text="Art Size" /> <br />
            Fotograf: <CustomOuterLink to="http://svetlanabennington.com/" text="Svetlana Bennington" /><br />
                </p>
            </>
    },
    {
        path: '12-hey-wedding-podcast-dekoracje-slubne-florystyka',
        title: '#12 Hey Wedding - O florystyce ślubnej z Anello Decor',
        seoText: 'W 12 odcinku podcastu Hey Wedding dowiecie się, na co zwrócić uwagę podczas wyboru florystki, a następnie tworząc koncepcję dekoracji. O czym należy pamiętać planując samodzielne dekorowanie sali. Usłyszycie również odpowiedzi na najcześciej zadawane pytania.',
        tag: 'podcast',
        date: '23 lis 2020',
        textShort: 'W 12 odcinku podcastu Hey Wedding rozmawiamy z Anello Decor o dekoracjach ślubnych. Aneta opowie, jak narodziła się jej pasja do...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                W 12 odcinku podcastu <span className="bgMintLight">Hey Wedding</span> rozmawiamy z <span className="bgMintLight">Anello Decor</span> o dekoracjach ślubnych. <br />
                <span className="bgMintLight">Aneta</span> opowie, jak narodziła się jej pasja do florystyki oraz o swoich zawodowych marzeniach. Nie zabraknie cennych porad, przydatnej wiedzy i kwiecistych metafor.
            </>,
        content: [
            {
                text: 'Dowiecie się, na co zwrócić uwagę podczas wyboru florystki, a następnie tworząc koncepcję dekoracji. O czym należy pamiętać planując samodzielne dekorowanie sali. Usłyszycie również odpowiedzi na najcześciej zadawane pytania dotyczące florystyki ślubnej.'
            }
        ],
        links:
            <>
                <iframe title="#12 Hey Wedding - O florystyce ślubnej z Anello Decor." height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/d3pye-f311da?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: '11-hey-wedding-musze-przelozyc-wesele-z-powodu-koronawirusa',
        title: '#11 Hey Wedding - Znowu musimy przełożyć wesele - Rozmowa z Beatą i Pawłem',
        seoText: 'Rozmowa z parą młodą, która z powodu koronawirusa musiała przełożyć swoje wesele.',
        tag: 'podcast',
        date: '27 paź 2020',
        edited: '30 paź 2020',
        textShort: 'Rozmowa z parą młodą, która z powodu koronawirusa musiała przełożyć...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                Wszyscy mówili, że mają pecha, ale patrząc na nich w dniu ślubu wiedziałyśmy, że to prawdziwi szczęściarze. Zapraszamy Was do przesłuchania rozmowy z <span className="bgMintLight">Beatą i Pawłem</span>, którzy musieli dwukrotnie zmienić swoje ślubno-weselne plany. Mimo że nie było łatwo, a los nie sprzyjał, udało nam się zorganizować niesamowite wesele, o którym chcielibyśmy Wam opowiedzieć.
            </>,
        links:
            <>
                <iframe title="#11 Hey Wedding - Znowu musimy przełożyć wesele - Rozmowa z Beatą i Pawłem" height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/uedni-f08e66?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'zamek-ksiaz-wesele-motyw-rose-gold',
        title: 'Wesele w Zamku Książ w stylu Rose Gold.',
        seoText: 'W poniższym artykule opowiemy Wam o naszej niesamowitej podróży do wnętrz jednego z najpiękniejszych zamków na wesele w Polsce, jaką mieliśmy przyjemność odbyć, organizując i koordynując przyjęcie weselne jednej z naszych par.',
        date: '9 paź 2020',
        edited: '27 paź 2020',
        textShort: 'Zamek Książ to jeden z największych a zarazem najpiękniej położonych tego typu obiektów w Polsce. Wybudowany na wzniesieniu, otoczony...',
        mainPic: {
            src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/11.jpg').default
        },
        textMain:
            <>
                <CustomOuterLink to="https://www.ksiaz.walbrzych.pl/" text="Zamek Książ" className="linkPink" /> to jeden z największych a zarazem najpiękniej położonych tego typu obiektów w Polsce. Wybudowany na wzniesieniu, otoczony gęstym lasem, o niesamowitej architekturze i historii owianej tajemnicą. Nic dziwnego, że wiele par młodych decyduje się na organizację wesela w tym niesamowitym miejscu. Jeśli marzy Wam się <span className="bold pink">królewskie przyjęcie w baśniowej scenerii</span>, warto zdecydować się na ślub i wesele na zamku Książ. <br /> W poniższym artykule opowiemy Wam o naszej niesamowitej podróży do wnętrz jednego z najpiękniejszych zamków na wesele w Polsce, jaką mieliśmy przyjemność odbyć, organizując i koordynując przyjęcie weselne jednej z naszych par.
            </>,
        content: [
            {
                pics: [
                    {
                        src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/01.jpg').default,
                        author: 'Magdalena Adamczewska'
                    },
                    {
                        src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/ver6.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27a.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27b.jpg').default,
                        author: 'Jam Studio'
                    },
                ]
            },
            {
                headerSmall: <span className="pink">Jak zorganizować wesele na zamku Książ</span>,
                text:
                    <>
                        Zamek Książ to miejsce zabytkowe, skoncentrowane na turystyce. Organizacja wesela w tego typu obiektach niesie za sobą szereg obostrzeń, które mogą wpłynąć na charakter przyjęcia i logistykę przygotowań. Dzięki uprzejmości władz zamku mogliśmy skorzystać z jego wnętrz i z należytym poszanowaniem zasad, które na nim panują, zorganizować wymarzone przyjęcie dla naszej pary młodej. <br />Podczas organizacji wesela na zamku Książ należy wziąć pod uwagę wiele czynników, takich jak ruch turystyczny, różnego rodzaju zezwolenia, wynajem odpowiednich przestrzeni, czy firmy cateringowej. Pomoc wedding planner’a okazała się nieoceniona, zarówno dla naszych klientów, jak i wykonawców ślubnych pracujących podczas wesela na zamku Książ. Ponieważ dekoracje były bardzo spektakularne, wymagały zaangażowania w projekt wyspecjalizowanych firm. Razem z zespołem <span className="bold pink">Art Size</span> oraz <span className="bold pink">BTL</span> pracowaliśmy przez dwa dni, aby uzyskać wymarzony efekt pięknego wesela na zamku. Oceńcie sami, czy się udało!
                    </>,
                pics: [
                    {
                        src: require('../utils/BlogPics/Post27/post27c.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27d.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/05.jpg').default,
                        author: 'Jam Studio'
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Ślubne dekoracje w stylu Rose Gold</span>,
                text:
                    <>
                        Dlaczego motyw rose gold? Postanowiliśmy nawiązać do klimatu zamku Książ i jego elewacji. Dlatego nasz wybór padł na kolor różowy. Aby dodać dekoracjom elegancji i klasy zdecydowaliśmy się na dodatki w kolorze <span className="bold pink">rose gold</span>. Było to strzałem w dziesiątkę. Zamiast tradycyjnych kompozycji na stole stanęły ponad półtorametrowe drzewa uginające się od hortensji w różnych odcieniach różu. Całość uzupełniły rose gold’owe obrusy oraz dodatki w odcieniach grafitu, które nadały aranżacji nowoczesnego charakteru. Niezwykle ważnym elementem były dekoracje świetlne, które wieczorową porą totalnie odmieniły naszą bajkową scenerię i zaskoczyły gości. Ozdoby, dodatki i dekoracje rose gold stały się wisienką na torcie <span className="bold pink">eleganckiego wesela na zamku Książ</span>.
                    </>,
                pics: [
                    {
                        src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/11.jpg').default,
                        author: 'Magdalena Adamczewska'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27e.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27f.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27g.jpg').default,
                        author: 'Magdalena Adamczewska'
                    },
                    {
                        src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/17.jpg').default,
                        author: 'Magdalena Adamczewska'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27h.jpg').default,
                        author: 'Magdalena Adamczewska'
                    },
                ]
            },
            {
                headerSmall: <span className="pink">Zamek Książ — wesele pełne możliwości</span>,
                text:
                    <>
                        Na zamku Książ do dyspozycji mieliśmy salę balową, gdzie odbywało się przyjęcie weselne, ale także rotundę, salę kominkową, holl modrzewiowy. W dwóch pierwszych miejscach zaangażowaliśmy bufety ze stolikami koktajlowymi, wszystko płynnie przechodziło w strefę relaksu z wygodnymi kanapami i barem. <br />Goście mieli również do dyspozycji <span className="bold pink">Czarny Dziedziniec</span>, gdzie mogli zaczerpnąć świeżego powietrza. Tworząc takie strefy, udało nam się zamienić w atut coś, co początkowo mogło się wydawać problemem przy organizacji wesela na zamku, czyli kilka małych sal i podzieloną przestrzeń. <br /> Według naszej opinii, <span className="bold pink">zamek Książ</span> to idealne miejsce na organizację zarówno eleganckiego ślubu jak i wesela. Ślub na zamku Książ to świetne rozwiązanie dla par młodych ceniących praktyczność organizacji ślubu i wesela w tym samym miejscu.
                    </>,
                pics: [
                    {
                        src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/03.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27i.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27n.jpg').default,
                        author: 'Magdalena Adamczewska'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27j.jpg').default,
                        author: 'Magdalena Adamczewska'
                    },
                    {
                        src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/ver7.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27k.jpg').default,
                        author: 'Jam Studio'
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Zamek Książ — sesja ślubna podczas wesela</span>,
                text: 'Zamek Książ słynie z niesamowitych wnętrz oraz przepięknego ogrodu, który go otacza. Daje ogromne możliwości do zrealizowania wymarzonej sesji plenerowej w dniu ślubu. Postanowiliśmy wykorzystać jego atuty. Zaangażowaliśmy sesję rodzinną w monumentalnej sali Maksymiliana oraz zdjęcia plenerowe. Zarówno fotograf, jak i filmowcy mieli tu ogromne pole do popisu i wykonali masę niesamowitych ujęć podczas sesji ślubnej w zamku Książ.',
                pics: [
                    {
                        src: require('../components/OurCouples/OurCouplesPics/AngelikaPawel/ver3.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27l.jpg').default,
                        author: 'Jam Studio'
                    },
                    {
                        src: require('../utils/BlogPics/Post27/post27m.jpg').default,
                        author: 'Jam Studio'
                    }
                ]
            },
            {
                text:
                    <>
                        Jeśli podoba Wam się, zorganizowane przez nas wesele na Zamku Książ z motywem przewodnim w kolorze <span className="bold pink">gold rose</span>, koniecznie zajrzyjcie do naszych innych <Link to={URLS.COUPLES} className="linkPink">realizacji</Link>. Znajdziecie tam inne piękne przyjęcia w królewskim stylu. Polecamy również elegancką <CustomPostLink path="sesja-stylizowana-w-stylu-glamour" className="linkPink">ślubną sesję stylizowaną</CustomPostLink> zorganizowaną w ruinach zamku Sarny.
                    </>
            },
            {
                text: 'Wesele na zamku Książ urzekło nas swoim eleganckim i dostojnym stylem. Jeśli marzy się Wam podobne wesele na zamku to serdecznie polecamy się do organizacji tego typu przyjęcia.'
            }
        ],
        links:
            <>
                <p>Wesele: <CustomOuterLink to="https://www.ksiaz.walbrzych.pl/" text="Zamek Książ" /> <br />
                Motyw: Rose Gold
                Dekoracje: <CustomOuterLink to="https://www.artsize.pl/" text="Art Size" /> <br />
                Światło: <CustomOuterLink to="https://www.facebook.com/btlsystemymedialne/" text="BTL" /> <br />
                Słodkości: <CustomOuterLink to="http://galeriaslodkosci.pl/" text="Galeria Słodkości" /> <br />
                Fotograf: <CustomOuterLink to="https://jamstudio.pl/" text="Jam Studio" /> i <CustomOuterLink to="https://www.facebook.com/MagdalenaAdamczewskaphotography/" text="Magdalena Adamczewska" /> <br />
                Filmowiec: <CustomOuterLink to="http://cameralni.com/" text="Cameralni" /> <br />
                </p>
            </>
    },
    {
        path: '10-hey-wedding-pogromcy-mitow-cz-2',
        title: '#10 Hey Wedding - Pogromcy mitów cz.2',
        seoText: 'W 10 odcinku podcastu Hey Wedding bierzemy pod lupę najpopularniejsze weselne mity. Porozmawiamy między innymi o tym, czy to prawda, że wszystko co weselne jest droższe, czym jest tradycyjne Polskie wesele, oraz czy usługi wedding plannera są drogie.',
        tag: 'podcast',
        date: '1 wrz 2020',
        textShort: 'Podcast o tematyce ślubnej. W 10 odcinku kolejny raz bierzemy pod lupę weselne mity.',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                To już 10 odcinek naszego podcastu! Wracamy do Was po krótkiej przerwie z kolejną dawką <span className="bgMintLight">weselnych mitów</span>, które postanowiłyśmy wziąć pod lupę. Tym razem porozmawiamy czy wszystko, co ślubne jest droższe, a jeśli tak to z czego to wynika. Rozważymy, czy wesele musi być dwudniowe i czy wypada zorganizować przyjęcie bez poprawin. Będzie też sporo o "tradycyjnych, polskich weselach" i ich "najważniejszych" elementach.
            </>,
        content: [
            {
                text:
                    <>
                        Zdradzimy Wam, dlaczego lepiej nie planować zbyt dużej ilości atrakcji, oraz zastanowimy się, czy ślub cywilny może mieć intymny i romantyczny charakter. Podyskutujemy również o tym, czy <span className="bgMintLight">pomoc wedding plannera</span> to droga usługa oraz czy warto decydować się na jego pomoc, skoro podczas organizacji wesela możemy liczyć na rodziców i przyjaciół. Wszystko to przeplatane masą około ślubnych dygresji, inspiracji i ciekawych anegdot.
                    </>
            },
            {
                text:
                    <>
                        Jeśli spodobał Wam się ten odcinek, koniecznie posłuchajcie <CustomPostLink path="6-hey-wedding-pogromcy-mitów" text="#6 Hey Wedding - Pogromcy mitów" className="linkMint" />.
                    </>
            }
        ],
        links:
            <>
                <iframe title="#10 Hey Wedding - Pogromcy mitów cz.2" height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/7aebs-e9c9ab?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'sesja-stylizowana-w-stylu-glamour',
        title: 'Sesja stylizowana - Ślub, którego nie było.',
        seoText: 'Sesja ślubna w stylu glamour. Nieoczywiste połączenie surowych zamkowych murów przełamane eleganckimi dodatkami i odważną kolorystyką oraz formą kwiatów.',
        date: '10 sie 2020',
        textShort: 'Chociaż dziwnie to brzmi do zorganizowania stylizowanej sesji fotograficznej, zainspirował nas koronawirus. Podczas pandemii, każdego dnia spotykałyśmy się z...',
        mainPic: {
            src: require('../components/OurCouples/OurCouplesPics/OlgaPiotr/05.jpg').default
        },
        textMain:
            <>
                Chociaż dziwnie to brzmi do zorganizowania stylizowanej sesji fotograficznej, zainspirował nas koronawirus. Podczas pandemii, każdego dnia spotykałyśmy się z rozżaleniem młodych par, które były zmuszone przełożyć swój najważniejszy dzień w życiu o kolejne miesiące. Widziałyśmy, jak ucieka z nich cały entuzjazm i tracą zapał do organizacji wymarzonego wesela. Chciałyśmy dać tym parom coś od siebie. I tu właśnie zrodził się pomysł stylizowanej sesji dla wybranej młodej pary, która przez pandemię musiała odwołać swój ślub. Tak, tak - <span className="bold pink">stylizowana sesja dla prawdziwej pary młodej</span>, zamiast wynajętych modeli.<br />
            To, na czym nam zależało to szczere emocje i prawdziwa miłość. Zobaczcie piękną relację z tego dnia, którą przygotowali <span className="bold pink">Mariola i Kamil</span> z <CustomOuterLink to="http://maleszarestudio.pl/" text="Małego Szarego Studia" className="linkPink" />.
            </>,
        topPic: {
            src: require('../components/OurCouples/OurCouplesPics/OlgaPiotr/05.jpg').default
        },
        content: [
            {
                headerSmall: <span className="pink">Sesja w stylu glamour w ruinach zamku.</span>,
                text:
                    <>
                        Nie ma nic bardziej klimatycznego niż ruiny starego zamku, ale jeżeli dodamy do tego trochę dekoracji w stylu nowoczesnego glamouru mamy idealny przepis na niepowtarzalną sesję zdjęciową. Tą niezwykle ważną kwestię powierzyliśmy <span className="bold pink">Anecie</span> z <CustomOuterLink to="https://www.facebook.com/anellodecor/" text="Anello Decor" className="linkPink" />. Wszystko uzupełniły detale od
                        <CustomOuterLink to="https://wypozyczalnia-dekoracji.pl/" text="Wypożyczalni Dekoracji App" className="linkPink" /> oraz <CustomOuterLink to="https://slubnapodwiazka.com.pl/wypozyczalnia/" text="Ślubny Stół" className="linkPink" />. Piękne szklane kieliszki udostępniła nam <CustomOuterLink to="http://hutajulia.com/" text='Huta Szkła "Julia"' className="linkPink" />.
                    </>
            },
            {
                text:
                    <>
                        Tworząc koncepcję naszej stylizowanej sesji w ruinach zamku, postawiłyśmy na nieoczywiste połączenie kolorów. W palecie barw pojawił się więc róż, ceglany i czerń w połączeniu z jasnymi kwiatami. Dało to klimat elegancji i nowoczesności. Ruiny <CustomOuterLink to="http://www.zameksarny.pl/" text='zamku Sarny' className="linkPink" /> okazały się idealne dla tych kolorów.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post26/post26a.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post26/post26b.jpg').default
                    },
                    {
                        src: require('../components/OurCouples/OurCouplesPics/OlgaPiotr/ver1.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Sesja ślubna glamour— detale i inspiracje.</span>,
                text:
                    <>
                        Znalazłyśmy idealną parę młodą, miejsce, zadbałyśmy o główne elementy sesji. Wiedziałyśmy jednak, że stylizowana sesja ślubna nie może obyć się bez papeterii. Trzeba zadbać o każdy szczegół. Pojawiły się więc nowoczesne zaproszenia ślubne z nutką elegancji, które przygotowała dla nas pracownia <CustomOuterLink to="https://pieknieprosze.pl/" text="Pięknie Proszę" className="linkPink" />. Całość dopełnił tort od <CustomOuterLink to="http://tort-artystyczny.pl/" text="Petite Pivioine" className="linkPink" /> oraz makaroniki, które przygotowała pracownia cukiernicza <CustomOuterLink to="https://ouioui.pl/" text="Oui Oui" className="linkPink" /> w kolorach i motywie przewodnim. Zadbaliśmy o najmniejsze detale, takie jak jedwabne wstążki od <CustomOuterLink to="https://shemakes.pl/" text="SheMakes" className="linkPink" />, które podkreślały piękno dekoracji.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post26/post26c.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post26/post26d.jpg').default
                    },
                    {
                        src: require('./BlogPics/Post26/post26e.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Stylizacja pary młodej.</span>,
                text:
                    <>
                        Stroje naszej młodej pary również idealnie wpasowały się w klimat sesji w ruinach zamku. Pan młody miał na sobie czarny klasyczny garnitur od <CustomOuterLink to="https://giacomo.pl/" text="Giacomo Conti" className="linkPink" />, a nasza panna młoda dostała aż 4 sukienki ślubne oraz <CustomOuterLink to="https://whitejasmine.pl/" text="biżuterię" className="linkPink" />. Nad jej wizerunkiem czuwała <CustomOuterLink to="https://agnieszkaswiatly.pl/" text="Agnieszka Światły" className="linkPink" />. O makijaż i fryzurę zadbała <CustomOuterLink to="http://ewelinalosko.pl/" text="Ewelina Łośko" className="linkPink" />. W końcu sesja zdjęciowa w stylu glamour wymaga trochę przepychu i ekstrawagancji. Zdjęcia plenerowe przełamywały elegancki charakter sesji, a uzupełnieniem stylizacji panny młodej był <CustomOuterLink to="https://www.hatupdesign.com/" text="kapelusz" className="linkPink" />.
                    </>,
                pics: [
                    {
                        src: require('../components/OurCouples/OurCouplesPics/OlgaPiotr/ver4.jpg').default
                    },
                    {
                        src: require('../components/OurCouples/OurCouplesPics/OlgaPiotr/ver7.jpg').default
                    },
                    {
                        src: require('../components/OurCouples/OurCouplesPics/OlgaPiotr/ver5.jpg').default
                    },
                ]
            },
            {
                headerSmall: <span className="pink">Elegancka sesja ślubna, czy wesele w zamku?</span>,
                text: 'Stare, opuszczone ruiny to nie tylko wspaniałe miejsce na organizację sesji stylizowanej, ale również na nietuzinkowe przyjęcie ślubne. W miejscu, gdzie powstała nasza elegancja sesja ślubna, na co dzień odbywają się koncerty, przyjęcia oraz imprezy okolicznościowe. Mamy nadzieję, że stanie się ona dla Was inspiracją :)'
            },
            {
                text:
                    <>
                        Chcielibyście zobaczyć więcej zdjęć z tej cudownej sesji? Zerknijcie do zakładki <Link to={URLS.COUPLES} className="linkPink">Nasze pary</Link>. Zobaczcie również reportaż filmowy z sesji, który przygotowali <span className="bold pink">Kamil i Patryk</span> z <CustomOuterLink to="https://www.sakramentalnetak.com/" text="Sakramentalne Tak" className="linkPink" />.
                    </>
            }
        ],
        links:
            <>
                <iframe title="Ślub, którego nie było" width="100%" height="460" src="https://www.youtube.com/embed/CqlcOUVK1ns" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowfullscreen></iframe>
            </>
    },

    {
        path: '9-hey-wedding-porady-od-fotografa-slubnego',
        title: '#9 Hey Wedding - Zanim zdecydujesz się na wybór fotografa ślubnego  - rozmowa z LMFOTO',
        seoText: 'Kolejny odcinek podcastu Hey Wedding to spotkanie dwóch duetów; Agencji Ślubnej Czary Marry oraz LMFOTO. Podczas rozmowy zadałyśmy chłopakom kilkanaście nie do końca oczywistych pytań. Nie zabrakło również ciekawych historii oraz dygresji.',
        tag: 'podcast',
        date: '16 lip 2020',
        edited: '1 wrz 2020',
        textShort: 'Kolejny odcinek podcastu Hey Wedding to spotkanie dwóch duetów - Agencji Ślubnej Czary Marry oraz...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                Kolejny odcinek podcastu <span className="bold grey">Hey Wedding</span> to spotkanie dwóch duetów - Agencji Ślubnej Czary Marry oraz <CustomOuterLink to="https://www.lmfoto.pl/" text="LMFoto" className="linkMint" />. Podczas rozmowy zadałyśmy chłopakom kilkanaście nie do końca oczywistych pytań. Nie zabrakło również ciekawych historii oraz dygresji.
            </>,
        content: [
            {
                text: <><span className="bold grey">Szymon i Łukasz</span> odpowiedzą, który z nich jest lepszym fotografem, o ciągłym doskonaleniu swoich umiejętności oraz dlaczego, mimo że tworzą duet, nie pracują na weselach razem. Dowiecie się również, co uważają na temat sesji plenerowych w dniu ślubu oraz sesjach innego dnia. Porozmawiamy o plusach i minusach każdego rozwiązania. Zapytamy, czy fotograf powinien ingerować w przebieg wydarzeń w dniu ślubu, a jeśli tak to w jakich momentach.</>
            },
            {
                text: 'Czy warto zdecydować się na ekipę foto i film, czy na dwie osobne firmy wyspecjalizowane w tych dziedzinach? Jak wygląda współpraca na płaszczyźnie foto -film, DJ oraz zespół? Co jest kluczem do owocnej współpracy, a co może stanąć na przeszkodzie do stworzenia niesamowitych ujęć?'
            },
            {
                text: 'Porozmawiamy o tym, ile godzin fotograf potrzebuje na stworzenie reportażu ślubnego, czy warto zdecydować się na skrócenie lub wydłużenie jego pracy. Dlaczego warto postawić na fotografa mającego doświadczenie w branży ślubnej. Czy goście robiący zdjęcia i kręcący filmy smartfonem przeszkadzają w pracy. Dlaczego warto odłożyć telefon do kieszeni podczas najważniejszych momentów ślubu i wesela. Pogadamy również co z tą surówką, czyli o nieobrobionym materiale zdjęciowym, o którą prosi para.'
            },
            {
                text: <>
                    Zadamy też Szymonowi jego znienawidzone pytanie... dowiedzcie się sami jakie:) <br />
                Zapraszamy do słuchania!
                </>
            }
        ],
        textAuthor: "Kasia i Ola",
        links:
            <>
                <iframe title="#9 Hey Wedding - O fotografii ślubnej z LMFOTO" height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/ipx6c-e36b45?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'konsultant-ślubny-radzi',
        title: 'KONSULTANT ŚLUBNY RADZI',
        seoText: 'Zapraszamy Was do lektury artykułu przygotowanego przez naszych zaprzyjaźnionych fotografów ślubnych z LM Foto. Znajdziecie tam rozmowę z nami oraz innymi fantastycznymi wedding plannerkami. Opowiadamy o tym, dlaczego organizujemy śluby, radzimy, o czym warto pamiętać podczas przygotowań oraz zdradzamy, jakie wesela...',
        date: '2 lip 2020',
        edited: '23 paź 2020',
        textShort: 'Zapraszamy Was do lektury artykułu przygotowanego przez naszych zaprzyjaźnionych fotografów ślubnych z LM Foto. Znajdziecie tam rozmowę z nami oraz innymi fantastycznymi...',
        mainPic: {
            src: require('./BlogPics/Post25/post25.jpg').default
        },
        textMain:
            <>
                Zapraszamy Was do lektury artykułu przygotowanego przez naszych zaprzyjaźnionych <span className="bold grey">fotografów ślubnych z LM Foto</span>. Znajdziecie tam rozmowę z nami oraz innymi fantastycznymi wedding plannerkami. Opowiadamy o tym, dlaczego organizujemy śluby, radzimy, o czym warto pamiętać podczas przygotowań oraz zdradzamy, jakie wesela lubimy najbardziej. W artykule m.in. informacje co z stylem i <CustomPostLink path="motyw-przewodni-wesela" className="linkLight" text="motywem przewodnim wesela" />. <br />A wszystko to z kilku odmiennych perspektyw.
            </>,
        content: [
            {
                text: <CustomOuterLink to="https://www.lmfoto.pl/blog/2020/06/konsultant-slubny-radzi/?fbclid=IwAR0NrsFz6qb9xkd226N11SCoHUFTeqZyfvdXvlO5-Xu4Y1WEpcYeOFiEXGU" className="linkLight" text="Link do artykułu - Konsultant Ślubny Radzi LM FOTO" />,
                pics: [
                    {
                        src: require('./BlogPics/Post25/post25a.png').default
                    }
                ]
            }
        ]
    },
    {
        path: '8-hey-wedding-suknia-ślubna-z-drugiej-ręki',
        title: '#8 Hey Wedding - Suknie ślubne z drugiej ręki.',
        seoText: 'W ósmym odcinku podcastu Hey Wedding, miałyśmy przyjemność spotkać się z Nadją Pędzik, organizatorką festiwalu sukien ślubnych z drugiej ręki. Rozmawiałyśmy o tym,  dlaczego warto rozważyć zakup używanej sukni ślubnej, o świadomych konsumentach, ruchu Zero Waste.',
        tag: 'podcast',
        date: '29 cze 2020',
        edited: '1 wrz 2020',
        textShort: 'W ósmym odcinku podcastu Hey Wedding, miałyśmy przyjemność spotkać się z Nadją Pędzik, organizatorką festiwalu sukien...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                W ósmym odcinku podcastu <span className="bgMintLight">Hey Wedding</span> miałyśmy przyjemność spotkać się z <span className="bgMintLight">Nadją Pędzik</span>, organizatorką festiwalu sukien ślubnych z drugiej ręki. Rozmawiałyśmy o tym,  dlaczego warto rozważyć zakup używanej sukni ślubnej, o świadomych konsumentach, ruchu Zero Waste.
            </>,
        links:
            <>
                <iframe title="#8 Hey Wedding - Suknie ślubne z drugiej ręki." height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/9ifjf-e17efd?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: '7-hey-wedding-polsko-irlandzkie-wesele-klaudii-i-kierana',
        title: '#7 Hey Wedding - polsko-irlandzkie wesele Klaudii i Kierana',
        seoText: 'W siódmym odcinku Hey Wedding rozmawiamy z Klaudią, naszą panną młodą. Porozmawiamy o połączeniu dwóch kultur, współpracy opartej na przyjacielskich relacjach i przedweselnych stresach.',
        tag: 'podcast',
        date: '8 cze 2020',
        edited: '1 wrz 2020',
        textShort: 'W siódmym odcinku Hey Wedding rozmawiamy z Klaudią, naszą panną młodą. Porozmawiamy o połączeniu dwóch kultur, współpracy...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                W siódmym odcinku <span className="bgMintLight">Hey Wedding</span> rozmawiamy z <span className="bgMintLight">Klaudią</span>, naszą panną młodą. Porozmawiamy o połączeniu dwóch kultur, współpracy opartej na przyjacielskich relacjach i przedweselnych stresach.
            </>,
        links:
            <>
                <iframe title="#7 Hey Wedding - polsko-irlandzkie wesele Klaudii i Kierana" height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/rkmjd-df2c30?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: '5-faktów-o-nas-poznajcie-nas-lepiej',
        title: '5 FAKTÓW O NAS... POZNAJCIE NAS LEPIEJ',
        seoText: 'WROCŁAW — nie nasze miasto! Chociaż pochodzimy z małych miejscowości i trzeba to przyznać, jesteśmy „słoikami”, to ponad 10 lat mieszkamy we Wrocławiu. Każda z nas ma tutaj swój dom, ulubione knajpy i miejsca do spacerowania. Doceniamy Wrocław za jego różnorodność i możliwości, czujemy się w nim dobrze. Jednak obie...',
        date: '31 maja 2020',
        edited: '8 cze 2020',
        textShort: 'WROCŁAW — nie nasze miasto! Chociaż pochodzimy z małych miejscowości i trzeba to przyznać, jesteśmy „słoikami”, to ponad 10 lat mieszkamy...',
        mainPic: {
            src: require('./BlogPics/Post24/post24.jpg').default
        },
        textMain: <>WROCŁAW — nie nasze miasto! <br /> Chociaż pochodzimy z małych miejscowości i trzeba to przyznać, jesteśmy „słoikami”, to ponad 10 lat mieszkamy we Wrocławiu. Każda z nas ma tutaj swój dom, ulubione knajpy i miejsca do spacerowania. Doceniamy Wrocław za jego różnorodność i możliwości, czujemy się w nim dobrze. Jednak obie uwielbiamy podróże, poznawanie nowych miejsc. Dlatego ogromnie doceniamy, że w sezonie ślubnym, dzięki organizacji wesel w całej Polsce, mamy możliwość poznawania nowych zakątków. Zwiedziłyśmy już sporą część kraju. Zawsze wtedy obiecujemy sobie, że kiedyś "tu" się przeprowadzimy :)</>,
        topPic: {
            src: require('./BlogPics/Post24/post24a.jpg').default
        },
        content: [
            {
                headerSmall: <span className="pink">NIE POTRAFIMY POZOWAĆ DO ZDJĘĆ.</span>,
                text: 'Portfolio w naszej pracy jest bardzo ważne. Nie tylko trzeba chwalić się efektami przygotowań, pięknych dekoracji, czy szczęśliwej pary, ale warto mieć też parę zdjęć podczas pracy. Szykując się do koordynacji dnia ślubu i wesela staramy się zawsze zaplanować 5 - 10 minut, podczas których fotograf będzie mógł zrobić nam parę ujęć. I wiecie, jak to się zawsze kończy? Jesteśmy tak mocno skupione na pracy, aby wszystko było idealnie, że zapominamy o pozowaniu. Kończy się to zawsze masą zdjęć z dziwnymi minami.',
                pics: [
                    {
                        src: require('./BlogPics/Post24/post24b.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">JESTEŚMY DO SIEBIE BARDZO PODOBNE.</span>,
                text: <>Każdy, kto miał okazję nas poznać i podpatrzeć jak pracujemy, powie pewnie od razu, że jesteśmy zupełnie inne. Kasia jest impulsywna, lubi działać od razu, nie cierpi czekać, ja znowu jestem z tych, które potrzebują czasu, zastanowienia, analizy, zanim przejdę do działania. Zdecydowanie wolę tabele i zestawienia od tych kreatywnych działań, w których znowu super spełnia się Kasia. Jednak jak się bliżej nam przyjrzeć to można zauważyć mnóstwo podobieństw. Obie jesteśmy bardzo zaangażowane w to, co robimy, dobro i zadowolenie naszych Par stawiamy na pierwszym miejscu. Każda z nas nie raz miała sytuację rzucenia wszystkiego i działania na rzecz jakiejś sprawy dla dobra wesela i Pary Młodej. To, że się tak świetnie dogadujemy i tak <span className="bold pink">bardzo lubimy pracować ze sobą</span>, zawdzięczamy temu, że mamy takie same priorytety i nie zostały one wykreowane sztucznie. Od początku wiedziałyśmy, że ważna jest dla nas szczerość, otwartość i przyjazna atmosfera w pracy.</>,
                pics: [
                    {
                        src: require('./BlogPics/Post24/post24.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">BRANŻA ŚLUBNA TO NASZE POWOŁANIE.</span>,
                text: 'Śluby i wesela są obecne zarówno w naszym życiu zawodowym i prywatnym. Jeśli akurat nie pracujemy, to planujemy rozwój naszej firmy i nas samych. Chcemy być na bieżąco, a nawet o krok do przodu w trendach i inspiracjach ślubnych. Zależy nam, aby współpraca z naszymi parami młodymi przebiegała w luźnej i przyjaznej atmosferze, dlatego ciągle zastanawiamy się, jak możemy działać, aby przynosiło to jak najlepsze efekty. No i po prostu kochamy „plotkować” o branży. Zapytajcie naszych mężczyzn, ile godzin miesięcznie spędzamy wisząc na telefonie, rozmawiając o weselach.',
                pics: [
                    {
                        src: require('./BlogPics/Post24/post24c.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">ZNAMY SIĘ ZDECYDOWANIE ZA DŁUGO.</span>,
                text: 'Poznałyśmy się w liceum. Po burzliwym początku z jednym chłopakiem w tle :) szybko zrodziła się bardzo fajna przyjaźń. Potem potoczyło się już jak w starym, dobrym małżeństwie. Wspólne mieszkanie podczas studiów, wakacyjne wspólne saksy, parę kłótni i powstała firma, która przede wszystkim opiera się na tym, że świetnie się znamy i wzajemnie uzupełniamy. Wiemy w czym każda z nas jest dobra, ale też znamy swoje słabsze strony i w tych wypadkach mocno się wspieramy, możemy na siebie liczyć. No i już każda z naszych Par doświadczyła na własnej skórze, jak w tym samym momencie odpowiadamy identycznie na zadane pytanie.'
            }
        ]
    },
    {
        path: '6-hey-wedding-pogromcy-mitów',
        title: '#6 Hey Wedding - Pogromcy mitów',
        seoText: 'W szóstym odcinku podcastu rozprawiamy się z najpopularniejszymi mitami ślubnymi. Dowiecie się między innymi, czy jedzenie w bufecie oraz serwowany obiad to dobry pomysł, czy można zorganizować wesele bez Disco Polo oraz czy powinno się odmieniać nazwiska gości w zaproszeniach.',
        tag: 'podcast',
        date: '13 maja 2020',
        edited: '1 wrz 2020',
        textShort: 'W szóstym odcinku podcastu rozprawiamy się z najpopularniejszymi mitami ślubnymi. Dowiecie się między innymi, czy jedzenie w bufecie oraz serwowany obiad to dobry pomysł, czy można zorganizować wesele bez...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                W szóstym odcinku podcastu rozprawiamy się z <span className="bgMintLight">najpopularniejszymi mitami ślubnymi</span>. Dowiecie się między innymi, czy jedzenie w bufecie oraz serwowany obiad to dobry pomysł, czy można zorganizować wesele bez Disco Polo oraz czy powinno się odmieniać nazwiska gości w zaproszeniach.
            </>,
        links:
            <>
                <iframe title="#6 Hey Wedding - Pogromcy mitów" height="122" width="100%" style={{ border: 'none' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/nsnei-dc44e4?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'obiecanki-cacanki-czyli-o-największych-ściemach-branży-ślubnej',
        title: 'Obiecanki cacanki — czyli o największych ściemach branży ślubnej',
        seoText: 'W ostatnim wpisie na blogu wyjaśniłyśmy, dlaczego najczęściej za dobrą jakością usług idą wyższe ceny oraz na co trzeba zwrócić uwagę przy wyborze tańszych wykonawców. Dziś porozmawiamy o tych, którzy braki umiejętności ukrywają pod płaszczykiem obietnic. Najczęściej niespełnionych. Nie będziemy mówić o grubych prze...',
        date: '24 kwi 2020',
        textShort: 'W ostatnim wpisie na blogu wyjaśniłyśmy, dlaczego najczęściej za dobrą jakością usług idą wyższe ceny oraz na co trzeba...',
        mainPic: {
            src: require('./BlogPics/Post23/post23.jpg').default
        },
        textMain: 'W ostatnim wpisie na blogu wyjaśniłyśmy, dlaczego najczęściej za dobrą jakością usług idą wyższe ceny oraz na co trzeba zwrócić uwagę przy wyborze tańszych wykonawców. Dziś porozmawiamy o tych, którzy braki umiejętności ukrywają pod płaszczykiem obietnic. Najczęściej niespełnionych. Nie będziemy mówić o grubych przekrętach i celowych oszustwach tylko drobnych i na pozór niewinnych kłamstewkach.',
        topPic: {
            src: require('./BlogPics/Post23/post23.jpg').default
        },
        content: [
            {
                headerSmall: <span className="pink">Miejsca weselne</span>,
                text: 'Wchodzicie na salę weselną. Czujecie, że nie jest to do końca spełnienie Waszych marzeń, ale miejsce ma potencjał... No może, gdyby nie te szpetne zasłony, obrazki na ścianach, żyrandole i krzesła. W głowie kotłuje Wam się tysiąc pomysłów jak to wszystko ograć?! Nieśmiało pytacie, czy można pozbyć się zbędnych bibelotów i zmienić kolor zasłon. W tym momencie niczym rycerz w lśniącej zbroi na pomoc przychodzi Wam manager. "Ależ oczywiście!"  — odpowiada. Gwarantuję Wam, że w 90% przypadków to ściema. Przed ślubem okaże się, że zasłon nie można zdjąć, ponieważ to dużo roboty, po weselu ktoś będzie musiał je założyć, a ponadto na stanie nie ma innych na wymianę. Zdjęte ze ścian obrazki zostawią brzydkie jasne plamy, pod pokrowcami kryją się zniszczone i poplamione krzesła. Może w takiej sytuacji warto rozważyć inną, neutralną salę, którą udekorujecie według własnego uznania bez konieczności zakrywania tego, co Was drażni. Jeśli widzicie, że na sali jest brudno, nie oszukujcie się. Skoro właściciele nie posprzątali w związku z Waszą pierwszą wizytą, to w dniu ślubu też tego nie zrobią.'
            },
            {
                text: <>Podobny problem możecie napotkać na etapie <span className="bold pink">omawiania menu</span>. Jeśli widzicie w propozycjach, że kotlet mielony pogania schabowego, nie wierzcie, że nagle kucharz totalnie przearanżuje dla Was menu na rzecz lekkiej śródziemnomorskiej kuchni. To kolejne kłamstwo. Mimo szczerych chęci prawdopodobnie nie będzie miał odpowiednich umiejętności i produktów. Nie wierzcie też, że jedzenie na weselu będzie podane ładniej niż podczas degustacji. Takie historie walą ściemą na kilometr. Po to jest degustacja, żeby spróbować jedzenia i zobaczyć jak się prezentuje.</>,
                pics: [
                    {
                        src: require('./BlogPics/Post23/post23a.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Kapele/DJ-e</span>,
                text: '"Zagramy wszystko, co chcecie, zaaranżujemy dla Was utwory na życzenie". O ile w przypadku DJ-a, zagranie piosenki na życzenie nie stanowi większego problemu, z kapelą jest zupełnie inaczej. Każdy zespół dysponuje określonym repertuarem, a przygotowanie nowych utworów jest pracochłonne. Oczywiście, jeśli mówimy o jednym, dwóch utworach to jestem skłonna uwierzyć, że nie jest to duży problem. Jeśli jednak repertuar lub aranżacja utworów danego zespołu Wam nie odpowiada, to wybierzcie kogoś innego. Nie wierzcie w obietnice typu: "Jesteśmy w stanie zagrać z rockowym pazurem", jeśli w składzie zespołu widzicie klawiszowca, gitarzystę i wokalistkę o anielskim głosie. Nie wierzcie na słowo, zweryfikujcie to, oglądając urywki filmów wrzucanych na stronę zespołu. I jeszcze jedno, ale najważniejsze. Sprawdzajcie, kto aktualnie jest w składzie danego bandu. Bardzo często zdarza się, że po wokalistce, która urzekła Was barwą głosu, w zespole zostało już tylko demo na stronie.',
            },
            {
                text: 'Żeby było sprawiedliwie, ujawnijmy jeszcze kilka przewinień braci Dj-skiej. To fakt, są bardziej elastyczni, jeśli chodzi o repertuar, ale również charakteryzują się określonym stylem. Jeśli jesteście fanami rocka, metalu, hip-hopu, techno, reggae lub jakiegokolwiek innego gatunku muzycznego, bez którego nie wyobrażacie sobie własnego wesela, a DJ zaręcza, że świetnie odnajduje się w tym gatunku i to dla niego żaden problem, żeby poprowadzić imprezę w tym stylu, sprawdźcie go. Zapytajcie, czy ma na swojej playliście jakiś set do odsłuchania w interesującym Was klimacie. Jeśli nie, nie powinno być problemu, żeby przygotował dla Was małą próbkę. Jeśli zacznie się migać to jest wysoce prawdopodobne, że ściemnia. Na co jeszcze warto uważać? Na chwytliwe hasła typu "gwarancja udanej imprezy" - taka gwarancja jest warta tyle samo, co ta składana przez producenta proszku Bonux — wypierze wszystko prócz kieszeni.',
                pics: [
                    {
                        src: require('./BlogPics/Post23/post23b.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Fotografowie i filmowcy</span>,
                text:
                    <>
                        Podczas wyboru filmu i foto musicie mieć świadomość, że każdy wykonawca ślubny, a nawet każdy człowiek chwali się swoimi największymi osiągnięciami. Podobnie jest z fotografami, filmowcami, wedding plannerami, czy florystkami. Dlatego przeglądając <span className="bold pink">portfolio wykonawców ślubnych</span> odłóżcie na chwilę emocje na bok i zróbcie dokładniejszy research. Nie sugerujcie się jednym lub dwoma dobrymi ujęciami w galerii na FB, piękną parą młodą na zdjęciach, rajską wyspą w tle. Jeśli rzeczywiście poczuliście miętę do fotografa, poproście o link do pełnego reportażu ślubnego. Zerknijcie, czy na zdjęciach są wszystkie elementy, na których Wam zależy, czy podoba Wam się klimat jego zdjęć, a nie tylko ten piękny plener przy wodospadzie, którego w życiu sobie nie zrobicie. Podobnie sprawa ma się do filmowców, nie poprzestawajcie na 3-minutowych teledyskach, poproście o dostęp do dłuższych filmów. <br />
                Nazywanie powyższych praktyk oszustwem czy kłamstwem byłoby nadużyciem - nie jest to celowe wprowadzanie klienta w błąd, w końcu chodzi o to, żeby pokazać się Wam z jak najlepszej strony. Emocjonalne wybory nie są wcale złe, ale jeśli poświęcicie trochę więcej czasu na wybór foto i filmu na pewno nie dacie się oszukać swoim własnym wyobrażeniom.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post23/post23c.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Wedding plannerzy</span>,
                text:
                    <>
                        Konsultanci ślubni bezustannie prześcigają się swoją kreatywnością. W końcu każda para marzy o wyjątkowym i niepowtarzalnym weselu. Ale czy na pewno wszystko da się zrobić? Bardzo byśmy chciały, żeby tak było, ale nie do końca to prawda. Pewnych rzeczy nie przeskoczymy. Najczęściej na drodze stają nam obostrzenia, na które nie mamy wpływu, ograniczenia budżetowe lub logistyczne. Pokaz sztucznych ogni zorganizowany na obszarze Natura 2000? Teoretycznie da się to zrobić, ale czy warto łamać prawo albo ryzykować pożarem lasu? Postawienie namiotu weselnego za 5 tys. zł - są firmy, które podejmą się takiego wyzwania, ale czy to bezpieczne? Czy takie namioty spełniają odpowiednie atesty? Ślub kościelny w plenerze? Jest to zrobienia, ale procedura jest niezwykle trudna i prawdopodobieństwo, że się uda, jest niezwykle małe. Przypuszczam, że niektórzy <span className="bold pink">wedding plannerzy</span> składają obietnice bez pokrycia "dla Waszego dobra", nie chcąc Was zawieść. W naszym odczuciu nie tędy droga, ponieważ źle zrealizowany, ryzykowny pomysł może przynieść zdecydowanie większe rozgoryczenie.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post23/post23d.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Fryzjerki i kosmetyczki</span>,
                text: 'Niektóre z nich to prawdziwe mistrzynie zbrodni. Na pewno każdemu zdarzyła się kiedyś taka sytuacja. Idziesz do fryzjera, zrelaksowany siadasz na fotelu, pełen nadziei na spektakularną metamorfozę. Niestety z każdą chwilą czujesz, jak w żołądku rośnie Ci wielka klucha i strach ściska za gardło. Już wiesz, że nie tego się spodziewałeś i wszystko idzie w złym kierunku. Śmiało mówisz o swoich obawach, a w odpowiedzi słyszysz: "Nieee… tym się nie przejmuj, w dniu ślubu zrobimy to inaczej. Teraz włosy się nie kręcą, ale użyję innych wałków. Trochę wystaje, ale to tylko próba, prawdziwą fryzurę zrobimy w dniu ślubu." W takiej sytuacji jeśli możesz, uciekaj! Jeśli nie to postaw sprawę jasno. Próbny makijaż czy czesanie, jak sama nazwa wskazuje, ma być dokładnie taki jak w dniu ślubu. Jeśli zawodzi fryzjerka czy makijażystka wybierz się na próbę do kogoś innego, a jeśli to kwestia Twojego niezdecydowania, zaproponuj jeszcze jedno spotkanie. Błagam Cię tylko, nie wierz w ściemę, że w dniu ślubu będzie lepiej. Będzie gorzej! Po nieudanej próbie zarówno Ty, jak i Twoja stylistka będziecie poddenerwowane.',
                pics: [
                    {
                        src: require('./BlogPics/Post23/post23e.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Florystki</span>,
                text: 'Jakie grzeszki popełniają florystki? W zasadzie podobnie jak z foto i filmem nie będzie to celowe wprowadzanie klienta w błąd, ale chciałabym, żebyście przy wyborze odpowiedniej osoby zwrócili uwagę na jeden ważny szczegół. Proces powstawania oferty florystycznej, która spełni oczekiwania pary młodej, jest dość długotrwały. Zwykle ofertę poprzedza rozmowa, wymiana inspiracji, dyskusje o budżecie. Potem następuje moment na przedstawienia oferty. Ponieważ każdy projekt jest traktowany bardzo indywidualnie, florystki zasypują pary inspiracjami z Pinteresta. Nie ma w tym nic dziwnego, jedna inspiracja ma pokazać jakie kwiaty zastosuje florystka, inna, jaka będzie wielkość i kształt kompozycji. Wszystko to ma Wam pomóc w zrozumieniu ostateczną wizji dekoracji. Nie dajcie się jednak zwieść. Poza pięknymi inspiracjami zwracajcie uwagę na styl pracy florystki i dotychczasowe realizacje. Jeżeli na jej stronie internetowej widzicie, że 99% realizacji to przestarzały glamour możecie podejrzewać, że nie ma doświadczenia lub umiejętności do stworzenia innego klimatu. Wiecie, do czego zmierzam? Obserwując blogerki modowe łatwo stwierdzić, że ktoś jest świetnie ubrany, ale zdecydowanie trudniej iść do sklepu i ubrać się z takim samym wyczuciem stylu.',
                pics: [
                    {
                        src: require('./BlogPics/Post23/post23f.jpg').default
                    }
                ]
            },
            {
                text: 'Jak widzicie, te drobne niedopowiedzenia mogą zaważyć na tym, czy w dniu ślubu i tuż przed nim będziecie zadowoleni z dokonanych wyborów, czy też poczujecie się oszukani. Pozostańcie czujni i nie dajcie się zwieść. Jeśli coś Was niepokoi śmiało pytajcie, jeśli chcecie coś doprecyzować, koniecznie to zróbcie, najlepiej pisemnie, bo papier nie zapomina :)'
            },
        ]
    },
    {
        path: '5-hey-wedding-ślub-humanistyczny-a-na-co-to-komu',
        title: '#5 Hey Wedding - Ślub humanistyczny, a na co to komu?',
        seoText: 'Jaka jest idea ślubów humanistycznych? Dla kogo są ceremonie symboliczne i jakie dają możliwości? A także skąd u naszego gościa wziął się pomysł na zostanie celebrantem? O tym wszystkim posłuchacie w inspirującej rozmowie z Jackiem Siedleckim http://www.slubhumanistyczny.com',
        tag: 'podcast',
        date: '13 kwi 2020',
        edited: '1 wrz 2020',
        textShort: 'Jaka jest idea ślubów humanistycznych? Dla kogo są ceremonie symboliczne i jakie dają możliwości? A także skąd u naszego gościa...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                Jaka jest idea ślubów humanistycznych? Dla kogo są ceremonie symboliczne i jakie dają możliwości? A także skąd u naszego gościa wziął się pomysł na zostanie celebrantem? O tym wszystkim posłuchacie w inspirującej rozmowie z <span className="bold grey">Jackiem Siedleckim</span> - <CustomOuterLink className="linkMint" to="http://www.slubhumanistyczny.com" />.
            </>,
        links:
            <>
                <iframe title="#5 Hey Wedding - Ślub humanistyczny, a na co to komu?" height="122" width="100%" style={{ border: 'none' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/vi5sm-d90cca?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'polecany-fotograf-kamerzysta-sala-dj-zespol-na-wesele',
        seoTitle: 'Tani i polecany zespół na wesele? O cenach za usługi w branży ślubnej wg Czary Marry',
        seoText: 'Dlaczego nie warto organizować wesela w najtańszych salach weselach i korzystać z najtańszych usług w branży weselnej – i nie tylko?',
        title: 'Tani i polecany zespół na wesele – czyli o cenach za usługi w branży ślubnej',
        date: '7 kwi 2020',
        textShort: 'To jedno z częściej pojawiających się zwrotów na forach i grupach ślubnych. Dziś postanowiłyśmy się z nim rozprawić!',
        mainPic: {
            src: require('./BlogPics/Post22/post22.jpg').default
        },
        textMain: 'To jedno z częściej pojawiających się zwrotów na forach i grupach ślubnych. Dziś postanowiłyśmy się z nim rozprawić! Oczywiście mamy świadomość, że nie zawsze cena idzie w parze z jakością, ale najczęściej właśnie tak jest. Nie dotyczy to wyłącznie branży ślubnej, ale niemal każdej dziedziny życia. Weźmy na przykład samochody. Nieważne, czy udasz się do salonu Mercedesa i wybierzesz najnowszą S klasę, czy kupisz w komisie starą Audicę od Niemca, który płakał, jak sprzedawał – tak czy siak jest to środek transportu. Obydwoma samochodami da się jeździć, ale możesz się spodziewać większego komfortu jazdy, bezpieczeństwa, niezawodności i luksusu po nowiutkim Mercedesie. Podobnie ma się sytuacja w zakresie rekomendowanych usługodawców ślubnych. Jeśli zależy Ci na jakości jakiejkolwiek usługi lub jakiegokolwiek produktu, raczej nie powinieneś brać pod uwagę najtańszych opcji.',
        topPic: {
            src: require('./BlogPics/Post22/post22.jpg').default
        },
        content: [
            {
                headerSmall: 'Najlepsza sala weselna a sala niskobudżetowa – na czym oszczędzają właściciele tanich sal weselnych?',
                text:
                    <>
                        <p>Przede wszystkim na jakości — jedzenia, obsługi, wystroju. Jaki to ma realny wpływ na wygląd twojego Wesela? Zwykle możesz się spodziewać mało wyszukanego jedzenia, które nie cieszy ani oka, ani żołądka. Stół zapewne będzie się uginał od ilości potraw, ale przecież nie chodzi o ilość, a o jakość. Czy nie fajniej byłoby posmakować regionalnych produktów, sezonowych warzyw? A może wolicie, gdy szef kuchni przygotuje coś, co zaskoczy zarówno Was, jak i Waszych gości? Kto świadomie się odżywia i robi zakupy, wie, że dobre jedzenie nie jest tanie, a w fast foodach nie pracują master chefowie tylko studenci.</p>
                        <p>Nikt nie lubi wolnych i wiecznie niezadowolonych kelnerów, tak samo, jak nikt nie lubi, kiedy się go oblewa rosołem podczas serwisu obiadu. Jeśli wybieracie salę, w której cena za talerzyk jest bardzo niska, musicie mieć świadomość, że prawdopodobnie właściciele nie płacą zbyt wiele obsłudze. Gdzieś te oszczędności muszą znaleźć. Nie stać ich na super kucharza i wyszkolonych kelnerów. Biznes zwyczajnie by się nie spinał. Oczywiście ogromne znaczenie ma również sam manager lub właściciel. Z doświadczenia wiem, że Pary Młode oczekują od nich otwartości i elastyczności. Czy wierzycie w to, że właściciel sali, który musi zorganizować dużo więcej wesel w roku, żeby zarobić, ma czas na śledzenie trendów, na poszerzanie horyzontów? Raczej nie. Jego odpowiedź na większość Waszych pytań będzie brzmiała: Nieee, robimy tak od 20 lat i się sprawdza… Istnieje też szansa, że na pierwszym spotkaniu zgodzą się na wszystko, a potem zapomną. Często tworzą umowy sami lub ściągają je z Internetu w przeciwieństwie do droższych miejsc, które współpracują z prawnikiem. Nietrudno się domyślić, że taka umowa jest mało konkretna i nie chroni Was w żadnym stopniu. Pamiętaj również, że zakup działki oraz budowa odpowiedniego obiektu każdemu właścicielowi sali weselnej musi się zwrócić – im piękniejsze okolice, im ciekawsza architektura, tym atmosfera na weselu lepsza.</p>
                        <p>Wysoka cena za talerzyk nie jest gwarancją udanego przyjęcia weselnego, zdecydowanie jednak zwiększa szansę na udane wesele. Nie bez przyczyny terminy w dobrych salach weselnych są tak odległe – za jakość trzeba więcej zapłacić, a najlepszą salę weselną w okolicy trochę poczekać.</p>
                        <span className="bold grey">No to teraz inni wykonawcy...</span>
                    </>,
            },
            {
                headerSmall: 'Polecany fotograf ślubny, kamerzysta na ślub i inni polecani usługodawcy ślubni',
                text: 'Na forach, na portalach ślubnych, a także w naszych mailach znaleźć można wiele pytań o najlepszego fotografa ślubnego, o najlepszą fryzjerkę czy o innych polecanych usługodawców ślubnych.',
                pics: [
                    {
                        src: require('./BlogPics/Post22/post22a.jpg').default
                    }
                ]
            },
            {
                text:
                    <>
                        Tani fotograf lub filmowiec może być teoretycznie tak samo uzdolniony, jak drogi, może mieć równie duży zapał do pracy… ale czy dysponuje tym samym sprzętem, oprogramowaniem do obróbki materiału, czy ma nieograniczony dostęp do muzyki, doskonali swoje umiejętności na dość drogich szkoleniach dla profesjonalistów, czy inwestuje w bezpieczeństwo? Również i on musi zrealizować więcej zleceń, a czas oddania Waszego materiału się oddala i oddala. <span className="bold grey">Dobry fotograf ślubny</span> ma odpowiedni warsztat i sprzęt, by oddać Wam piękne zdjęcia ślubne. Ma też wystarczająco czasu, by poświecić go dużo na każde zlecenie. Rekomendowani przez nas fotografowie ślubni oraz kamerzyści na wesele będą mieli prawdopodobnie wyższe stawki niż średnia, ale macie gwarancje że to będzie dobry fotograf na wesele i profesjonalista w każdym calu.
                    </>
            },
            {
                headerSmall: 'Polecany zespół na wesele czy DJ',
                text:
                    <>
                        <p>Branżowe opowieści o sprzęcie wśród filmowców, fotografów, zespołów weselnych i DJ-ów nie mają końca. U tych ostatnich nie liczy się wyłącznie jakość i moc, ale i wygląd. Światła, stanowisko Dj-skie, zaufajcie mi, te rzeczy sporo kosztują. Potrzebny jest też duży bus, żeby to wszystko przetransportować. Oczywiście to nie sprzęt świadczy o umiejętnościach prowadzenia imprezy. Wiecie jaki jest podstawowy grzech zespołów weselnych DJ-ów z dolnej półki? Disco Polo! Wiem, że jedni je lubią, a drudzy nie... Nie będziemy się o to spierać, czy można zrobić wesele bez tego gatunku muzycznego, ale z moich obserwacji wynika, że gdy DJ-owi brakuje umiejętności, ratuje się Disco Polo. Chwyta się go jak tonący brzytwy, a my musimy patrzeć na tę katastrofę i brać w niej udział. Na ratunek jest już za późno. Najlepszy zespół weselny czy dobry dj na wesele na pewno dostosuje repertuar nie tylko do najnowszych trendów ale i Waszych gustów.</p>
                        <p>Załóżmy, że zespół weselny kosztuje 3 tys. zł (w opcji niskobudżetowej). Średnia ilość osób w zespole to 4. Zespół podczas wesela gra średnio około 10h. Wychodzi nam stawka około 75 zł/h dla jednej osoby. Ale! Nie zapominajmy o kosztach dojazdu, busie, którym owa kapela do Was dojedzie, czasami trzeba zapłacić kierowcy. No i te cholerne podatki! Śpiewanie i granie na instrumentach przez 10h to bardzo ciężka praca. Nauka gry na instrumencie to lata ćwiczeń, potu i krwi. Coś się tu nie zgadza… Coś niska ta stawka, a wiadomo muzycy to artyści i dobrze się cenią. Muzyk grający na ceremonii ślubu cywilnego to koszt około 300-500 zł. Ceremonia wraz z życzeniami to niecała godzina. Dalsze wnioski nasuwają się same. W dobrym zespole muzycznym grają osoby, które oprócz wysokich kwalifikacji, po prostu lubią tę pracę. Znajomość muzyki polskiej i światowej, umiejętność dostosowania muzyki do danej chwili tak, by wszyscy dobrze się bawili ratuje niejedno wesele. Dlatego tak chętnie polecany zespół na wesele przez znajomych czy <Link className="linkLight" to={URLS.HOME}>wedding plannerów</Link> liczy sobie odpowiednio więcej.</p>
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post22/post22b.jpg').default
                    }
                ]
            },
            {
                text:
                    <>
                        <p>Wróćmy na chwilę do motoryzacyjnego przykładu ze wstępu. Jakie są szanse, że Audica z Niemiec nie okaże się powypadkowym gratem, że właściciel dbał o nią i włożył całe serce, żeby służyła Wam jak najlepiej? Jedno jest pewne, kupując nowe auto z salonu bez względu, czy będzie to prestiżowy Mercedes, solidna japońska Toyota czy poczciwa Skoda, posłuży Wam przez parę ładnych lat, a w przypadku awarii macie gwarancję i wsparcie od dealera. </p>
                        <p>Trochę zbagatelizowałyśmy sprawę doświadczenia zawodowego, a przecież powinno mieć ogromny wpływ na cenę polecanych usługodawców ślubnych. Nie najlepiej wpisuje się w mój motoryzacyjny przykład, ale pamiętajcie - ma ogromne znaczenie. Im więcej przepracowanych scenariuszy, zorganizowanych lub poprowadzonych imprez, tym lepiej. <br />
                Nie zapominajcie o tym :)</p>
                        <p>Wiadomo, że zazwyczaj poszukujecie najlepszych usługodawców ślubnych. My chętnie pomożemy Wam z wyborem. Polecani przez nas DJe, zespóły, fotografowie itd. mają bardzo dobre opinie i rekomendacje w branży ślubnej. Dodatkowo w kwestii wyboru sali, fotografa czy kamerzysty zawsze podchodzimy bardzo indywidualnie do sprawy, starając się dobrać obsługę tak, by była w Waszym guście.</p>
                    </>
            }
        ]

    },
    {
        path: '4-hey-wedding-wesele-w-czasie-zarazy',
        seoText: 'W dzisiejszym odcinku rozmawiamy z Kingą, radcą prawym, współautorką bloga https://slubnepotyczkiprawne.pl  Podkast jest adresowany zarówno do par młodych jak i branży ślubnej. Znajdziecie tu informacje o wpływie koronawirusa na organizację ślubów i wesel, dowiecie się, czym jest siła wyższa i do jakich kroków uprawn...',
        title: '#4 Hey Wedding - Wesele w czasie zarazy',
        tag: 'podcast',
        date: '26 mar 2020',
        edited: '1 wrz 2020',
        textShort: 'W dzisiejszym odcinku rozmawiamy z Kingą - radcą prawym, współautorką bloga ŚlubnePotyczkiPrawne.pl. Podcast jest adresowany zarówno do par młodych jak i...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                W dzisiejszym odcinku rozmawiamy z <span className="bgMintLight">Kingą</span> - radcą prawym, współautorką bloga <CustomOuterLink className="linkMint" text="Ślubne Potyczki Prawne" to="https://slubnepotyczkiprawne.pl" />. Podcast jest adresowany zarówno do par młodych jak i branży ślubnej. Znajdziecie tu informacje o wpływie koronawirusa na organizację ślubów i wesel, dowiecie się, czym jest siła wyższa i do jakich kroków uprawnia dwie strony umowy, co z zadatkami i przekładaniem uroczystości. To wszystko poparte przepisami prawa.
            </>,
        links:
            <>
                <iframe title="#4 Hey Wedding - Wesele w czasie zarazy" height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/rxzc8-d786c2?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'trendy-slubne',
        seoText: 'Dlaczego trendy ślubne powinny być inspiracją, a nie wykładnia podczas planowania ślubu i wesela?',
        title: 'Trendy ślubne – dlaczego nie zawsze warto się nimi kierować?',
        date: '23 mar 2020',
        edited: '16 paź 2020',
        textShort: 'Co roku portale i blogi ślubne prześcigają się w ilości artykułów na temat trendów ślubnych. Zasypują Cię informacjami o kolorze roku, najnowszych...',
        mainPic: {
            src: require('./BlogPics/Post21/post21.jpg').default
        },
        textMain:
            <>
                Co roku portale i blogi ślubne prześcigają się w ilości artykułów na temat <span className="bgGreyLight">trendów ślubnych</span>. Zasypują Cię informacjami o kolorze roku, najnowszych fasonach sukni, czy top makijażach. Warto przejrzeć najnowsze inspiracje ślubne, zachwycić się pięknymi zdjęciami, a następnie zapomnieć o tym wszystkim. Planując swój ślub i wesele przede wszystkim, myślcie o sobie, o tym, co Wy lubicie i w czym się dobrze czujecie. Na nic Wam podążanie za trendami ślubnymi, jeśli ich nie czujecie. Zerknijcie na naszą listę spraw, gdzie nie powinniście sugerować się tym, co jest modne i dajcie znać, czy myślicie podobnie.
            </>,
        topPic: {
            src: require('./BlogPics/Post21/post21.jpg').default
        },
        content: [
            {
                headerSmall: 'Suknie ślubne 2020/2021 i garnitur ślubny – trendy ślubne nie dla każdego',
                text: 'Najpiękniejsza suknia ślubna prosto z wybiegu nie spowoduje, że będziesz czuła się pięknie i idealnie, jeśli nie będzie dobrana do Twojej sylwetki i gustu. Kupując kreację na ten wielki dzień, przede wszystkim musisz pomyśleć o sobie i o tym, w czym się dobrze czujesz. Jeśli na co dzień lubisz prostotę i klasykę, nic Ci po trendach w stylu boho. W takim stroju będziesz czuła się przebrana. To samo tyczy się Pana Młodego. Na nic śledzenie nowości, trendów w garniturach, frakach czy smokingach jeśli najlepiej mu w klasycznym czarnym garniturze. Niech trendy ślubne będą dla Was wskazówką, ale decyzję podejmijcie w zgodzie z samym sobą. Najnowsze trendy w modzie ślubnej przemijają rok do roku a Wasz ślub powinien pozostać ponadczasowy.',
                pics: [
                    {
                        src: require('./BlogPics/Post21/post21a.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Trendy ślubne – dekoracje sali weselnej, samochodu i kościoła',
                text:
                    <>
                        Co roku PANTONE wybiera kolor roku. W 2020 trafiło na dusty blue. Zaraz po jego ogłoszeniu każdy, ale to każdy z branży ślubnej prześciga się w inspiracjach dekoracyjnych w „świętym” kolorze by stworzyć trendy motyw przewodni wesela. Pytanie: po co? Kolory, jakie pojawią się na Waszym weselu, nie powinny być dyktowane trendami ślubnymi, a wieloma innymi czynnikami. Pomijam już aspekt Waszego gustu, ale trzeba też pomyśleć o dostosowaniu koloru przewodniego wesela do sali weselnej, pory roku czy dostępności kwiatów w hurtowni. Obecnie trendującym kolorem przewodnim jest <CustomPostLink className="linkLight" path="zamek-ksiaz-wesele-motyw-gold-rose" text="motyw Rose Gold" />, lecz nie oznacza to, że sprawdzi się on na każdym ślubie czy weselu. Trendy ślubne 2020/2021 mogą być Waszą inspiracją, ale zdecydowanie nie powinny być Waszą wykładnią.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post21/post21b.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Trendy ślubne w makijażu i fryzurach ślubnych',
                text:
                    <>
                        Tu znowu powtórzę to, co w pierwszym punkcie. W tym ważnym dniu <span className="bgGreyLight">masz się czuć dobrze i naturalnie</span>. Nie podążaj ślepo za trendami, a wybierz z nich to co pasuje, do Twojego stylu i wyglądu. Planując swój make-up i fryzurę zdaj się dobrą stylistkę, która dopasuje fryzurę i makijaż do Ciebie. Pomyśli o rodzaju Twoich włosów, czy kształcie twarzy. Spowoduje, że będziesz piękną Panna Młodą, a nie przemalowaną lalką z trendy makijażem ślubnym.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post21/post21c.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Piosenka ślubna na pierwszy taniec i inne trendy ślubne',
                text:
                    <>
                        Co roku mamy romantyczną piosenkę, która rządzi na listach przebojów i co roku Pary Młode przenoszą ją na salę weselną i tańczą przy niej swój pierwszy taniec. Z jednej strony nic w tym złego, ale czy nie fajniej wybrać utwór, który jest ponadczasowy, a przede wszystkim Wasz?! Każdy z nas ma piosenkę, która kojarzy mu się z ukochaną lub z chwilą, którą spędzili razem i to jest zdecydowanie lepszy wybór, niż hit lata 2020. Mimo wszystko nie strońcie od nowości – trendy ślubne mogą być źródłem inspiracji na wesele w Waszych stylu. Niektóre weselne trendy mogą wejść na stałe w kanony ślubne.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post21/post21d.jpg').default
                    }
                ]
            }
        ]
    },
    {
        path: '3-hey-wedding-ciekawe-przypadki-dj-a-jegomościa',
        seoText: 'Dziś porozmawiamy z naszym kolegą z branży Krzyśkiem Krzemińskiem - DJ-em Jegomościem. Pogadamy o tym, co Krzysiek lubi w swojej pracy, jak unika popadania w schematy, jak wyglądają jego relacje z parami i wielu innych interesujących rzeczach.',
        title: '#3 Hey Wedding - Ciekawe przypadki DJ-a Jegomościa',
        tag: 'podcast',
        date: '12 mar 2020',
        edited: '1 wrz 2020',
        textShort: 'Dziś porozmawiamy z naszym kolegą z branży Krzyśkiem Krzemińskiem - DJ-em Jegomościem. Pogadamy o tym, co Krzysiek lubi w swojej pracy, jak...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain:
            <>
                Dziś porozmawiamy z naszym kolegą z branży <span className="bgMintLight"> Krzyśkiem Krzemińskiem - DJ-em Jegomościem</span>. Pogadamy o tym, co Krzysiek lubi w swojej pracy, jak unika popadania w schematy, jak wyglądają jego relacje z parami i wielu innych interesujących rzeczach.
            </>,
        links:
            <>
                <iframe title="#3 Hey Wedding - Ciekawe przypadki DJ-a Jegomościa" height="122" width="100%" style={{ border: 'none' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/5enrg-d6155c?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        altPath: 'to-nie-ma-znaczenia',
        path: 'stres-przed-slubem',
        seoTitle: 'Jak pokonać stres przed ślubem? – Czary Marry radzi',
        seoText: 'Do ślubu coraz bliżej, a Ty zaczynasz się stresować? Dowiedz się, jak pokonać stres przed ślubem – podsuwamy pomysły na opanowanie przedślubnego stresu.',
        title: 'Jak pokonać stres przed ślubem?',
        date: '3 mar 2020',
        edited: '8 mar 2021',
        textShort: 'Planowanie ślubu i wesela jest ekscytujące. Możesz przecież jasno określić, jak ma wyglądać Twój wielki dzień! Co więcej, dbasz o najdrobniejsze detale, by był dokładnie taki, jak...',
        mainPic: {
            src: require('./BlogPics/Post20/post20.jpg').default
        },
        textMain: 'Planowanie ślubu i wesela jest ekscytujące. Możesz przecież jasno określić, jak ma wyglądać Twój wielki dzień! Co więcej, dbasz o najdrobniejsze detale, by był dokładnie taki, jak sobie wymarzyłaś! To nic dziwnego, że każda Panna Młoda nie może się doczekać TEGO WIELKIEGO DNIA.',
        topPic: {
            src: require('./BlogPics/Post20/post20.jpg').default
        },
        content: [
            {
                text:
                    <>Ale, ale... planowanie ślubu to nie tylko czas ekscytacji i radości, ale też <span className="bold mint">stres przed ślubem</span> i obawa, czy wszystko będzie tak idealne, jak sobie wymarzyłaś. To naturalne, że martwisz się, czy Twoi bliscy będą mogli być w tym dniu z Wami albo czy każdy wykonawca dotrze na czas. Są jednak sprawy, którymi nie powinnaś się zadręczać, bo ani nie masz na nie wpływu, a też z perspektywy doświadczonych <Link to={URLS.HOME} className="linkMint">wedding plannerek</Link> zdradzimy Ci, że nie mają one znaczenia. Dowiedz się, jak pokonać stres przed ślubem!
                    </>
            },
            {
                headerSmall: <span className="mint">Pierwszy taniec a stres przed ślubem – jak nad nim zapanować?</span>,
                text: 'O ile nie potkniesz i nie przewrócisz się na środku sali, to uwierz mi – wszystkie kroki nie muszą być perfekcyjne. Jasne, ciekawy układ i płynność ruchów mają znaczenie – dlatego pomysł kursów, czy indywidualnych lekcji jest jak najbardziej trafiony. Jednak jeśli coś pójdzie niedokładnie tak, jak miało być w scenariuszu, nie oznacza to końca świata. Twoi goście, o ile nie są zawodowymi tancerzami, mogą nawet niczego nie zauważyć! Stres przed ślubem i pierwszym tańcem towarzyszy chyba każdej Młodej Parze – pamiętaj jednak, że ćwiczyliście taniec i poradzicie sobie doskonale, a drobne pomyłki nie mają żadnego znaczenia.',
                pics: [
                    {
                        src: require('./BlogPics/Post20/post20a.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="mint">Stres przed ślubem – czy wesele przebiegnie zgodnie z harmonogramem?</span>,
                text:
                    <>Hej, to wesele, a nie konferencja naukowa! Harmonogram, czy plan zabawy jest oczywiście potrzebny i mile widziany, jednak daruj sobie spełnianie kolejnych podpunktów z zegarmistrzowską precyzją! Jeśli goście świetnie się bawią, nie przerywaj im, by zjedli piąty gorący posiłek. Jeśli podasz go pół godziny później – naprawdę nic się nie stanie! <CustomPostLink text="Doświadczony DJ, wodzirej lub zespół" path="polecany-fotograf-kamerzysta-sala-dj-zespol-na-wesele" className="linkMint" />, w połączeniu z ogarniętym menedżerem sali, będą umieli odpowiednio dostosować Twój harmonogram do faktycznego przebiegu wesela. Z całą pewnością stres przed ślubem pomoże Ci opanować właśnie doświadczony wodzirej, który będzie Waszą prawą ręką. Aha – jeszcze jedno! Nie martw się, że zabraknie jedzenia albo alkoholu. Wystarczy. Jeszcze sporo Ci zostanie. Uwierz mi, nie słyszałam nigdy o weselu, na którym zabrakło jedzenia i alkoholu.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post20/post20b.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="mint">Ile schudniesz do ślubu? Jak opanować stres przed ślubem i ostatnią przymiarką sukni?</span>,
                text:
                    <>Dieta, ćwiczenia i Bóg wie co jeszcze. Wszystko po to, by do godziny zero zgubić te cholerne 5 kilogramów. Uwierz mi – koniec końców nikt nie zwróci na to uwagi. Nie jesteśmy fankami drakońskich diet i odchudzania się „na okazję”. Na zdjęciach w <CustomPostLink text="sukni ślubnej" path="suknia-slubna-jak-wybrac" className="linkMint" /> pięknie wyjdziesz niezależnie od tego, czy uda Ci się osiągnąć określoną wagę, czy nie. Planowanie Twojego ślubu ma być przyjemnością, a nie udręką!
                    Zbilansowana dieta i ulubionego ćwiczenia czy jogging sprawią, że będziesz czuła się lepiej. Będziesz mieć więcej energii, Twoje włosy i skóra nabiorą blasku, a efektem ubocznym będzie lepsza kondycja, która z pewnością przyda się podczas zabawy na weselu. Jednak pod żadnym pozorem nie katuj się dietami i treningami, a zdrowy styl życia potraktuj jako jeden ze skutecznych sposobów na opanowanie stresu przed ślubem.</>,
                pics: [
                    {
                        src: require('./BlogPics/Post20/post20d.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="mint">Czy będzie ładna pogoda, a może będzie padał deszcz? Stres przed ślubem a dobre przygotowanie</span>,
                text:
                    <>Na pogodę nie masz wpływu – pogódź się z tym i miej plan B – na wypadek deszczu. Wierz mi: nawet największa ulewa nie jest w stanie zrujnować Twojego najpiękniejszego w życiu dnia! Co nie znaczy, żebyś podchodziła do tematu lekceważąco – „jakoś to będzie”. Będzie – jeśli się przygotujesz!<br />
                    Przygotuj więc przydatne <CustomPostLink text="akcesoria ślubne" path="akcesoria-slubne-gadzety" className="linkMint" /> w tym dobrej jakości parasol, który nie będzie uginał się pod każdym podmuchem wiatru. Jeśli faktycznie spadnie deszcz – i tak nie zmokniesz. Nie ma się czym przejmować!</>,
                pics: [
                    {
                        src: require('./BlogPics/Post20/post20e.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="mint">Jak poradzić sobie ze stresem przed ślubem? Kilka praktycznych wskazówek</span>,
                text: 'Jesteśmy zwolenniczkami dobrego przygotowania według wcześniej zaplanowanego harmonogramu ślubnego. Parom Młodym radzimy, by niczego nie zostawiać na ostatnią chwilę, a czasochłonne działania rozłożyć w czasie. Dlatego nie zostawiaj rozdawania zaproszeń na ostatnią chwilę, ani żadnych innych przygotowań – będą szły sprawniej i będą Cię kosztowały o wiele mniej nerwów.'
            },
            {
                text:
                    'Wspomniałyśmy przed chwilą, byś nie katowała się ani dietami, ani katorżniczymi treningami. Jednak ulubiona aktywność fizyczna jest jak najbardziej mile widziana. Wysiłek fizyczny pobudza endorfiny, czyli hormony szczęścia i doskonale pomaga zredukować stres. Nie lubisz chodzić na siłownię? Ale może lubisz pływać lub biegać? A może relaksuje Cię jazda na rowerze? Nawet jeśli nie lubisz ćwiczyć, zacznij chodzić na spacery. Jeśli to możliwe, staraj się wybierać aktywność na świeżym powietrzu.'
            },
            {
                text:
                    'W redukcji stresu pomaga także odpowiednia ilość snu. Staraj się wysypiać, a godzinę przed zaśnięciem wyłącz wszystkie ekrany – telewizor, smartfon czy tablet. Emisja światła wpływa na jakość snu, pogarszając ją. Staraj się także ograniczać kawę, pijąc do dwóch kubków dziennie. W dniu ślubu wypij kawę dopiero po zjedzeniu śniadania, ponieważ kofeina może podrażnić żołądek.'
            },
            {
                text:
                    'Boisz się że dopadnie Cię stres w dniu ślubu? Zadbaj o relaks – znajdź czas na ulubione hobby, pojedź do SPA albo zafunduj sobie profesjonalny masaż relaksacyjny. W opanowaniu stresu przed ślubem pomoże Ci miło spędzony czas z przyjaciółkami, które pomogą Ci oderwać się na chwilę od obowiązków związanych z przygotowaniem do ślubu.'
            }
        ]
    },
    {
        path: 'kameralne-wesele-czy-huczne',
        seoTitle: 'Czy kameralne wesele jest dużo tańsze od dużego? – Czary Marry',
        seoText: 'Czy decydując się na organizację kameralnego wesela, można liczyć na duże oszczędności? Na naszym bloku obalamy mity o kosztach małego wesela!',
        date: '22 lut 2020',
        edited: '26 sie 2020',
        title: 'Dlaczego kameralne wesele nie jest dużo tańsze od dużego?',
        textShort: 'Od zawsze marzyliście o małym weselu dla najbliższych? A może było to podyktowane ograniczeniami budżetowymi? Tak czy siak, zanim zabierzecie się...',
        mainPic: {
            src: require('./BlogPics/Post19/post19.jpg').default
        },
        textMain:
            <>
                Od zawsze marzyliście o małym weselu dla najbliższych? A może było to podyktowane ograniczeniami budżetowymi? Tak czy siak, zanim zabierzecie się na dobre za organizację Waszego rodzinnego przyjęcia weselnego, musicie wiedzieć o kilku rzeczach. Na początku powinniśmy określić, czym tak naprawdę jest <span className="bgGreyLight">kameralne wesele.</span> Ilu gości bawi się na małym weselu? Zapewne dla jednych będzie to 10 dla innych 30 os. Na potrzeby tego artykułu przyjmijmy, że planujemy wesele do 50 osób.
            </>,
        topPic: {
            src: require('./BlogPics/Post19/post19a.jpg').default
        },
        content: [
            {
                headerSmall: 'Gdzie zorganizować małe wesele?',
                text:
                    <>
                        Tu mogą się pojawić pierwsze problemy. Większość właścicieli sal weselnych ustala minimalną ilość gości. Zazwyczaj jest to więcej niż 50 osób. Jeżeli nie spełnicie tych wymagań, prawdopodobnie będziecie musieli dopłacać za puste talerzyki lub sala weselna odmówi organizacji kameralnego wesela. W takiej sytuacji o oszczędnościach nie ma mowy. Inną możliwością jest wybór miejsca, w którym na co dzień nie odbywają się wesela. To z kolei często rodzi problemy innej natury. W przypadku takiego <span className="bgGreyLight">miejsce na kameralne wesele</span> trzeba będzie od podstaw stworzyć menu, być może pomyśleć o obrusach, serwetkach, odpowiedniej zastawie. Wizja kameralnego wesela w urokliwym pensjonacie brzmi wydaje się cudowna, ale organizacja przyjęcia w miejscu nieprzystosowanym do tego typu przyjęć zawsze jest dużym wyzwaniem. Czy w takim lokalu jest odpowiednio dużo miejsca na przechowywanie jedzenia i alkoholu? Czy pracuje tam wykwalifikowana obsługa kelnerska? Różne komplikacje w organizacji kameralnego wesela w miejscu do tego nieprzystosowanym mogą pojawić się na każdym etapie – od planowania po rozliczenie się z urządzonego przyjęcia weselnego, gdy goście rozjadą się już do domów. Może się okazać, że cena małego wesela organizowanego w miejscu, w którym dotychczas wesel nie organizowano, będzie znacznie wyższa niż w typowej <span className="bgGreyLight">sali weselnej</span>.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post19/post19b.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Organizacja kameralnego wesela – koszty fotografa, DJ’a i wedding plannera',
                text:
                    <>
                        Jeżeli rozważacie organizację tradycyjnego polskiego wesela, a nie uroczystego obiadu czy kolacji, to prawdopodobnie będziecie potrzebować takich samych elementów, jak przy weselu na 200 osób. Mamy tu na głównie fotografa, DJ-a, może kamerzystę. Koszty ich usług nie będą się różnić, bo będą musieli wykonać dokładnie tę samą pracę, jak w przypadku kameralnego wesela na 30 osob. Również pomoc <Link className="linkLight" to={URLS.HOME}>wedding plannera</Link> przy kameralnym weselu będzie kosztować tyle samo, ile kosztuje przy organizacji hucznego wesela. Przy kompleksowej pomocy zakres pracy konsultanta ślubnego będzie dokładnie taki sam jak przypadku dużego wesela. Wierzcie nam lub nie, ale najcięższym i najbardziej wymagającym w organizacji przyjęciem w naszej karierze było wesele w stylu slow, organizowane dla 16 osób. Innymi stałymi wydatkami będą opłaty urzędowe, kościelne, Wasze stroje, samochód do ślubu i obrączki. Może się więc okazać, że przy rozważaniach: wesele kameralne czy huczne, koszta będą bardzo porównywalne.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post19/post19c.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Kameralne wesele – na czym można zaoszczędzić?',
                text:
                    <>
                        Oczywiście, jeśli zdecydujecie się na organizację intymnego ślubu i wesela, pewne elementy będą kosztować nieco mniej. O ile nie poszaleje się za bardzo z dekoracją, to oszczędnością może być florystyka. Będziecie mieć do zaaranżowania mniejszą przestrzeń, mniejszą ilość stołów. Oczywiście słyszałyśmy już o weselach dla 20 osób i 5 tirach kwiatów jadących z Holandii, ale skupiamy się tu na dekoracjach mających podkreślić charakter kameralnego przyjęcia weselnego. <br />
                        Kolejna sprawa to papeteria. Tu też zdarzają się wyjątki, bo część firm drukuje zaproszenia od 20 lub 30 sztuk, mimo to biorąc pod uwagę ilość winietek, brak <CustomPostLink path='rozmieszczenie-gosci-weselnych' text="planu ustawienia stołów" className="linkPink" /> i tak powinniście zaoszczędzić. Również noclegi, transport i logistyka daje duże pole do popisu w kwestii zminimalizowania budżetu weselnego.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post19/post19d.jpg').default
                    }
                ]
            },
            {
                text: 'Może się wydawać, że kameralne wesele jest czym, za czym nie przepadamy i chcemy Was do niego zniechęcić. Jest wprost przeciwnie. Uwielbiamy intymne śluby, za rodzinną atmosferę i niesamowity klimat. Chciałybyśmy po prostu uświadomić Was, na jakie problemy możecie natrafić i jakie pułapki czyhają na Pary Młode, które liczą na znacznie mniejsze koszty przy organizacji wesela do 50 osób. "Czasami mniej znaczy więcej" i chociaż powiedzenie nie do końca wydaje się adekwatne do podjętego tematu to jednak sporo w nim prawdy. Czy kameralne wesele czy huczne, polecamy się do organizacji Waszego przyjęcia. Wszelkie kłopoty i zmartwienia przeniesiemy na swoje barki.',
                pics: [
                    {
                        src: require('./BlogPics/Post19/post19e.jpg').default
                    }
                ]
            }
        ]
    },
    {
        path: '2-hey-wedding-angie-i-jej-trzy-śluby',
        seoText: 'Dziś porozmawiamy z Angie o jej kameralnym weselu w stylu slow organizowanym w Polsce oraz wielkim hinduskim weselu i tradycjach z nim związanych.',
        tag: 'podcast',
        date: '13 lut 2020',
        edited: '1 wrz 2020',
        title: '#2 Hey Wedding - Angie i jej trzy śluby.',
        textShort: 'Dziś porozmawiamy z Angie o jej kameralnym weselu w stylu slow organizowanym w Polsce oraz wielkim hinduskim weselu i tradycjach...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain: <>
            Dziś porozmawiamy z <span className="bgMintLight">Angie</span> o jej <span className="bgMintLight">kameralnym weselu w stylu slow</span> organizowanym w Polsce oraz wielkim hinduskim weselu i tradycjach z nim związanych.
        </>,
        links:
            <>
                <iframe title="#2 Hey Wedding - Angie i jej trzy śluby." height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/2gzp7-d37e74?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {
        path: '1-hey-wedding-kasia-i-marcin',
        seoText: 'Posłuchajcie naszego podcastu - Hey Wedding! W pierwszym odcinku rozmawiamy z jedną z naszych par. Kasia i Marcin mieli piękne wesele w Przystani Między Deskami.',
        tag: 'podcast',
        date: '14 sty 2020',
        edited: '1 wrz 2020',
        title: '#1 Hey Wedding - Kasia i Marcin',
        textShort: 'Posłuchajcie naszego podcastu - Hey Wedding! W pierwszym odcinku rozmawiamy z jedną z naszych par. Kasia i Marcin mieli piękne...',
        mainPic: {
            src: require('./BlogPics/podcast.png').default
        },
        textMain: <>
            Posłuchajcie naszego podcastu - <span className="bgMintLight">Hey Wedding!</span> W pierwszym odcinku rozmawiamy z jedną z naszych par. <span className="bgMintLight">Kasia i Marcin</span> mieli piękne wesele w Przystani Między Deskami.
        </>,
        links:
            <>
                <iframe title="#1 Hey Wedding - Cytrynowe emocje Kasi i Marcina" height="122" width="100%" style={{ border: "none" }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/c7m3w-cf77a8?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="podcast" text="Podcast" className="bgColorMint" /></span>
            </>
    },
    {

        path: 'akcesoria-slubne-gadzety',
        altPath: 'mała-rzecz-a-ucieszy',
        seoTitle: 'Nietypowe akcesoria ślubne – gadżety ślubne, które warto mieć pod ręką – Czary Marry',
        seoText: 'Czy wiecie, jakie nietypowe akcesoria ślubne zwiększą komfort Wasz i Waszych gości? Przekonajcie się, o jakich gadżetach ślubnych warto pamiętać!',
        tag: 'niezbędnik-przedslubny',
        title: 'Nietypowe akcesoria ślubne – te gadżety ślubne ratują z wielu opresji!',
        date: '10 kwi 2018',
        edited: '20 lut 2021',
        textShort: 'Pewnie macie długą listę gadżetów ślubnych, które absolutnie muszą pojawić się na miejscu, gdzie organizujecie ślub i wesele. Koszyczek ratunkowy do łazienki, dodatkowa gotówka, przybory do makijażu i...',
        mainPic: {
            src: require('./BlogPics/Post18/post18.jpg').default
        },
        textMain:
            <>Pewnie macie długą listę gadżetów ślubnych, które absolutnie muszą pojawić się na miejscu, gdzie organizujecie ślub i wesele. Koszyczek ratunkowy do łazienki, dodatkowa gotówka, przybory do makijażu i ulubiona szminka na pewno się na niej znalazły. Tymczasem, jest kilka akcesoriów, które niezbyt kojarzą się ze ślubem i weselem, a które są na sali weselnej szalenie przydatne. Sprawdź, jakie <span className="bold pink">gadżety na ślub</span> warto przygotować!
            </>,
        content: [
            {
                headerSmall: 'Akcesoria ślubne – dodatki, które ułatwią życie Parze Młodej',
                text:
                    <>
                        <span className="pink bold">Zegarek</span> to dodatek, który nosi coraz mniej osób. Tymczasem zegarek u Pana Młodego (czy chociażby u świadka) jest na wagę złota. Mało eleganckie jest zerkanie co chwilę na wyświetlacz telefonu – stąd, tradycyjny sposób sprawdzenia godziny powinien w Twoim wielkim dniu jednak dominować. Ponadto elegancki zegarek jest naprawdę niezastąpionym elementem męskiej garderoby – warto zainwestować w elegancki zegarek, który będzie nie tylko jednym z akcesoriów ślubnych, ale Panu Młodemu posłuży wiele lat.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post18/post18a.jpg').default
                    }
                ]
            },
            {
                text:
                    <>
                        Pary Młode marzą o pięknej pogodzie. Deszcz może popsuć wiele planów, nawet jeśli nie organizujemy ślubu czy <CustomPostLink path="wesele-w-plenerze" className="linkDark" text="wesela w plenerze" />. Każdemu życzymy pięknej pogody w dniu ślubu i wesela, takiej bez ani jednej kropelki deszczu. Co, jeśli jednak się pojawi? Warto zabrać do ślubnego samochodu biały, elegancki <span className="pink bold">parasol</span>. W razie deszczu nie będziemy musieli ratować się kolorowym parasolem babci, który później wygląda bardzo niekorzystnie na zdjęciach ślubnych. Parasole to akcesoria ślubne, które ratują fryzury oraz ślubne stroje, a przede wszystkim oszczędzają nerwy Parom, które w trakcie ślubu łapie deszcz.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post18/post18b.jpg').default
                    }
                ]
            },
            {
                text:
                    <>
                        <span className="pink bold">Pokrowiec na suknię ślubną i garnitur</span> Pana Młodego to kolejne gadżety ślubne, w które naprawdę warto się wyposażyć. Jeśli noc poślubną spędzacie poza domem, nie chcecie chyba wracać kolejnego dnia w sukni ślubnej czy garniturze, ani tym bardziej, próbować upchnąć ich do reklamówki? Stąd, przydaje się pokrowiec na suknię ślubną i na garnitur. Pozwala to przetransportować ślubne ubranie w dobrym stanie. Być może planujecie sesję ślubną tydzień po weselu? Może chcecie sprzedać suknię ślubną, a garnitur wykorzystać na inne uroczystości? Pokrowce na suknię ślubną i garnitur to akcesoria ślubne, które Wam to umożliwią.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post18/post18c.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Gadżety ślubne dla gości',
                text:
                    <>
                        Z dodatków ślubnych modny ostatnio <span className="pink bold">koszyk ratunkowy</span> jest wynalazkiem naprawdę genialnym. Znajdują się w nim przybory kosmetyczne, nie powinno też zabraknąć igły i nitek w kilku podstawowych kolorach. Koniecznie powinna znaleźć się również biała nić – wierzcie, że przydaje się bardzo często. Przydatne okazują się też agrafki i plastry różnej wielkości. Powinna znaleźć się w nich również <span className="pink bold">rolka do ubrań</span>, dzięki której zarówno panie, jak i panowie, szybko pozbędą się niechcianych nitek i czy pyłków z ubrań. Jednak koszyk ratunkowy nie jedyne gadżet na ślub, który warto zapewnić gościom weselnym.
                    </>
            },
            {
                text:
                    <>
                        Pary Młode powinny zadbać między innymi o <span className="pink bold">koce</span>. Coraz częściej przenosimy nasze śluby i wesela na świeże powietrze. Organizujemy dla gości strefy relaksu z wygodnymi kanapami, planujemy atrakcję, która wieczorem będzie wymagała wyjścia na zewnątrz lub po prostu wybieramy salę z pięknym ogrodem, który, aż kusi do spędzenia chwili czasu w nim. Organizując <CustomPostLink path="wesele-pod-namiotem" text="wesele pod namiotem" className="linkDark" />, pod chmurką czy w ogrodzie zadbajmy o okrycie wierzchnie dla gości, o koce, pledy, narzuty. Chociaż sezon ślubny przypada na lato, nawet o tej porze roku wieczory bywają dość chłodne. Stąd – warto zadbać o komfort swój i gości. Gdy w południe jest prawie 30 stopni, nikt nie myśli o zabraniu czegoś cieplejszego, czym można okryć się w nocy. Koce okażą się wtedy akcesoriami ślubnymi, które wręcz uratują Wasze przyjęcie weselne. Tymczasem, pogoda potrafi zaskakiwać. Bycie na to przygotowanym to gwarancja udanej imprezy!
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post18/post18d.jpg').default
                    }
                ]
            },
            {
                text:
                    <>
                        <span className="pink bold">Nakładki na obcasy</span> to coraz popularniejsze ślubne gadżety – tym bardziej, że wiele Par decyduje się na ślub w plenerze. Nawet jeśli nie planujesz wesela w ogrodzie ani strefy relaksu na zewnątrz, nakładki na obcasy mogą przydać się niejednej pani.
                    </>
            },
            {
                headerSmall: "Inne nietypowe akcesoria ślubne",
                text:
                    <>
                        Do innych nietypowych ślubnych gadżetów zaliczyć można <span className="pink bold">wachlarze</span>, które doskonale sprawdzają się w upalne, duszne wieczory. Warto także zapewnić swoim gościom coś zimnego do picia pod kościołem lub USC – szczególnie, jeśli czeka wszystkich podróż na salę weselną. Takie dodatki na ślub znacznie zwiększą komfort Waszych gości, szczególnie tych starszych i najmłodszych.<br /> Nietypowe akcesoria ślubne mogą znacznie ułatwić życie Parze Młodej i gościom weselnym, dlatego warto je zapewnić na swoim przyjęciu weselnym i uroczystości zaślubin.

                    </>
            }
        ],
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>

    },
    {
        path: 'czy-każdy-może-zostać-wedding-plannerem',
        seoText: 'Czy każdy może zostać wedding plannerem? Pytanie na pozór banalne, chociaż odpowiedzi mogą być naprawdę różne. Teoretycznie tak, ale czy każdy ma predyspozycje do tego, aby wykonywać ten zawód z sukcesem?',
        tag: 'niezbędnik-przedslubny',
        title: 'Czy każdy może zostać wedding plannerem?',
        date: '5 lut 2018',
        edited: '8 lip 2020',
        textShort: 'Czy każdy może zostać wedding plannerem? Pytanie na pozór banalne, chociaż odpowiedzi mogą być naprawdę różne. Teoretycznie tak, ale czy każdy ma predyspozycje do tego, aby...',
        mainPic: {
            src: require('./BlogPics/Post17/post17.jpg').default
        },
        textMain:
            <>
                <span className="bgMintLight">Czy każdy może zostać wedding plannerem?</span> Pytanie na pozór banalne, chociaż odpowiedzi mogą być naprawdę różne. Teoretycznie tak, ale czy każdy ma predyspozycje do tego, aby wykonywać ten zawód z sukcesem? To już zupełnie inna para kaloszy.<br />
                Do napisania tego artykułu skłonił mnie poniższy nagłówek, zamieszczony w popularnym portalu plotkarskim. Nie zamierzam w żaden sposób atakować Kayah, która rzeczywiście jest kobietą sukcesu i super artystką. Jej wypowiedź stała się jedynie impulsem do napisania kilku słów na temat owianego masą stereotypów zawodu konsultanta ślubnego.
            </>,
        topPic: {
            src: require('./BlogPics/Post17/post17a.jpg').default
        },
        content: [
            {
                text: 'Jakiś czas temu wraz z Olą obwieściłyśmy wszem i wobec, że zamierzamy otworzyć własną agencję ślubną. Większość osób patrzyła na nas z niedowierzaniem. Niby wszyscy kibicowali, ale podskórnie wyczuwałyśmy, że znajomi nie za bardzo wierzą, że może się nam to udać. Wedding planner? A na co to komu? Naprawdę ktoś płaci za takie rzeczy? Co Wy właściwie robicie? Mimo że początki były trudne, nie dawałyśmy za wygraną. Szkoliłyśmy się, starałyśmy się zdobyć doświadczenie. W końcu pary młode zaczęły obdarzać nas zaufaniem i korzystać z naszych usług. Obecnie, co nas ogromnie cieszy, coraz częściej pary młode podczas organizacji ślubu decydują się na pomoc wedding plannera. Nie mamy wątpliwości, że niebawem profesja ta będzie nie mniej popularna niż usługi fotografa lub kamerzysty ślubnego.'
            },
            {
                text: 'Nic więc dziwnego, że coraz więcej osób zaczyna myśleć o tym jak o idealnej pracy dla siebie. Tym bardziej, że praca wedding plannera wydaje się sielanką i niczym nadzwyczajnie trudnym. Pewnie dlatego co jakiś czas dostajemy maile, które zaczynają się od słów „zorganizowałam swoje wesele i myślę, że świetnie sprawdziłabym się...” Niestety to, że ktoś zorganizował własne wesele według własnych preferencji i upodobań niczego nie oznacza. Nasza praca polega na spełnianiu oczekiwań innych, niejednokrotnie skrajnych z naszymi. Granica między doradzaniem a dyktowaniem jest bardzo cienka. Nie ma tu też miejsca na pomyłki i gapiostwo. To ogromna odpowiedzialność, działanie pod presją czasu i skrajne emocje. Dalszy rozwój tej branży z pewnością spowoduje, że ciężej będzie znaleźć dobrego konsultanta i oddzielić ziarno od plew.'
            },
            {
                text: 'Wracając do tematu osób publicznych i ich angażowania się w branżę ślubną - mam kilka spostrzeżeń. Po pierwsze trzeba sobie od razu powiedzieć, że ani Pani Jonachowska, ani Pani Rozenek-Majdan, ani Pani Kayah nigdy nie zorganizują wesela osobiście. Są to osoby niezwykle zapracowane, z napiętym do granic możliwości grafikiem i managerem, który ogarnia za nich większość spraw. Same niejednokrotnie publicznie narzekają na totalny brak czasu. Chyba nikt nie ma wątpliwości, że żadna z Pań nie będzie siedzieć wieczorem i poszerzać bazy usługodawców, wysyłać maili lub spotykać się ze „swoimi” parami na mieście w celu konsultacji. Z pewnością znana twarz przyciągnie wielu klientów i zrobi wszystko, aby zatrudnić wykwalifikowany personel. Dla mnie to jednak odzieranie tej profesji z jej najpiękniejszego aspektu - bezpośredniego kontaktu z parą, stopniowego poznawania jej i realizacji marzeń. Branża ślubna, a szczególnie wedding planning, nie powinna działać jak taśma produkcyjna, z której wychodzą nawet najpiękniejsze śluby.',
                pics: [
                    {
                        src: require('./BlogPics/Post17/post17b.jpg').default
                    }
                ]
            },
            {
                text:
                    <>
                        Pani Rozenek-Majdan wydaje kolejną perfekcyjną książkę, tym razem o ślubach. Zastanawia mnie, czy jest tak samo oderwana od rzeczywistości, jak pozostałe porady Pani Małgosi. Pani Popielewicz prowadzi portal ślubny, którego właścicielami są sportowcy, Pani Jonachowska wkręca ludzi, że kiepskie wesele z małym budżetem można odmienić w jedną noc, a zakup nowej sukni ślubnej dzień przed przyjęciem to żaden problem. Żeby było jeszcze bardziej bajkowo przymiarki odbywają się w ruinach zamku, a suknia ma rozmiar xxl. Business is business. <br />
                        Zastanawia mnie fakt, która z tych Pań organizowała swoje wesele samodzielnie bez pomocy wykwalifikowanego wedding plannera? Stawiam, że żadna.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post17/post17c.jpg').default
                    }
                ]
            },
            {
                text: 'Tak czy inaczej, ogromnym plusem całej sytuacji jest to, że nie ma lepszej reklamy dla branży wedding plannerowej niż znana twarz, za co wszystkim wyżej wymienionym Paniom z telewizji bardzo dziękujemy :) Tylko błagam Was, nie wkręcajcie ludziom bajek, że niewielkim nakładem sił i finansów można odmienić wygląd wesela w jeden dzień, szkolcie się i poszerzajcie horyzonty. Organizacja wesela to zawsze ogrom pracy i wielkie poświęcenie bez względu na to, czy zajmuje się tym profesjonalny wedding planner, czy para młoda. No chyba, że ma się pod ręką 50-osobową ekipę, która usłużnie załatwi wszystko, podczas gdy Wy uśmiechacie się do nas z okienka telewizora Waszymi nierealnie białymi uśmiechami.'
            }
        ],
        links:
            <>
                <p className="mb-1">Źródła zdjęć:</p>
                <CustomOuterLink to="https://www.pudelek.pl/" /> <br />
                <CustomOuterLink to="http://www.empik.com/" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'przesady-slubne-zwyczaje-weselne',
        seoTitle: 'Przesądy ślubne – element, który wzbogaca naszą tradycję – Czary Marry',
        seoText: 'Oglądanie Panny Młodej przed ślubem, zakup obrączek przez Pana Młodego i inne – które przesądy ślubne znasz i kultywujesz?',
        tag: 'niezbędnik-przedslubny',
        title: 'Przesądy ślubne – nieocenione tradycje weselne czy nikomu niepotrzebne zabobony ślubne?',
        date: '8 sty 2018',
        edited: '22 gru 2020',
        textShort: 'Ciężko wymienić wszystkie tradycje weselne, które mimo upływającego czasu są...',
        mainPic: {
            src: require('./BlogPics/Post16/post16.jpg').default
        },
        textMain:
            <>
                Ciężko wymienić wszystkie <span className="bold pink">tradycje weselne</span>, które mimo upływającego czasu są wiecznie żywe i nadal funkcjonują w naszej kulturze. Większość z nich traktujemy z przymrużeniem oka, ale w gąszczu zwyczajów weselnych można odnaleźć prawdziwe perełki, które mogą dostarczyć wielu okazji do wzruszeń i śmiechu. Poznaj najpopularniejsze <span className="bold pink">przesądy ślubne</span> i dowiedz się, dlaczego warto o nich pamiętać w dniu ślubu i wesela.
            </>,
        content: [
            {
                headerSmall: 'Pan Młody nie może oglądać sukni przed ślubem – przesądy ślubne, które zapewniają wiele wzruszeń',
                text:
                    <>
                        Wiemy, że każda Panna Młoda chce się podobać swojemu przyszłemu mężowi i liczy się z jego opinią, ale ten jeden raz warto dochować tajemnicy i poradzić się kogoś innego. Nie ma nic piękniejszego niż widok oszołomionego z wrażenia Pana Młodego, gdy widzi swoją wybrankę w sukni ślubnej po raz pierwszy, i odwrotnie. To emocje, których nie da się oszukać, łzy wzruszenia i spojrzenia pełne miłości, o jakiej pisze się książki. Ten zwyczaj należy do przesądów ślubnych, które zapewniają wiele wzruszeń. Te tradycje ślubne często wykorzystywane są również w fotografii ślubnej – zdjęcia lub fragment filmu ślubnego z <i>first look</i> będzie wspaniałą pamiątką.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post16/post16a.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Coś białego, niebieskiego, nowego, starego i pożyczonego… Tradycje weselne pomogą Wam wybrać wspaniałe dodatki ślubne!',
                text: 'Sporo rzeczy do skompletowania, ale skupmy się na starym i pożyczonym. Czy nie pięknie byłoby iść do ślubu w biżuterii swojej mamy lub babci? To piękna tradycja ślubna. Dla nas brzmi niezwykle wzruszająco. Jakiś czas temu organizowałyśmy wieczór panieński, na którym jedna z przyjaciółek wręczyła przyszłej Pannie Młodej swoją podwiązkę jako coś starego, błękitnego i pożyczonego. Taki pożyczony "staroć" dodaje otuchy i nabiera magicznego znaczenia, stając się amuletem. Ten zwyczaj ślubny to najlepszy przykład, że tradycje weselne zbliżają pokolenia, są okazją do wręczenia bliskiej osobie "amuletu", a Panna Młoda może zyskać wyjątkowy dodatek ślubny.',
                pics: [
                    {
                        src: require('./BlogPics/Post16/post16b.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Ślub w miesiącu z literą R – przesądy ślubne z przymrużeniem oka',
                text: 'Marzy Wam się wesele w maju, ale mama przestrzega, że to ściągnie na Was pecha? Lipiec jest ciepły i trochę luźniejszy od rozchwytywanego sieRpnia? A może myślicie o zimowym weselu w lutym? Kto zabroni Wam wziąć ślub w MrAJU, rLIPCU lub rUTYM? Zdziwienie i uśmiech na twarzy zaproszonych gości gwarantowany! Mało tego, dajemy głowę, że żaden z nich nigdy wcześniej nie był zaproszony na wesele organizowane w tak egzotycznym miesiącu. Ślub w miesiącu z literą R jest jednym z najrzadziej praktykowanych ze wszystkich przesądów ślubnych. Ten zabobon ślubny możemy jednak zinterpretować w nowoczesny, dość wygodny dla nas sposób.',
                pics: [
                    {
                        src: require('./BlogPics/Post16/post16c.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Błogosławieństwo rodziców – przesądy ślubne ważne dla Waszych bliskich',
                text: 'Niestety to coraz rzadziej praktykowany zwyczaj ślubny. Być może dlatego, że nieco mniej osób decyduje się na ślub w obrządku katolickim. Jeżeli nie jesteście wierzący, spójrzcie na błogosławieństwo z nieco innej perspektywy. To wspaniała okazja do uczczenia jednej z najważniejszych chwil w Waszym życiu. To po prostu piękna tradycja ślubna. Zatrzymajcie na chwilę i posłuchajcie kilku serdecznych słów, jakie chcą Wam przekazać rodzice, wznieście wspólny toast. Błogosławieństwo może też być bardzo ważne dla Waszych rodziców – warto zrobić im tę przyjemność i zaplanować je przed ceremonią zaślubin. Niektóre przesądy ślubne są bardzo ważne dla Waszych bliskich i kultywując je sprawicie im mnóstwo radości.',
                pics: [
                    {
                        src: require('./BlogPics/Post16/post16d.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Z uśmiechem do ołtarza – przesądy ślubne, o których warto pamiętać!',
                text: 'Idąc do ołtarza, Para Młoda nie powinna zapominać o uśmiechu. Nie tylko zapewni on pomyślność w małżeństwie, ale i będzie miłym gestem w stronę zaproszonych gości. Nie bójcie się witać i nawiązywać kontaktu wzrokowego. Serdeczne uśmiechy Waszych najbliższych dodadzą Wam otuchy. Nie powstrzymujcie też łez wzruszenia, zgodnie ze ślubną przepowiednią są one zwiastunem wielkiej radości. Wiemy, że każdy inaczej reaguje na stres, ale uśmiech na Waszych twarzach będzie najlepszym początkiem Nowej Drogi Życia – niektóre przesądy ślubne nigdy nie powinny wychodzić z mody.',
                pics: [
                    {
                        src: require('./BlogPics/Post16/post16e.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Obrączki a przesądy ślubne',
                text: 'Z obrączkami wiąże się wiele wierzeń i przesądów ślubnych, najstarsze z nich sięgają jeszcze starożytności. Za obrączki ślubne odpowiedzialny jest przyszły Pan Młody – nie tylko on je kupuje, ale także zajmuje się zamawianiem i ich odbiorem. Z oczywistych względów Panna Młoda uczestniczy w wyborze wzoru, dobierając wówczas odpowiedni rozmiar. Pamiętajcie, że zbyt małe obrączki zwiastują zazdrość, zbyt luźne szybki rozpad małżeństwa. Jeśli wierzycie w takie zabobony ślubne postarajcie się dobrać idealny rozmiar obrączek – to również bardzo praktyczne i wygodne niezależnie czy uznacie to za przesąd ślubny. Przesądy ślubne mówią również o tym, że obrączki powinny być wykonane z trwałego kruszcu, najlepiej tego szlachetnego. Prosty wzór obrączki to dobry prognostyk na brak przeszkód. Jeśli już zdecydujecie się na dodatki, postawcie na diamenty, a unikajcie pereł, które są symbolem łez. Przed ślubem nie przymierzajcie obrączek, a dostarczenie ich do kościoła bądź USC powierzcie świadkom. Starajcie się także nie opuszczać obrączek w trakcie ich zakładania, a jeśli już tak by się stało, obrączki powinien podnieść ksiądz, ewentualnie ministrant.'
            },
            {
                headerSmall: 'Kalie w bukiecie Panny Młodej? Zabobony ślubne nie pozwalają',
                text: 'Po kalie (inaczej lilie) Panny Młode nadal sięgają dość niechętnie, chociaż powoli można zauważyć zerwanie z tradycją ślubną, mówiącą o wielkim nieszczęściu, jakie kalie zwiastują. Według niektórych kalie w bukiecie Panny Młodej to rychła zapowiedź nieszczęść, a inni ostrzegają, że Panna Młoda, która wybiera kalie, musi liczyć się, że zostanie wdową – pierwszy bowiem umrze jej mąż. Warto również wiedzieć, że w bukiecie nie powinno być również wrzosów, które symbolizują łzy. Jak widać, zabobony ślubne związane z kwiatami są dość makabryczne.'
            },
            {
                text: 'Pamiętajcie, że zabobony ślubne należy traktować z przymrużeniem oka, ale są one nieodłącznym elementem niemal każdego wesela, ponieważ łączą się i przenikają się tradycjami weselnymi, które kochamy i z przyjemnością kultywujemy. Pomyślcie o nich jako o inspiracji do stworzenia czegoś wyjątkowego.'
            }
        ],
        links:
            <>
                <p className="mb-1">Linki do zdjęć:</p>
                <CustomOuterLink to="http://joemonster.org/" /> <br />
                <CustomOuterLink to="https://www.facebook.com/tashkaphoto/" /> <br />
                <CustomOuterLink to="https://delsolphotography.com/" /> <br />
                <CustomOuterLink to="https://pl.pinterest.com/" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    },
    {
        path: 'wesele-pod-namiotem',
        seoTitle: "Wesele pod namiotem – zorganizujmy go wspólnie z agencją ślubną Czary Marry",
        seoText: 'Jak zapewnić gościom fantastyczną rozrywkę podczas wesela pod namiotem? Jakich błędów uniknąć, organizując wesele pod gołym niebem?',
        tag: 'niezbędnik-przedslubny',
        title: 'Wesele pod namiotem – o czym trzeba pamiętać przy jego organizacji?',
        date: '2 lis 2017',
        edited: '5 lis 2020',
        textShort: 'Pisałyśmy już o weselach plenerowych, które cieszą się obecnie wielką popularnością wśród Młodych Par. Dziś rozprawimy się z tematem wesela pod namiotem, ale...',
        mainPic: {
            src: require('./BlogPics/Post15/post15.jpg').default
        },
        textMain: 'Pisałyśmy już o weselach plenerowych, które cieszą się obecnie wielką popularnością wśród Młodych Par. Dziś rozprawimy się z tematem wesela pod namiotem, ale w nieco innym wydaniu.',
        content: [
            {
                headerSmall: 'Dlaczego warto urządzić wesele pod namiotem?',
                text: 'Coraz częściej zależy Wam na tym, aby impreza przeniosła się na świeże powietrze i odbiegała od typowego przyjęcia z tańcami i obżarstwem. Jak wykorzystać potencjał wesela pod namiotem? Dlaczego warto zorganizować właśnie takie przyjęcie i wykorzystać namiot weselny? Pewnie zauważyliście, że najczęściej goście nie integrują się na sali, tylko podczas papieroska na zewnątrz? To w plenerze toczą się najciekawsze rozmowy i można usłyszeć salwy śmiechu. Zwykle, szczególnie na początku wesela ludzie są bardziej spięci, ciężko im do siebie zagadywać... ale na przysłowiowym papierosie jakoś tak łatwiej. Nie myślcie, że zachęcamy Was do palenia w celu przełamania pierwszych lodów. Proponujemy kilka fajnych sposobów na przeniesienie imprezy na zewnątrz, wspólną integrację z masą dobrej zabawy, bez ryzyka rozpierzchnięcia się gości a wszystko pod namiotem weselnym.'
            },
            {
                headerSmall: 'Wesele pod namiotem ze strefami relaksu',
                text: 'Strefy relaksu zwane są również strefami chill out. Mogą być one miejscem przeznaczonym do tzw. babskich ploteczek. Tak naprawdę wystarczy koc i kilka kolorowych poduszek, a może tipi rozłożone na trawie. Fajnie, jeżeli strefa relaksu daje gościom możliwość odpoczynku od zgiełku wesela, ale jeszcze lepiej, gdy niesie ze sobą coś więcej. Co powiecie na strefę chill out z fajką wodną? Często obawiacie się, że goście, zamiast bawić się na weselu będą zalegać w strefie chill out. Jest to pewnego rodzaju dysonans, ponieważ zawsze zależy Wam, żeby goście świetnie się bawili, a narzucacie im, że mają to robić na sali. To świetne rozwiązanie na wesele w stylu slow. Istnieje jednak złoty środek. Na swoim weselu pod namiotem zaplanujcie strefę relaksu tak, aby nie zmieściło się w niej więcej niż 10 osób, a jej charakter wymuszał częstą rotację gości. Na przykład w przypadku fajki wodnej, z pewnością bardzo wielu gości będzie chciało z niej skorzystać. Starsze pokolenie będzie chciało spróbować. Duże zainteresowanie spowoduje, że zaleganie w strefie chill out, podczas gdy wiele osób na nią czeka, będzie po prostu niegrzeczne.',
                pics: [
                    {
                        src: require('./BlogPics/Post15/post15a.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Zabawy plenerowe na weselu pod namiotem?',
                text: 'Oczywiście! Brzmi banalnie, ale świetnie się sprawdza. Szczególnie, gdy zabawa nie jest wymuszona. Twister na trawie, dart, mega jenga, bule, cornhole, hula hop, a może wszystko na raz? Przy weselu pod namiotem opcji jest masa. Jedyne co Was ogranicza to Wasza wyobraźnia. Pamiętajcie, żeby gry na weselu pod namiotem nie były zbyt czasochłonne. Krótkie i wszystkim znane zabawy sprawdzą się najlepiej.',
                pics: [
                    {
                        src: require('./BlogPics/Post15/post15b.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Stoły tematyczne na weselu pod namiotem',
                text: 'Namiot weselny w którym znajdziecie samodzielne przygotowywane fondue, watę cukrową lub po prostu stanowisko z lemoniadą. Goście będą zachwyceni! Wiejski stół to już trochę przeżytek, pyszne wędzone kiełbasy, smalec, czy regionalne sery to nie najgorszy pomysł, ale czy nie warto odejść od konwenansów i zaproponować gościom coś, czego nie znają? Dzięki temu z pewnością Wasze wesele pod namiotem stanie się niezapomniane, a wszyscy goście będą je wspominać przez długi czas.',
                pics: [
                    {
                        src: require('./BlogPics/Post15/post15c.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Wesele pod gołym niebem z planem awaryjnym!',
                text: 'Polska to nie Kalifornia, gdzie wiecznie świeci słońce. Na wypadek deszczu namiot i ślub na wesele, które planowaliście pod chmurką to praktyczne rozwiązanie. Nawet jeśli planujecie kameralne wesele we własnym ogrodzie warto przemyśleć kwestie najmu namiotu weselnego. Jaki namiot na wesele wybrać na pewno doradzi Wasz konsultant ślubny. Namiot weselny i przyjęcie w plenerze brzmi jak plan idealny. Ciepły wieczór, rozgwieżdżone niebo, parkiet taneczny rozłożony na trawie, goście biesiadujący przy stołach... A w praktyce? Zimno jak diabli, na dodatek zbiera się na deszcz. Panie w szpilkach utykają w trawie. Goście o 22:00 mają dość i zbierają się do domu.',
                pics: [
                    {
                        src: require('./BlogPics/Post15/post15d.jpg').default
                    }
                ]
            },
            {
                text:
                    <>
                        Nie myślcie, że nie marzą nam się takie wesela. Jednakże biorąc pod uwagę nasze doświadczenie, zdrowy rozsądek i fakt, że Polska to nie Hiszpania, radzimy Wam dziesięć razy przemyśleć tę opcję. Pamiętajcie o zminimalizowaniu ryzyka. Pomyślcie o alternatywnym zadaszeniu. Może to być namiot z rozsuwanymi ścianami lub jurta. Nie zapominajcie, aby uprzedzić gości o tym, że większa część wesela odbędzie się w plenerze, każcie im zabrać cieplejsze swetry i wygodne buty. Możecie również zorganizować wesele pod gołym niebem tuż obok sali weselnej, w której wraz z gośćmi będziecie mogli się schronić, jeśli spadnie deszcz lub znacząco się ochłodzi. Mobilne lampy grzejne też się przydadzą na weselu pod namiotem. <br />
                        Podsumowując, jeżeli planujecie plenerowe atrakcje dla gości, pamiętajcie o tym, żeby były to proste rozrywki, niezajmujące zbyt wiele czasu. Nie bójcie się także organizować atrakcji dla gości oryginalnych i niesztampowych. Przede wszystkim pamiętajcie o tym, że dobra zabawa to nie tylko taniec na parkiecie do białego rana. Wprost przeciwnie – spora liczba osób uważa to za nieprzyjemny obowiązek. Nie bójcie się też korzystania z przygotowanych rozrywek, wcale nie musicie siedzieć na sali jak przywiązani, podczas gdy większość osób świetnie bawi się na zewnątrz. Spędzajcie czas z ludźmi, których kochacie i nie dajcie się zwieść zastałym konwenansom sprzed 50 lat. Świat się zmienia, ludzie się zmieniają i wesela też!
                    </>
            }
        ],
        links:
            <p className="mb-1">Źródło zdjęć: <CustomOuterLink to="https://pl.pinterest.com/" text="Pinterest" /></p>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    },
    {
        path: 'coś-dla-relaksu',
        seoText: 'Organizujesz swój ślub i wesele. BRAWO! Jesteś bohaterką ! Zasługujesz na trochę odpoczynku i relaksu. Chcemy zaproponować Ci dziś trochę weselnych umilaczy w postaci książek i programów ślubnych. W końcu przygotowania do ceremonii zaczynają się na długo przed kluczowym dniem, dlatego wielu może się wydawać, że...',
        tag: 'niezbędnik-przedslubny',
        title: 'Coś dla relaksu',
        date: '16 paź 2017',
        edited: '8 lip 2020',
        textShort: 'Organizujesz swój ślub i wesele. BRAWO! Jesteś bohaterką ! Zasługujesz na trochę odpoczynku i relaksu. Chcemy zaproponować Ci dziś trochę weselnych umilaczy w postaci książek i programów ślubnych. W końcu przygotowania do ceremonii zaczynają się na długo przed...',
        mainPic: {
            src: require('./BlogPics/Post14/post14.jpg').default
        },
        textMain: 'Organizujesz swój ślub i wesele. BRAWO! Jesteś bohaterką ! Zasługujesz na trochę odpoczynku i relaksu. Chcemy zaproponować Ci dziś trochę weselnych umilaczy w postaci książek i programów ślubnych. W końcu przygotowania do ceremonii zaczynają się na długo przed kluczowym dniem, dlatego wielu może się wydawać, że łączy się to tylko z jeżdżeniem, załatwianiem, przymierzaniem, próbowaniem i podpisywaniem umów. Są też miłe i zabawne strony. :)',
        content: [
            {
                headerSmall: <span className="pink">"Say Yes to the Dress"</span>,
                text: 'Przyszłe panny młode zjeżdżają z całej Ameryki do Nowego Jorku, by znaleźć perfekcyjną suknię ślubną. To fascynująca seria pokazująca dramat, jakim niejednokrotnie staje się znalezienie sukni, która spełniałaby oczekiwania wymagającej i czasem trudnej grupy, jaką tworzą druhny czy rodzina. Z pomocą przychodzi zespół konsultantów, aby pomóc pannom młodym i druhnom osiągnąć porozumienie co do stroju zadowalającego wszystkich. Niestety spory, różne gusta i wysokie ceny potrafią zmienić wymarzone wesele każdej panny młodej w najgorszy koszmar. Koniec końców sukces pojawia się częściej niż porażka.',
                pics: [
                    {
                        src: require('./BlogPics/Post14/post14a.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">"Dziennik naszego ślubu" Antoni Winiarski</span>,
                text: 'Dla każdej kobiety, która zmaga się z przygotowaniami ślubu i wesela. Ta książka to najlepszy przewodnik na polskim rynku do organizacji ślubu i przyjęcia weselnego. Rozdziały dotyczą inspiracji i szczegółowych planów, które pomogą nowożeńcom przejść przez ten trudny okres organizacji tych ważnych dla nich wydarzeń. Znajdziemy tu karty na zaplanowanie strojów, wydatków, na plan usadzenia gości i wiele innych niezbędnych czynności, których wykonanie zapewni, że ślub będzie elegancki i niezapomniany, a książka ta stanie się pamiętnikiem tej wyjątkowej i szczęśliwej ceremonii.',
                pics: [
                    {
                        src: require('./BlogPics/Post14/post14b.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">"Mikie ratuje wesele"</span>,
                text: 'Mikie Russo jest wyjątkowym organizatorem unikalnych wesel. Jego przyjęcia to istna uczta dla zmysłów. W dodatku ma dar rozładowywania najbardziej napiętych sytuacji, do których tak często dochodzi podczas planowania wesela. Ten niesłychanie zdolny samouk, przekonany o tym, że jeśli coś ma być zrobione dobrze, trzeba to zrobić samemu. Zdobył uznanie w branży dzięki swemu zamiłowaniu do sztuki florystycznej. Po trwającej parę lat praktyce w firmie florystycznej, gdzie doradzał Pannom Młodym, w końcu założył swoją własną firmę eventową – Michael Russo Events. W każdym odcinku możemy zobaczyć, jak Mike pomaga przyszłym małżonkom zrealizować ich marzenia o wyjątkowym dniu.',
                pics: [
                    {
                        src: require('./BlogPics/Post14/post14c.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">"Seks w wielkim mieście" - film</span>,
                text: 'Znana z serialu o tym samym tytule Carrie Bradshaw (Sarah Jessica Parker) po wielu perypetiach w końcu wychodzi za mąż za swojego ukochanego, słynnego Mr Biga. Carrie oraz jej przyjaciółki szykują wesele w iście nowojorskim stylu. Sukienka będzie od słynnej projektantki, a goście weselni to śmietanka towarzyska Manhattanu. Ja zazdroszczę jej miejsca, w którym ceremonia się odbędzie.',
                pics: [
                    {
                        src: require('./BlogPics/Post14/post14d.jpg').default
                    }
                ]
            },
            {
                text: 'A czego nie oglądać?'
            },
            {
                headerSmall: <span className="pink">I nie opuszczę Cię aż do ślubu</span>,
                text: 'Iza Janachowska – prowadząca program w TVN Style jest na pewno piękna, uśmiechnięta i zaangażowana w przygotowanie wymarzonego wesela Pary, ale na tym się kończy. Program każe wierzyć nam, że w dwa dni przed ślubem załatwimy nie tylko ekskluzywne auto, sukienkę z poprawkami krawieckimi, ale i gwiazdę disco polo. A do tego nasz makijaż nie ulegnie nawet minimalnemu zniszczeniu.',
                pics: [
                    {
                        src: require('./BlogPics/Post14/post14e.jpg').default
                    }
                ]
            },
            {
                text: 'Dajcie znać, co Wy lubicie oglądać najbardziej.'
            }
        ],
        textAuthor: "Ola",
        links:
            <>
                <p className="mb-1">Linki do zdjęć:</p>
                <CustomOuterLink to="http://friends.wikia.com/" /> <br />
                <CustomOuterLink to="https://www.hulu.com/say-yes-to-the-dress" /> <br />
                <CustomOuterLink to="http://www.matras.pl/dziennik-naszego-slubu,p,8558" /> <br />
                <CustomOuterLink to="https://vod.pl/i-nie-opuszcze-cie-az-do-slubu" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    },
    {
        path: 'wesele-w-plenerze',
        seoTitle: 'Jak zorganizować wesele w plenerze? radzi agencja ślubna Czary Marry',
        seoText: 'O czym trzeba pamiętać, organizując wesele w plenerze? Dlaczego warto przy tej okazji poprosić o pomoc wedding plannera? Praktyczne wskazówki i porady!',
        tag: 'niezbędnik-przedslubny',
        title: 'Jak zorganizować wesele w plenerze?',
        date: '17 sie 2017',
        edited: '18 lis 2020',
        textShort: 'Pogodna wiosna, długie, upalne lato i złota polska jesień mogą stanowić doskonałą oprawę weselnej imprezy. Jeśli dodatkowo zdecydujecie się urządzić wesele w plenerze, TEN dzień będzie...',
        mainPic: {
            src: require('./BlogPics/Post13/post13.jpg').default
        },
        textMain:
            <>
                Pogodna wiosna, długie, upalne lato i złota polska jesień mogą stanowić doskonałą oprawę weselnej imprezy. Jeśli dodatkowo zdecydujecie się urządzić <span className="bold pink">wesele w plenerze</span>, TEN dzień będzie naprawdę wyjątkowy. Dowiedzcie się, o czym musicie pamiętać gdy organizujecie wesele plenerowe!
            </>,
        content: [
            {
                headerSmall: 'Czy warto organizować wesele w plenerze?',
                text: 'Moda na śluby i wesela w plenerze przybyła do nas z USA i w ostatnich latach ta forma uroczystości zaczęła zyskiwać coraz większe grono zwolenników. To, że są to piękne i oryginalne uroczystości, nie podlega żadnej dyskusji. W dowolnym miejscu i czasie możemy stworzyć przyjęcie weselne w plenerze, które nie wymaga pójścia na żadne ustępstwa, wszystko zależy od naszej wyobraźni i preferencji. Dostajemy w końcu pusty namiot, z którym możemy zrobić wszystko. Planując wesele w plenerze, warto jednak odłożyć na później ochy i achy oraz rozmowy o dekoracjach i skupić się na najistotniejszych sprawach, konkretach, o których często nowożeńcy zapominają. Przed Wami lista spraw, o których zapomnicie, planując wesele plenerowe. Czas — start.',
            },
            {
                headerSmall: <span className="pink">1. Pomoc ekipy sprzątającej podczas wesela w plenerze</span>,
                text: 'Podczas tak dużego przedsięwzięcia, jakim jest wesele plenerowe, stawianie i wyposażenie namiotu weselnego wymaga pracy sporej liczby ludzi. Na "placu budowy" jednocześnie mogą kręcić się specjaliści od klimatyzacji, oświetlenia, w części zaplecza rozkładany może być sprzęt cateringowy, podłączany będzie prąd. Oczywiście ufamy specjalistom z branży ślubnej, których zatrudniamy, ale sytuacje i ludzie są różni. Bałagan może zrobić się samoistnie. Ktoś w natłoku pracy zapomni i zostawi puste butelki po napojach, niechcący naniesie piachu, a nie będzie miał ze sobą zmiotki i szufelki. Warto wliczyć do budżetu ślubnego firmę, która z profesjonalnym sprzętem będzie dbała o porządek podczas weselna w plenerze oraz posprząta po przyjęciu.',
                pics: [
                    {
                        src: require('./BlogPics/Post13/post13.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">2. Wesele w plenerze w nietypowym miejscu – zapewnijcie gościom parking!</span>,
                text: <>
                    W przypadku sal weselnych problem przeważnie się nie pojawia. Każde dobrze prosperujące miejsce ma swój prywatny parking, a w przypadku większej ilości samochodów służą swoim doświadczeniem i podpowiedzą, gdzie pokierować gości. Co, kiedy podczas organizacji przyjęcia weselnego w plenerze stawiamy <CustomPostLink path='wesele-pod-namiotem' className="linkPink" text="namiot weselny" /> czy jurtę na pięknej łące, u siebie w ogrodzie lub daleko od cywilizacji? Często Młode Pary nie pomyślą o organizacji parkingu i nie chodzi tu tylko o wydzielenie strefy, gdzie goście mogą zaparkować. Trzeba pomyśleć o tym, aby parking był na stabilnym gruncie. Panie będą mieć obcasy, a Panowie eleganckie półbuty. Szkoda, aby obuwie pobrudziło się od zapadania w ziemię bądź błoto podczas ewentualnego deszczu. Dobrze, gdyby miejsce było odpowiednio oświetlone, by nie szukać swojego auta, świecąc sobie smartfonem. Jeśli marzycie o weselu w plenerze, musicie zapewnić gościom jak najbardziej komfortowe warunki.</>,
                pics: [
                    {
                        src: require('./BlogPics/Post13/post13a.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">3. Bezawaryjne źródło prądu na weselu plenerowym</span>,
                text: 'Zadbajcie o to, aby podczas plenerowego wesela DJ czy zespół nie narzekali na brak prądu. Ze źródłem prądu na plenerowych weselach bywa różnie – najlepiej, jeśli możecie po prostu pociągnąć kable z budynku obok (urządzając wesele plenerowe na przykład w ogrodzie przy pałacu albo hotelu). Nie zawsze jest jednak taka możliwość. Zadbajcie również o odpowiednie zabezpieczenie kabli: nie ma nic gorszego niż kilometry kabli wijących się na trawie, przez które goście muszą przeskakiwać. Może Wam się to wydawać nudnym BHP-owskim gadaniem, ale wierzcie mi – dobra zabawa + alkohol + nieuwaga to mieszanka wybuchowa na weselu plenerowym.',
                pics: [
                    {
                        src: require('./BlogPics/Post13/post13b.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">4. Obsługa toalet na weselu plenerowym</span>,
                text: 'Śmiejcie się, śmiejcie, ale serio wyobrażacie sobie gości weselnych szukających u Was pomocy w załatwieniu papieru toaletowego lub mydła? Bo my nie bardzo. Kwestia toalety to bardzo ważna sprawa, dlatego planując wesele w plenerze, dokładnie ją przemyślcie. Wybierając miejsce na wesele w plenerze optymalna będzie możliwość skorzystania z toalety w przylegającym budynku. Możecie też wynająć toalety-przyczepy, z umywalką, lustrem i normalnie wyglądającymi kabinami. I o ile podczas korzystania z toalety w pobliskim budynku, będzie osoba, która o nią zadba, to nie liczcie na to, że ktoś pomyśli o sprawdzeniu stanu czystości w podstawionych toaletach — przyczepkach. No bo kto? Mama Panny Młodej, kelnerzy, którzy mają kontakt z Waszym jedzeniem? Tu warto pomyśleć o zatrudnieniu osoby, która przez całą noc przyjęcia weselnego w plenerze będzie dbać o czystość sanitariatów, jak i posprząta je rano po całonocnym weselu w plenerze.',
                pics: [
                    {
                        src: require('./BlogPics/Post13/post13c.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">5. Wedding planner na wesele w plenerze!</span>,
                text: 'Zauważyliście już pewnie, że organizacja wesel w plenerze to nie kaszka z mleczkiem. Trzeba pomyśleć zawczasu o wielu aspektach, żeby wesele w plenerze zakończyło się pełnym sukcesem. Chcecie zminimalizować przytłaczającą Was liczbę kontaktów i spraw, jakie musicie nawiązywać na drodze do Waszego wielkiego dnia w wesela w plenerze? Zatrudnijcie wedding plannera! Przejmie lwią część spraw i ustaleń, a przede wszystkim pomyśli o wszystkim, o czym Wy zapomnieliście! Przypilnuje za Was wszystkich spraw w trakcie organizacji wesela w plenerze, a także pojawi się na miejscu uroczystości podczas stawiania namiotu i na bieżąco będzie radził sobie z problemami, a wierzcie mi, jest ich dużo. Unikniecie też dodatkowego stresu i załatwiania, co pozwoli Wam cieszyć się swoim wyjątkowym dniem! Osobiście polecamy się na tego typu przedsięwzięcia - przyjęcia weselne w plenerze to nasz konik i mamy w tym sporo doświadczenia!',
                pics: [
                    {
                        src: require('./BlogPics/Post13/post13d.jpg').default
                    }
                ]
            },
            {
                text: 'Organizacja tradycyjnego wesela na zamku, w sali lub folwarku jest dużym wyzwaniem, jednak nieporównywalnie mniejszym, od organizacji wesela w plenerze. O wielu sprawach, których musicie dopilnować, nie przeczytacie na ślubnych blogach, a o pomoc trudno poprosić bliskich, którzy raczej też nie mają doświadczenia w urządzaniu podobnych uroczystości. Dlatego zaufajcie profesjonalistom i postawcie na pomoc wedding plennera organizując swoje wymarzone wesele w plenerze!'
            },
        ],
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    },

    {
        path: 'jak-zaoszczedzic-na-weselu',
        seoTitle: 'Podpowiadamy, jak zaoszczędzić na weselu – Czary Marry',
        seoText: 'Szukacie sposobów, jak zaoszczędzić na weselu? W naszym artykule podpowiadamy, z czego można zrezygnować, by obniżyć koszty wesela.',
        tag: 'niezbędnik-przedslubny',
        title: 'Jak zaoszczędzić na weselu? Z czego można zrezygnować, by zmniejszyć koszty wesela?',
        date: '5 lip 2017',
        edited: '22 gru 2020',
        textShort: 'Organizacja ślubu i wesela to nie tylko wielkie wyzwanie i dużo pracy, ale i...',
        mainPic: {
            src: require('./BlogPics/Post12/post12.jpg').default
        },
        textMain:
            <>
                Organizacja ślubu i wesela to nie tylko wielkie wyzwanie i dużo pracy, ale i spory wydatek. Co zrobić, gdy budżet się nie dopina? Od czego najlepiej zacząć cięcie kosztów? Dowiedz się, jak zaoszczędzić na weselu!
            </>,
        content: [
            {
                headerSmall: <span className="mint">Na czym zaoszczędzić na weselu – w pierwszej kolejności zrezygnujcie z poprawin</span>,
                text: 'Jeżeli nie macie pewności, czy wystarczy Wam pieniędzy na zorganizowanie ślubu marzeń, zdecydujcie się na wesele jednodniowe. Poprawiny generują spore koszty, często wiążą się z koniecznością rezerwacji dodatkowych miejsc noclegowych, transportu czy oprawy muzycznej. Jeżeli bardzo zależy Wam na tym, aby wesele było dwudniowe, zdecydujcie się tylko na pożegnalne śniadanie. Pamiętajcie, że lepiej zorganizować jednodniowe wesele, które goście zapamiętają na długo, niż kiepskie trwające na domiar złego dwa dni. Rezygnacja z poprawin to pierwsza odpowiedź na pytanie o to, na czym zaoszczędzić na weselu.',
                pics: [
                    {
                        src: require('./BlogPics/Post12/post12a.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="mint">Zastanawiacie się, jak zaoszczędzić na weselu? Skróćcie listę gości</span>,
                text: 'Zastanówcie się, czy Wasza lista gości nie jest zbyt długa. Skromne uroczystości w gronie rodziny i przyjaciół mają niesamowity urok i niczym nie ustępują tym na 150 osób. Nie uginajcie się, gdy najbliżsi naciskają, że należy zaprosić sąsiadkę lub ciocię, którą ostatni raz widzieliście podczas swojej komunii. Huczne czy kameralne wesele? To Wasze wesele i Wy za nie płacicie. Jeżeli mama lub teściowa mają ochotę kogoś zaprosić, postawcie ultimatum, że będą musiały pokryć wszystkie związanej tym koszty. Wiele Par Młodych nie ma ochoty zapraszać rodziny, z którą nie utrzymują kontaktu od lat i dopiero szukanie sposobu, jak zaoszczędzić na organizacji wesela, ułatwia w podjęciu decyzji dotyczącej listy gości.',
                pics: [
                    {
                        src: require('./BlogPics/Post12/post12b.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="mint">Na czym zaoszczędzić na weselu? Wybierzcie odpowiedni sposób serwowania potraw</span>,
                text: 'Jak serwowane będzie danie główne na Waszym weselu? Zdecydowaliście się na półmiski z różnymi daniami kładzione na stołach czy dokładnie takie same posiłki dla każdego z gości serwowane przez kelnera? My zdecydowanie polecamy opcję numer dwa. Z reguły powinna być ona tańsza, ponieważ kucharz ma do przygotowania mniej jedzenia, ale to nie jest jej jedyna zaleta. Ponadto taki sposób serwowania jest bardziej elegancki i raz na zawsze rozwiązuje problem walki o jedzenie. Goście są najedzeni i szczęśliwi, a Wy wiecie już, na czym zaoszczędzić na weselu.'
            },
            {
                headerSmall: <span className="mint">Wybór odpowiedniego alkoholu – jak zaoszczędzić na weselu?</span>,
                text: 'Pary bezustannie główkują, jaką wódkę weselną wybrać. Zwykle odpowiadamy, że taką, jaką pije się na rodzinnych imprezach, najlepiej niezbyt drogą. Absolutnie nie namawiamy do kupowania najtańszego spirytusu, bo to droga do tragedii, ale jeżeli Wasz budżet jest ograniczony, wybierzcie alkohol ze średniej półki cenowej. Wódka to wódka. Goście będą z chęcią po nią sięgać bez względu czy jej cena to 20, czy 70 złotych za pół litra, a Wy możecie zaoszczędzić naprawdę sporo pieniędzy. Dobrą alternatywą jest oczywiście wino. W sklepach internetowych możecie znaleźć rozmaite promocje na naprawdę smaczne wina.',
                pics: [
                    {
                        src: require('./BlogPics/Post12/post12c.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="mint">Jak zaoszczędzić na organizacji wesela? Obniżcie koszty za samochód Pary Młodej</span>,
                text: 'Z pewnością do ślubu fajnie jechać wypasioną sportową furą lub zabytkowym autem z lat powojennych, ale pamiętajcie, że to duży wydatek. W każdej rodzinie znajdzie się posiadacz nowego, ładnego samochodu, który będzie pękał z dumy, że chcecie pojechać do ślubu właśnie jego autem. Być może ktoś z przyjaciół dysponuje reprezentacyjnym samochodem i z chęcią w ramach prezentu ślubnego zawiezie Was do ślubu? Wybierając auto do ślubu, pamiętajcie o priorytetach. Są rzeczy ważne i ważniejsze. Jeśli zastanawiacie się, jak zaoszczędzić na organizacji wesela, szukajcie tańszych rozwiązań, które nie wpływają na dobrą zabawę gości.'
            },
            {
                headerSmall: <span className="mint">Zbędna papeteria ślubna i inne dodatki – jak zaoszczędzić na weselu?</span>,
                text: 'Głównie mamy tu na myśli winietki. Jeżeli zdecydujecie się na okrągłe stoliki, możecie zrezygnować z winietek na rzecz planu ustawienia stołów. Rozsadzenie gości przy okrągłym stoliku nie ma znaczenia, a table plan pomoże Wam uniknąć gonitwy w poszukiwaniu miejsca przy stole i wyjdzie zdecydowanie taniej. Menu? Zawieszki na alkohol? Wyglądają pięknie, ale zdecydowanie nie jest to must have niskobudżetowego wesela i rezygnacja z nich jest bezapelacyjnie dobrym pomysłem, by więcej nie zastanawiać się już, jak zaoszczędzić na weselu.',
                pics: [
                    {
                        src: require('./BlogPics/Post9/post9f.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="mint">Prezenty dla gości i atrakcje dla gości weselnych – jak zaoszczędzić na ślubie?</span>,
                text: 'W tajemnicy zdradzimy Wam, że często goście zapominają, gubią lub po prostu nie zabierają upominków przygotowanych przez Parę Młodą. To miły gest, ale przy 100-osobowym weselu rezygnacja z prezentów dla gości to oszczędność przynajmniej 500 złotych, które można wykorzystać na bardziej przyziemne rzeczy. Ponadto przy weselu ze skromnym budżetem powinniście całkowicie odrzucić pomysł takich atrakcji jak pokaz sztucznych ogni czy lampiony szczęścia. Atrakcje są dość drogie i można sobie na nie pozwolić, jeżeli każda inna rzecz jest dopięta na ostatni guzik. Dobry zespół lub Dj zapewniają gościom znakomitą zabawę, dlatego Pary, które zastanawiają się, jak zaoszczędzić na ślubie i weselu, namawiamy do skupienia się na znalezieniu wodzireja i muzyków, którzy nie pozwolą gościom się nudzić.',
                pics: [
                    {
                        src: require('./BlogPics/Post12/post12d.jpg').default
                    }
                ]
            },
            {
                text: 'Mamy nadzieję, że powyższe wskazówki przydadzą się zarówno tym, którzy chcieliby zorganizować wesele, nie rujnując się finansowo jak tym, którzy nie mają żadnych ograniczeń. Tak czy siak, warto kontrolować budżet i nie wydawać pieniędzy na rzeczy nieprzemyślane i zwyczajnie niepotrzebne. Można je przecież zainwestować znacznie lepiej, na przykład w cudowna podróż poślubną.'
            }
        ],
        links:
            <>
                <p className="mb-1">Linki do zdjęć:</p>
                <CustomOuterLink to="http://apbentertainment.com/" /> <br />
                <CustomOuterLink to="http://www.celebration.co.za/" /> <br />
                <CustomOuterLink to="http://www.thebrideacademy.co.uk/" /> <br />
                <CustomOuterLink to="http://www.fakt.pl/" /> <br />
                <CustomOuterLink to="http://fashionetka.pl/" /> <br />
                <CustomOuterLink to="http://fabryka-imprezy.pl/" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorMint" /></span>
            </>
    },
    {
        altPath: '7-grzechów-ślubnych-na-co-uważać-przy-wyborze-wykonawców',
        path: 'na-co-zwrocic-uwage-przy-wyborze-slubnych-wykonawcow',
        seoTitle: 'Wybór wykonawców ślubnych – na co zwrócić uwagę? – Czary Marry',
        seoText: 'Na co zwrócić uwagę przy wyborze fotografa, zespołu muzycznego na ślub czy sali weselnej? Podpowiadamy, jakie pułapki czekają na Pary Młode!',
        tag: 'niezbędnik-przedslubny',
        title: 'Wybór wykonawców ślubnych – na co zwrócić uwagę przy wyborze usługodawców ślubnych?',
        date: '9 cze 2017',
        edited: '8 mar 2021',
        textShort: 'Rynek ślubny rozwija się w niesamowitym tempie. Agencje ślubne, fotografowie, kamerzyści oraz zespoły muzyczne – każdego roku...',
        mainPic: {
            src: require('./BlogPics/Post11/post11.jpg').default
        },
        textMain: 'Rynek ślubny rozwija się w niesamowitym tempie. Agencje ślubne, fotografowie, kamerzyści oraz zespoły muzyczne – każdego roku branża ślubna się rozrasta. Dziś powiemy Wam jak wybrać solidnego wykonawcę spośród ofert znajdujących się na rynku. Obnażymy także słabostki i grzeszki "kolegów" z branży. Mamy nadzieję, że poniższy artykuł pomoże Wam oddzielić ziarno od plew i dokonać samych trafnych wyborów.',
        content: [
            {
                headerSmall: <span className="pink">Usługodawcy ślubni – jak wybrać i o czym pamiętać, podpisując umowę?</span>,
                text: <>
                    Pierwszą rzeczą, na jaką zwracają uwagę Pary Młode, wybierając usługodawców ślubnych, to ich portfolio. Jednak powinniście być czujni. Każdy kiedyś zaczynał... Z doświadczenia organizatorów ślubów i wesel wiemy, że początki bywają trudne. Przecież nikt nie zaufa przysłowiowej firmie kogucik, która nie ma na swoim koncie żadnego zlecenia. Jest wiele opcji, aby skompletować portfolio. Praca za darmo lub po kosztach, pomoc znajomym, praktyki, staże. Takie rozwiązanie wybierają pasjonaci.<br />
                Niestety są i tacy wykonawcy ślubni, którzy wolą drogę na skróty. Młode <Link to={URLS.HOME} className="linkPink">agencje ślubne</Link> kupują tzw. zdjęcia stockowe, czyli odsprzedane fotografie, które można ściągnąć ze strony internetowej lub – co gorsza – kradną je komuś przypadkowemu. Do tego kilka zmyślonych rekomendacji i gotowe. Jak zdemaskować oszustów? Mamy dla Was istną perełkę: <CustomOuterLink to="https://www.tineye.com" />. Pod tym adresem znajdziecie ciekawe narzędzie do sprawdzenia źródła zdjęć zamieszczonych w Internecie. Wystarczy, że ściągniecie je na dysk i załadujecie na tej stronie lub wpiszecie jego adres URL. Tineye przeszuka za Was Internet i pokaże ewentualne źródła. Jeżeli nie uda mu się namierzyć fotografii, prawdopodobnie nie pochodzi ona z bazy zdjęć stockowych.<br />
                Nie zapomnijcie również o prześwietleniu kapeli, która ma zagrać na Waszym weselu. Często skład zespołu ulega zmianie, a na stronie nadal możecie odsłuchiwać utwory wykonywane przez byłych wokalistów. Najlepiej zapytać orkiestrę lub DJ'a, gdzie można wysłuchać ich na żywo. Często takie kapele obsługują również imprezy okolicznościowe lub miejskie festyny, a nawet zorganizowane na sali Sylwestra. Jeśli jest taka możliwość, koniecznie idźcie posłuchać na żywo muzyków, których bierzecie pod uwagę, jako Wasz przyszły zespół na wesele.
                </>,
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11a.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Na co zwrócić uwagę przy wyborze fotografa ślubnego i kamerzysty na wesele?</span>,
                text:
                    <> Szukając fotografa ślubnego, warto porównać co najmniej kilka usługodawców. Prześledźcie portfolio każdego z nich, a także porozmawiajcie z nimi, choćby przez telefon. Pamiętajcie, że kontakt z wykonawcami ślubnymi jest bardzo ważny – między Wami a usługodawcami ślubnymi musi być nić porozumienia, aby w dniu ślubu nie było żadnych zgrzytów.<br />
                    Podpowiemy, na co zwrócić uwagę przy wyborze fotografa ślubnego:
                        <ul>
                            <li>portfolio</li>
                            <li>jakość i styl oddawanych zdjęć poszczególnym Parom Młodym (pojedyncze historie)</li>
                            <li>jakość materiałów – albumów, odbitek</li>
                            <li>kopia zapasowa zdjęć i zabezpieczenie przed ich utratą</li>
                            <li>zapisy umowy (zakres usług, termin realizacji, koszty)</li>
                            <li>opinie dotychczasowych klientów</li>
                        </ul><br />
                        Jeśli macie takie możliwość, przetestujcie jakość pracy fotografa ślubnego i jakość współpracy z nim, np. na sesji narzeczeńskiej. Podobnymi kategoriami kierujcie się, wybierając filmowca na ślub.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11b.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Na co zwrócić uwagę przy wyborze zespołu muzycznego lub DJ’a na ślub?</span>,
                text:
                    <>Z doświadczenia wiemy, że dobry zespół muzyczny to przepis na sukces każdej Pary Młodej. Jedzenie może być średnie, dekoracje niekoniecznie idealne (na tych rzeczach da się <CustomPostLink text="zaoszczędzić" path="jak-zaoszczedzic-na-weselu" className="linkPink" />), ale jeśli zespół lub DJ będą dobrze grali i przede wszystkim mądrze prowadzili zabawę, wszyscy będą się znakomicie bawić. Jednocześnie doświadczenie pokazuje nam, że z muzykami bywa największy problem – niestety zdarza się (i to wcale nie tak rzadko), że sięgają oni po alkohol, co uniemożliwia im utrzymanie wysokiego poziomu do samego końca wesela.<br />
                    Podpowiemy, na co zwrócić uwagę przy wyborze zespołu muzycznego lub DJ’a na wesele:
                        <ul>
                            <li>nagrania udostępnione na stronie – umiejętności</li>
                            <li>wszechstronność – możliwość grania różnych gatunków muzycznych</li>
                            <li>umowa – zapisy dotyczące ilości i długości przerw, zakaz picia alkoholu itd.</li>
                            <li>możliwość zobaczenia występu na żywo</li>
                        </ul>
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11c.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Wykonawcy ślubni – artyści i gwiazdy</span>,
                text: 'To bardzo niewdzięczna grupa wykonawców ślubnych. Znajdziecie ich głównie wśród fotografów, kamerzystów i muzyków. To Wy jesteście szefem i macie prawo decydować o tym, co zostanie zagrane na Waszym weselu lub jakiego typu zdjęć czy filmu oczekujecie. Oczywiście każdy fotograf, kamerzysta, muzyk ma swój bliżej określony styl i nie można oczekiwać, że zrobi coś zupełnie wbrew sobie, ale niedopuszczalne jest byście, nie mieli prawa głosu w tak ważnych kwestiach. Jeżeli więc obiło się Wam o uszy, że Wasz fotograf to artysta, który nie lubi się podporządkowywać, zrezygnujcie z jego usług. Na swojej czarnej liście wykonawców ślubnych mamy kilku delikwentów, którzy robią piękne zdjęcia, kręcą nieziemskie filmy i grają super muzykę, ale po prostu nie da się z nimi współpracować. Są aroganccy, nie słuchają uwag i wiedzą wszystko najlepiej. Taka współpraca zwykle odbija się czkawką.',
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11d.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Usługodawcy ślubni – wymówki wykonawców ślubnych</span>,
                text: 'Jeżeli po raz kolejny słyszycie, że coś się nie da, że już się tak nie robi, albo "my tak nie robimy" to znajdźcie kogoś, kto z przyjemnością zrobi wszystko, aby Wasze marzenia stały się rzeczywistością. Czasami oczywiście trzeba sprowadzić Parę Młodą na ziemię, ponieważ nie ma nic gorszego niż obiecanki i zbyt ryzykowne pomysły, ale rynek ślubny jest tak przesycony specjalistami i daje taką masę możliwości, że da się prawie wszystko. Oczywiście o ile znajdą się dobre chęci i pozwala na to budżet.',
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11e.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Wykonawcy ślubni na zastępstwo</span>,
                text: 'Nawet przy wyborze solidnego wykonawcy ślubnego los może spłatać Wam figla. Oby nigdy Was to nie spotkało, ale zdarza się, że sala weselna spłonie zaraz przed weselem, orkiestra nie dojedzie, a kamerzysta wyląduje w szpitalu. Tak niestety bywa. Dlatego postarajcie się przed tym zabezpieczyć. Często rozmawiając z Parami Młodymi widzimy, że umowy z wykonawcami traktują po macoszemu. Kasa się zgadza, zaliczka wpłacona, termin ślubu zaklepany. To nie takie proste. Jest masę rzeczy, które powinny być ujęte w umowie, a o których totalnie zapominacie. Jeżeli sala spłonie lub jej właściciel ogłosi upadłość musicie mieć alternatywę, a osoba, z którą podpisaliście umowę, powinna ponieść konsekwencje. Jeżeli orkiestra nie dojedzie, powinna zapewnić zastępstwo w postaci podobnej kapeli w tym samym przedziale cenowym. Jeżeli fotograf jest w szpitalu to nie wysyła swojej żony z polaroidem, tylko kolegę po fachu. Nie może być tak, że cała odpowiedzialność spada wyłącznie na Was. Umowa powinna być dla Was korzystna i zapewniać poczucie bezpieczeństwa. Bo właśnie po to ją podpisujecie.'
            },
            {
                headerSmall: <span className="pink">Na co zwrócić uwagę przy wyborze sali weselnej?</span>,
                text:
                    <>Wybór sali weselnej jest początkiem przygotowań do ślubu – obłożenie terminów zmusza Pary Młode, by to właśnie od poszukiwań miejsca na wesele zacząć przygotowania do ślubu.
                    Dowiedzcie się, na co zwrócić uwagę przy wyborze sali weselnej:
                        <ul>
                            <li>aranżacja sali weselnej – w stodole nie urządzicie wesela w <CustomPostLink text="stylu glamour" path="sesja-stylizowana-w-stylu-glamour" className="linkPink" />, a w sali z filarami wesela boho</li>
                            <li>liczba miejsc – sala nie może być ani za mała, ani za duża</li>
                            <li>możliwość dostawienia i <CustomPostLink text="aranżacja stołów weselnych" path="rozmieszczenie-gosci-weselnych" className="linkPink" /> okrągłych lub prostokątnych, w zależności od Waszych oczekiwań</li>
                            <li>czystość – koniecznie sprawdźcie łazienkę</li>
                            <li>sprawna i wydajna klimatyzacja</li>
                            <li>umowa – zwróćcie uwagę na zapisy dotyczące alkoholu oraz ewentualnego podniesienia cen (niektóre sale zastrzegają sobie prawo do podniesienia ceny w zależności od inflacji)</li>
                            <li>lokalizacja – jeśli sala znajduje się poza miastem, musicie pomyśleć o noclegach i transporcie</li>
                            <li>możliwość ślubu cywilnego w plenerze lub <CustomPostLink text="wesela w plenerze" path="wesele-w-plenerze" className="linkPink" /> – coraz więcej Par decyduje się na takie rozwiązanie, a możliwość wzięcia ślubu w plenerze na terenie sali jest nie tylko wygodne, ale także ogranicza koszty, np. związane z wynajęciem samochodu ślubnego</li>
                        </ul>
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11f.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">Wykonawcy ślubnie – jak zweryfikować usługodawców ślubnych?</span>,
                text: 'Szukajcie opinii, recenzji, komentarzy na forach lub innych stronach o tematyce ślubnej. Im więcej pozytywów tym lepiej ale pamiętajcie, że zdarza się, że firmy piszą je same lub działają na szkodę konkurencji. Często niepochlebna opinia bywa spowodowana niedopatrzeniem ze strony Pary Młodej, która czuje się niesłusznie rozgoryczona. Nie dajcie się zwieść! Bądźcie czujni! Mawia się, że jak nie ma Cię na Facebooku, to nie istniejesz. Jeżeli firma nie działa prężnie na portalach społecznościowych takich jak Instagram czy Facebook jest to niemal równoznaczne z tym, że nie prosperuje najlepiej.Nie chodzi tu nawet o ilość linków czy obserwatorów, a o regularne wrzucanie postów.Bardzo łatwo zweryfikować również jakość zamieszczanych publikacji.Jeżeli są to wyłącznie inspiracje lub cytaty o tematyce ślubnej jest to jednoznaczne z tym, że firma nie ma na swoim koncie żadnych realizacji.'
            },
            {
                headerClassName: <span className="pink">Prohibicja dla usługodawców ślubnych</span>,
                text:
                    <>
                        Wymieńcie firmę, w której bez ogródek podczas pracy można spożywać alkohol. Nie możemy zrozumieć, dlaczego w branży ślubnej panują inne standardy. Niestety najczęściej problem dotyczy zespołów muzycznych. Widzimy, jak szanowny pan wokalista pije coraz więcej i więcej, jego twarz staje się purpurowa, coraz ciężej mu się śpiewa, a przerwy między setami robią się coraz dłuższe. To niedopuszczalne! Zaznaczcie w umowie, że nie wyrażacie zgody na spożywanie alkoholu przez obsługę podczas wesela. Jeżeli wykonawca odmówi takiego zapisu, jest to jednoznaczne z tym, że Wasze wesele traktuje jak mocno zakrapianą imprezę z dobrym jedzeniem. O problemie tym wspomniałyśmy przed chwilą, podpowiadając, na co zwrócić uwagę przy wyborze zespołu muzycznego na ślub. Ale jeszcze raz uczulamy – zawrzyjcie zapis w umowie o zakazie picia alkoholu podczas wesela z każdym wykonawcom ślubnym.<br />
                        Przemyślane decyzje w związku z wyborem usługodawców ślubnych zaprocentują udanym weselem, bez niepotrzebnych, dodatkowych stresów i komplikacji. Oczywiście polecamy o <CustomPostLink text="opinię o wykonawcach ślubnych" path="polecany-fotograf-kamerzysta-sala-dj-zespol-na-wesele" className="linkPink" /> pytać rodzinę i znajomych, którzy sami niedawno organizowali ślub i wesele. Każda opinia jest cenna!
                    </>
            },
        ],
        links:
            <>
                <p className="mb-1">Linki do zdjęć:</p>
                <CustomOuterLink to="http://marketingland.com/" text="http://marketingland.com/" /> <br />
                <CustomOuterLink to="http://www.artsology.com/" text="http://www.artsology.com/" /> <br />
                <CustomOuterLink to="http://info.rpo.lubelskie.pl/" text="http://info.rpo.lubelskie.pl/" /> <br />
                <CustomOuterLink to="http://wiadomosci.gazeta.pl/" text="http://wiadomosci.gazeta.pl/" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    },
    {
        path: 'formalnosci-po-slubie',
        seoTitle: 'Formalności po ślubie – co załatwić po ślubie? – Czary Marry',
        seoText: 'Zmiana dokumentów, informacja o zmianie nazwiska w banku to tylko niektóre z formalności, o których trzeba pamiętać po ślubie.',
        tag: 'niezbędnik-przedslubny',
        title: 'Formalności po ślubie – co warto wiedzieć?',
        date: '1 cze 2017',
        edited: '22 gru 2020',
        textShort: 'Gratulacje! Jesteście już małżeństwem, ślub oraz zabawa weselna były fantastyczne i nadszedł czas na rozpoczęcie życia małżeńskiego w pełnym wymiarze, ale...',
        mainPic: {
            src: require('./BlogPics/Post10/post10.jpg').default
        },
        textMain: 'Gratulacje! Jesteście już małżeństwem, ślub oraz zabawa weselna były fantastyczne i nadszedł czas na rozpoczęcie życia małżeńskiego w pełnym wymiarze, ale zanim to nastąpi pora na "poślubne porządki", zarówno dosłownie (wyczyszczenie sukni, garnituru), jak i formalne (wymiana dokumentów). O wielu "poślubnych" sprawach Młoda Para zapomina albo odkłada na później, a przypomina sobie o nich dopiero przy załatwianiu ważnych spraw urzędowych. Dowiedz się, jakie formalności po ślubie powinni załatwić świeżo upieczeni małżonkowie.',
        topPic: {
            src: require('./BlogPics/Post10/post10a.jpg').default
        },
        content: [
            {
                headerSmall: 'Podziękowania dla gości, referencje dla wykonawców – formalności po ślubie, o których warto pamiętać',
                text: 'Warto napisać krótkie wiadomości do najbliższej rodziny i przyjaciół z podziękowanie za wspólną zabawę i wspomnienia, które będą towarzyszyć Wam przez całe życie. Koniecznie napiszcie również referencje wszystkim wykonawcom, z których pracy byliście zadowoleni. Od razu, nie czekając, bo później i tak nie znajdziecie na to czasu. Wy na takie formalności po ślubie poświęcicie kilka chwil, a goście i specjaliści z branży ślubnej na pewno to docenią.'
            },
            {
                headerSmall: 'Porządki i inne formalności po ślubie',
                text: 'Tuż po weselu upewnij się, że na sali nie zostało nic zniszczone oraz Wy lub goście weselni nie zostawiliście cennych rzeczy. Przywieź dekoracje z miejsca wesela, pożyczone elementy oddaj, a kupione – dobrze zabezpiecz i schowaj w odpowiednim miejscu. Warto również zadbać o stroje weselne. Nawet jeśli na pierwszy rzut oka sukienka i garnitur wydają się czyste warto oddać je do prali na profesjonalne czyszczenie. Tylko dobrze wyprana i zabezpieczona sukienka nie ulegnie zniszczeniu przez długi okres przechowywania w szafie, a jeśli postanowisz sprzedać swoją kreację, będzie już do tego odpowiednio przygotowana. Garnitur często służy Panu Młodemu jeszcze przez parę lat, dlatego warto o niego profesjonalnie dbać, co znacząco wydłuża jego żywotność. Może trudno nazwać to formalnościami po ślubie, ale dobrze będzie, jeśli poprosicie gości weselnych o przesłanie zdjęć, które zrobili w trakcie ceremonii lub zabawy. Jeśli mieliście Księgę Gości i nie każdy zdążył się wpisać, nic nie zaszkodzi jak zrobi to po weselu. Zabezpiecz w pamiątkowym pudełku ślubną papeterie oraz gadżety z dnia ślubu i wesela. Taką prośbę można skierować przy okazji podziękowań, o których wspomnieliśmy wcześniej.'
            },
            {
                headerSmall: 'Zmiana nazwiska po ślubie i zmiana dokumentów po ślubie',
                text: 'Z tymi formalnościami po ślubie nie warto zwlekać. Należy udać się do Urzędu Miasta bądź Urzędu Gminy i zacząć od dowodu osobistego, który jest najistotniejszy. Dowód osobisty z panieńskim nazwiskiem jest ważny jeszcze przez 4 miesiące, ale najlepiej wymienić go jak najszybciej, dla przysłowiowego "świętego spokoju". Zmianę nazwiska zgłasza się w USC na miesiąc przed ślubem i od chwili zawarcia związku małżeńskiego, to ono obowiązuje i nowym, zmienionym nazwiskiem po ślubie należy się posługiwać.'
            },
            {
                headerSmall: 'Pozostałe formalności po ślubie',
                text: 'Nie zapomnijmy o paszporcie, prawie jazdy czy dowodzie rejestracyjnym posiadanego pojazdu. Wnioskujemy o nie do 30 dni od daty sporządzenia aktu zawarcia małżeństwa. Do urzędu koniecznie zabierzmy aktualne kolorowe zdjęcie 35x45mm, dotychczasowy dokument, który chcemy wymienić oraz skrócony odpis aktu zawarcia małżeństwa. Warto także zadbać o zmianę danych w banku czy spółdzielni mieszkaniowej. Na zgłoszenie do ZUS mamy 7 dni od zmiany nazwiska, jednak jeżeli jesteśmy zatrudnieni na umowę o pracę, wystarczy informacja do naszego pracodawcy.'
            },
        ],
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorMint" /></span>
            </>
    },
    {
        path: 'rozmieszczenie-gosci-weselnych',
        seoTitle: 'Plan doskonały na rozmieszczenie gości weselnych – Czary Marry',
        seoText: 'Dlaczego warto zaplanować rozmieszczenie gości weselnych? Jak rozlokować gości i jak ich poinformować, które miejsce przygotowaliśmy właśnie dla nich?',
        tag: 'niezbędnik-przedslubny',
        title: 'Rozmieszczenie gości weselnych – czy istnieje plan doskonały?',
        date: '23 maja 2017',
        edited: '26 sie 2020',
        textShort: 'Rozsadzenie gości weselnych przy stołach to sprawa na pozór prosta, ale nasze doświadczenia w agencji ślubnej Czary Marry są najlepszym dowodem na to, że...',
        mainPic: {
            src: require('./BlogPics/Post9/post9.jpg').default
        },
        textMain:
            <>
                <span className="bold grey">Rozsadzenie gości weselnych</span> przy stołach to sprawa na pozór prosta, ale nasze doświadczenia w <Link url={URLS.HOME} className="linkLight">agencji ślubnej Czary Marry</Link> są najlepszym dowodem na to, że może przysporzyć masę problemów, a dla Pary Młodej jest sporym wyzwaniem. Wbrew pozorom konsekwencje nieprzemyślanego rozsadzenia gości na weselu mogą być bardzo dotkliwe. Począwszy od poczucia pominięcia i niezadowolenia po zaognienie rodzinnych sporów i weselne pranie brudów. Dziś zdradzimy Wam jak poradzić sobie z kłopotliwym tematem i sprawić, że <span className="bold grey">rozmieszczenie gości weselnych</span> przy stołach zajmie Wam dosłownie chwilę.
            </>,
        content: [
            {
                headerSmall: 'Sposób ustawienia stołów a rozmieszczenie gości weselnych',
                text: 'Zacznijmy od podstaw. Istnieje wiele możliwości ustawienia stołów na sali weselnej. Obecnie największym powodzeniem cieszą się stoliki okrągłe, co wynika nie tylko z mody i eleganckiego stylu, ale i wielu możliwości, jakie gwarantuje. Bez względu na to, na jakie ułożenie się zdecydujecie, musicie pamiętać o kilku ważnych zasadach, których pod żadnym pozorem nie należy łamać tworząc plan rozmieszczenia gości weselnych.',
                pics: [
                    {
                        src: require('./BlogPics/Post9/post9a.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Ponadczasowe zasady rozsadzania gości weselnych',
                text: 'Jak rozsadzić gości na weselu? Rozsadzenie gości weselnych powinno być uzależnione od swoistej hierarchii. Planując, gdzie kogo posadzić, należy wziąć pod uwagę, którzy goście są najważniejsi. Przede wszystkim pamiętajcie, że na Waszym weselu najważniejsi jesteście Wy sami. Para Młoda powinna więc siedzieć w centralnym miejscu. Mogą jej towarzyszyć świadkowie i ewentualnie rodzice, chociaż nie polecamy takiego rozwiązania ze względu na łączenie osób z dwóch różnych grup wiekowych (świadkowie, rodzice). Oryginalnym i praktycznym pomysłem jest osobny stolik przeznaczony tylko dla pary młodej, do którego dostawione są dwa puste krzesła. Dzięki temu każdy z gości ma szansę dosiąść się do Pary Młodej na krótką pogawędkę.',
                pics: [
                    {
                        src: require('./BlogPics/Post9/post9b.jpg').default
                    }
                ]
            },
            {
                text: 'Zasada rozsadzania gości weselnych, której absolutnie nie należy łamać i którą stosuje się od zarania dziejów, mówi, by gości weselnych sadzać od najstarszego do najmłodszego. Dziadkowie, babcie, rodzice, chrzestni powinni siedzieć jak najbliżej Pary Młodej. Następnie możecie się skupić na pozostałej części rodziny, a na końcu przyjaciołach i znajomych.',
                pics: [
                    {
                        src: require('./BlogPics/Post9/post9c.jpg').default
                    }
                ]
            },
            {
                text: 'Jednocześnie podczas rozsadzania gości powinno sugerować się nie tylko wiekiem i koneksjami rodzinnymi, ale i wspólnymi zainteresowaniami oraz wzajemną sympatią osób, które mają zasiadać przy jednym stole.',
                pics: [
                    {
                        src: require('./BlogPics/Post9/post9d.jpg').default
                    }
                ]
            },
            {
                text: 'Przy tworzeniu listy gości weselnych przy stole szczególną uwagę zwróćcie na to, aby osoby skonfliktowane lub niedarzące się sympatią nie siedziały zbyt blisko siebie. Tu świetnie sprawdzają się stoliki okrągłe. Bardzo łatwo będzie posadzić zwaśnionych rozwodników plecami do siebie – czego oczy nie widzą, tego sercu nie żal. Jeżeli zależy Wam na tym, aby goście lepiej się poznali, posadźcie członków dwóch rodzin po przeciwnych stronach stołu, zawsze naprzemiennie kobieta, mężczyzna.',
                pics: [
                    {
                        src: require('./BlogPics/Post9/post9e.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Tablica z rozmieszczeniem gości weselnych',
                text: 'Kiedy już ogarniecie galimatias związany z rozsadzeniem gości, pomyślcie o table planie. Co to takiego? Tablica z rozmieszczeniem gości weselnych zawiera oznaczenia stolików wraz z nazwiskami osób, które przy nich zasiadają. Taka tablica rozmieszczenia gości pozwoli uniknąć zamieszania związanego z poszukiwaniem swojego miejsca, a goście w kilka sekund rozproszą się po sali, nie powodując sztucznego tłoku i zamętu. Dobrze gdy tablica z usadzeniem gości stoi blisko wejścia, w miarę widocznym miejscu, co pozwoli na szybkie zajęcie stołów Jeżeli chodzi o winietki, są one niezbędne przy ułożeniu stołów w literę I, E, T lub U natomiast nie są niezbędne przy stolikach okrągłych. Nie ma bowiem większego znaczenia, jak zasiądą przy nich goście. Tak czy siak, każdy widzi każdego i wszyscy są sobie równi. Jeżeli obawiacie się, że Wasze babcie lub dziadkowie nie poradzą sobie ze znalezieniem swojego miejsca, wyznaczcie jedną osobę, która im pomoże i zaprowadzi do odpowiedniego stolika.',
                pics: [
                    {
                        src: require('./BlogPics/Post9/post9f.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Czy planowe rozmieszczenie gości jest konieczne?',
                text: <>
                    Zastanawiacie się, czy nie byłoby lepiej, gdyby goście sami zadecydowali, gdzie chcą siedzieć? Nie róbcie tego! To bardzo przestarzały sposób i z jakiegoś powodu przeszedł do lamusa. Chyba nie chcecie doprowadzić do sytuacji, w której przy jednym stole zasiada Wasza babcia, koleżanka z pracy oraz 5-letnia bratanica. tablica gości weselnych i plan rozmieszczenia gości weselnych ułatwi Wam znacząco organizację wesela.<br />
                Jeżeli macie pytania odnośnie rozsadzania gości piszcie śmiało. Postaramy się rozwiać Wasze wątpliwości. Być może jest jeszcze inny temat, który Was trapi, a nie został poruszony na łamach bloga? Chętnie się z nim rozprawimy.
                </>
            },
        ],
        links:
            <>
                <p className="mb-1">Linki do zdjęć:</p>
                <CustomOuterLink to="http://www.przed-slubny.pl/" text="http://www.przed-slubny.pl/" /> <br />
                <CustomOuterLink to="http://www.poradnikzdrowie.pl/" text="http://www.poradnikzdrowie.pl/" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorLight" /></span>
            </>
    },
    {
        path: 'dama-mojego-serca-historia-miłości-moich-rodziców',
        seoText: 'Dziś o swoim ślubie i weselu opowie Wam moja Kochana Mama. Naszym rozmowom zawsze towarzyszą zabawne anegdoty, wzruszenia i wielki karton ze starymi fotografiami. Jako dziecko uwielbiałam je oglądać i powiem szczerze, że zupełnie nic się nie zmieniło. Mamo, opowiedz, jak poznałaś tatę? Któregoś dnia wracając z pracy...',
        tag: 'ślubne-opowieści-czyli-wesela-dawniej',
        title: 'Dama Mojego Serca - Historia miłości moich rodziców',
        date: '16 maja 2017',
        textShort: 'Dziś o swoim ślubie i weselu opowie Wam moja Kochana Mama. Naszym rozmowom zawsze towarzyszą zabawne anegdoty, wzruszenia i wielki karton...',
        mainPic: {
            src: require('./BlogPics/Post8/post8.jpg').default
        },
        textMain:
            <>
                Dziś o swoim ślubie i weselu opowie Wam moja Kochana Mama. Naszym rozmowom zawsze towarzyszą zabawne anegdoty, wzruszenia i wielki karton ze starymi fotografiami. Jako dziecko uwielbiałam je oglądać i powiem szczerze, że zupełnie nic się nie zmieniło.<br />
                <span className="pink">Mamo, opowiedz, jak poznałaś tatę?</span> <br />
            Któregoś dnia wracając z pracy, spotkałam moją kuzynkę, która poprosiła mnie o pomoc przy upieczeniu ciasta na jakąś rodzinną uroczystość. Zgodziłam się pomóc. Poszłyśmy do jej mieszkania. Chwilę później w odwiedziny wpadł jej narzeczony z najlepszym kolegą. Tym kolegą był twój tata. Oczywiście nie robiłyśmy żadnego ciasta, a wszystko było skrzętnie zaplanowane. Niedługo po tym zaczęliśmy się spotykać częściej i tak się wszystko zaczęło.<br />
                <span className="pink">Jak wyglądały zaręczyny?</span> <br />
            Po roku znajomości tata dostał powołanie do wojska. Wtedy zadecydowaliśmy, że po powrocie weźmiemy ślub. W tamtych czasach służba wojskowa trwała 2 lata. Mimo to widywaliśmy się dość często. Tata pisał do mnie listy w pięknych kopertach sygnowanych literami DMS co oznaczało Dama Mojego Serca. Kiedy wrócił do domu, wręczył mi 24 goździki. Po jednym za każdy miesiąc rozłąki. Kilka miesięcy przed planowanym ślubem spotkaliśmy się wraz z rodzicami, żeby ustalić wszystkie szczegóły dotyczące ślubu. Było to tak jakby przyjęcie zaręczynowe. Pamiętam, że tego dnia odwiedził nas przyjaciel rodziny, który dowiedział się, że zamierzamy wziąć ślub. Bardzo zależało mu, żeby wziąć udział w uroczystości. Oczywiście był na liście zaproszonych gości. Dzień po jego wizycie dowiedziałam się, że zginął w wypadku na kopalni. To było bardzo smutne wydarzenie. <br />
                <span className="pink">Opowiedz o przygotowaniach do ślubu?</span> <br />
            Najpierw zamówiliśmy salę weselną, potem orkiestrę, którą słyszałam na weselu mojej koleżanki i bardzo mi się spodobała. Mama i starsza siostra pomagały mi w wyborze sukienek do ślubu. Ostatecznie kupiłam je w Jeleniej Górze. Pierwsza do cywilnego miała jasnoróżowy kolor, a druga do kościelnego oczywiście biały. Miały dokładnie taki sam krój, pasowały na mnie idealnie, więc nie musiałam niczego przerabiać. Tata również szył dwa garnitury, pierwszy w odcieniach beżu z koszulą w kolorze mojej sukienki, drugi czarny.<br />
                <span className="pink">Co z makijażem i fryzjerem?</span> <br />
            Malowałam się sama, a do fryzjera byłam umówiona, ale powiem szczerze, że pani fryzjerka prawie doprowadziła mnie do łez zbyt krótkim obcięciem grzywki. Do dziś oglądając zdjęcia, spoglądam na tę nieszczęsną, przykrótką grzywkę.<br />
                <span className="pink">Jak wyglądał ślub i wesele?</span> <br />
            To było 19 kwietnia 1980. Trudno uwierzyć, że minęło już 37 lat. Pagoda była brzydka, padał deszcz ze śniegiem. Goście weselni żartowali, że na pewno szorowałam przypalone garnki i dlatego mamy taką brzydką pogodę w dniu ślubu. To taki stary przesąd.<br />
            Ślub cywilny był na godzinę 13. Pamiętam, że nie mogłam wcisnąć obrączki na palec taty. Bardzo mnie to rozbawiło, co widać na zdjęciach. Na dodatek zająknęłam się podczas składania przysięgi, ponieważ, mimo że chodziłam z twoim tatą tak długo, nie wiedziałam, że ma na drugie imię Waldemar. Po ceremonii świadek kazał nam oddać obrączki i na godzinę 16 pojechaliśmy do kościoła. Zaskakujące było, że tego dnia ślub kościelny brały trzy pary podczas jednej ceremonii. Jeszcze większym zbiegiem okoliczności były imiona panów młodych: Lechosław, Lech oraz Leszek. Wszystko odbyło się oczywiście za naszą zgodą, nie zależało nam na tym, żeby wszystko kręciło się wokół nas, nie przeszkadzało, że dzielimy ceremonię z dwoma innymi parami.
            </>,
        topPic: {
            src: require('./BlogPics/Post8/post8a.jpg').default
        },
        content: [
            {
                text:
                    <>
                        <span className="pink">W porównaniu do innych par, z jakimi rozmawiałyśmy macie bardzo dużo zdjęć z wesela. Opowiedz, jak sprawa fotografa wyglądała u Was?</span><br />
                        Fotografa dzieliśmy ze znajomą parą młodą, która brała ślub tego samego dnia, a wesele miała w innej sali. Ponieważ ślub kościelny mieliśmy wspólny, a cywilny w innych godzinach nie sprawiło to żadnego problemu.<br />
                        <span className="pink">Mówiłaś o problemie z założeniem obrączek i drugim imieniu taty. Czy podczas wesela wydarzyło się jeszcze coś zabawnego?</span><br />
                        Pamiętam, że tata strasznie się stresował o to, czy goście dobrze się bawią. "Krystyna, zobacz - oni nie jedzą, Krystyna, zobacz - nic nie piją" — powtarzał bez przerwy. Zawsze wspominam to z rozbawieniem.<br />
                        <span className="pink">A co z prezentami?</span><br />
                        Były to przede wszystkim sprzęty gospodarstwa domowego. Najbardziej w pamięci zapadł mi prezent od małego syna mojej kuzynki, który specjalnie sprzedał nazbierane butelki i kupił nam ręczną maszynkę do mielenia mięsa. To było bardzo zabawne i niesamowicie miłe.<br />
                        <span className="pink">Mieliście poprawiny?</span><br />
                        Tak, odbywały się w domu. Przygotowywałyśmy je razem z twoją babcią, ale tak naprawdę mogłabym powiedzieć, że trwały praktycznie tydzień, ponieważ przedobrzyliśmy z ilością jedzenia i alkoholu.<br />
                        <span className="pink">Co jako małżeństwo z prawie 40-letnim stażem poradzilibyście współczesnym nowożeńcom?</span><br />
                        Poradziłabym im, żeby byli wytrwalsi w małżeństwie. By starali się być ze sobą na dobre i złe, wspólnie rozwiązując problemy jakie niesie los.
                    </>,
                pics: [
                    { src: require('./BlogPics/Post8/post8b.jpg').default }
                ]
            }
        ],
        textAuthor: "Kasia",
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="ślubne-opowieści-czyli-wesela-dawniej" text="Ślubne opowieści, czyli wesela dawniej" className="bgColorPink" /></span>
            </>
    },

    {
        path: 'prezent-dla-gosci-wesele',
        seoTitle: 'Pomysły na prezenty dla gości weselnych – Czary Marry',
        seoText: 'Chcielibyście obdarzyć Waszych gości oryginalnym upominkiem? Sprawdź, jakie prezenty dla gości weselnych możecie przygotować!',
        title: 'Prezenty dla gości weselnych – pomysły na upominki dla gości',
        date: '9 maja 2017',
        edited: '26 sie 2020',
        tag: 'niezbędnik-przedslubny',
        textShort: 'Wszyscy uwielbiamy prezenty! Moda na upominki dla gości weselnych trwa w najlepsze. Młodzi przygotowują drobne prezenciki, które umieszczają...',
        mainPic: {
            src: require('./BlogPics/Post7/post7.jpg').default
        },
        textMain:
            <>
                Wszyscy uwielbiamy prezenty! Moda na <span className="bold pink">upominki dla gości weselnych</span> trwa w najlepsze. Młodzi przygotowują drobne prezenciki, które umieszczają na stołach, rozdają na pożegnanie lub ustawiają gdzieś w jednym widocznym miejscu do wzięcia. Takie prezenty dla gości weselnych to piękna pamiątka z dnia ślubu i wesela. <br /> W całej idei nie chodzi o to, by kupować drogie podarunki, lecz o symboliczną drobnostkę na pamiątkę – podziękowania dla gości weselnych za przybycie i chęć wspólnego celebrowania Waszego dnia ślubu. Uważamy, że to naprawdę świetny pomysł, który coraz częściej wykorzystywany jest przez Pary Młode, jako substytut rozdawania wódki czy ciasta, które zostało po weselu (co niekoniecznie jest szczególnie eleganckie). Jakie więc podarunki zostaną w pamięci gości? Przygotowałyśmy dla Was kilka ciekawych i niebanalnych propozycji – inspiracji na <span className="bold pink">oryginalne prezenty dla gości weselnych.</span>
            </>,
        topPic: {
            src: require('./BlogPics/Post7/post7a.jpg').default
        },
        content: [
            {
                headerSmall: <span className="pink">Rośliny – zaskakujące upominki dla gości</span>,
                text: 'Bardzo ciekawym prezentem dla gości weselnych są rośliny. Niektórzy twierdzą, że doskonale nawiązują do miłości, ponieważ o nie również trzeba dbać i pielęgnować tak, jak uczucie. Można podarować małą roślinkę, kwiatka, zioła albo sadzonkę drzewka. Jest wiele roślin, które łatwo zakupić w dużej ilości oraz w miniaturowej wersji. W roli doniczki idealnie sprawdzą się małe słoiczki bądź puszki. Sukulenty na wesele czy własnoręcznie zrobiony mini las w słoiku, czyli prezenty dla gości weselnych DIY (zrób to sam), mogą okazać się strzałem w dziesiątkę szczególnie jeśli lubicie trend eko.'
            },
            {
                headerSmall: <span className="pink">Album ulubionych piosenek Pary Młodej – sentymentalny upominek dla gości</span>,
                text: 'Każda para ma swoje ulubione piosenki. A to wspomnienie pierwszego pocałunku, pierwszej wspólnej wycieczki rowerowej albo udanych wakacji. Warto to wykorzystać i stworzyć piękną składankę w personalizowanym pudełku i podarować je w formie prezentu dla gości weselnych. Prezenty dla gości weselnych w stylu zrób to sam? – chyba nie ma nic bardziej personalnego. Jeśli udałoby się jeszcze okleić samemu płytę, byłoby bajecznie. Innym rozwiązaniem są udekorowane pendrive’y, na którym znajdą się wspomnienia Młodych.',
                pics: [
                    { src: require('./BlogPics/Post7/post7b.jpg').default }
                ]
            },
            {
                headerSmall: <span className="pink">Magnesy - podziękowanie dla gości</span>,
                text: 'Wielu miłośników podróży ze swoich bliskich i dalekich wojaży przywozi magnesy na lodówkę. Są one pamiątką, które nie zajmują miejsca na półce, które nie kurzą się, jak inne wakacyjne pamiątki i które często traktujemy jako swojego rodzaju trofea. Dlaczego więc nie podarować gościom pamiątki z najpiękniejszego i najważniejszego dnia w Waszym życiu? Magnesy jako prezent dla gości weselnych, dzięki możliwości aplikacji na lodówce, będą przypominać wszystkim to cudowne wydarzenie, jakim był Wasz ślub – z całą pewnością pozytywnie zaskoczą gości weselnych, ceniących sobie pamiątki, które są sentymentalne i praktyczne jednocześnie.',
                pics: [
                    { src: require('./BlogPics/Post7/post7c.jpg').default }
                ]
            },
            {
                headerSmall: <span className="pink">Breloczek – kolejny praktyczny prezent dla gości weselnych</span>,
                text: 'Breloczek to kolejny ciekawy i przydatny prezent dla gości. Breloczki coraz częściej zastępują popularne słoiczki z miodem lub słodycze. Są trwałe, nie mają daty przydatności do spożycia i pomogą odróżnić kolejny komplet kluczy, który odkładamy obok innych. Są więc użyteczne, a obdarowana osoba będzie mogła każdego dnia patrzeć na taki upominek dla gości, otwierając drzwi kluczami zawieszonymi na tym breloczku.',
                pics: [
                    { src: require('./BlogPics/Post7/post7d.jpg').default }
                ]
            },
            {
                headerSmall: <span className="pink">Winietki-przypinki – upominek dla gości, oryginalny dodatek na stole</span>,
                text: 'Szukając ciekawego prezentu dla gości weselnych, możemy sięgnąć również po takie, które spełnią praktyczną funkcję w trakcie samego wesela. Zamiast tradycyjnych, "zwykłych" winietek postawcie na winietki-przypinki. Na początku imprezy przypinki kładziemy na talerzach gości tak, by spełniały funkcję wizytówek z imieniem i nazwiskiem. Po zakończeniu wesela, winietki-przypinki będą trwałą pamiątką tej wyjątkowej nocy. Taki upominek dla gości polecamy przede wszystkim tym Parom, które na wesele zamawiają foto budkę.',
                pics: [
                    { src: require('./BlogPics/Post7/post7e.jpg').default }
                ]
            },
            {
                headerSmall: <span className="pink">Inne pomysły na prezent dla gości weselnych</span>,
                text:
                    <>
                        W ramach podziękowania dla gości miód, małe słoiczki z miodem, bywa dość popularnym prezentem. Nic dziwnego – miód bywa w końcu słodki jak miłość!. W ramach słodkości lizaki, krówki weselne czy czekoladki są przyjemnym sposobem na podziękowania dla gości. Bardziej wytrawnym upominkiem bywają ciasteczka z wróżbą na wesele albo popularne w Polsce mini nalewki dla gości weselnych.
                        Prezent dla gości weselnych warto dostosować do tematyki wesela. Jeśli zdecydowaliśmy się więc urządzić wesele w stylu boho, rośliny lub herbata w małych słoikach będą strzałem w dziesiątkę. Parom, które organizują wesele w stylu <CustomPostLink path="sesja-stylizowana-w-stylu-glamour" text="glamour" className="linkPink" />, polecamy przygotować mały, ale elegancki upominek dla gości.
                    </>
            },
            {
                headerSmall: <span className="pink">Prezent dla gości wesele – praktyczne porady na koniec</span>,
                text: 'Jeśli chcecie podarować swoim bliskim alkohol, zaopatrzcie się specjalnie na tę okazję np. w wino lub małe spersonalizowane buteleczki domowej nalewki, ale nie rozdawajcie wódki, która nie zeszła do śledzika! Najlepiej będzie, jeżeli każdy gość otrzyma identyczny podarunek – dzięki temu unikniecie zbędnego zamieszania. Postarajcie się przygotować taki prezent dla gości weselnych, który będzie i pamiątką, i podziękowaniem za udział w najwspanialszym dla Was dniu. Czy macie już pomysł na prezent dla Waszych gości weselnych?'
            }
        ],
        links:
            <>
                <p className="mb-1">Linki do zdjęć:</p>
                <CustomOuterLink to="http://www.polishcookies.pl/" text="http://www.polishcookies.pl/" /> <br />
                <CustomOuterLink to="http://www.marthastewartweddings.com/" text="http://www.marthastewartweddings.com/" /> <br />
                <CustomOuterLink to="https://www.etsy.com/" text="https://www.etsy.com/" /> <br />
                <CustomOuterLink to="http://zszywka.pl/" text="http://zszywka.pl/" /> <br />
                <CustomOuterLink to="http://www.ebay.co.uk/" text="http://www.ebay.co.uk/" /> <br />
                <CustomOuterLink to="http://akcydensyslubne.pl/" text="http://akcydensyslubne.pl/" /> <br />
                <CustomOuterLink to="https://www.notonthehighstreet.com/" text="https://www.notonthehighstreet.com/" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>

    },
    {
        path: 'marta-i-michał-i-ich-weselna-przygoda-w-ogrodzie',
        title: 'Marta i Michał i ich weselna przygoda w ogrodzie',
        seoText: 'Marta i Michał wymarzyli sobie plenerowy ślub i wesele na terenie swojego pięknego ogrodu. Ponieważ miejsce, które wybrali, było magiczne i pełne uroku, nie mogliśmy oprzeć się pokusie i nie wykorzystać tego w dekoracjach oraz ogólnej koncepcji wesela i ślubu. Ustaliliśmy, że motywem przewodnim będzie odniesienie do...',
        date: '3 maja 2017',
        tag: 'opowiadamy-o-naszych-realizacjach',
        textShort: 'Marta i Michał wymarzyli sobie plenerowy ślub i wesele na terenie swojego pięknego ogrodu. Ponieważ miejsce, które wybrali, było magiczne i pełne uroku, nie mogliśmy...',
        mainPic: {
            src: require('./BlogPics/Post6/post6.jpg').default
        },
        textMain:
            <>
                Marta i Michał wymarzyli sobie plenerowy ślub i wesele na terenie swojego pięknego ogrodu. Ponieważ miejsce, które wybrali, było magiczne i pełne uroku, nie mogliśmy oprzeć się pokusie i nie wykorzystać tego w dekoracjach oraz ogólnej koncepcji wesela i ślubu. Ustaliliśmy, że motywem przewodnim będzie odniesienie do Secret Garden. Kolory miały być intensywne, mocne, przełamane specjalnie zaprojektowanymi dodatkami z kwiatową fakturą. Wszystko miało być idealne i spójne ze sobą.
            </>,
        topPic: {
            src: require('./BlogPics/Post6/post6.jpg').default
        },
        content: [
            {
                text: 'Kolory główne, które wybrała Para to fuksja, brzoskwinia oraz turkus. Motyw kwiatowy pojawił się w indywidualnie zaprojektowanej papeterii, w dekoracji stołów i bufetów oraz w aranżacjach najdrobniejszych elementów, takich jak prezenty dla gości czy księga życzeń. Lekkości wnętrza namiotu nadały przeźroczyste krzesła chiavarii. Najciekawszym elementem dekoracji były krzesła, które zawisły nad bufetami. Żywe kwiaty, którymi ozdobiono wiszące krzesła, idealnie pasowały do kompozycji kwiatowych, które znalazły się na stołach. Wszystko tworzyło spójną całość.',
                pics: [
                    { src: require('./BlogPics/Post6/post6a.jpg').default }
                ]
            },
            {
                text: 'Przed namiotem postały trzy strefy chillout. Każda z nich została urządzona w klimacie zgodnym z przeznaczeniem. Była degustacja whisky z podświetlanymi meblami Chesterfield, kolorowa strefa relaksu z fajką wodną udekorowana drewnianymi paletami i miękkimi poduchami.',
                pics: [
                    { src: require('./BlogPics/Post6/post6b.jpg').default }
                ]
            },
            {
                text: 'Goście przez całe wesele mogli skorzystać z usług barmana i baristy. Kolorowe drinki zachwycały smakiem, a zapach aromatycznej kawy unosił się przez cały czas trwania wesela. Po zapadnięciu zmroku namiot, strefy chillout oraz ogród zostały oświetlone setkami świec i światłem architektonicznym, co podkreśliło niesamowitą atmosferę przyjęcia.',
                pics: [
                    { src: require('./BlogPics/Post6/post6c.jpg').default }
                ]
            }
        ],
        textAuthor: "Ola",
        links:
            <p className="mb-1">Fotografie: <CustomOuterLink to="https://pokadrowani.pl/" text="Pokadrowani" /></p>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="opowiadamy-o-naszych-realizacjach" text="Opowiadamy o naszych realizacjach" className="bgColorLight" /></span>
            </>
    },
    {
        path: 'podziekowania-dla-rodzicow',
        title: 'Podziękowania dla rodziców na weselu',
        seoText: 'Podziękowania dla rodziców - oryginalne pomysły na prezenty na ślubie i weselu.',
        date: '19 kwi 2017',
        edited: '5 lis 2020',
        tag: 'niezbędnik-przedslubny',
        textShort: 'Podziękowania dla rodziców bywają twardym orzechem do zgryzienia. Z pewnością ciężko w kilku słowach lub za pomocą weselnego szlagieru...',
        mainPic: {
            src: require('./BlogPics/Post5/post5.jpg').default
        },
        textMain:
            <>
                Podziękowania dla rodziców bywają twardym orzechem do zgryzienia. Z pewnością ciężko w kilku słowach lub za pomocą weselnego szlagieru „Cudownych rodziców mam” wyrazić wdzięczność za trud wychowania, okazaną miłość, cierpliwość i wsparcie. Postaramy się pomóc w wyborze odpowiedniego podziękowania dla rodziców, ale pamiętajcie, że nikt tak dobrze nie zna Waszych rodziców, jak Wy sami. <br />
            Podstawową i najważniejszą sprawą jest, że to PODZIĘKOWANIA DLA RODZICÓW. Nie robicie ich dla siebie tylko dla osób, które mimo, że są Wam bardzo bliskie niejednokrotnie mają zupełnie inny gust niż Wy. Starajcie się spojrzeć na temat z ich perspektywy. Co sprawi im największą radość? Co lubią? Jacy są? Idąc tym tropem, przedstawiamy kilka popularnych sposobów na wyrażenie podziękowanie rodzicom w dniu ślubu.
            </>,
        content: [
            {
                headerSmall: '1. Podziękowania dla rodziców w formie filmu',
                text: 'Film z podziękowaniami dla rodziców może mieć bardzo różną formę. Możecie wybrać super produkcję nakręconą przez polecanych profesjonalistów lub przygotować go samodzielnie. Być może chcielibyście powiedzieć coś od siebie lub zdecydować się na krótki filmik z muzyką w tle. Nie chcecie dokładać sobie kolejnych wydatków do weselnego budżetu? Wystarczy prosty program do obróbki filmów i telefon komórkowy. Nie jesteście dobrymi mówcami? Nie wiecie jak to ugryźć? Świetnym rozwiązaniem będzie pokaz slajdów ze starymi zdjęciami z dzieciństwa. Podziękowania dla rodziców w formie filmu ze zdjęciami przywoła ciepłe wspomnienia. Nie upierajcie się też przy tym, że film musi być istnym wyciskaczem łez. Jeżeli Wasi rodzice uwielbiają się śmiać i żartować to warto postawić na dobry humor. Nie musicie też prezentować filmu podczas wesela. Może warto przemyśleć czy nie było lepiej wspomnieć na nim o bardziej intymnych szczegółach z Waszego życia i wręczyć rodzicom płytę, którą obejrzą w zaciszu własnego domu. Takie podziękowania dla rodziców będą wspaniałą pamiątką.',
                pics: [
                    { src: require('./BlogPics/Post5/post5a.jpg').default }
                ]
            },
            {
                headerSmall: '2. Kwiaty i kosze upominkowe – praktyczne podziękowania dla rodziców',
                text: 'Takie rozwiązanie ma swoje plusy i minusy. Klasyka broni się sama. Kosze dla rodziców są eleganckim i taktownym wyborem. Możecie zdecydować się na gotową kompozycję lub skompletować kosz według upodobań Waszych rodziców. Mogą się w nim znaleźć produkty spożywcze, alkohole, jak i kosmetyki czy książki. Niestety nie jest to pamiątka na lata i z roku na rok jest coraz bardziej oklepana. Kiedy kilka lat temu brałam ślub, znalezienie pięknego kosza dla rodziców było problemem. Wybór nie był zbyt wielki. Dziś znajdziecie je dosłownie wszędzie. Ponadto wraz z kwiatami i kartką tworzył zgrabny prezent na podziękowania dla rodziców. Obecnie to coraz częściej tylko dodatek do "głównego" podziękowania i jednocześnie pierwsza rzecz jaka przychodzi do głowy jako odpowiedź na pytanie: co na podziękowania dla rodziców?',
                pics: [
                    { src: require('./BlogPics/Post5/post5b.jpg').default }
                ]
            },
            {
                headerSmall: '3. Figurki, grawerowane statuetki, ramki, portrety, karykatury, obrazy – nietypowe podziękowania dla rodziców, ale nie wszystkich',
                text: 'Karykatura czy obraz na podziękowania dla rodziców - jedni powiedzą, że to świetny prezent, inni, że to totalna wiocha. I jedni i drudzy mają rację. Są bowiem gusta i guściki. Najlepszym sposobem na rozstrzygnięcie tego jest zadanie sobie kilku pytań. Jak wygląda mieszkanie naszych rodziców? Jest minimalistyczne, czy raczej półki uginają się od bibelotów? Gdy rodzice jadą na wakacje przywożą z powrotem dodatkową walizkę z pamiątkami czy raczej omijają stragany szerokim łukiem? Jakie prezenty robią innym? Przydatne i funkcjonalne, czy raczej są to ozdoby? Odpowiedzcie sobie na takie pytania, a będziecie mieli pewność czy wybór pucharu dla najlepszych rodziców na świecie jest trafionym pomysłem i odpowiednie na podziękowania dla rodziców na weselu.',
                pics: [
                    { src: require('./BlogPics/Post5/post5c.jpg').default }
                ]
            },
            {
                headerSmall: '4. Wycieczka, weekend w SPA lub kolacja w modnej restauracji – oryginalne podziękowania dla rodziców z górnej półki',
                text: 'Takie upominki dla rodziców to nie jest to tania sprawa, dlatego zastanówcie się dwa razy, zanim podejmiecie taką decyzję. Najgorszą rzeczą, jaką możecie zrobić to uszczęśliwianie kogoś na siłę lub wprawianie w zakłopotanie. Czasami Wasi rodzice to ludzie tak zwanej starej daty, którzy najlepiej czują się w zaciszu własnego domu. Podróż, za którą zapłaciliście kupę pieniędzy, a na którą nie będą mieli ochoty, przysporzy im tylko stresu, a Wam odbije się czkawką. Jeżeli jednak Wasi rodzice uwielbiają podróże, nowe miejsca, smaki, a Wasz budżet zanadto na tym nie ucierpi, będzie to wspaniały prezent i wyjątkowe podziękowania dla rodziców. Być może rodzice chcieliby się gdzieś wybrać, ale nie mają odwagi? Przeraża ich podróż samolotem, nie znają języków obcych? W takiej sytuacji wybierzcie się razem z nimi.',
                pics: [
                    { src: require('./BlogPics/Post5/post5d.jpg').default }
                ]
            },
            {
                headerSmall: '5. Piosenka z dedykacją dla rodziców lub taniec – tradycyjne podziękowania dla rodziców',
                text: 'To prawda, że w we wstępie nieco prześmiewczo wspomniałyśmy o popularnym "Cudownych rodziców mam", ale uwierzcie nam, są mamy, które marzą, żeby usłyszeć tą lub podobną piosenkę od momentu, kiedy dowiedziały się, że bierzecie ślub. Nie odbierajcie im tego. Przecież to tylko trzy minuty tańca w kółeczku, a chodzi o sprawienie im przyjemności. Dedykowana piosenka na podziękowania dla rodziców nie jednej osobie zakręciła łezkę w oku.',
                pics: [
                    { src: require('./BlogPics/Post5/post5e.jpg').default }
                ]
            },
            {
                headerSmall: '6. Kartki z życzeniami – indywidualne podziękowania dla rodziców na wesele',
                text: 'Nie kosztują wiele, a mogą okazać się najcudowniejszym prezentem. Nie mamy tu na myśli drukowanego taśmowo wierszyka i pozytywki. Napiszcie, co czujecie, podziękujcie rodzicom od serca. Wzruszające podziękowania dla rodziców w postaci tekstu od serca będą przywoływać ciepłe emocje. Tu znowu wspomnę, jak to było u mnie. Wraz z mężem przygotowaliśmy kartki dla rodziców. Po jednej stronie ja pisałam do moich rodziców, a po drugiej mój mąż do swoich przyszłych teściów i odwrotnie. Uwierzcie, mimo że od naszego ślubu minęło pięć lat, rodzice nadal co jakiś czas do nich wracają. W naszym przypadku były to udane upominki dla rodziców.',
                pics: [
                    { src: require('./BlogPics/Post5/post5f.jpg').default }
                ]
            },
            {
                headerSmall: '7. Albumy – sentymentalne podziękowania dla rodziców w formie zdjęć',
                text: 'Taki album ze zdjęciami to piękna pamiątka na lata. Ślub jest nie tylko jednym z najważniejszych dni w Waszym życiu, ale i Waszych rodziców. Z pewnością będą zachwyceni takim prezentem. Jedynym jego minusem jest to, że możecie go wręczyć dopiero około trzech miesięcy po ślubie. Z drugiej strony fotoksiążka czy podziękowania dla rodziców w postaci albumu z sesji narzeczeńskiej albo wspólnymi zdjęciami rodzinnymi możecie wykonać przed ślubem. Zdjęcia rodzinne mogą na nowo ożywić miłe wspomnienia. O pomoc w wykonaniu albumów na podziękowania dla rodziców na weselu możecie poprosić swojego fotografa ślubnego, który doradzi i pomoże zamówić profesjonalne albumy.',
                pics: [
                    { src: require('./BlogPics/Post5/post5g.jpg').default }
                ]
            },
            {
                headerSmall: 'Inne oryginalne prezenty dla rodziców na ślub',
                text:
                    <>
                        Jest jeszcze wiele innych pomysłów na podziękowania dla rodziców na wesele – drzewka, las w słoiku, skrzynki, wiersze i wiele wiele innych. Granicą w przygotowaniu wyjątkowego upominku dla rodziców jest wyłącznie Wasza wyobraźnia. To nie muszą być upominki dla rodziców spełniające tegoroczne trendy ślubne. Utarło się również, że prezenty na podziękowania dla rodziców muszą być takie same. Nic bardziej mylnego. Przecież to cztery różne osoby, o odmiennych gustach, wrażliwościach i zainteresowaniach. Możecie postawić na spersonalizowane prezenty, koniecznie w podobnych przedziałach cenowych.
                        <br />
                        Jeżeli macie pytania odnośnie prezentów dla rodziców piszcie śmiało. Być może chcielibyście, żebyśmy poruszyły na blogu inny problematyczny dla Was temat. Czekamy na Wasze komentarze.
                    </>
            }
        ],
        links:
            <>
                <p className="mb-1">Linki do zdjęć:</p>
                <CustomOuterLink to="http://jaeheebridal.com/" text="http://jaeheebridal.com/" /> <br />
                <CustomOuterLink to="http://zrobswojslub.pl/" text="http://zrobswojslub.pl/" /> <br />
                <CustomOuterLink to="http://musicserwis.com/" text="http://musicserwis.com/" /> <br />
                <CustomOuterLink to="http://fashionelka.pl/" text="http://fashionelka.pl/" /> <br />
                <CustomOuterLink to="http://cashmores-caravans.com/" text="http://cashmores-caravans.com/" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    },
    {
        path: 'o-tym-dlaczego-warto-zdecydować-się-na-konsultanta-ślubnego',
        title: "O tym, dlaczego warto zdecydować się na konsultanta ślubnego",
        seoText: "Mimo że tytuł artykułu wskazuje na coś zupełnie innego, nie będzie to skrzętnie przygotowana autoreklama. Oczywiście jako konsultant ślubny wierzę, że zawód, który wykonuję, jest potrzebny i warto zainwestować w pomoc specjalisty. To tak jak z fotografem. Czasy, gdy zdjęcia na weselu robili wujkowie lub sąsiedzi pos...",
        date: "16 kwi 2017",
        tag: "niezbędnik-przedslubny",
        textShort: "Mimo że tytuł artykułu wskazuje na coś zupełnie innego, nie będzie to skrzętnie przygotowana autoreklama. Oczywiście jako konsultant ślubny wierzę, że zawód, który wykonuję, jest potrzebny i warto...",
        mainPic: {
            src: require('./BlogPics/Post4/post4.jpg').default
        },
        textMain:
            <>
                Mimo że tytuł artykułu wskazuje na coś zupełnie innego, nie będzie to skrzętnie przygotowana autoreklama. Oczywiście jako konsultant ślubny wierzę, że zawód, który wykonuję, jest potrzebny i warto zainwestować w pomoc specjalisty. To tak jak z fotografem. Czasy, gdy zdjęcia na weselu robili wujkowie lub sąsiedzi posiadający aparat fotograficzny już dawno minęły, dziś stawiamy na profesjonalistów znających się na rzeczy. Dzięki temu zachwycamy się pięknymi fotografiami, które są nie tylko reportażem, ale i odzwierciedlają nasze emocje, a przy tym mają dobrą jakość. Wierzę, że niebawem także profesja wedding plannera zacznie być traktowana bardziej na serio. Idealny konsultant ślubny to taki, który na weselach "zjadł zęby", śledzi najnowsze trendy, jest empatyczny, kreatywny, odporny na stres i oczywiście ukończył kursy, które uprawniają go do wykonywania swojego zawodu. Oddajmy mu zatem honory i przyznajmy, że ktoś, kto organizuje ślub po raz pierwszy w życiu i zaczął się tą tematyką interesować niedawno nie jest w stanie dorównać mu wiedzą i znajomością branży ślubnej. Tak samo jest w każdej innej dziedzinie.
            </>,
        topPic: {
            src: require('./BlogPics/Post4/post4a.jpg').default
        },
        content: [
            {
                text: 'Nie mam zamiaru więcej rozpisywać się czy i dlaczego wedding planner jest przydatny podczas organizacji wesela, bo takich artykułów znajdziecie tysiące. Być może już zaobserwowaliście, że lubię spojrzeć na problem z nieco innej perspektywy. Dziś chciałabym napisać, dlaczego warto obciążyć obowiązkami właśnie jego zamiast świadkową, świadka, mamę, teściową czy siebie samych. Muszę zaznaczyć, że użycie słowa "obciążyć" nie jest kwestią przypadku. Na początku zastanówmy się, kogo zwykle Pary Młode wybierają na swoich świadków? Odpowiedź jest oczywista: brata, siostrę, najlepszą przyjaciółkę, dobrego kumpla. Kogokolwiek z nich wybiorą, chcą, aby była to bliska i zaufana osoba, na której im zależy i w której towarzystwie czują się dobrze. Blogi ślubne rozpisują się jakie cechy powinien mieć idealny świadek oraz jakie są jego obowiązki podczas wesela. Dbając o to, aby goście weselni świetnie się bawili i niczego im nie brakowało, Nowożeńcy często zapominają o tych najważniejszych, których wybrali na swoich świadków.',
                pics: [
                    { src: require('./BlogPics/Post4/post4b.jpg').default },
                ]
            },
            {
                text: 'Z pewnością dla przeważającej większości osób jest to ogromny zaszczyt i czysta przyjemność móc okazać wsparcie i pomóc Parze Młodej podczas przygotowań i wesela. Wszystko oczywiście zależy od charakteru Państwa Młodych - jedni są mniej wymagający i podchodzą do wyboru świadków jak do pewnego rodzaju formalności, inni oczekują pełnego zaangażowania i powierzają mu dużą część swoich obowiązków. Tak czy siak, czy nie byłoby przyjemniej, gdyby pomoc z ich strony wynikała wyłącznie z ich chęci w takim stopniu, na jaki mają ochotę? Zawsze łatwiej jest zrzucić całą odpowiedzialność na konsultanta, któremu się za to płaci i który zna koncepcję naszego wesela od podszewki, niż na najlepszą przyjaciółkę, która od 20 minut próbuje dokończyć swój rosół. Niestety czasami zdarza się i tak, że na weselu dochodzi do bardzo delikatnych sytuacji. Znam masę historii o skłóconych członkach rodziny i niezałatwionych sprawach, które ponownie ujrzały światło dzienne przy weselnym stole. Wtedy niejednokrotnie pojawia się dylemat, kogo wysłać między zwaśnione strony, aby nie pogłębiać konfliktu. Mama, siostra, ciocia komuś na pewno pozostanie niesmak - Parze Młodej z pewnością. W sytuacjach takich jak ta wedding planner okazuje się nieoceniony. Obca osoba, która zwykłym pytaniem "Jak się Państwo bawicie?" może całkowicie zmienić bieg wydarzeń.',
                pics: [
                    { src: require('./BlogPics/Post4/post4c.jpg').default },
                ]
            },
            {
                text: 'Kolejna sprawa, nad którą warto się zastanowić to to, czy będziecie organizować Wasze wesele sami, czy potrzebujecie do tego pomocy innych osób. Zdarza się, że Para Młoda planuje wesele w miejscowości oddalonej od swojego miejsca zamieszkania o setki kilometrów. W takiej sytuacji po raz kolejny angażują swoich rodziców lub rodzeństwo. Ci z kolei pomagają jak tylko mogą. Dzwonią, jeżdżą, są niemal na każde zawołanie Pary Młodej. Czasami zdarza się i tak, że organizacja sprawia im tak wiele przyjemności, że sami chcą zorganizować coś od siebie lub zaproponować własne rozwiązania. Nie ma w tym oczywiście nic złego, a wprost przeciwnie jest to naprawdę miłe. Z doświadczenia wiem, że wychodzą z tego cudowne rzeczy, ale niestety bywa i tak, że wizja pomocników totalnie rozmywa się z wizją Pary Młodej. Jak powiedzieć teściowej, że kolejny pomysł, jaki zaproponowała, nie przypadł Wam do gustu? Trochę strach... Nikt przecież nie chce, żeby poczuła się dotknięta.',
                pics: [
                    { src: require('./BlogPics/Post4/post4d.jpg').default },
                ]
            },
            {
                text: 'Jak to wygląda, gdy Narzeczeni korzystają z usług wedding plannera? Wspólnie określają każdy szczegół uroczystości, wybierają bez ograniczeń, co im się podoba a co nie, zmieniają zdanie, znowu wybierają. Nikt nie ma żalu, taka praca. Ponadto dobry konsultant ślubny wie, że wprost należy zaangażować najbliższych w przygotowania, o ile tego oczywiście chcą. Najczęściej ogranicza się to do przygotowania atrakcji, która jest zgodna z motywem przewodnim ślubu lub innej rzeczy mającej sprawić radość Parze Młodej. Wilk syty i owca cała. Załóżmy, że Para Młoda decyduje się na przygotowanie wszystkiego samodzielnie. Wszystkiego! Łącznie z zaproszeniami, dekoracjami sali, płaceniem wykonawcom i dbaniem o to, czy goście dobrze bawią się na weselu. To oczywiście do zrobienia i można to zrobić naprawdę dobrze. To masa frajdy i satysfakcji, ale też ciężkiej pracy i czasu. Przypomina mi się opowieść moich przyjaciół, którzy organizowali wesele samodzielnie. Wyszło pięknie, uzdolniona Pani Młoda przygotowała własną papeterię ślubną, piękne ozdoby i upominki dla gości. Było naprawdę perfekcyjnie. Młodzi skończyli sklejać winietki o trzeciej w nocy na dzień przed weselem, ponieważ papier nie doszedł na czas.',
                pics: [
                    { src: require('./BlogPics/Post4/post4e.jpg').default },
                ]
            },
            {
                text: 'Podsumowując, moim celem było przekazanie Wam, że nie ma pięknego wesela bez ciężkiej pracy i zaangażowania osób, którym na tym weselu zależy. Czy będzie to mama, siostra, brat, przyjaciółka, Wy sami, ktoś straci tych kilka cennych chwil, które można by było poświęcić na celebrowanie jednego z najpiękniejszych momentów w Waszym życiu, jakim jest ślub i wesele. Może właśnie dlatego warto pomyśleć o tym, żeby nie była to osoba wybrana spośród gości weselnych, tylko taka, która zna się na rzeczy i jej uwaga jest skupiona w stu procentach na tym, co dzieje się podczas uroczystości, ponieważ nie traktuje Waszego wesela jak okazji do zabawy i spędzenia czasu z najbliższymi ludźmi.'
            }
        ],
        textAuthor: "Kasia",
        links:
            <>
                <p className="mb-1">Linki do zdjęć:</p>
                <CustomOuterLink to="https://www.theodysseyonline.com" text="https://www.theodysseyonline.com" /> <br />
                <CustomOuterLink to="http://www.studio1250.com" text="http://www.studio1250.com" /> <br />
                <CustomOuterLink to="https://welldoing.org" text="https://welldoing.org" /> <br />
                <CustomOuterLink to="http://www.huffingtonpost.com" text="http://www.huffingtonpost.com" />
            </>,
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    },

    {
        path: 'suknia-slubna-jak-wybrac',
        altPath: 'o-poszukiwaniu-sukienki-idealnej',
        title: "Idealna suknia ślubna – jak ją znaleźć?",
        seoTitle: 'Idealna suknia ślubna – jak ją znaleźć? – Czary Marry radzi',
        seoText: "Jak przygotować się do kupna sukni ślubnej? O czym warto pamiętać, by wybrać swoją wymarzoną suknię ślubną i uniknąć niepotrzebnego stresu?",
        date: "16 mar 2017",
        edited: "20 lut 2021",
        tag: "niezbędnik-przedslubny",
        textShort: "To nie tajemnica, że przyszła Panna Młoda o swojej sukni ślubnej marzy od wielu lat i wyobraża ją sobie na długo wcześniej przed tym wielkim dniem. Dla wielu kobiet idealna suknia ślubna jest...",
        mainPic: {
            src: require('./BlogPics/Post3/post3.jpg').default,
        },
        textMain:
            <>
                To nie tajemnica, że przyszła Panna Młoda o swojej sukni ślubnej marzy od wielu lat i wyobraża ją sobie na długo wcześniej przed tym wielkim dniem. Dla wielu kobiet <span className="bold mint">idealna suknia ślubna</span> jest nawet ważniejsza od pięknego pierścionka zaręczynowego. Od najmłodszych lat w naszej głowie tworzą się wizje pięknej, białej sukni ślubnej, idealne podkreślającej naszą figurę i wprawiającej gości weselnych w zachwyt. Nie wspominając już o Panu Młodym, który to nie powinien w dniu ślubu odwracać od nas wzroku.
                Co zrobić, aby dzień zaplanowany na znalezienie perfekcyjnej sukni ślubnej przebiegł idealnie i zakończył się kupieniem TEJ kreacji? Jak sprawić, że marzenia i wizje przemienią się w rzeczywistość?
            </>,
        content: [
            {
                headerSmall: 'Idealna suknia ślubna – czyli jaka?',
                headerClassName: 'mint',
                text:
                    <>
                        W Twojej głowie powstał projekt idealnej sukienki. Zamykasz oczy i widzisz każdy szczegół. Wiesz dokładnie jaki powinna mieć krój, kolor, długość. Pamiętaj jednak, że często ciężko słowami wytłumaczyć swoją wizję, dlatego koniecznie przed wizytą w salonie sukien ślubnych przygotuj zdjęcia paru sukienek, odpowiadających Twojej wizji. Tobie będzie łatwiej przekazać, co masz na myśli, a ekspedientce zrozumieć Twoją wizję. Współpraca pójdzie sprawnie, a Ty nie zmarnujesz czasu na mierzenie kreacji nie w Twoim stylu. Nie muszą to być oczywiście zdjęcia dokładnie takiej sukni ślubnej, o jakiej marzysz – ważne, by zdjęcia pozwalały zrozumieć, czego od sukni ślubnej oczekujesz. Nie dla każdego pojęcie „suknia ślubna boho” oznacza to samo, dlatego pokaż kilka modeli, które Ci się podobają.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post3/post3a.jpg').default,
                        author: "Małe Szare Studio"
                    }
                ]
            },
            {
                headerSmall: 'Zakup sukni ślubnej a budżet na ślub',
                headerClassName: 'mint',
                text:
                    <>
                        Zastanów się, ile możesz wydać na suknię ślubną, pamiętając również o budżecie całego wesela. Warto pamiętać, że sama suknia to nie wszystko. Do niej będziesz musiała dobrać buty, bieliznę, dodatki i <CustomPostLink path="akcesoria-slubne-gadzety" text="akcesoria ślubne" className="linkDark" />. Poinformuj o planowanej kwocie panią w salonie, w którym będziesz mierzyć suknie ślubne. Pozwoli to na uniknięcie zakochania się w kreacji, na którą nie będzie Cię stać. Wiemy, że o swojej sukni ślubnej marzyłaś od lat, dlatego tym bardziej radzimy, by do jej kupna dobrze się przygotować.
                    </>
            },
            {
                headerSmall: 'Z kim udać się na wyprawę po suknię ślubną?',
                headerClassName: 'mint',
                text:
                    <>
                        Ile osób pomaga wybrać Ci sukienkę, tyle gustów i opinii. Nie zabieraj na poszukiwania wszystkich zainteresowanych, ale też nie idź sama. Najlepiej zabierz ze sobą jedną lub dwie przyjaciółki, które znają Twój gust, wiedzą, w czym czujesz się dobrze, jakie fasony nie pasują do Twojej figury. Będziesz mogła liczyć wtedy na szczerą opinię, ale też unikniesz ogromu „dobrych rad”, którymi zasypałyby cię dodatkowe, przypadkowe osoby. Dobrze zabrać kogoś z kim na co dzień chodzisz na zakupy. Osoba, która doradza Ci podczas wyboru codziennych kreacji, sprawdzi się doskonale także przy wyborze sukni ślubnej.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post3/post3b.jpg').default,
                        author: "Jakub Nowotyński"
                    }
                ]
            },
            {
                headerSmall: 'Suknie ślubne a moda – na co zwrócić uwagę, wybierając suknię ślubną?',
                headerClassName: 'mint',
                text:
                    <>
                        W naszych wpisach często podkreślamy, by w przygotowaniach do ślubu nie kierować się wyłącznie modą i <CustomPostLink path="trendy-slubne" text="trendami ślubnymi" className="linkDark" />. To, co modne, niekoniecznie sprawdzi się u nas. Dokładnie tak samo jest z suknią ślubną. Modne fasony nie leżą perfekcyjnie na każdym typie figury – weź to pod uwagę, wybierając swoją ślubną suknię. Dobierz ją, uwzględniając swoje atuty i mankamenty, a będziesz czuła się w niej doskonale! Pomocne będzie wsparcie osoby bliskiej, która umie doradzić, w czym Ci jest lepiej, a w czym gorzej.
                        <br />
                        Warto także przymierzyć różne modele sukni ślubnych. Naprawdę! Czasami na wieszaku suknia ślubna nam się nie podoba, a na nas samych dużo zyskuje. Z pewnością przekonałaś się o tym na codziennych zakupach odzieżowych, podobnie jest z sukniami ślubnymi. Takie przymiarki pomogą Ci dostrzec także inne zalety i wady poszczególnych modeli. Być może rozglądasz się za suknią ślubną princeską, ale po założeniu jej okaże się, że zwyczajnie jest Ci w niej niewygodnie. Podobne wrażenie możesz mieć w przypadku sukni ślubnej z kołem.
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post3/post3c.jpg').default,
                        author: "Katarzyna Wosiak"
                    }
                ]
            },
            {
                headerSmall: 'Suknia ślubna to nie wszystko!',
                headerClassName: 'mint',
                text:
                    <>
                        Chociaż to ona wydaje się być najważniejszym elementem stroju Panny Młodej, nie możesz zlekceważyć roli, jaką w Twoim wyglądzie odgrywają inne elementy – między innymi <span className="bold mint">bielizna</span>. Dobrze dobrana bielizna zapewni Ci nie tylko komfort, ale poprawi także proporcje sylwetki. Mocno zabudowany stanik i majtki z kokardkami, które będą, odciskały się na sukience ślubnej, nie zrobią najlepszego wrażenia. Nie tylko w dniu ślubu, ale również na przymiarkach.
                        <br />
                        Nie zapomnij także o umiejętnie wykonanym makijażu i zadbanych włosach. Jeżeli tego dnia nie będziesz się dobrze czuła sama ze sobą, żadna suknia ślubna Ci się nie spodoba. Salony ślubne zazwyczaj oferują buty do przymiarki, ale dla własnego komfortu możesz zabrać ze sobą swoje ulubione szpilki. Weź także szczotkę, gumkę do włosów i spinki. Być może będziesz chciała poeksperymentować z fryzurą, aby wybrać welon. Zabierz też ze sobą notes, w którym będziesz mogła zapisać interesujące Cię modele sukni ślubnych (niestety wiele salonów ślubnych zabrania robienia zdjęć, gdy jeszcze nie jesteś w pełni zdecydowana).
                    </>,
                pics: [
                    {
                        src: require('./BlogPics/Post3/post3d.jpg').default,
                        author: "Ania Kopeć - Serdeczności"
                    }
                ]
            },
            {
                headerSmall: 'Na wybór sukni ślubnej zarezerwuj co najmniej kilka godzin',
                headerClassName: 'mint',
                text:
                    <>
                        Przygotuj się na poszukiwania i nie planuj, że idealną ślubną suknię znajdziesz w godzinę i miesiąc przed weselem. Przed wizytami w salonie dobrze jest zrobić krótki research i zorientować się, które salony proponują kreacje, fasony, które cię interesują. Zrób listę salonów i koniecznie umów się na wizytę. Warto poszukiwana zaplanować minimum 4 miesiące przed weselem. Twoja kreacja na pewno będzie wymagała krawieckich poprawek. Każdy salon to około godzinna wizyta. Jeśli masz parę miejsc, które chciałabyś odwiedzić, warto poszukiwania rozłożyć na parę dni. Pozwoli Ci to na rozsądne i komfortowe zakupy. Zaplanowanie wizyty w paru salonach w jednym dniu to męczarnia i żadna przyjemność.
                    </>
            },
            {
                text: 'Wybór i kupno sukni ślubnej może być prawdziwą przyjemnością. Pod warunkiem, że nie będziesz czuć presji czasu, że pozostaniesz otwarta na różne propozycje i że do zakupów odpowiednio się przygotujesz. Powodzenia!'
            }
        ],
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorMint" /></span>
            </>
    },

    {
        path: 'o-gościach-nie-idealnych',
        title: "O gościach (nie)idealnych",
        seoText: "Mało jest rzeczy, które budzą tyle emocji, co śluby i wesela. Mają jakąś magiczną moc wpędzania ludzi w amok – i nie mówię tu o Młodej Parze, u której to bardzo zrozumiałe, ale o gościach. Całkiem rozsądni na co dzień ludzie wraz ze wskoczeniem w sukienkę czy garnitur wpadają w wir dziwnych przekonań i przepychanek...",
        date: "7 mar 2017",
        edited: "8 lip 2020",
        tag: "niezbędnik-przedslubny",
        textShort: "Mało jest rzeczy, które budzą tyle emocji, co śluby i wesela. Mają jakąś magiczną moc wpędzania ludzi w amok – i nie mówię tu o Młodej Parze, u której to bardzo zrozumiałe, ale o gościach. Całkiem rozsądni na co dzień ludzie...",
        mainPic: {
            src: require('./BlogPics/Post2/post2.jpg').default
        },
        textMain:
            <>
                Mało jest rzeczy, które budzą tyle emocji, co śluby i wesela. Mają jakąś magiczną moc wpędzania ludzi w amok – i nie mówię tu o Młodej Parze, u której to bardzo zrozumiałe, ale o gościach. Całkiem rozsądni na co dzień ludzie wraz ze wskoczeniem w sukienkę czy garnitur wpadają w wir dziwnych przekonań i przepychanek. I to właśnie o nich i ich zachowaniach chciałam dzisiaj napisać. Przed Wami siedem rzeczy, z którymi całkiem regularnie spotykam się na weselach i ślubach. <br /> A więc czego nie robić na weselach?
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
            },
            {
                headerSmall: <span className="pink">3. Nie narzekać.</span>,
                text: "Lista tematów do narzekania jest długa i zawiera zwykle: u Baśki było lepiej/ile trzeba czekać na rosół/jak to nie ma drink-baru/nie wysilili się za bardzo/po co komu [wstawić dowolną atrakcję] /ciekawe kto za to wszystko płacił/strasznie brzydka sukienka, a podobno zapłaciła pięć tysięcy - i tak dalej. Nie da się policzyć ile takich rozmów/uwag podsłuchałam w toalecie albo podczas czekania na Młodą Parę. Uroczystości weselne rozkręciły się do niesamowitych rozmiarów. Wesele bez foto-budki, pokazu sztucznych ogni i porwania przez piratów wypada tak jakoś blado. Warto się jednak przy takiej okazji zatrzymać i zastanowić, o co tak naprawdę w tym dniu chodzi. I ugryźć się w język, bo nie dość, że takie uwagi są niegrzeczne i bardzo nie na miejscu, to i są sygnałem, że łykamy cały ten weselny konsumpcjonizm. Nigdy też nie wiemy, kto stoi za nami.",
                pics: [
                    { src: require('./BlogPics/Post2/post2b.jpg').default }
                ]
            },
            {
                headerSmall: <span className="pink">4. Nie przychodzić na wesele, jeśli nie lubimy zapraszających.</span>,
                text: 'Obecność na weselu to nie obowiązek. Na szczęście nigdy nie spotkałam się z tym osobiście, ale na forach, blogach, portalach społecznościowych kipi od komentarzy w stylu: Nie lubię pluskwy, to przyjdę na jej wesele w białej sukni, niech ma! Zresztą co bym nie założyła, będę wyglądać o niebo lepiej! Pewnie i tak po roku się rozwiodą. Prezentu ode mnie na pewno nie dostaną. Dajmy sobie spokój z manipulacjami, chytrym planem. Gwarantuję Wam, że na takim weselu i z takim nastawieniem nie będziecie dobrze się bawić. Jeśli nie przepadamy za Młodą Parą, to po prostu złóżmy życzenia i grzecznie odmówmy przyjścia na uroczystość.'
            },
            {
                headerSmall: <span className="pink">5. Nie zmuszać się/innych do picia czy tańczenia.</span>,
                text: 'Pewnie nie raz słyszeliście: "Za Młodych się nie napijesz?!" lub "No jak to, ze mną nie chcesz zatańczyć? Nie bądź taki sztywniak!" Weźmy pod uwagę, że ludzie mają różne upodobania i pozwólmy każdemu bawić się tak, jak ma ochotę. Wmuszanie w kogoś kieliszka wódki niemal na siłę i namolne dopytywanie o powody odmowy jest naprawdę bardzo niegrzeczne. O próbach zmuszenia do uczestnictwa w zabawach weselnych kogoś, kto nie ma na nie ochoty, nawet nie będę wspominać. Zasady te działają również w drugą stronę. Jeśli na co dzień nie jadasz słodyczy,nie zmuszaj się i nie biegnij jako pierwszy po kawałek tortu weselnego. Magia uroczystości nie sprawi nagle, że krem truskawkowy zacznie Ci smakować.'
            },
            {
                headerSmall: <span className="pink">6. Nie wpychać się wszędzie z aparatem czy telefonem.</span>,
                text: 'Po pierwsze, utrudnia to pracę fotografowi. Po drugie, odziera całe doświadczenie z magii – naszym zadaniem jest być i przeżywać, nie zrobić milion zdjęć. Amatorskie fotki mają swój urok i fajnie je sobie w jakimś mniej oficjalnym momencie przyjęcia zrobić, ale rzucanie się z obiektywem na recytującą przysięgę albo tańczącą pierwszy taniec Parę Młodą to nie jest dobry pomysł.',
                pics: [
                    { src: require('./BlogPics/Post2/post2c.jpg').default }
                ]
            },
            {
                headerSmall: <span className="pink">7. Nie zawracać głowy.</span>,
                text: 'Panna młoda na pewno chętnie opowie Ci, gdzie zamawiała kwiaty i ile zapłaciła za suknię, ale przyjęcie weselne to nie jest najlepszy moment. Chwila przed wejściem do urzędu czy kościoła tym bardziej. Nie jest też najlepszą osobą, do której powinniśmy się zwracać z pytaniem, czy nie da rady załatwić soku jabłkowego zamiast pomarańczowego. Pomyśl sobie, że Para Młoda to dwójka ludzi, która ostatnie tygodnie, jeśli nie miesiące, spędziła na planowaniu i organizowaniu. Przyjemnym, ale na pewno męczącym. Postaw się na ich miejscu i zastanów, czy chciałbyś się tym zajmować również w ten wyczekany dzień.'
            }
        ],
        textAuthor: "Ola",
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    },

    {
        path: 'motyw-przewodni-wesela',
        title: "Motyw przewodni wesela",
        seoText: "Jak wybrać motyw przewodni wesela? Jakich błędów unikać przy wyborze przewodniego motywu ślubnego i dlaczego warto zdecydować się na motyw przewodni?",
        date: "9 lut 2017",
        edited: "23 paź 2020",
        tag: "niezbędnik-przedslubny",
        textShort: "Organizując swój ślub i wesele, staracie się zaplanować każdy najdrobniejszy szczegół. Godzinami przeglądacie ślubne blogi, szukając inspiracji, oglądacie zdjęcia w poszukiwaniu idealnych kreacji, czytacie branżową prasę...",
        mainPic: {
            src: require('./BlogPics/post1.jpg').default,
        },
        textMain:
            <>
                Organizując swój ślub i wesele, staracie się zaplanować każdy najdrobniejszy szczegół. Godzinami przeglądacie ślubne blogi, szukając inspiracji, oglądacie zdjęcia w poszukiwaniu idealnych kreacji, czytacie branżową prasę, zapisujecie każdy pomysł na przekąski i główny obiad. Jednak nie myślicie o czymś, co sprawi, że <span className="bold pink">wszystkie zaplanowane przez Was elementy</span> złączą się w jedną niezapomnianą całość.Zapominacie o czymś, co spowoduje, że ten dzień będzie Waszym dniem, a nie kolejnym weselem. Tym czymś jest <span className="bold pink">motyw przewodni wesela</span> – może nim być tematyka, kolor czy po prostu styl, w jakim wyprawicie swoje przyjęcie weselne. Zaplanujcie swój indywidualny motyw przewodni ślubu!
            </>,
        content: [
            {
                headerSmall: "Jak wybrać motyw przewodni wesela?",
                text:
                    <>
                        <p>Jeśli zastanawiacie się, jak wybrać motyw przewodni wesela i ślubu, aby pasował do Młodej Pary, a nie tylko był kolejną spójną wizją tak, aby odzwierciedlał Was, Wasze charaktery, zainteresowania, wystarczy, że będziecie kierować się kilkoma prostymi zasadami.</p>
                        <p className="bold"><span className="pink">Krok 1: </span>Indywidualnie dobrany motyw na wesele.</p>
                        <p>
                            Poszukując motywu przewodniego wesela, pomyślcie o tym, co oboje lubicie, jak spędzacie wolny czas, co Was cieszy i co Wam się podoba. Odłóżcie na bok myślenie, czy spodoba się to Waszym rodzicom, co powie o tym ciocia, jak zareagują znajomi. Jeśli łączą Was wspólne pasje, wybór tematu przewodniego wesela, który będzie spoiwem łączącym elementy na Waszym ślubie i weselu, będzie oczywisty. Lubicie podróżować? Pomyślcie w takim razie o miejscach, które wspólnie odwiedziliście jako o motywie przewodnim wesela. Namiętnie czytacie kryminały — niech to będzie start na Wasz książkowy motyw weselny. Pamiętajcie, że nie ogranicza Was nic. Każdy element, który Was łączy, może stać się motywem przewodnim wesela. Nie macie wspólnych zainteresowań? Nic nie szkodzi! Na pewno jest coś, co robicie zawsze razem, albo może niech motywem przewodnim będzie miejsce, w którym się poznaliście lub które razem odwiedziliście. Z każdego małego, łączącego Was elementu naprawdę da się stworzyć motyw przewodni ślubu, który mówi coś więcej o Was jako parze. Rozejrzyjcie się wokół was – inspiracji na motywy ślubne jest wiele.
                        </p>
                        <p className="bold"><span className="pink">Krok 2: </span>Modny motyw przewodni wesela? Niekoniecznie!</p>
                        <p>
                            Przeglądając blogi ślubne, znajdujecie wiele artykułów o trendach na najbliższy rok – nie trudno ulec wpływowi mody na różne motywy przewodnie wesela. Nic bardziej błędnego! Sugerowanie się wpisami na blogach i forach internetowych oraz przemycanie na Wasze wesele inspiracji z nich zaczerpniętych może spowodować, że Wasi goście będą na trzecim w tym roku weselu, gdzie motywem przewodnim jest fiolet lub marynarski styl. Nikt wtedy nie będzie po imprezie wspominał Was, każdy będzie po prostu porównywał to wesele do poprzednich. A Wy? A Wy możecie poczuć, że ten dzień mógłby być jeszcze wspanialszy...
                        </p>
                        <p className="bold"><span className="pink">Krok 3: </span>Motyw przewodni wesela a pora roku.</p>
                        <p>
                            Wybierając motyw przewodni ślubu i wesela, warto zwrócić uwagę na datę ślubu. Jeśli zaplanowaliście wesele latem, a Wasz motyw przewodni to wspólne zamiłowanie od snowboardu, może być ciężko oddać zimowy klimat w temperaturze 30 stopni. Spróbujcie poszukać trochę dalej. Pomyślcie, gdzie najczęściej jeździcie razem na snowboardzie. Jeśli co roku spędzacie zimowe ferie we Włoszech, może niech to właśnie Włochy będą motywem przewodnim wesela. Pamiętajcie także, że pora roku ma znaczenie przy wyborze dekoracji. Nie zrobicie lawendowego wesela wiosną, ponieważ kwitnie ona w od połowy czerwca do końca września.
                        </p>
                        <p className="bold"><span className="pink">Krok 4: </span>Motyw przewodni ślubu nie na siłę.</p>
                        <p>
                            Nie chcecie, aby Wasze wesele była mocno spersonalizowane. Ulubiony serial, uprawiany przez Was sport to motyw przewodni nie w Waszym stylu. Nie martwcie się! Kolor przewodni wesela to rozwiązanie dla Was. Pomyślcie o Waszym wspólnym ulubionym kolorze i zorganizujcie wesele we wszystkich jego odcieniach. Wybierzcie barwy, które Was określają i zobaczcie czy da się je połączyć. A może oboje lubicie spędzać czas na łonie natury? Uwzględnijcie to w Waszych dekoracjach ślubnych! Zobaczcie nasza realizację ślubno-weselną z kolorem przewodnim Rose Gold.
                        </p>
                        <p className="bold"><span className="pink">Krok 5: </span>Motyw przewodni wesela – od ogółu do szczegółu.</p>
                        <p>
                            Zdecydowaliście, że PODRÓŻE, to Wasz motyw przewodni wesela. Świetnie. Teraz zastanówcie się, co w podróżowaniu podoba Wam się najbardziej. Lubicie krótkie wyjazdy za miasto i łono natury, czy może duże metropolie i gwar miasta. Może to będzie na Wasze wesele motyw przewodni? Pamiętajcie, aby nie przesadzić. Dbajcie o drobne szczegóły i subtelne dodatki. Nie łączcie elementów plażowania i ekskluzywnych hoteli z pieszymi wycieczkami. Takie podejście do motywu przewodniego wesela będzie przydatne podczas wyboru zaproszeń, dań czy tortu weselnego. Trzymajcie się jednego konkretnego stylu i bądźcie konsekwenctni w nim przy doborze dodatków, dekoracji i detali tak jak było w przypadku naszej sesji w stylu glamour.
                        </p>
                        <p>Wiecie już, jak wybrać motyw przewodni wesela, a jak tego nie robić. Mamy nadzieję, że nasze rady będą pomocne przy planowaniu najważniejszego dnia w Waszym życiu, a jeśli potrzebujecie wsparcia, chętnie pomożemy w organizacja Waszego ślubu i doborze motywu przewodniego wesela!</p>
                        <p>Inne inspiracje: <br />
                            <CustomOuterLink to="https://pl.pinterest.com/czarymarry/wedding-themes/" text="Pinterest Czary Marry - wedding themes" className="linkPink" />
                        </p>
                    </>
            }
        ],
        extras:
            <>
                <span className="d-block text-right"><CustomCategoryLink path="niezbędnik-przedslubny" text="Niezbędnik przedŚLUBNY" className="bgColorPink" /></span>
            </>
    }

]

export default posts
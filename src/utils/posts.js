import React from 'react'
import CustomInnerLink from '../components/CustomLink/CustomInnerLink'
import CustomOuterLink from '../components/CustomLink/CustomOuterLink'
import { Link } from 'react-router-dom'
import URLS from './urls'

const posts = [
    {
        path: 'wesele-w-plenerze',
        seoTitle: 'Jak zorganizować wesele w plenerze? radzi agencja ślubna Czary Marry',
        seoText: 'O czym trzeba pamiętać, organizując wesele w plenerze? Dlaczego warto przy tej okazji poprosić o pomoc wedding plannera? Praktyczne wskazówki i porady!',
        tag: 'niezbędnik',
        title: 'Jak zorganizować wesele w plenerze?',
        date: '17 sie 2017',
        edited: '18 lis 2020',
        textShort: 'Pogodna wiosna, długie, upalne lato i złota polska jesień mogą stanowić doskonałą oprawę weselnej imprezy. Jeśli dodatkowo zdecydujecie się urządzić wesele w plenerze, TEN dzień będzie...',
        mainPic: {
            src: require('./BlogPics/Post13/post13.jpg').default
        },
        textMain:
            <>
                Pogodna wiosna, długie, upalne lato i złota polska jesień mogą stanowić doskonałą oprawę weselnej imprezy. Jeśli dodatkowo zdecydujecie się urządzić <b>wesele w plenerze</b>, TEN dzień będzie naprawdę wyjątkowy. Dowiedzcie się, o czym musicie pamiętać gdy organizujecie wesele plenerowe!
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
                W przypadku sal weselnych problem przeważnie się nie pojawia. Każde dobrze prosperujące miejsce ma swój prywatny parking, a w przypadku większej ilości samochodów służą swoim doświadczeniem i podpowiedzą, gdzie pokierować gości. Co, kiedy podczas organizacji przyjęcia weselnego w plenerze stawiamy <CustomInnerLink path="wesele-pod-namiotem" text="namiot weselny" /> czy jurtę na pięknej łące, u siebie w ogrodzie lub daleko od cywilizacji? Często Młode Pary nie pomyślą o organizacji parkingu i nie chodzi tu tylko o wydzielenie strefy, gdzie goście mogą zaparkować. Trzeba pomyśleć o tym, aby parking był na stabilnym gruncie. Panie będą mieć obcasy, a Panowie eleganckie półbuty. Szkoda, aby obuwie pobrudziło się od zapadania w ziemię bądź błoto podczas ewentualnego deszczu. Dobrze, gdyby miejsce było odpowiednio oświetlone, by nie szukać swojego auta, świecąc sobie smartfonem. Jeśli marzycie o weselu w plenerze, musicie zapewnić gościom jak najbardziej komfortowe warunki.</>,
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },

    {
        path: 'jak-zaoszczedzic-na-weselu',
        seoTitle: 'Podpowiadamy, jak zaoszczędzić na weselu – Czary Marry',
        seoText: 'Szukacie sposobów, jak zaoszczędzić na weselu? W naszym artykule podpowiadamy, z czego można zrezygnować, by obniżyć koszty wesela.',
        tag: 'niezbędnik',
        title: 'Jak zaoszczędzić na weselu? Z czego można zrezygnować, by zmniejszyć koszty wesela?',
        date: '5 lip 2017',
        edited: '22 gru 2020',
        textShort: 'Organizacja ślubu i wesela to nie tylko wielkie wyzwanie i dużo pracy, ale i spory wydatek. Co zrobić, gdy budżet się nie dopina?...',
        mainPic: {
            src: require('./BlogPics/Post12/post12.jpg').default
        },
        textMain:
            <>
                Organizacja ślubu i wesela to nie tylko wielkie wyzwanie i dużo pracy, ale i spory wydatek. Co zrobić, gdy budżet się nie dopina? Od czego najlepiej zacząć cięcie kosztów? Dowiedz się, <b>jak zaoszczędzić na weselu!</b>
            </>,
        content: [
            {
                headerSmall: 'Na czym zaoszczędzić na weselu – w pierwszej kolejności zrezygnujcie z poprawin',
                text: 'Jeżeli nie macie pewności, czy wystarczy Wam pieniędzy na zorganizowanie ślubu marzeń, zdecydujcie się na wesele jednodniowe. Poprawiny generują spore koszty, często wiążą się z koniecznością rezerwacji dodatkowych miejsc noclegowych, transportu czy oprawy muzycznej. Jeżeli bardzo zależy Wam na tym, aby wesele było dwudniowe, zdecydujcie się tylko na pożegnalne śniadanie. Pamiętajcie, że lepiej zorganizować jednodniowe wesele, które goście zapamiętają na długo, niż kiepskie trwające na domiar złego dwa dni. Rezygnacja z poprawin to pierwsza odpowiedź na pytanie o to, na czym zaoszczędzić na weselu.',
                pics: [
                    {
                        src: require('./BlogPics/Post12/post12a.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Zastanawiacie się, jak zaoszczędzić na weselu? Skróćcie listę gości',
                text: 'Zastanówcie się, czy Wasza lista gości nie jest zbyt długa. Skromne uroczystości w gronie rodziny i przyjaciół mają niesamowity urok i niczym nie ustępują tym na 150 osób. Nie uginajcie się, gdy najbliżsi naciskają, że należy zaprosić sąsiadkę lub ciocię, którą ostatni raz widzieliście podczas swojej komunii. Huczne czy kameralne wesele? To Wasze wesele i Wy za nie płacicie. Jeżeli mama lub teściowa mają ochotę kogoś zaprosić, postawcie ultimatum, że będą musiały pokryć wszystkie związanej tym koszty. Wiele Par Młodych nie ma ochoty zapraszać rodziny, z którą nie utrzymują kontaktu od lat i dopiero szukanie sposobu, jak zaoszczędzić na organizacji wesela, ułatwia w podjęciu decyzji dotyczącej listy gości.',
                pics: [
                    {
                        src: require('./BlogPics/Post12/post12b.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Na czym zaoszczędzić na weselu? Wybierzcie odpowiedni sposób serwowania potraw',
                text: 'Jak serwowane będzie danie główne na Waszym weselu? Zdecydowaliście się na półmiski z różnymi daniami kładzione na stołach czy dokładnie takie same posiłki dla każdego z gości serwowane przez kelnera? My zdecydowanie polecamy opcję numer dwa. Z reguły powinna być ona tańsza, ponieważ kucharz ma do przygotowania mniej jedzenia, ale to nie jest jej jedyna zaleta. Ponadto taki sposób serwowania jest bardziej elegancki i raz na zawsze rozwiązuje problem walki o jedzenie. Goście są najedzeni i szczęśliwi, a Wy wiecie już, na czym zaoszczędzić na weselu.'
            },
            {
                headerSmall: 'Wybór odpowiedniego alkoholu – jak zaoszczędzić na weselu?',
                text: 'Pary bezustannie główkują, jaką wódkę weselną wybrać. Zwykle odpowiadamy, że taką, jaką pije się na rodzinnych imprezach, najlepiej niezbyt drogą. Absolutnie nie namawiamy do kupowania najtańszego spirytusu, bo to droga do tragedii, ale jeżeli Wasz budżet jest ograniczony, wybierzcie alkohol ze średniej półki cenowej. Wódka to wódka. Goście będą z chęcią po nią sięgać bez względu czy jej cena to 20, czy 70 złotych za pół litra, a Wy możecie zaoszczędzić naprawdę sporo pieniędzy. Dobrą alternatywą jest oczywiście wino. W sklepach internetowych możecie znaleźć rozmaite promocje na naprawdę smaczne wina.',
                pics: [
                    {
                        src: require('./BlogPics/Post12/post12c.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Jak zaoszczędzić na organizacji wesela? Obniżcie koszty za samochód Pary Młodej',
                text: 'Z pewnością do ślubu fajnie jechać wypasioną sportową furą lub zabytkowym autem z lat powojennych, ale pamiętajcie, że to duży wydatek. W każdej rodzinie znajdzie się posiadacz nowego, ładnego samochodu, który będzie pękał z dumy, że chcecie pojechać do ślubu właśnie jego autem. Być może ktoś z przyjaciół dysponuje reprezentacyjnym samochodem i z chęcią w ramach prezentu ślubnego zawiezie Was do ślubu? Wybierając auto do ślubu, pamiętajcie o priorytetach. Są rzeczy ważne i ważniejsze. Jeśli zastanawiacie się, jak zaoszczędzić na organizacji wesela, szukajcie tańszych rozwiązań, które nie wpływają na dobrą zabawę gości.'
            },
            {
                headerSmall: 'Zbędna papeteria ślubna i inne dodatki – jak zaoszczędzić na weselu?',
                text: 'Głównie mamy tu na myśli winietki. Jeżeli zdecydujecie się na okrągłe stoliki, możecie zrezygnować z winietek na rzecz planu ustawienia stołów. Rozsadzenie gości przy okrągłym stoliku nie ma znaczenia, a table plan pomoże Wam uniknąć gonitwy w poszukiwaniu miejsca przy stole i wyjdzie zdecydowanie taniej. Menu? Zawieszki na alkohol? Wyglądają pięknie, ale zdecydowanie nie jest to must have niskobudżetowego wesela i rezygnacja z nich jest bezapelacyjnie dobrym pomysłem, by więcej nie zastanawiać się już, jak zaoszczędzić na weselu.',
                pics: [
                    {
                        src: require('./BlogPics/Post9/post9f.jpg').default
                    }
                ]
            },
            {
                headerSmall: 'Prezenty dla gości i atrakcje dla gości weselnych – jak zaoszczędzić na ślubie?',
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },
    {
        path: '7-grzechów-ślubnych-na-co-uważać-przy-wyborze-wykonawców',
        seoText: 'Rynek ślubny rozwija się w niesamowitym tempie. Agencje ślubne, fotografowie, kamerzyści oraz zespoły muzyczne rosną jak grzyby po deszczu. Dziś powiem Wam jak wybrać solidnego wykonawcę spośród ofert znajdujących się na rynku. Obnażę słabostki i grzeszki „kolegów” z branży. Mam nadzieję, że poniższy artykuł pomoże...',
        tag: 'niezbędnik',
        title: '7 GRZECHÓW ŚLUBNYCH. Na co uważać przy wyborze wykonawców.',
        date: '9 cze 2017',
        textShort: 'Rynek ślubny rozwija się w niesamowitym tempie. Agencje ślubne, fotografowie, kamerzyści oraz zespoły muzyczne rosną jak grzyby po deszczu. Dziś powiem Wam jak wybrać...',
        mainPic: {
            src: require('./BlogPics/Post11/post11.jpg').default
        },
        textMain: 'Rynek ślubny rozwija się w niesamowitym tempie. Agencje ślubne, fotografowie, kamerzyści oraz zespoły muzyczne rosną jak grzyby po deszczu. Dziś powiem Wam jak wybrać solidnego wykonawcę spośród ofert znajdujących się na rynku. Obnażę słabostki i grzeszki "kolegów" z branży. Mam nadzieję, że poniższy artykuł pomoże Wam oddzielić ziarno od plew i dokonać samych trafnych wyborów.',
        content: [
            {
                headerSmall: <span className="pink">1. Lewe portfolio.</span>,
                text: <>
                    Każdy kiedyś zaczynał… Z doświadczenia wiem, że początki bywają trudne. Przecież nikt nie zaufa przysłowiowej firmie kogucik, która nie ma na swoim koncie żadnego zlecenia. Jest wiele opcji, aby skompletować portfolio. Praca za darmo lub po kosztach, pomoc znajomym, praktyki, staże. Takie rozwiązanie wybierają pasjonaci. Niestety są i tacy, którzy wolą drogę na skróty. Młode agencje ślubne kupują tzw. zdjęcia stockowe, czyli odsprzedane fotografie, które można ściągnąć ze strony internetowej lub – co gorsza – kradną je komuś przypadkowemu. Do tego kilka zmyślonych rekomendacji i gotowe.<br />
                Jak zdemaskować oszustów? Mamy dla Was istną perełkę: <CustomOuterLink to="https://www.tineye.com" text="https://www.tineye.com" />. Pod tym adresem znajdziecie ciekawe narzędzie do sprawdzenia źródła zdjęć zamieszczonych w internecie. Wystarczy, że ściągniecie je na dysk i załadujecie na tej stronie lub wpiszecie jego adres URL. Tineye przeszuka za Was internet i pokaże ewentualne źródła. Jeżeli nie uda mu się namierzyć fotografii prawdopodobnie nie pochodzi ona z bazy zdjęć stockowych. <br />
                Nie zapomnijcie również o prześwietleniu kapeli, która ma zagrać na Waszym weselu. Często skład zespołu ulega zmianie, a na stronie nadal możecie odsłuchiwać utwory wykonywane przez byłych wokalistów. Najlepiej zapytać orkiestrę lub DJ'a, gdzie można wysłuchać ich na żywo. Często takie kapele obsługują również imprezy okolicznościowe lub miejskie festyny.
                </>,
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11a.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">2. Forum prawdę Ci powie.</span>,
                text: 'Szukajcie opinii, recenzji, komentarzy na forach lub innych stronach o tematyce ślubnej. Im więcej pozytywów tym lepiej ale pamiętajcie, że zdarza się, że firmy piszą je same lub działają na szkodę konkurencji. Często niepochlebna opinia bywa spowodowana niedopatrzeniem ze strony Pary Młodej, która czuje się niesłusznie rozgoryczona. Nie dajcie się zwieść! Bądźcie czujni!',
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11b.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">3. Portale społecznościowe.</span>,
                text: 'Mawia się, że jak nie ma Cię na Facebooku, to nie istniejesz. Jeżeli firma nie działa prężnie na portalach społecznościowych takich jak Instagram czy Facebook jest to niemal równoznaczne z tym, że nie prosperuje najlepiej. Nie chodzi tu nawet o ilość lików czy obserwatorów, a o regularne wrzucanie postów. Bardzo łatwo zweryfikować również jakość zamieszczanych publikacji. Jeżeli są to wyłącznie inspiracje lub cytaty o tematyce ślubnej jest to jednoznaczne z tym, że firma nie ma na swoim koncie żadnych realizacji.',
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11c.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">4. Artyści i gwiazdy.</span>,
                text: 'To bardzo niewdzięczna grupa wykonawców ślubnych. Znajdziecie ich głównie wśród fotografów, kamerzystów i muzyków. To Wy jesteście szefem i macie prawo decydować o tym, co zostanie zagrane na Waszym weselu lub jakiego typu zdjęć czy filmu oczekujecie. Oczywiście każdy fotograf, kamerzysta, muzyk ma swój bliżej określony styl i nie można oczekiwać, że zrobi coś zupełnie wbrew sobie, ale niedopuszczalne jest byście, nie mieli prawa głosu w tak ważnych kwestiach. Jeżeli więc obiło się Wam o uszy, że Wasz fotograf to artysta, który nie lubi się podporządkowywać, zrezygnujcie z jego usług. Na swojej czarnej liście wykonawców mamy kilku delikwentów, którzy robią piękne zdjęcia, kręcą nieziemskie filmy i grają super muzykę, ale po prostu nie da się z nimi współpracować. Są aroganccy, nie słuchają uwag i wiedzą wszystko najlepiej. Taka współpraca zwykle odbija się czkawką.',
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11d.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">5. To się nie da.</span>,
                text: 'Jeżeli po raz kolejny słyszycie, że coś się nie da, że już się tak nie robi, albo "my tak nie robimy" to znajdźcie kogoś, kto z przyjemnością zrobi wszystko, aby Wasze marzenia stały się rzeczywistością. Czasami oczywiście trzeba sprowadzić Parę Młodą na ziemię, ponieważ nie ma nic gorszego niż obiecanki i zbyt ryzykowne pomysły, ale rynek ślubny jest tak przesycony specjalistami i daje taką masę możliwości, że da się prawie wszystko. Oczywiście o ile znajdą się dobre chęci i pozwala na to budżet.',
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11e.jpg').default
                    }
                ]
            },
            {
                headerSmall: <span className="pink">6. Umywanie rąk.</span>,
                text: 'Nawet przy wyborze solidnego wykonawcy los może spłatać Wam figla. Oby nigdy Was to nie spotkało, ale zdarza się, że sala weselna spłonie zaraz przed weselem, orkiestra nie dojedzie, a kamerzysta wyląduje w szpitalu. Tak niestety bywa. Dlatego postarajcie się przed tym zabezpieczyć. Często rozmawiając z Parami Młodymi widzimy, że umowy z wykonawcami traktują po macoszemu. Kasa się zgadza, zaliczka wpłacona, termin ślubu zaklepany. To nie takie proste. Jest masę rzeczy, które powinny być ujęte w umowie, a o których totalnie zapominacie. Jeżeli sala spłonie lub jej właściciel ogłosi upadłość musicie mieć alternatywę, a osoba, z którą podpisaliście umowę, powinna ponieść konsekwencje. Jeżeli orkiestra nie dojedzie, powinna zapewnić zastępstwo w postaci podobnej kapeli w tym samym przedziale cenowym. Jeżeli fotograf jest w szpitalu to nie wysyła swojej żony z polaroidem, tylko kolegę po fachu. Nie może być tak, że cała odpowiedzialność spada wyłącznie na Was. Umowa powinna być dla Was korzystna i zapewniać poczucie bezpieczeństwa. Bo właśnie po to ją podpisujecie.'
            },
            {
                headerSmall: <span className="pink">7. A teraz idziemy na jednego.</span>,
                text: 'Wymieńcie mi firmę, w której bez ogródek podczas pracy można spożywać alkohol. Nie mogę zrozumieć, dlaczego w branży ślubnej panują inne standardy. Niestety najczęściej problem dotyczy zespołów muzycznych. Widzimy, jak szanowny pan wokalista pije coraz więcej i więcej, jego twarz staje się purpurowa, coraz ciężej mu się śpiewa, a przerwy między setami robią się coraz dłuższe. To niedopuszczalne! Zaznaczcie w umowie, że nie wyrażacie zgody na spożywanie alkoholu przez obsługę podczas wesela. Jeżeli wykonawca odmówi takiego zapisu, jest to jednoznaczne z tym, że Wasze wesele traktuje jak mocno zakrapianą imprezę z dobrym jedzeniem.',
                pics: [
                    {
                        src: require('./BlogPics/Post11/post11f.jpg').default
                    }
                ]
            },
            {
                text: 'Jeżeli macie wątpliwości czy dokonane przez Was wybory są słuszne, napiszcie do nas i umówcie się na spotkanie. Z przyjemnością przejrzymy Wasze umowy z wykonawcami w ramach bezpłatnej konsultacji.'
            }
        ],
        textAuthor: "Kasia",
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },
    {
        path: 'formalnosci-po-slubie',
        seoTitle: 'Formalności po ślubie – co załatwić po ślubie? – Czary Marry',
        seoText: 'Zmiana dokumentów, informacja o zmianie nazwiska w banku to tylko niektóre z formalności, o których trzeba pamiętać po ślubie.',
        tag: 'niezbędnik',
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },
    {
        path: 'rozmieszczenie-gosci-weselnych',
        seoTitle: 'Plan doskonały na rozmieszczenie gości weselnych – Czary Marry',
        seoText: 'Dlaczego warto zaplanować rozmieszczenie gości weselnych? Jak rozlokować gości i jak ich poinformować, które miejsce przygotowaliśmy właśnie dla nich?',
        tag: 'niezbędnik',
        title: 'Rozmieszczenie gości weselnych – czy istnieje plan doskonały?',
        date: '23 maja 2017',
        edited: '26 sie 2020',
        textShort: 'Rozsadzenie gości weselnych przy stołach to sprawa na pozór prosta, ale nasze doświadczenia w agencji ślubnej Czary Marry są najlepszym dowodem na to, że...',
        mainPic: {
            src: require('./BlogPics/Post9/post9.jpg').default
        },
        textMain:
            <>
                <b>Rozsadzenie gości weselnych</b> przy stołach to sprawa na pozór prosta, ale nasze doświadczenia w <Link to={URLS.HOME} className="bgColor">agencji ślubnej Czary Marry</Link> są najlepszym dowodem na to, że może przysporzyć masę problemów, a dla Pary Młodej jest sporym wyzwaniem. Wbrew pozorom konsekwencje nieprzemyślanego rozsadzenia gości na weselu mogą być bardzo dotkliwe. Począwszy od poczucia pominięcia i niezadowolenia po zaognienie rodzinnych sporów i weselne pranie brudów. Dziś zdradzimy Wam jak poradzić sobie z kłopotliwym tematem i sprawić, że <b>rozmieszczenie gości weselnych</b> przy stołach zajmie Wam dosłownie chwilę.
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },
    {
        path: 'dama-mojego-serca-historia-miłości-moich-rodziców',
        seoText: 'Dziś o swoim ślubie i weselu opowie Wam moja Kochana Mama. Naszym rozmowom zawsze towarzyszą zabawne anegdoty, wzruszenia i wielki karton ze starymi fotografiami. Jako dziecko uwielbiałam je oglądać i powiem szczerze, że zupełnie nic się nie zmieniło. Mamo, opowiedz, jak poznałaś tatę? Któregoś dnia wracając z pracy...',
        tag: 'opowieści',
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Ślubne opowieści, czyli wesela dawniej" className="bgColor" /></span>
            </>
    },

    {
        path: 'prezent-dla-gosci-wesele',
        seoTitle: 'Pomysły na prezenty dla gości weselnych – Czary Marry',
        seoText: 'Chcielibyście obdarzyć Waszych gości oryginalnym upominkiem? Sprawdź, jakie prezenty dla gości weselnych możecie przygotować!',
        title: 'Prezenty dla gości weselnych – pomysły na upominki dla gości',
        date: '9 maja 2017',
        edited: '26 sie 2020',
        tag: 'niezbędnik',
        textShort: 'Wszyscy uwielbiamy prezenty! Moda na upominki dla gości weselnych trwa w najlepsze. Młodzi przygotowują drobne prezenciki, które umieszczają...',
        mainPic: {
            src: require('./BlogPics/Post7/post7.jpg').default
        },
        textMain:
            <>
                Wszyscy uwielbiamy prezenty! Moda na <b>upominki dla gości weselnych</b> trwa w najlepsze. Młodzi przygotowują drobne prezenciki, które umieszczają na stołach, rozdają na pożegnanie lub ustawiają gdzieś w jednym widocznym miejscu do wzięcia. Takie prezenty dla gości weselnych to piękna pamiątka z dnia ślubu i wesela. <br /> W całej idei nie chodzi o to, by kupować drogie podarunki, lecz o symboliczną drobnostkę na pamiątkę – podziękowania dla gości weselnych za przybycie i chęć wspólnego celebrowania Waszego dnia ślubu. Uważamy, że to naprawdę świetny pomysł, który coraz częściej wykorzystywany jest przez Pary Młode, jako substytut rozdawania wódki czy ciasta, które zostało po weselu (co niekoniecznie jest szczególnie eleganckie). Jakie więc podarunki zostaną w pamięci gości? Przygotowałyśmy dla Was kilka ciekawych i niebanalnych propozycji – inspiracji na <b>oryginalne prezenty dla gości weselnych.</b>
            </>,
        topPic: {
            src: require('./BlogPics/Post7/post7a.jpg').default
        },
        content: [
            {
                headerSmall: 'Rośliny – zaskakujące upominki dla gości',
                text: 'Bardzo ciekawym prezentem dla gości weselnych są rośliny. Niektórzy twierdzą, że doskonale nawiązują do miłości, ponieważ o nie również trzeba dbać i pielęgnować tak, jak uczucie. Można podarować małą roślinkę, kwiatka, zioła albo sadzonkę drzewka. Jest wiele roślin, które łatwo zakupić w dużej ilości oraz w miniaturowej wersji. W roli doniczki idealnie sprawdzą się małe słoiczki bądź puszki. Sukulenty na wesele czy własnoręcznie zrobiony mini las w słoiku, czyli prezenty dla gości weselnych DIY (zrób to sam), mogą okazać się strzałem w dziesiątkę szczególnie jeśli lubicie trend eko.'
            },
            {
                headerSmall: 'Album ulubionych piosenek Pary Młodej – sentymentalny upominek dla gości',
                text: 'Każda para ma swoje ulubione piosenki. A to wspomnienie pierwszego pocałunku, pierwszej wspólnej wycieczki rowerowej albo udanych wakacji. Warto to wykorzystać i stworzyć piękną składankę w personalizowanym pudełku i podarować je w formie prezentu dla gości weselnych. Prezenty dla gości weselnych w stylu zrób to sam? – chyba nie ma nic bardziej personalnego. Jeśli udałoby się jeszcze okleić samemu płytę, byłoby bajecznie. Innym rozwiązaniem są udekorowane pendrive’y, na którym znajdą się wspomnienia Młodych.',
                pics: [
                    { src: require('./BlogPics/Post7/post7b.jpg').default }
                ]
            },
            {
                headerSmall: 'Magnesy - podziękowanie dla gości',
                text: 'Wielu miłośników podróży ze swoich bliskich i dalekich wojaży przywozi magnesy na lodówkę. Są one pamiątką, które nie zajmują miejsca na półce, które nie kurzą się, jak inne wakacyjne pamiątki i które często traktujemy jako swojego rodzaju trofea. Dlaczego więc nie podarować gościom pamiątki z najpiękniejszego i najważniejszego dnia w Waszym życiu? Magnesy jako prezent dla gości weselnych, dzięki możliwości aplikacji na lodówce, będą przypominać wszystkim to cudowne wydarzenie, jakim był Wasz ślub – z całą pewnością pozytywnie zaskoczą gości weselnych, ceniących sobie pamiątki, które są sentymentalne i praktyczne jednocześnie.',
                pics: [
                    { src: require('./BlogPics/Post7/post7c.jpg').default }
                ]
            },
            {
                headerSmall: 'Breloczek – kolejny praktyczny prezent dla gości weselnych',
                text: 'Breloczek to kolejny ciekawy i przydatny prezent dla gości. Breloczki coraz częściej zastępują popularne słoiczki z miodem lub słodycze. Są trwałe, nie mają daty przydatności do spożycia i pomogą odróżnić kolejny komplet kluczy, który odkładamy obok innych. Są więc użyteczne, a obdarowana osoba będzie mogła każdego dnia patrzeć na taki upominek dla gości, otwierając drzwi kluczami zawieszonymi na tym breloczku.',
                pics: [
                    { src: require('./BlogPics/Post7/post7d.jpg').default }
                ]
            },
            {
                headerSmall: 'Winietki-przypinki – upominek dla gości, oryginalny dodatek na stole',
                text: 'Szukając ciekawego prezentu dla gości weselnych, możemy sięgnąć również po takie, które spełnią praktyczną funkcję w trakcie samego wesela. Zamiast tradycyjnych, "zwykłych" winietek postawcie na winietki-przypinki. Na początku imprezy przypinki kładziemy na talerzach gości tak, by spełniały funkcję wizytówek z imieniem i nazwiskiem. Po zakończeniu wesela, winietki-przypinki będą trwałą pamiątką tej wyjątkowej nocy. Taki upominek dla gości polecamy przede wszystkim tym Parom, które na wesele zamawiają foto budkę.',
                pics: [
                    { src: require('./BlogPics/Post7/post7e.jpg').default }
                ]
            },
            {
                headerSmall: 'Inne pomysły na prezent dla gości weselnych',
                text:
                    <>
                        W ramach podziękowania dla gości miód, małe słoiczki z miodem, bywa dość popularnym prezentem. Nic dziwnego – miód bywa w końcu słodki jak miłość!. W ramach słodkości lizaki, krówki weselne czy czekoladki są przyjemnym sposobem na podziękowania dla gości. Bardziej wytrawnym upominkiem bywają ciasteczka z wróżbą na wesele albo popularne w Polsce mini nalewki dla gości weselnych.
                        Prezent dla gości weselnych warto dostosować do tematyki wesela. Jeśli zdecydowaliśmy się więc urządzić wesele w stylu boho, rośliny lub herbata w małych słoikach będą strzałem w dziesiątkę. Parom, które organizują wesele w stylu <CustomInnerLink path="sesja-stylizowana-w-stylu-glamour" text="glamour" className="bgColor" />, polecamy przygotować mały, ale elegancki upominek dla gości.
                    </>
            },
            {
                headerSmall: 'Prezent dla gości wesele – praktyczne porady na koniec',
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>

    },
    {
        path: 'marta-i-michał-i-ich-weselna-przygoda-w-ogrodzie',
        title: 'Marta i Michał i ich weselna przygoda w ogrodzie',
        seoText: 'Marta i Michał wymarzyli sobie plenerowy ślub i wesele na terenie swojego pięknego ogrodu. Ponieważ miejsce, które wybrali, było magiczne i pełne uroku, nie mogliśmy oprzeć się pokusie i nie wykorzystać tego w dekoracjach oraz ogólnej koncepcji wesela i ślubu. Ustaliliśmy, że motywem przewodnim będzie odniesienie do...',
        date: '3 maja 2017',
        tag: 'realizacje',
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Opowiadamy o naszych realizacjach" className="bgColor" /></span>
            </>
    },
    {
        path: 'podziekowania-dla-rodzicow',
        title: 'Podziękowania dla rodziców na weselu',
        seoText: 'Podziękowania dla rodziców - oryginalne pomysły na prezenty na ślubie i weselu.',
        date: '19 kwi 2017',
        edited: '5 lis 2020',
        tag: 'niezbędnik',
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },
    {
        path: 'o-tym-dlaczego-warto-zdecydować-się-na-konsultanta-ślubnego',
        title: "O tym, dlaczego warto zdecydować się na konsultanta ślubnego",
        seoText: "Mimo że tytuł artykułu wskazuje na coś zupełnie innego, nie będzie to skrzętnie przygotowana autoreklama. Oczywiście jako konsultant ślubny wierzę, że zawód, który wykonuję, jest potrzebny i warto zainwestować w pomoc specjalisty. To tak jak z fotografem. Czasy, gdy zdjęcia na weselu robili wujkowie lub sąsiedzi pos...",
        date: "16 kwi 2017",
        tag: "niezbędnik",
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },

    {
        path: 'o-poszukiwaniu-sukienki-idealnej',
        title: "O poszukiwaniu sukienki idealnej",
        seoText: "To nie tajemnica, że przyszła Panna Młoda swój ślubny strój planuje na długo wcześniej przed tym wielkim dniem. Większość nie potrzebuje do tego nawet pierścionka i idealnego partnera. Od najmłodszych lat w naszej głowie tworzą się wizje pięknej, białej sukni idealne podkreślającej naszą figurę i wprawiającej gości...",
        date: "16 mar 2017",
        tag: "niezbędnik",
        textShort: "To nie tajemnica, że przyszła Panna Młoda swój ślubny strój planuje na długo wcześniej przed tym wielkim dniem. Większość nie potrzebuje do tego nawet pierścionka i idealnego partnera. Od najmłodszych lat...",
        mainPic: {
            src: require('./BlogPics/post3.jpg').default,
        },
        textMain:
            <>
                To nie tajemnica, że przyszła Panna Młoda swój ślubny strój planuje na długo wcześniej przed tym wielkim dniem. Większość nie potrzebuje do tego nawet pierścionka i idealnego partnera. Od najmłodszych lat w naszej głowie tworzą się wizje pięknej, białej sukni idealne podkreślającej naszą figurę i wprawiającej gości weselnych w zachwyt. Nie wspominając już o Panu Młodym, który to nie powinien w ten dzień odwracać od nas wzroku.
            </>,
        content: [
            {
                text:
                    <>
                        <p>Co zrobić, aby dzień zaplanowany na znalezienie perfekcyjnej sukienki ślubnej przebiegł idealnie i zakończył się kupieniem TEJ kreacji? Jak sprawić, że marzenia i wizje przemienią się w rzeczywistość?</p>
                        <p className="bold"><span className="pink">Krok 1: </span>Przygotuj się.</p>
                        <p>
                            W Twojej głowie powstał projekt idealnej sukienki. Zamykasz oczy i widzisz każdy szczegół. Wiesz dokładnie jaki powinna mieć krój, kolor, długość. Pamiętaj jednak, że często ciężko słowami wytłumaczyć swoją wizję, dlatego koniecznie przed wizytą w salonie sukien ślubnych przygotuj zdjęcia paru sukienek, odpowiadających Twojej wizji. Tobie będzie łatwiej przekazać, co masz na myśli, a ekspedientce zrozumieć Twoją wizję. Współpraca pójdzie sprawnie, a ty nie zmarnujesz czasu na mierzenie kreacji nie w Twoim stylu.
                        </p>
                        <p className="bold"><span className="pink">Krok 2: </span>Pomyśl o budżecie.</p>
                        <p>
                            Zastanów się, ile możesz wydać na sukienkę ślubną, pamiętając również o budżecie całego wesela. Warto pamiętać, że sama suknia to nie wszystko. Do niej będziesz musiała dobrać buty, bieliznę, dodatki. Poinformuj o planowanej kwocie panią w salonie, w którym będziesz mierzyć suknie ślubne. Pozwoli to na uniknięcie zakochania się w kreacji, na którą nie będzie Cię stać.
                        </p>
                        <p className="bold"><span className="pink">Krok 3: </span>Nie zabieraj na zakupy wszystkich gości weselnych.</p>
                        <p>
                            Ile osób pomaga wybrać Ci sukienkę, tyle gustów i opinii. Nie zabieraj na poszukiwania wszystkich zainteresowanych, ale też nie idź sama. Najlepiej zabierz ze sobą jedną lub dwie przyjaciółki, które znają Twój gust, wiedzą, w czym czujesz się dobrze, jakie fasony nie pasują do Twojej figury. Będziesz mogła liczyć wtedy na szczerą opinię, ale też unikniesz ogromu "dobrych rad", którymi zasypałyby cię dodatkowe, przypadkowe osoby. Dobrze zabrać kogoś z kim na co dzień chodzisz na zakupy. Osoba, która doradza Ci podczas wyboru codziennych kreacji, sprawdzi się doskonale także tego dnia.
                        </p>
                        <p className="bold"><span className="pink">Krok 4: </span>Zadbaj o siebie.</p>
                        <p>
                            Zadbaj o odpowiednią bieliznę. Mocno zabudowany stanik i majtki z kokardkami, które będą odciskały się na sukience, nie zrobią najlepszego wrażenia. Nie zapomnij o makijażu i zadbanych włosach, jeżeli tego dnia nie będziesz się dobrze czuła sama ze sobą, żadna suknia ślubna Ci się nie spodoba. Salony ślubne zazwyczaj oferują buty do przymiarki, ale dla własnego komfortu możesz zabrać ze sobą swoje ulubione szpilki. Weź także szczotkę, gumkę do włosów i spinki. Być może będziesz chciała poeksperymentować z fryzurą, aby wybrać welon. Zabierz też ze sobą notes, w którym będziesz mogła zapisać interesujące Cię modele (niestety wiele salonów ślubnych zabrania robienia zdjęć, gdy jeszcze nie jesteś w pełni zdecydowana).
                        </p>
                        <p className="bold"><span className="pink">Krok 5: </span>Nie śpiesz się.</p>
                        <p>
                            Przygotuj się na poszukiwania i nie planuj, że idealną ślubną kreację znajdziesz w godzinę i miesiąc przed weselem. Przed wizytami w salonie dobrze jest zrobić krótki research i zorientować się, które salony proponują kreacje, fasony, które cię interesują. Zrób listę salonów i koniecznie umów się na wizytę. Warto poszukiwana zaplanować minimum 4 miesiące przed weselem. Twoja kreacja na pewno będzie wymagała krawieckich poprawek. Każdy salon to około godzinna wizyta. Jeśli masz parę miejsc, które chciałabyś odwiedzić, warto poszukiwania rozłożyć na parę dni. Pozwoli Ci to na rozsądne i komfortowe zakupy. Zaplanowanie wizyty w paru salonach w jednym dniu to męczarnia i żadna przyjemność.
                        </p>
                        <p>Inne sukienkowe inspiracje znajdziecie tutaj: <br />
                            <CustomOuterLink to="https://www.pinterest.com/czarymarry/perfect-wedding-dresses/" text="Pinterest Czary Marry - perfect wedding dresses" className="bgColor" />
                        </p>
                    </>
            }
        ],
        textAuthor: "Ola",
        extras:
            <>
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },

    {
        path: 'o-gościach-nie-idealnych',
        title: "O gościach (nie)idealnych",
        seoText: "Mało jest rzeczy, które budzą tyle emocji, co śluby i wesela. Mają jakąś magiczną moc wpędzania ludzi w amok – i nie mówię tu o Młodej Parze, u której to bardzo zrozumiałe, ale o gościach. Całkiem rozsądni na co dzień ludzie wraz ze wskoczeniem w sukienkę czy garnitur wpadają w wir dziwnych przekonań i przepychanek...",
        date: "7 mar 2017",
        edited: "8 lip 2020",
        tag: "niezbędnik",
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
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    },

    {
        path: 'motyw-przewodni-wesela',
        title: "Motyw przewodni wesela",
        seoText: "Jak wybrać motyw przewodni wesela? Jakich błędów unikać przy wyborze przewodniego motywu ślubnego i dlaczego warto zdecydować się na motyw przewodni?",
        date: "9 lut 2017",
        edited: "23 paź 2020",
        tag: "niezbędnik",
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
                            <CustomOuterLink to="https://pl.pinterest.com/czarymarry/wedding-themes/" text="Pinterest Czary Marry - wedding themes" className="bgColor" />
                        </p>
                    </>
            }
        ],
        extras:
            <>
                <span className="d-block text-right"><CustomInnerLink path="/" text="Niezbędnik przedŚLUBNY" className="bgColor" /></span>
            </>
    }

]

export default posts
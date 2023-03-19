import CustomPostLink from 'components/CustomLink/CustomPostLink';
import CustomRealisationLink from 'components/CustomLink/CustomRealisationLink';
import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import URLS from 'utils/urls';
import { AliceJarekMain, AliJar01, AliJar02, AliJar03, AliJar04, AliJar05, AliJar06, AliJar07, AliJar08, AliJar09, AliJar10, AliJar11, AliJar12, AliJar13, AliJar14, AliJar15, AliJar16, AliJar17, AliJar18, AliJar19, AliJar20, AliJar21, AliJar22, AliJar23, AliJar24, AliJar25, AliJar26, AliJar27, AliJar28, AliJar29, AliJar30, AliJar31, AliJar32, AliJar33, AliJar34, AliJar35, AliJar36, AliJar37, AliJar38, AliJar39 } from '../OurCouplesPics/AliceJarek';

export const AliceAndJarek = {
    bgColor: "bgPink",
    title: "Wesele industrialne Alice i Jarka",
    path: "wesele-industrialne",
    minHeight: true,
    seoTitle: "Wesele industrialne w Warszawie | Czarny Marry agencja ślubna",
    seoText: "Planujesz zorganizować wesele w stylu industrialnym? Zainspiruj się naszą industrialną realizacją w Reducie Banku Polskiego.",
    mainPic: {
        src: AliceJarekMain
    },
    details: "Na co dzień zamieszkują zieloną wyspę, w której przeważają pola i łąki, ale ich serce mocniej bije w nowoczesnych przestrzeniach miejskich. Alice i Jarek pasję do urbanistyki chcieli również pokazać na swoim ślubie. ",
    org: "Agencja Ślubna Czary Marry",
    orgLink: "",
    place: "Reduta Banku Polskiego",
    placeLink: "http://www.reduta.pl/",
    // photo: "",
    // photoLink: "https://www.maleszarestudio.pl/",
    // flowers: "Anello Decor",
    // flowersLink: "https://www.facebook.com/anellodecor",
    date: "19 mar 2023",
    textMain:
        <>
            Na co dzień zamieszkują zieloną wyspę, w której przeważają pola i łąki, ale ich serce mocniej bije w nowoczesnych przestrzeniach miejskich. Pasję do urbanistyki chcieli również pokazać na swoim ślubie. Od początku ich założeniem było <span className="bold">wesele w stylu miejskim – industrialne</span>, pełne kontrastów: metalu i monochromatycznych kwiatów, naturalnego światła i betonowych ścian. Zależało im na nietypowej industrialnej sali weselnej w centrum dużego miasta, by poczuć jego klimat i stać się częścią jego architektury. Swój wyjątkowy dzień zaplanowali w Polsce – kraju, w którym znaleźli miejsce z przeszłością, klimatem i ogromnymi możliwościami na minimalistyczne dekoracje. Jak wyglądały przygotowania do industrialnego wesela?
        </>,
    content: [
        {
            headerSmall: 'Miejsce na "TAK" – ślub w stylu industrialnym',
            headerClassName: "pink",
            text: <>Ich wymarzonym miejscem na ślub nie były <CustomPostLink text="ogrody" path="wesele-w-ogrodzie-garden-party" className="linkPink" />, pałace czy miejsca glamour. Alice i Jarek chcieli swoje wesele zorganizować w tętniącym życiem mieście, tym samym wyrażając swoją miłość do architektury miejskiej, a szczególnie do industrialnych wnętrz z surowym charakterem. Miejscem docelowym na <span className="bold">ślub w stylu industrialnym</span> miała być więc przestrzeń loftowa, z wysokimi sufitami, przypominająca wyglądem fabryki, stare dworce czy magazyny, gdzie każda cegiełka ma swoją historię. Przestrzenie poprzemysłowe i fabryczne przekształcone w sale weselne to idealna wizja industrialnego wystroju, ponieważ ściany są zwykle z cegły lub betonu, a podłoga z oryginalnego starego drewna. Na jaki wybór padło?</>,
            pics: [
                { src: AliJar06 },
                { src: AliJar05 },
                { src: AliJar07 },
                { src: AliJar10 },
                { src: AliJar11 },
            ]
        },
        {
            text: <>Poszukiwania idealnego miejsca na ślub industrialny odbywały się w największych miastach w Polsce, ale to właśnie Reduta Banku Polskiego w Warszawie skryła ich serca. Dlaczego to miejsce okazało się idealne? Po pierwsze Parze Młodej zależało na tym, by miejsce ceremonii i miejsce wesela były blisko siebie, by wraz ze swoją rodziną i przyjaciółmi mogli przemierzyć tę odległość pieszo. Po drugie Alice i Jarek od początku podkreślali, że <CustomPostLink text="chcą powiedzieć sobie „tak” w urzędzie stanu cywilnego" path="dokumenty-slub-cywilny-formalnosci" className="linkPink" />, a następnie świętować swój wielki dzień w miejscu z historią. Po trzecie wnętrze miało być minimalistyczne, surowe i jednocześnie pokazujące upływ czasu. Reduta Banku Polskiego to niemal stuletni budynek położony w centrum Warszawy, który po renowacji wciąż zachował styl ubiegłego stulecia.</>,
            pics: [
                { src: AliJar12 },
                { src: AliJar13 },
                { src: AliJar14 },
                { src: AliJar15 },
            ]
        },
        {
            text: "Między Redutą Banku Polskiego a Pałacem Ślubów, w którym złożyli przysięgę małżeńską, jest zaledwie 800 metrów, więc Para Młoda, która zrezygnowała ze ślubnego auta, mogła postawić na spacer uliczkami Starego Miasta w Warszawie. Surowość Reduty pozwalała w całości na stworzenie wesela w stylu industrialnym i użycie minimalistycznych dekoracji, by wydobyć piękno i unikalność wnętrza, na czym Parze Młodej szczególnie zależało.",
            pics: [
                { src: AliJar16 },
                { src: AliJar17 },
                { src: AliJar18 },
                { src: AliJar19 },
                { src: AliJar20 },
                { src: AliJar21 },
                { src: AliJar22 },
                { src: AliJar23 },
            ]
        },
        {
            headerSmall: "Wystrój wesela industrialnego",
            headerClassName: "pink",
            text: <>Miejsca, które wyglądem przypominają opuszczone hale czy fabryki mają ogromny potencjał dekoracyjny i nieskończone możliwości aranżacji. Sama przestrzeń z wysokimi sufitami nadaje sali charakteru industrialnego i nie należy go drastycznie zmieniać czy zakrywać kompozycjami kwiatowymi lub warstwami materiału. Warto skupić się na prostocie, teksturach, metalicznych detalach, wzorach architektonicznych i monochromatycznych kwiatach. Ten chłodny wystrój ocieplają oczywiście dodatki. W industrialnych wnętrzach surowość przełamują naturalne kolory drewna, światło oraz duża liczba świec.</>,
            pics: [
                { src: AliJar01 },
                { src: AliJar02 },
                { src: AliJar24 },
            ]
        },
        {
            text: <>Wesele industrialne Alice i Jarka to idealny przykład jak powinno łączyć się kolory w loftowej przestrzeni. Na sali Reduty Banku Polskiego można było zaobserwować połączenie naturalności, minimalizmu i stylu modern. Dekoracje kwiatowe były wkomponowane w nowoczesne wnętrze i podbiły surowy charakter Reduty. Pannie Młodej zależało również na wykorzystaniu lokalnych produktów, więc wybrała kwiaty sezonowe, które dotarły do Reduty z polskiej kwiaciarni. Dzięki temu na stołach znalazły się białe dalie, kwiaty kopru, eustomy i kosmosy umieszczone w szklanych flakonach. Piękno wesela industrialnego tkwi w kontraście, dlatego biel obrusów została przełamana czarnymi serwetkami i miedzianym kolorem świec.</>,
            pics: [
                { src: AliJar25 },
                { src: AliJar26 },
                { src: AliJar27 },
            ]
        },
        {
            text: "Ściany z białych cegieł dekorowało tylko światło i kable. Para Młoda postawiła na girlandę z żarówek Edisona, które dawały ciepłą poświatę, przemysłowe lampy stojące, które rzucały pomarańczowe światło oraz świece, które na stołach pokrytych białymi obrusami stanowiły subtelny kontrast. Dodatkowo przez sięgające od podłogi do sufitu okna wpadało również naturalne światło, które przebijało się przez śnieżnobiałe zasłony. Ciepła sali weselnej dodawał także kolor drewna. W ogromnej przestrzeni znalazło się więc miejsce na drewniane krzesła – oczywiście bez pokrowców – i szafki w stylu PRL. Szczególnym elementem były również drewniane okiennice. Nie zabrakło także strefy chillout dla gości weselnych. Kącik odpoczynku składał się z metalowego stoliczka oraz kanap w kolorze betonu, które wkomponowały się w przestrzeń loftową.",
            pics: [
                { src: AliJar03 },
                { src: AliJar04 },
            ]
        },
        {
            headerSmall: "Czy wyróżnia się industrialny styl wesela?",
            headerClassName: "pink",
            text: <>
                <ul style={{ marginTop: ".5rem" }}>
                    <li>Industrialna sala weselna: wesela w stylu industrialnym są zazwyczaj urządzane w loftach, magazynach lub halach przemysłowych, gdzie goście mogą poczuć industrialny klimat. W takim weselu często stosuje się dekoracje z metalu i betonu, surowych i niezabudowanych ścian.</li>
                    <li>Dominujące kolory to biel, miedziany, stalowy czy szary.</li>
                    <li>Dekoracje industrialne zazwyczaj skupione są wokół surowych loftowych klimatów: lampiony, girlandy żarówkowe, świece, geometryczne wzory</li>
                </ul>
            </>,
            pics: [
                { src: AliJar28 },
                { src: AliJar29 },

            ]
        },
        {
            headerSmall: "Stylizacje Pary Młodej na weselu industrialnym",
            headerClassName: "pink",
            text: <>Wesele industrialne Alice i Jarka stanowiło spójną całość, więc <CustomPostLink path="motyw-przewodni-wesela" text="przewodni motyw" className="linkPink" /> industrialny był obecny także w wyglądzie Pary Młodej, która postawiła na minimalny look i nowoczesny styl. Alice żyje w duchu eko i na co dzień również stawia na minimalizm. W dniu ślubu swoją urodę podkreśliła delikatnym makijażem a włosy spięła w klasyczny koczek, który udekorowała białą szarfą. <CustomPostLink path='suknia-slubna-jak-wybrac' text='Suknia ślubna' className='linkPink' /> Alice to prosty krój, klasyczna biel i długi rękaw. Panna Młoda wybrała także delikatną biżuterie ślubną a jej bukiet ślubny był skomponowany z polskich sezonowych kwiatów, które były także dekoracją sali weselnej. Pan Młody z kolei wybrał klasyczny czarny garnitur z białą koszulą i czarnym krawatem.</>,
            pics: [
                { src: AliJar08 },
                { src: AliJar09 },
                { src: AliJar30 },
            ]
        },
        {
            headerSmall: "Zdjęcia w przestrzeni industrialnej",
            headerClassName: "pink",
            text: <>Parze Młodej zależało na tym, by podczas ich industrialnego wesela fotograf stworzył dla nich dokument przedstawiający naturalne ujęcia. Zdjęcia miały więc mieć charakter reportażowy, czyli tworzyć historię, pokazywać prawdziwe emocje, bez pozowania. Jedynym elementem zaaranżowanym w trakcie wesela była krótka sesja ślubna, podczas której fotograf pokazał industrialne wnętrze Reduty. W efekcie Alice i Jarek pozują na tle ceglanych ścian, drewnianych drzwi, w naturalnym świetle i cieniu. Nie zabrakło także zdjęć z lotu ptaka – piękno <Link to={generatePath(URLS.LANDING, { path: 'organizacja-wesel-warszawa' })} className="linkPink">Warszawy</Link> zostało uchwycone przez drona, który zatrzymał się nad głowami wieżowców i magazynów, ukazał przeplatające się skrzyżowania i architekturę powojennego miasta.</>,
            pics: [
                { src: AliJar35 },
                { src: AliJar36 },
                { src: AliJar38 },
                { src: AliJar37 },
            ]
        },
        {
            headerSmall: "Industrialne wesele w Warszawie okiem wedding plannerek",
            headerClassName: "pink",
            text: <>Jeszcze 10 lat temu nikt by nie pomyślał, że ceglane wnętrze, beton i metal mogą idealnie pasować do delikatnej bieli i monochromatycznych kwiatów. Dziś po to niezwykłe połączenie sięgają pary, które poszukują niekonwencjonalnych miejsc na swój ślub. Alice i Jarek dzięki weselu w stylu industrialnym mogli też pokazać swoją pasję do nowoczesnej architektury miejskiej oraz fragmentarycznie wyrazić tę pasję w duchu prostoty i motywu eko. Jednocześnie poznali Warszawę, docenili polskie produkty i zapisali we wspomnieniach nie tylko swój najważniejszy dzień w życiu, lecz także historię powojennych murów, w których powiedzieli sobie „tak”.
                <br />
                <br />
                Jeśli i Wy pragniecie mieć swoje wyjątkowe wesele w stylu industrialnym to serdecznie polecamy się do organizacji tego eventu. Stworzymy dla Was coś zupełnie wyjątkowego!
            </>,
            pics: [
                { src: AliJar31 },
                { src: AliJar32 },
                { src: AliJar33 },
                { src: AliJar34 },
                { src: AliJar39 },
            ]
        },
    ],
    extras: <>Spodobało się Wam to industrialne wesele w Warszawie? Jeśli tak to zajrzyjcie również tutaj:
        <ul style={{ marginTop: ".5rem" }}>
            <li><CustomRealisationLink text="wesele w Ceglarni Jarosławki" path="ceglarnia-jaroslawki-wesele" className="linkPink" /></li>
            <li><CustomRealisationLink text='wesele w Starej Kruszarni' path='stara-kruszarnia-wesele-kosmos' className='linkPink' /></li>
            <li><CustomPostLink text="wesele w Folwarku Wąsowo" path="folwark-wasowo-wesele" className="linkPink" /></li>
        </ul>
    </>
}

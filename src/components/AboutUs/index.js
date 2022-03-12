import React from 'react';
import './styles.scss';
import { kasia, ola } from './pics';
import ArrowToTop from '../ArrowToTop';
import ScrollToTopOnMount from '../ScrollToTopOnMount';
import URLS from '../../utils/urls'
import logo from '../../utils/czarymarry_logo.png'
import SeoContent from '../SeoContent';

const APP_URL = process.env.REACT_APP_BASE_URL
const seo = {
    title: 'O nas | organizacja ślubów i wesel | Czary Marry',
    description: 'Poznajcie nas. Opowiemy Wam, dlaczego uwielbiamy pracę jako konsultantki ślubne. Jesteście ciekawi, dlaczego tworzymy duet idealny?',
    url: `${APP_URL}${URLS.ABOUT}`,
    image: logo
}

const AboutUs = () => {

    return (
        <div className="AboutUs main-div">
            <ScrollToTopOnMount />
            <SeoContent {...seo} />
            <ArrowToTop />
            <div className="page-header">
                <span className="number">01</span>
                <h2 className="page-title">O nas</h2>
            </div>
            <div className="AboutUs-content">
                <h1 className="main-header"><b>Agencja Ślubna Czary Marry</b> - firma, która powstała na bazie <span><br /></span>15-letniej przyjaźni.</h1>
                <p>
                    Tworzymy piękne uroczystości, pełne uśmiechów, wzruszeń i chwil spędzonych z bliskimi. W swoim towarzystwie czujemy się bezpiecznie, swobodnie i wiemy, że razem możemy więcej, bo idealnie się uzupełniamy.<br /> Myślimy „weselami” – zawsze i wszędzie szukamy nowych inspiracji i pomysłów, dzięki czemu z powodzeniem realizujemy zarówno te piękne, klasyczne wesela, jak i te szalone i nieszablonowe. Nie potrafimy też przestać gadać o ślubach i weselach. Codziennością są już nasze długie rozmowy o branży, trendach, naszych ślubnych pomysłach i rozwiązaniach dla naszych Parach.
                </p>
                <div className="content-div kasia">
                    <h2 className="text-right">Kasia.</h2>
                    <div className="pic">
                        <img src={kasia} alt="Kasia konsultantka ślubna" />
                    </div>
                    <p>Projektuje niepowtarzalne uroczystości, dopasowane indywidualnie do każdej Pary. Nieszablonowa, kreatywna, bezkompromisowa. Przywiązuje dużą wagę do detali, każdy element na weselu musi do siebie pasować. W organizowanych przez nią uroczystościach nie znajdziecie przypadkowych elementów. Zwraca uwagę na wszystkie szczegóły, dzięki czemu jej pary młode mają zawsze poczucie pełnej kontroli. Jej zaangażowanie, entuzjazm, otwartość i wyjątkowy talent do nawiązywania kontaktów sprawia, że w jej towarzystwie znakomicie poczujecie się Wy, Wasi goście, jak i wykonawcy.</p>
                </div>
                <div className="content-div ola">
                    <h2>Ola.</h2>
                    <div className="pic">
                        <img src={ola} alt="Ola konsultantka ślubna" />
                    </div>
                    <p>Kreatorka pięknych uroczystości ślubnych przepełnionych miłością i wzruszeniami. Pomysłowa, konkretna, elastyczna. Świetnie odnajduje się w wyszukiwaniu idealnych wykonawców i usług, korzystając z nieszablonowych źródeł. Ze skrupulatnością i zaangażowaniem podejmuje się realizacji wszystkich Waszych życzeń i marzeń. W pracy wedding plannera wyróżnia się świetnymi umiejętnościami negocjacyjnymi, wyczuciem i intuicją, co  sprawia, że nigdy nie znajdziecie się w sytuacji bez wyjścia. Niezwykle cierpliwa i opanowana, w każdej sytuacji znajdzie odpowiednie słowa, które mogą ugasić pożar i rozładować napięcie.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
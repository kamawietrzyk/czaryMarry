import React from 'react'
import CustomInnerLink from '../components/CustomLink/CustomInnerLink'
import CustomOuterLink from '../components/CustomLink/CustomOuterLink'

const posts = [
    {
        path: 'folwark-wasowo',
        title: "Folwark Wąsowo - miejsce na wesele dające nieograniczone mozliwości",
        date: "12 sty 2021",
        // edited: "20 sty 2021",
        tag: "tag1",
        textShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus quis risus nec molestie. In scelerisque luctus tortor id semper.",
        mainPic: {
            src: require('../components/OurCouples/OurCouplesPics/EwaManu/06.jpg').default,
            author: "Juliusz Cezar",
        },
        textMain:
            <>
                Lorem ipsum <CustomInnerLink className="bgColor" path="folwark-wasowo" text="Folwark Wąsowo" />, consectetur adipiscing elit. Nulla sit amet libero at diam suscipit malesuada. Nullam porttitor nisl sed tempor ornare. Etiam consectetur auctor rutrum. Nulla sed metus dignissim, sollicitudin mi a, tempus lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim nisi vel elit imperdiet <CustomOuterLink className="bgColor" to="https://www.ksiaz.walbrzych.pl/" text="Zamek Ksiąz" /> bibendum. Sed egestas, felis at pulvinar scelerisque, diam orci tristique elit, ac lobortis tortor nibh eu justo. Aliquam erat volutpat.
            </>,
        content: [
            {
                // pics: [
                //     { src: "" },
                // ],
                headerSmall: "Pierwszy mniejszy header",
                text: "Sed non diam dui. Nullam vitae molestie tellus, ac pharetra ante. Morbi nisl nisi, laoreet nec elit cursus, vehicula faucibus diam. Quisque magna est, interdum eget iaculis a, pharetra et magna. Proin arcu risus, sagittis vel nunc sit amet, auctor viverra nisl. Vivamus quis tortor sit amet turpis sagittis facilisis. Nulla ac molestie dolor. Aliquam erat volutpat. Sed ut feugiat magna. Aliquam quis aliquet ligula. Phasellus suscipit mollis nisi, tempor condimentum orci pharetra eget. Morbi vulputate dui ante, faucibus rhoncus nisl aliquam et. Donec facilisis a dolor aliquam euismod."
            },
            {
                pics: [
                    {src: require('../components/OurCouples/OurCouplesPics/EwaManu/12.jpg').default,
                    author: "zdziszek wereszczak"},
                    {src: require('../components/OurCouples/OurCouplesPics/EwaManu/15.jpg').default}
                ],
                headerSmall: "Drugi mniejszy header",
                text: "Sed non diam dui. Nullam vitae molestie tellus, ac pharetra ante. Morbi nisl nisi, laoreet nec elit cursus, vehicula faucibus diam. Quisque magna est, interdum eget iaculis a, pharetra et magna. Proin arcu risus, sagittis vel nunc sit amet, auctor viverra nisl. Vivamus quis tortor sit amet turpis sagittis facilisis. Nulla ac molestie dolor. Aliquam erat volutpat. Sed ut feugiat magna."
            },
        ],
        extras:
            <>
                <p className="m-0">Organizacja: <CustomInnerLink path="/" text="Agencja Ślubna Czary Marry" /></p>
                <p className="m-0">Miejsce: <CustomOuterLink to="http://folwarkwasowo.pl/" text="Folwark Wąsowo" /></p>
                <p className="m-0">Dekoracje: <CustomOuterLink to="https://www.artsize.pl/" text="Art Size" /></p>
                <p className="mt-0 mb-2">Zdjęcia: <CustomOuterLink to="http://svetlanabennington.com/" text="Svetlana Bennington" /></p>
            </>
    },
    {
        path: 'drugi-post-z-takim-nie-za-dlugim-tytulem',
        title: "Drugi post z takim nie za długim tytułem",
        date: "15 sty 2021",
        // edited: "20 sty 2021",
        tag: 'tag2',
        textShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus quis risus nec molestie. In scelerisque luctus tortor id semper.",
        mainPic: {
            src: require('../components/OurCouples/OurCouplesPics/FoodtruckWedding/ft16.JPG').default,
            author: "Zofia Nałkowska",
        },
        textMain:
            <>
                Lorem ipsum <CustomInnerLink className="bgColor" path="folwark-wasowo" text="Folwark Wąsowo" />, consectetur adipiscing elit. Nulla sit amet libero at diam suscipit malesuada. Nullam porttitor nisl sed tempor ornare. Etiam consectetur auctor rutrum. Nulla sed metus dignissim, sollicitudin mi a, tempus lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim nisi vel elit imperdiet <CustomOuterLink className="bgColor" to="https://www.ksiaz.walbrzych.pl/" text="Zamek Ksiąz" /> bibendum. Sed egestas, felis at pulvinar scelerisque, diam orci tristique elit, ac lobortis tortor nibh eu justo. Aliquam erat volutpat.
            </>,
        content: [
            {
                pics: [
                    { src: require('../components/OurCouples/OurCouplesPics/FoodtruckWedding/ft10.JPG').default },
                ],
                headerSmall: "Pierwszy mniejszy header",
                text: "Sed non diam dui. Nullam vitae molestie tellus, ac pharetra ante. Morbi nisl nisi, laoreet nec elit cursus, vehicula faucibus diam. Quisque magna est, interdum eget iaculis a, pharetra et magna. Proin arcu risus, sagittis vel nunc sit amet, auctor viverra nisl. Vivamus quis tortor sit amet turpis sagittis facilisis. Nulla ac molestie dolor. Aliquam erat volutpat. Sed ut feugiat magna. Aliquam quis aliquet ligula. Phasellus suscipit mollis nisi, tempor condimentum orci pharetra eget. Morbi vulputate dui ante, faucibus rhoncus nisl aliquam et. Donec facilisis a dolor aliquam euismod."
            },
            {
                pics: [
                    { src: require('../components/OurCouples/OurCouplesPics/FoodtruckWedding/ft10.JPG').default ,
                    author: "zdziszek wereszczak"},
                    {src: require('../components/OurCouples/OurCouplesPics/FoodtruckWedding/ftVer2.jpg').default}
                ],
                headerSmall: "Drugi mniejszy header",
                text: "Sed non diam dui. Nullam vitae molestie tellus, ac pharetra ante. Morbi nisl nisi, laoreet nec elit cursus, vehicula faucibus diam. Quisque magna est, interdum eget iaculis a, pharetra et magna. Proin arcu risus, sagittis vel nunc sit amet, auctor viverra nisl. Vivamus quis tortor sit amet turpis sagittis facilisis. Nulla ac molestie dolor. Aliquam erat volutpat. Sed ut feugiat magna."
            },
        ]
    }
]

export default posts
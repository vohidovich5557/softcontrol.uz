import Web from '../images/web.png'
import Bot from '../images/tgbot.png'
import Pro from '../images/protfolio.png'
import { AmericaFlag, RussianFlag, UzbFlag } from '../components/svgs'
import Service1 from '../images/service1.jpg'
import Pros from '../images/pro.jpg'
import tgBot from '../images/tgbot1.png'
import ITAgency from '../images/itagency.png'
import Agency from '../images/agency.png'
import App from '../images/app.png'
import Corparative from '../images/corporative.png'
import CoPage from '../images/copage.png'

export const navData = [
    {
        id: 1,
        name: (t) => t('header.nav.home'),
        path: '/',
    },
    {
        id: 2,
        name: (t) => t('header.nav.about'),
        path: '/about',
    },
    {
        id: 3,
        name: (t) => t('header.nav.services'),
        path: '/services',
    },
    {
        id: 4,
        name: (t) => t('header.nav.contact'),
        path: '/contact',
    }
]

// this is data for the sevice card data

export const serviceData = [
    {
        id: 1,
        name: (t) => t('services.card1.title'),
        text: (t) => t('services.card1.text'),
        img: Web,
    },
    {
        id: 2,
        name: (t) => t('services.card2.title'),
        text: (t) => t('services.card2.text'),
        img: Bot,
    },
    {
        id: 3,
        name: (t) => t('services.card3.title'),
        text: (t) => t('services.card3.text'),
        img: Pro,
    },
    {
        id: 4,
        name: (t) => t('services.card4.title'),
        text: (t) => t('services.card4.text'),
        img: ITAgency,
    },
    {
        id: 5,
        name: (t) => t('services.card5.title'),
        text: (t) => t('services.card5.text'),
        img: App,
        soon: true,
    },
    {
        id: 6,
        name: (t) => t('services.card5.title'),
        text: (t) => t('services.card5.text'),
        img: Corparative,
    },
]


// this is data of the language

export const langData = [
    {
        id: 1,
        lang: 'Eng',
        clickLang: 'en',
        flag: AmericaFlag,
    },
    {
        id: 2,
        lang: 'Rus',
        clickLang: 'ru',
        flag: RussianFlag,
    },
    {
        id: 3,
        lang: 'Uzb',
        clickLang: 'uz',
        flag: UzbFlag,
    },
]

// this data for the services data

export const servicesData = [
    {
        id: 1,
        img: Service1,
        title: (t) => t('services.card1.title'),
        text: (t) => t('services.card1.text'),
        btnTitle: (t) => t('services.card1.btn'),
        aos: 'fade-left',
        aos2: 'fade-right',
    },
     {
        id: 2,
        img: Pros,
        title: (t) => t('services.card3.title'),
        text: (t) =>  t('services.card3.text'),
        btnTitle: (t) => t('services.card3.btn'),
        reverse: true,
        aos: 'fade-right',
        aos2: 'fade-left',
    },
    {
        id: 3,
        img: tgBot,
        title: (t) => t('services.card2.title'),
        text: (t) => t('services.card2.text'),
        btnTitle: (t) => t('services.card2.btn'),
        reverse: false,
        aos: 'fade-left',
        aos2: 'fade-right',
    },
    {
        id: 4,
        img: Agency,
        title: (t) => t('services.card4.title'),
        text: (t) =>  t('services.card4.text'),
        btnTitle: (t) => t('services.card4.btn'),
        reverse: true,
        aos: 'fade-right',
        aos2: 'fade-left',
    },
    {
        id: 5,
        img: CoPage,
        title: (t) => t('services.card5.title'),
        text: (t) =>  t('services.card5.text'),
        btnTitle: (t) => t('services.card5.btn'),
        reverse: false,
        aos: 'fade-left',
        aos2: 'fade-right',
    }
]
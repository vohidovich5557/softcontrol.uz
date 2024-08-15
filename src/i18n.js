import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
           nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            contact: 'Contact',
           },
           touch: 'Get in touch',
          },
          hero: {
            title: 'IT Solutions for Business',
            text: 'SoftControl is a newly opened IT company, we store information about entrepreneurs and newly opened businesses and companies, their service personnel and information about the company or business on one web page and post it on the Internet. And besides, there is a page where customers can leave a special request for offers and requests for your services from the place of turban.',
            btn1: 'Get a Qoute',
            btn2: 'Learn More',
          },
          about: {
            title: 'About Us',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat hic quam doloribus eius accusantium illum asperiores ad, deleniti porro, qui rerum possimus reiciendis ratione dicta excepturi nisi! Non, ullam!',
            btn1: 'More about us',
          },
          services: {
            title: 'Our Services',
            card1: {
                title: 'WEB DEVELOPMENT',
                text: 'A web page created to introduce newly opened companies and entrepreneurs, their work, employees and their services to people remotely',
                btn: 'Apply my Project',
            },
            card2: {
                title: 'TELEGRAM BOT',
                text: 'Telegram bot is a way to reduce the work of employees who interact with customers, leave customer requests in the bot, and customers communicate with the employee through the bot.',
                btn: 'Apply my Project',
            },
            card3: {
                title: 'PORTFOLIO PAGE',
                text: 'PORTFOLIO page -  is a web page that shows the work of a person related to a profession, his experience in that field and what he is capable of doing.',
                btn: 'Apply my Project',
            },
            card4: {
                title: 'IT AGENCY',
                text: 'IT AGENCY - finding an IT company suitable for your project. Or a service to find the right project for your IT company',
                btn: 'Apply my Project',
            },
            card5: {
                title: 'CORPORATIVE WEB PAGE',
                text: 'Development of web platforms, corporate sites of any level that will increase your sales',
                btn: 'Apply my Project',
            }
          },
          team: {
            title: 'Our Team Members',
            p1: {
                name: 'Ukhtamov Shokhjakhon',
                position: 'Founder & CEO',
            },
            p2: {
                name: 'Ukhtamov Shokhjakhon',
                position: 'Founder & CEO',
            },
            p3: {
                name: 'Ukhtamov Shokhjakhon',
                position: 'Founder & CEO',
            },
            p4: {
                name: 'Ukhtamov Shokhjakhon',
                position: 'Founder & CEO',
            },
            p5: {
                name: 'Ukhtamov Shokhjakhon',
                position: 'Founder & CEO',
            },
            p6: {
                name: 'Ukhtamov Shokhjakhon',
                position: 'Founder & CEO',
            }
          },
          contact: {
           title: 'CONTACT US',
           form: {
            name: 'Name',
            namePlace: 'Enter your name',
            phone: 'Phone Number',
            phonePlace: 'Enter your phone number',
            email: 'Email',
            emailPlace: 'Enter your email',
            btn: 'Send',
           },
           title2: 'Do You Have An Idea To Realize? Let’s Discuss About It!',
           callUs: 'Or Call Us',
           appoint: 'Book A Consultation',
          },
        }
      },
      uz: {
        translation: {
          header: {
            nav: {
                home: 'Asosiy',
                about: 'Biz Haqimizda',
                services: 'Xizmatlar',
                contact: 'Bog`lanish',
            },
            touch: 'So`rov berish',
          },
          hero: {
            title: 'Biznes uchun IT xizmatlari',
            text: 'SoftControl yangi ochilgan IT kompaniya bo`lib bizda tadbirkorlar va yang ochilgan biznes va firmalar ucun ularning xizmatlari xodimlari va firma yoki biznes haqidagi ma`lumotlarni bitta web sahifada saqlab uni internetga joylab beramiz. Va undan tashqari mijozlarni turban joyidan xizmatlaringiz uchun taklif va murojatlardan uchun alohida so`rov qoldiradigan sahifaham boladi.',
            btn1: 'So`rov qoldirish',
            btn2: 'Batafsil',
          },
          about: {
            title: 'Biz Haqimizda',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat hic quam doloribus eius accusantium illum asperiores ad, deleniti porro, qui rerum possimus reiciendis ratione dicta excepturi nisi! Non, ullam!',
            btn1: 'Biz haqimizda batafsil',
          },
          services: {
            title: 'Xizmatlar',
            card1: {
                title: 'WEB SAHIFA',
                text: 'Endi ochilgan firma va tadbirkorlarni ishlarini xodimlarini va ularning xizmatlarini odamlarga masofadan turib tanitish uchun yaratiladigan web sahifa',
                btn: 'Loyiha biriktirish',
            },
            card2: {
                title: 'TELEGRAM BOT',
                text: 'Telegram bot - bu mijozlar bilan aloqada bo`ladigan xodimlarning ishini kamaytirib mijozlarni so`rovlarini bot da qoldirish va mijozlar xodim bilan bot orqali muloqot qilish',
                btn: 'Loyiha biriktirish',
            },
            card3: {
                title: 'PORTFOLIO SAHIFA',
                text: 'PORTFOLIO sahifa - bu biror bir kasbga doir bo`lgan shaxsning uning o`sha soha boyicha tajribasi qilgan ishlari va uning nima ish qilishga qodirligini ko`rsatib beruvchi web sahifa',
                btn: 'Loyiha biriktirish',
            },
            card4: {
                title: 'IT AGENSTVA',
                text: 'IT AGENSTVA - bu sizning loyihangizga mos keladigan IT kompaniya topib berish. Yoki sizning IT kompaniyangizga mos keladigan loyiha topib berish xizmati',
                btn: 'Loyiha biriktirish',
            },
            card5: {
                title: 'CORPORATIVE WEB SAHIFA',
                text: 'Savdolaringizni oshiradigan har qanday darajadagi veb-platformalar, korporativ saytlar ishlab chiqish',
                btn: 'Loyiha biriktirish',
            }
          },
          team: {
            title: 'Bizning jamoamiz',
            p1: {
                name: 'O`ktamov Shohjahon',
                position: 'Founder & CEO',
            },
            p2: {
                name: 'O`ktamov Shohjahon',
                position: 'Founder & CEO',
            },
            p3: {
                 name: 'O`ktamov Shohjahon',
                 position: 'Founder & CEO',
            },
            p4: {
                 name: 'O`ktamov Shohjahon',
                 position: 'Founder & CEO',
            },
            p5: {
                 name: 'O`ktamov Shohjahon',
                 position: 'Founder & CEO',
            },
            p6: {
                 name: 'O`ktamov Shohjahon',
                 position: 'Founder & CEO',
            }
          },
          contact: {
            title: 'Biz Bilan Bog`laning',
            form: {
                name: 'Ismingiz',
                namePlace: 'Ismingizni kiriting',
                phone: 'Telefon raqamingiz',
                phonePlace: 'Telefon raqamingizni kiriting',
                email: 'Email manzilingiz',
                emailPlace: 'Email manzilingizni kiriting',
                btn: 'Yuborish',
            },
            title2: 'Sizda amalga oshirish uchun g`oyangiz bormi? Keling, bu haqda suhbatlashamiz!',
            callUs: 'Yoki Qo`ng`iroq qiling',
            appoint: 'konsultatsiyani bron qiling'
          },
        }
      },
      ru: {
        translation: {
          header: {
            nav: {
                home: 'Главная',
                about: 'О нас',
                services: 'Услуги',
                contact: 'Контакты',
            },
            touch: 'Связаться',
          },
          hero: {
             title: 'IT Решения для бизнеса',
             text: 'SoftControl – недавно открывшаяся IT-компания, мы храним информацию о предпринимателях и вновь открывающихся предприятиях и компаниях, их обслуживающем персонале и информацию о компании или бизнесе на одной веб-странице и размещаем ее в Интернете. А кроме того, есть страница, где клиенты могут оставить специальный запрос на предложения и запросы на ваши услуги с места тюрбана.',
             btn1: 'Запросить цену',
             btn2: 'Узнать больше',
          },
          about: {
           title: 'О нас',
           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat hic quam doloribus eius accusantium illum asperiores ad, deleniti porro, qui rerum possimus reiciendis ratione dicta excepturi nisi! Non, ullam!',
           btn1: 'Больше о нас',
          },
          services: {
           title: 'Услуги',
            card1: {
                title: 'веб-страница',
                text: 'Веб-страница, созданная для удаленного ознакомления людей с вновь открывающимися компаниями и предпринимателями, их работой, сотрудниками и услугами.',
                btn: 'Приложение к проекту',
            },
            card2: {
                title: 'ТЕЛЕГРАММ БОТ',
                text: 'Telegram-бот — это способ сократить работу сотрудников, которые взаимодействуют с клиентами, оставляют заявки клиентов в боте, а клиенты общаются с сотрудником через бота.',
                btn: 'Приложение к проекту',
            },
            card3: {
                title: 'СТРАНИЦА ПОРТФОЛИО',
                text: 'Страница ПОРТФОЛИО — это веб-страница, на которой показана работа человека, связанная с профессией, его опыт в этой области и то, на что он способен.',
                btn: 'Приложение к проекту',
            },
            card4: {
                title: 'АГЕНТСТВО IT',
                text: 'ИТ-АГЕНТСТВО - поиск ИТ-компании, подходящей для вашего проекта. Или услуга по поиску подходящего проекта для вашей ИТ-компании',
                btn: 'Приложение к проекту',
            },
            card5: {
                title: 'КОРПОРАТИВНЫЙ САЙТ',
                text: 'Разработка веб-платформ, корпоративных сайтов любого уровня, которые повысят ваши продажи',
                btn: 'Приложение к проекту',
            }
          },
          team: {
            title: 'Наша команда',
            p1: {
                name: 'Октамов Шахджахан',
                position: 'Основатель и генеральный директор',
            },
            p2: {
                 name: 'Октамов Шахджахан',
                 position: 'Основатель и генеральный директор',
            },
            p3: {
                 name: 'Октамов Шахджахан',
                 position: 'Основатель и генеральный директор',
            },
            p4: {
                 name: 'Октамов Шахджахан',
                 position: 'Основатель и генеральный директор',
            },
            p5: {
                 name: 'Октамов Шахджахан',
                 position: 'Основатель и генеральный директор',
            },
            p6: {
                 name: 'Октамов Шахджахан',
                 position: 'Основатель и генеральный директор',
            }
          },
          contact: {
            title: 'СВЯЗАТЬСЯ С НАМИ',
            form: {
                name: 'Имя',
                namePlace: 'Ваше имя',
                phone: 'Телефон',
                phonePlace: 'Ваш телефон',
                email: 'Электронная почта',
                emailPlace: 'Ваша электронная почта',
                btn: 'Отправить',
            },
            title2: 'У вас есть идея, которую нужно реализовать? Давайте обсудим это!',
            callUs: 'Позвоните нам',
            appoint: 'записаться на консультацию'
          }
        }
      }
    }
  });

export default i18n;
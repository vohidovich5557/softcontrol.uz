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
            text: 'Our company is newly opened and we are ready to provide you with the best service. We are a team of professionals who are ready to help you with your business.',
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
            },
            card6: {
              title: 'AI CHATBOT',
              text: 'AI Chatbot is a way to reduce the work of employees who interact with customers, leave customer requests in the bot, and customers communicate with the employee through the bot.',
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
                name: 'Idiyev Aftondil',
                position: 'AI Specialist & Backend Developer',
            },
            p3: {
                name: 'Sobirov Baxtiyor',
                position: 'UI/UX Designer',
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
            text: 'Bizning kompaniyamiz yangi ochilgan va biz sizga eng yaxshi xizmatni taqdim etishga tayyormiz. Biz sizning biznesingizga yordam berishga tayyor bolgan professionallar jamoasimiz.',
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
            },
            card6: {
              title: 'AI CHATBOT',
              text: 'AI Chatbot – mijozlar bilan o‘zaro aloqada bo‘lgan, mijozlar so‘rovlarini botda qoldiradigan va mijozlar xodim bilan bot orqali muloqot qiladigan xodimlar ishini qisqartirish usulidir.',
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
                name: 'Idiyev Aftondil',
                position: 'AI Specialist & Backend Developer',
            },
            p3: {
                 name: 'Sobirov Baxtiyor',
                 position: 'UI/UX Designer',
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
           text: 'Наша компания недавно открылась и мы готовы предоставить вам лучший сервис. Мы команда профессионалов, которые готовы помочь вам с вашим бизнесом.',
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
            },
            card6: {
              title: 'ЧАТБОТ AI',
              text: 'AI Chatbot — это способ сократить работу сотрудников, которые взаимодействуют с клиентами, оставляют заявки клиентов в боте, а клиенты общаются с сотрудником через бота.',
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
                 name: 'Idiyev Aftondil',
                 position: 'AI Specialist & Backend Developer',
            },
            p3: {
                 name: 'Sobirov Baxtiyor',
                 position: 'UI/UX Designer',
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
      },
      中国: {
        translation: {
          header: {
            nav: {
              home: '首页',
              about: '关于我们',
              services: '服务',
              contact: '联系',
            },
            touch: '联系我们',
          },
          hero: {
            title: '为企业提供 IT 解决方案',
            text: 'SoftControl 是一家新成立的 IT 公司，我们在一个网页上存储关于企业家和新开办企业和公司的信息，包括其服务人员和公司/业务的信息，并发布在互联网上。此外，还有一个页面，客户可以在上面提交针对您的服务的请求和报价。',
            btn1: '获取报价',
            btn2: '了解更多',
          },
          about: {
            title: '关于我们',
            text: '我们公司刚刚开业，我们随时准备为您提供最优质的服务。我们拥有一支专业的团队，随时准备为您的业务提供帮助。',
            btn1: '了解我们更多',
          },
          services: {
            title: '我们的服务',
            card1: {
              title: '网页开发',
              text: '为新成立的公司和企业家创建的网页，远程向人们介绍他们的工作、员工及其服务。',
              btn: '提交我的项目',
            },
            card2: {
              title: '电报机器人',
              text: 'Telegram 机器人是减轻与客户互动员工工作量的一种方式，客户请求留在机器人中，并通过机器人与员工沟通。',
              btn: '提交我的项目',
            },
            card3: {
              title: '作品展示页面',
              text: 'PORTFOLIO 页面是展示与职业相关的个人作品、在该领域的经验以及能力的网页。',
              btn: '提交我的项目',
            },
            card4: {
              title: 'IT 代理',
              text: 'IT 代理 - 为您的项目寻找合适的 IT 公司，或者为您的 IT 公司寻找合适项目的服务。',
              btn: '提交我的项目',
            },
            card5: {
              title: '企业网页',
              text: '开发任何级别的网络平台、企业网站，从而提升您的销售额。',
              btn: '提交我的项目',
            },
            card6: {
              title: '人工智能聊天机器人',
              text: 'AI 聊天机器人是减轻与客户互动员工工作量的一种方式，客户请求留在机器人中，并通过机器人与员工沟通。',
              btn: '提交我的项目',
            }
          },
          team: {
            title: '我们的团队成员',
            p1: {
              name: 'Ukhtamov Shokhjakhon',
              position: '创始人兼首席执行官',
            },
            p2: {
              name: 'Idiyev Aftondil',
              position: 'AI 专家与后端开发人员',
            },
            p3: {
              name: 'Sobirov Baxtiyor',
              position: 'UI/UX 设计师',
            },
            p4: {
              name: 'Ukhtamov Shokhjakhon',
              position: '创始人兼首席执行官',
            },
            p5: {
              name: 'Ukhtamov Shokhjakhon',
              position: '创始人兼首席执行官',
            },
            p6: {
              name: 'Ukhtamov Shokhjakhon',
              position: '创始人兼首席执行官',
            }
          },
          contact: {
            title: '联系我们',
            form: {
              name: '姓名',
              namePlace: '请输入您的姓名',
              phone: '电话号码',
              phonePlace: '请输入您的电话号码',
              email: '电子邮箱',
              emailPlace: '请输入您的电子邮箱',
              btn: '发送',
            },
            title2: '你有想法想实现吗？让我们一起讨论！',
            callUs: '或致电我们',
            appoint: '预约咨询',
          },
        }
      }
    }
  });

export default i18n;
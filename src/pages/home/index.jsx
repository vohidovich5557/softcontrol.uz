import HeroImage from '../../images/heroImage.png'
import About from '../../images/about.png'
import { Link } from 'react-router-dom'
import call from '../../images/call.png'
import {useForm} from 'react-hook-form'
import { toast } from 'sonner'
import { ServiceCard } from '../../components/common/serviceCard'
import { serviceData } from '../../utilities/data'
import { useRef } from 'react'
import {useTranslation} from 'react-i18next'

const telegramToken = import.meta.env.VITE_TELEGRAM_TOKEN;
const telegramChatId = import.meta.env.VITE_TELEGRAM_CHATID;


export const Home = ({onButtonClick}) => {
     const footerRef = useRef(null);
     const serviceRef = useRef(null);
     const {t} = useTranslation()
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
   

    

    const srollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToService = () => {
        serviceRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const submit = async(data) => {
        const {name, phone, email} = data

       const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const payload = {
      chat_id: telegramChatId,
      text: `Name: ${name}\nMessage: ${'Bu xabar faqatgina bog`lanish uchun'}\nPhone: ${phone}\nEmail: ${email}`,
    };

    try {
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        reset()
      } else {
        toast.error('Error sending message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message.');
    }
    }
    return (
        <>
        {/* hero page fo the hone page */}
        <section> 
             <div className="container flex flex-col py-[100px] lg:flex-row items-center justify-center gap-[40px]">
           <div  className="flex flex-col items-center lg:items-start  gap-[20px]">
            <span className="text-[23px] lg:text-[30px] font-medium text-black text-start">{t('hero.title')}</span>
            <span className="text-[14px] lg:text-[16px] font-normal text-navColor text-center lg:w-[70%] lg:text-start">{t('hero.text')}</span>
            <div className="flex flex-col md:flex-row w-[100%] lg:w-[60%] items-center justify-center gap-[10px]">
                <button onClick={srollToFooter} className="w-[100%] rounded-[5px] hover:text-white transition-all duration-300 h-auto py-[10px] bg-btnBlue text-btnWhite">{t('hero.btn1')}</button>
                <button onClick={scrollToService} className="w-[100%] rounded-[5px] hover:text-white transition-all duration-300 h-auto py-[10px] bg-btnBlue text-btnWhite">{t('hero.btn2')}</button>
            </div>
           </div>
           <div className="w-[100%] h-auto">
              <img src={HeroImage} alt="w-[100%] h-auto object-cover" />
           </div>
         </div>
        </section>
         {/* about page for the home */}
         <section>
            <div className='bg-bgBlack'>
            <div className='container  flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between  w-[100%] gap-[40px] pb-[50px] pt-[50px] mt-[40px]'>
            <div  className='w-[50%] h-auto'>
                <img src={About} alt="img of mine" className='w-[100%] h-[100%] object-cover' />
            </div>
            <div className='flex w-[100%] flex-col items-center lg:items-center gap-[25px] md:gap-[35px]'>
                <div className='flex w-[100%] flex-col items-center lg:items-center gap-[10px]'>
                    <h2 className='text-[21px] lg:text-[26px] font-normal text-white lg:text-center'>{t('about.title')}</h2>
                <span className='text-center  w-[100%] lg:w-[60%] font-normal text-navColor'>{t('about.text')}</span>
                </div>
                 <button className='w-[100%] md:w-[60%] lg:w-[30%] lg:hover:w-[40%] py-[10px] bg-btnBlue text-btnWhite hover:text-white rounded-[5px] transition-all duration-500'><Link to="/about">{t('about.btn1')}</Link></button>
            </div>
         </div>
         </div>
         </section>
         {/* service section for the home page */}
         <section>
            <div ref={serviceRef} className='container mt-[40px] gap-[70px] pb-[150px] pt-[50px] flex flex-col'>
            <div className='flex flex-col items-center gap-[20px] lg:gap-[30px]'>
                <h2  className='text-[20px] lg:text-[26px] font-medium text-black'>{t('services.title')}</h2>
                <div  className='flex w-[70%] items-center  justify-center gap-[10px]'>
                    <span className='w-[30%] lg:w-[20%] h-[3px] bg-bgBlack rounded-[20px]'></span>
                <span className='w-[5%] h-[3px] bg-bgBlack rounded-[20px]'></span>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-center lg:gap-[40px] w-[100%] gap-[20px]'>
                {serviceData?.map((s) => (
                    <ServiceCard {...s} />
                ))}
            </div>
         </div>
         </section>
         {/* this section for the footer for the home */}
          <section>
           <div ref={footerRef} className='w-[100%] h-auto bg-bgBlack'>
             <div className='container w-[100%] mt-[60px] py-[30px] flex flex-col lg:flex-row items-center justify-center gap-[30px]'>
            <div className='flex flex-col items-center lg:gap-[40px] justify-center w-[100%] h-auto'>
                <h2 className='text-[26px] lg:text-[40px] lg:w-[70%] font-medium text-center lg:text-start text-white'>{t('contact.title2')}</h2>
                <div className=' w-[100%] lg:w-[70%] hidden lg:flex flex-col items-start justify-center gap-[20px]'>
                    <span className='text-[29px] font-normal text-white'>{t('contact.callUs')}</span>
                    <div className='flex w-[100%] items-center justify-start gap-[20px]'>
                        <div className='w-[40px] h-[40px]'>
                            <img src={call} alt="img of mine" className='w-[100%] h-[100%] object-cover' />
                        </div>
                        <span className='text-[20px] font-bold text-white'>+998 93 331 55 57</span>
                    </div>
                </div>
            </div>
            <div className='w-[100%] flex flex-col items-center justify-center gap-[60px] h-auto '>
                <div className='w-[100%] md:w-[80%] h-[492px] lg:h-[512px] lg:w-[70%]  py-[20px] lg:px-[30px] lg:py-[30px] px-[15px] lg:rounded-[20px] bg-white rounded-lg'>
                    <form onSubmit={handleSubmit(submit)} className='flex flex-col h-[100%] items-start justify-between gap-[18px]'>
                        <div className='flex flex-col items-start gap-[25px] w-[100%]'>
                            <div className='flex flex-col w-[100%] items-start gap-[15px]'>
                            <span className='text-[16px] font-normal text-bgBlack'>{t('contact.form.name')} <span className='text-[14px] font-normal text-red-500'>*</span></span>
                            <div className='flex w-[100%] flex-col items-start gap-[2px]'>
                                <input type="text" className='w-[100%] px-[10px] py-[15px] outline-none border rounded-[15px]' placeholder={t('contact.form.namePlace')} {...register('name', {required: 'Please enter your name'})} />
                               {errors.name && <span className='text-[14px] font-normal text-red-500'>{errors.name.message}</span>}
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[100%] gap-[10px]'>
                            <span className='text-[16px] font-normal text-bgBlack'>{t('contact.form.phone')} <span className='text-[14px] font-normal text-red-500'>*</span></span>
                            <div className='flex flex-col w-[100%] items-start gap-[2px]'>
                                <input type="text" className='w-[100%] px-[10px] py-[15px] outline-none border rounded-[15px]' placeholder={t('contact.form.phonePlace')} {...register('phone', {required: 'Please enter your number'})} />
                                {errors.phone && <span className='text-[14px] font-normal text-red-500'>{errors.phone.message}</span>}
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[100%] gap-[10px]'>
                            <span className='text-[16px] font-normal text-bgBlack'>{t('contact.form.email')} <span className='text-[14px] font-normal text-red-500'>*</span></span>
                            <div className='flex flex-col w-[100%] items-start gap-[2px]'>
                                <input type="text" className='w-[100%] px-[10px] py-[15px] outline-none border rounded-[15px]' placeholder={t('contact.form.emailPlace')} {...register('email', {required: 'Please enter your email'})} />
                                 {errors.email && <span className='text-[14px] font-normal text-red-500'>{errors.email.message}</span>}
                            </div>
                        </div>
                        </div>
                        <button type='submit' className='w-[100%] py-[15px] bg-btnBlue rounded-[14px] text-white font-medium text-center'>{t('contact.appoint')}</button>
                    </form>
                </div>
                <div className='flex w-[100%] lg:hidden flex-col items-center justify-center gap-[20px]'>
                    <span className='text-[23px] font-medium text-white'>{t('contact.callUs')}</span>
                    <div className='flex w-[100%] items-center justify-center gap-[20px]'>
                        <div className='w-[40px] h-[40px]'>
                            <img src={call} alt="img of mine" className='w-[100%] h-[100%] object-cover' />
                        </div>
                        <span className='text-[20px] font-bold text-white'>+998 93 331 55 57</span>
                    </div>
                </div>
            </div>
           </div>
           </div>
          </section>
        </>
    )
}
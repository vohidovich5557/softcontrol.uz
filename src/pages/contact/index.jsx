import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners";
import Email from '../../images/email.png'
import Phone from '../../images/call.png'
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import Map from "../../components/common/map";


export const Contact = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [loading, setloading] = useState(false);
    const {t} = useTranslation()

    const submit = async(data) => {
        const {name, phone, email} = data
        const telegramToken = '7121521499:AAFh73nBfUrCKOJJ1vYPT6qHnn-WlY09cyc';
        const telegramChatId = '1163282279';

       const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const payload = {
      chat_id: telegramChatId,
      text: `Name: ${name}\nMessage: ${'Bu xabar hamkorlik yoki loyiha uchun'}\nPhone: ${phone}\nEmail: ${email}`,
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

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 1000);
    }, [])
    return (
        <>
         {loading ? (
            <div className="w-[100%] h-[100vh] flex items-center justify-center">
                <PropagateLoader size={21} color="#b3b3b3" />
            </div>
         ) : (
            <div className="container pt-[40px] pb-[20px] flex items-center justify-center h-[100%]">
                <div className="w-[100%] md:w-[90%] h-auto py-[50px] flex flex-col lg:flex-row items-center justify-center gap-[80px] px-[20px] lg:px-[50px] border rounded-[14px] shadow-md lg:shadow-xl shadow-btnWhite">
                    <div className="w-[100%] flex flex-col items-center justify-center lg:gap-[40px] gap-[80px]">
                        <div className="flex w-[100%] flex-col items-center lg:justify-start lg:items-start gap-[10px]">
                        <span className="text-[25px] font-medium text-bgBlack">{t('contact.title')}</span>
                        <div className="w-[40%] flex items-center justify-center lg:justify-start gap-[5px] h-auto">
                            <span className="w-[80%] h-[4px] bg-bgBlack rounded-[14px]"></span>
                            <span className="w-[20%] h-[4px] bg-bgBlack rounded-[14px]"></span>
                        </div>
                        </div>
                        <div className="w-[100%] h-auto">
                        <form onSubmit={handleSubmit(submit)} className="flex w-[100%] lg:w-[80%] flex-col items-center lg:justify-start justify-center gap-[20px]">
                            <div className="flex flex-col items-center lg:items-start w-[100%] gap-[10px]">
                                <span className="text-[16px] font-normal lg:text-[18px] text-black/60">{t('contact.form.name')}</span>
                                <input type="text" className="w-[100%] h-auto py-[20px] outline-none px-[20px] text-center rounded-[15px] border" placeholder={t('contact.form.namePlace')} {...register('name', {required: 'Name is requeired'})} />
                                {errors.name && <span className="text-[14px] font-normal text-red-500">{errors.name.message}</span>}
                            </div>
                            <div className="flex flex-col items-center lg:items-start w-[100%] gap-[10px]">
                                <span className="text-[16px] lg:text-[18px] font-normal text-black/60">{t('contact.form.phone')}</span>
                                <input type="text" className="w-[100%] outline-none h-auto py-[20px] px-[20px] text-center rounded-[15px] border" placeholder={t('contact.form.phonePlace')} {...register('phone', {required: 'Phone Number is requeired'})} />
                                {errors.phone && <span className="text-[14px] font-normal text-red-500">{errors.phone.message}</span>}
                            </div>
                            <div className="flex flex-col items-center lg:items-start w-[100%] gap-[10px]">
                                <span className="text-[16px] lg:text-[18px] font-normal text-black/60">{t('contact.form.email')}</span>
                                <input type="email" className="w-[100%] h-auto outline-none py-[20px] px-[20px] text-center rounded-[15px] border" placeholder={t('contact.form.emailPlace')} {...register('email', {required: 'Email is requeired'})} />
                                {errors.email && <span className="text-[14px] font-normal text-red-500">{errors.email.message}</span>}
                            </div>
                            <button className="w-[80%] py-[10px] lg:py-[15px] lg:w-[60%] rounded-[20px] bg-btnBlue text-center text-white font-semibold">{t('contact.form.btn')}</button>
                        </form>
                        </div>
                    </div>
                    <div className="flex md:flex-row  lg:flex-col md:items-center md:justify-center w-[100%] flex-col items-center justify-center gap-[20px]">
                       <div className="flex md:w-[40%] xl:w-[100%] gap-[20px] flex-col">
                         <div className="flex w-[100%] items-center gap-[30px]">
                           <a href="tel:+998933315557" className="flex items-center gap-[30px]">
                             <img src={Phone} alt="img of the phone icon" className="w-[6vh] h-[100%] object-contain" />
                            <span className="font-medium text-[18px]"><a href="tel:+998933315557">+998 93 331 55 57</a></span>
                           </a>
                        </div>
                        <div className="flex items-center mb-[30px] w-[100%] gap-[30px]">
                            <a href="mailto:shokhuk006@gmail.com" className="flex items-center gap-[30px]">
                                <img src={Email} alt="img of mine" className="w-[6vh] h-[100%] object-contain" />
                            <span className="text-[20px] font-medium text-black">shokhuk006@gmail.com</span>
                            </a>
                        </div>
                       </div>
                        <div className="w-[100%] md:w-[60%] lg:w-[100%] rounded-[14px] h-[300px] overflow-hidden border border-black">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
         )}
        </>
    )
}
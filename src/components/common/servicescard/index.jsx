import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"



export const ServicesCard = ({title, text, img, btnTitle, reverse, aos, aos2}) => {
    const navigate = useNavigate()
    const {t} = useTranslation()
    return (
        <>
         <div className={`${reverse ? 'bg-bgBlack py-[50px] px-[20px]' : 'bg-white'} w-[100%] h-auto`}>
            <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} container lg:flex-row w-[100%] pt-[50px] h-auto  items-center gap-[30px] xl:gap-[60px] justify-between`}>
            <div data-aos={aos} className="w-[100%] flex items-center justify-center h-auto lg:hidden">
                 <h2 className="text-[32px] font-bold text-btnBlue">{title(t)}</h2>
            </div>
            <div data-aos={aos2} className="w-[100%] md:w-[50%] xl:w-[50%] flex items-center justify-center rounded-[20px] h-[40vh]">
                <img src={img} alt="img of mine" className="w-[100%] h-[100%] object-cover rounded-[20px] md:object-contain" />
            </div>
            <div data-aos={aos} className="w-[100%] lg:w-[50%] xl:w-[50%] h-auto flex flex-col items-center xl:items-start justify-center xl:gap-[40px] gap-[20px]">
                <h2 className="text-[23px] lg:text-[32px] hidden lg:block font-bold text-btnBlue">{title(t)}</h2>
                <div className="flex flex-col w-[100%] items-center xl:items-start justify-center gap-[20px] xl:gap-[30px]">
                   <span className={`text-[23px] font-normal text-center xl:text-start ${reverse ? 'text-white' : 'text-black'} w-[100%] md:w-[80%]`}>{text(t)}</span>
                   <button  onClick={() => navigate('/contact')} className="border border-btnBlue bg-blue-200 hover:bg-blue-100 px-[30px] py-[20px] rounded-[14px] text-center text-btnBlue">{btnTitle(t)}</button>
                </div>
            </div>
         </div>
         </div>
        </>
    )
}
import {useTranslation} from 'react-i18next'
import { useNavigate } from "react-router-dom"

export const ServiceCard = ({img, name, text, soon, id}) => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    return (
        <>
         <div key={id} onClick={() => navigate("/services")} className="w-[100%] cursor-pointer relative  shadow-md lg:hover:translate-y-[-30px] hover:w-[106%] lg:hover:w-[100%] transition-all duration-500 flex flex-col items-start md:items-center gap-[30px] lg:gap-[20px] h-[198px] pt-[10px] pb-[20px] px-[20px] border rounded-[14px] bg-langWhite hover:bg-cardWhite">
            <div className='flex items-center gap-[20px]'>
               <div className='w-[48px] h-[48px]'>
                 <img src={img} alt="img of mine" className='w-[100%] h-[100%] object-cover' />
               </div>
                <span className='text-[20px] font-medium text-bgBlack'>{name(t)}</span>
            </div>
            <div className='w-[100%] md:w-[100%] overflow-auto text-start md:text-center'>
                <span className='text-[14px] font-normal text-navColor'>
                   {text(t)}
                </span>
            </div>
            {soon ? (
                <div className="absolute text-[14px] font-normal flex items-center justify-center text-bgBlack top-o left-0 bottom-0 w-[100%] h-[100%] backdrop-blur-sm right-0 z-40">
                <span className="text-[14px] font-normal text-bgBlack">Coming Soon...</span>
            </div>
            ) : (
                null
            )}
         </div>
        </>
    )
}
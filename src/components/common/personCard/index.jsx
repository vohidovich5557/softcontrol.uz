import { useTranslation } from "react-i18next"
import Person from '../../../images/person.png'


export const PersonCard = ({img}) => {
    const {t} = useTranslation()
    return (
        <>
         <div className="w-[100%] border relative h-[375px] rounded-[14px] bg-white">
            <img src={Person} alt="img of the person" className="w-[100%] h-[100%] object-cover" />
            <div className="absolute w-[90%] px-[10px] flex flex-col items-start gap-[5px] py-[12px] rounded-[14px] backdrop-blur-md bg-black/30 bottom-[10px] left-[10px] right-0">
                <span className="text-bgBlack font-bold tracking-[1px] text-[17px]">{t('team.p1.name')}</span>
                <span className="text-[14px] font-normal text-white">{t('team.p1.position')}</span>
            </div>
         </div>
        </>
    )
}
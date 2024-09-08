import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners";
import Team from '../../images/team.png'
import { PersonCard } from "../../components/common/personCard";
import { useTranslation } from "react-i18next";
import { TeamData } from "../../utilities/data";


export const About = () => {
    const {t} = useTranslation()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])
    return (
        <>
         {loading ? (
            <div className="flex items-center justify-center w-[100%] h-[100vh]">
                <PropagateLoader size={21} color="#b3b3b3" />
            </div>
         ) : (
            <div className="w-[100%] flex flex-col items-center gap-[100px] lg:gap-[200px] h-[100%]">
               <div className="pt-[60px] w-[95%] mx-[5px]">
                <div className="w-[100%] rounded-[15px] relative h-[30vh] md:h-[50vh] overflow-hidden">
                  <img src={Team} alt="img of the team" className="w-[100%] h-[100%] transition-all ease-in-out duration-1000 hover:h-[150%] object-cover rounded-[15px] overflow-hidden" />
                  <div className="absolute backdrop-blur-sm top-0 left-0 right-0 bottom-0 flex items-center md:items-start md:left-[20px] flex-col">
                     <span className="text-white font-semibold translate-y-[77px] md:text-[60px] md:leading-10 lg:text-[80px] text-[30px]">{t('team.title')}</span>
                  </div>
               </div>
               </div>
               <div className="w-[100%] bg-bgBlack h-auto">
                <div className=" container grid w-[100%] py-[50px] h-auto gird-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[40px]">
                {TeamData.map((item) => (
                    <PersonCard key={item.id} {...item} />
                ))}
               </div>
               </div>
            </div>
         )}
        </>
    )
}
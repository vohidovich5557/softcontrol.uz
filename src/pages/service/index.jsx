import { servicesData } from "../../utilities/data";
import { ServicesCard } from "../../components/common/servicescard";


export const Services = () => {

    return (
        <>
         <div className="flex flex-col items-center font-grotesk overflow-hidden justify-center pb-[100px] gap-[100px] h-[100%]">
                {servicesData?.map((item) => (
                    <ServicesCard key={item.id} {...item} />
                ))}
            </div>
        </>
    )
}
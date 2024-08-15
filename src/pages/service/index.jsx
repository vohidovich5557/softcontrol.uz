import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners";
import { servicesData } from "../../utilities/data";
import { ServicesCard } from "../../components/common/servicescard";


export const Services = () => {
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
            <div className="flex flex-col items-center overflow-hidden justify-center pb-[100px] gap-[100px] h-[100%]">
                {servicesData?.map((item) => (
                    <ServicesCard key={item.id} {...item} />
                ))}
            </div>
         )}
        </>
    )
}
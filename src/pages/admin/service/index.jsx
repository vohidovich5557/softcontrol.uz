import {Service1} from './sections/service1'
import {Service2} from './sections/service2'

export const AdminService = () => {
    return (
        <>
        <div className="bg-white py-[10px] px-[10px] w-[100%] h-[100%] rounded-[14px]">
            <div className="w-[100%] h-[50%] border">
                <Service1 />
            </div>
            <div className="w-[100%] h-[50%] border">
                <Service2 />
            </div>
         </div>
        </>
    )
}
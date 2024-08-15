import { toast } from "sonner";
import { useDeletAdmin, useDeletLogin, useGetAdmins } from "../../../utilities/requests"
import { Create } from "./features/create";
import { Update } from "./features/update";
import { Delete } from "./features/delete";

export const AddingAdmin = () => {
    const {data, isLoading} = useGetAdmins()
    
    return (
        <>
         <div className="bg-white py-[30px] flex flex-col items-center gap-[30px] px-[10px] w-[100%] h-[100%] rounded-[14px]">
            <div className="flex items-center px-[20px] justify-between w-[100%] h-auto">
                <span className="text-[20px] font-medium text-black">Admin List*</span>
                <Create />
            </div>
            <div className='w-[100%] h-[100vh] overflow-auto flex flex-col items-center gap-[10px] border'>
                <div className='flex items-center justify-between w-[100%] border-b py-[10px] h-auto'>
                   <div className="w-[100%] flex items-center border-r justify-center">
                     <span className="text-[20px] font-medium text-black">username</span>
                   </div>
                     <div className="w-[100%] flex items-center px-[20px] border-r justify-center">
                        <span className="text-[20px] font-medium text-black">email</span>
                     </div>
                      <div className="w-[100%] flex items-center border-r justify-center">
                        <span className="text-[20px] font-medium text-black">user Type</span>
                      </div>
                       <div className="w-[100%] flex items-center border-r justify-center">
                        <span className="text-[20px] font-medium text-black">password</span>
                       </div>
                       <div className="w-[30%] px-[10px] flex items-center justify-center">
                        <span className="text-[20px] font-medium text-black">action</span>
                       </div>
                </div>
                <div className='flex items-center py-[10px] justify-between w-[100%] h-auto'>
                     <div className="w-[100%] flex flex-col gap-[15px]">
                        {data?.map((item) => (
                        <>
                         <div key={item.id} className="w-[100%] flex items-center border-b pb-[8px] justify-between">
                            <div className="w-[100%] flex  items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.username}</span>
                         </div>
                         <div className="w-[100%] flex px-[20px] items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.email}</span>
                         </div>
                          <div className="w-[100%] flex  items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.usertpye}</span>
                          </div>
                          <div className="w-[100%] flex items-center border-r  justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.password}</span>
                          </div>
                          <div className="w-[30%] px-[10px] flex items-center justify-center">
                            <Update id={item.id} />
                            <Delete id={item.id} />
                          </div>
                         </div>
                        </>
                    ))}
                     </div>
                </div>
            </div>
         </div>
        </>
    )
}
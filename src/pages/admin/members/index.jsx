import { toast } from "sonner"
import {DeletIcon} from '../../../components/svgs'
import { useDeletMembers, useGetMembers, usePutMembers } from "../../../utilities/requests"
import { useState } from "react"
import { Update } from "./features/update"
import { Create } from "./features/create"
import { Delete } from "./features/delete"


export const Members = () => {
    const [open, setOpen] = useState(false)
    const {data, isLoading} = useGetMembers()
    const {mutate, isPending} = useDeletMembers()
    const {mutate:updateMutate, isLoading:updateIsLoading} = usePutMembers()
    const deletMember = (id) => {
        mutate(id, {
            onSuccess: () => {
                window.location.reload()
                toast.success('Member deleted successfully')
            }
        })
    }

    const updateMember = (id) => {
        updateMutate(id, {
            onSuccess: () => {
                window.location.reload()
                toast.success('Member updated successfully')
            }
        })
    }
    return (
        <>
          <div className="bg-white py-[30px] flex flex-col items-center gap-[30px] px-[10px] w-[100%] h-[100%] rounded-[14px]">
            <div className="flex items-center px-[20px] justify-between w-[100%] h-auto">
                <span className="text-[20px] font-medium text-black">Member List*</span>
                <Create />
            </div>
            <div className='w-[100%] h-[100vh] overflow-auto flex flex-col items-center gap-[10px] border'>
                <div className='flex items-center justify-between w-[100%] border-b py-[10px] h-auto'>
                   <div className="w-[100%] flex items-center border-r justify-center">
                     <span className="text-[20px] font-medium text-black">F.I.O</span>
                   </div>
                     <div className="w-[30%] flex items-center px-[20px] border-r justify-center">
                        <span className="text-[20px] font-medium text-black">Age</span>
                     </div>
                      <div className="w-[100%] flex items-center border-r justify-center">
                        <span className="text-[20px] font-medium text-black">ID Number</span>
                      </div>
                       <div className="w-[100%] flex items-center border-r justify-center">
                        <span className="text-[20px] font-medium text-black">JSHSHR</span>
                       </div>
                        <div className="w-[60%] flex items-center border-r justify-center">
                        <span className="text-[20px] font-medium text-black">Role</span>
                       </div>
                       <div className="w-[60%] flex items-center border-r justify-center">
                        <span className="text-[20px] font-medium text-black">Contract</span>
                       </div>
                       <div className="w-[35%] px-[10px] flex items-center justify-center">
                        <span className="text-[20px] font-medium text-black">action</span>
                       </div>
                </div>
                <div className='flex items-center py-[10px] justify-between w-[100%] h-auto'>
                     <div className="w-[100%] flex flex-col gap-[15px]">
                        {data?.map((item) => (
                             <div key={item.id} className="w-[100%] flex items-center border-b pb-[8px] justify-between">
                            <div onClick={() => setOpen(!open)} className="w-[100%] cursor-pointer flex items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-center text-gray-600">{open ? item.name : item.name.slice(0, 10)}</span>
                         </div>
                         <div className="w-[30%] flex px-[20px] items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.age}</span>
                         </div>
                          <div className="w-[100%] flex  items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.idnumber}</span>
                          </div>
                          <div className="w-[100%] flex items-center border-r  justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.jshshr}</span>
                          </div>
                           <div className="w-[60%] flex items-center border-r  justify-center">
                            <span className="text-[18px] font-normal text-center text-yellow-600">{item.role}</span>
                          </div>
                          <div className="w-[60%] flex items-center border-r cursor-pointer  justify-center">
                            <span className="text-[18px] font-normal text-center underline text-blue-700">upload file</span>
                          </div>
                          <div className="w-[35%] px-[10px] flex items-center justify-center">
                            <Update id={item.id} />
                            <Delete id={item.id} />
                          </div>
                         </div>
                        ))}
                     </div>
                </div>
            </div>
         </div>
        </>
    )
}
import { useState } from "react"
import { HomeServiceModal } from "../component/serviceModal"
import {queryclient} from '../../../../../../hooks/store'
import { usePostServiceData } from "../../../../../../utilities/requests"
import { toast } from "sonner"


export const Create = () => {
    const [open, setOpen] = useState(false)
    const {mutate, isPending} = usePostServiceData()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClickClose = () => {
        setOpen(false)
    }

    const submit = (data) => {
        mutate(data, {
            onSuccess: () => {
                toast.success("Service created successfully")
                setOpen(false)
                queryclient.invalidateQueries(['get-service'])
            }
        })
        
    }
    return (
        <>
         <div>
           <span onClick={handleClickOpen} className='text-[30px] cursor-pointer font-normal text-gray-400'>+</span>
           <HomeServiceModal handleClose={handleClickClose} open={open} title={"Create"} submit={submit} />
         </div>
        </>
    )
}
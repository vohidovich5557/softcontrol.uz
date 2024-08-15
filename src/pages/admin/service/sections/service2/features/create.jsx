import { useState } from "react"
import {  ServiceCardModal } from "../component/serviceModal"


export const Create = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClickClose = () => {
        setOpen(false)
    }

    const submit = (data) => {
        console.log(data);
        
    }
    return (
        <>
         <div>
           <span onClick={handleClickOpen} className='text-[30px] cursor-pointer font-normal text-gray-400'>+</span>
           <ServiceCardModal handleClose={handleClickClose} open={open} title={"Create"} submit={submit} />
         </div>
        </>
    )
}
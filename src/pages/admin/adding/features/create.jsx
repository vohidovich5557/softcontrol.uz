import { usePostAdmins, usePostLogin, usePostRegister } from "../../../../utilities/requests";
import AddingModal from "../components/addingModal";
import {queryclient} from '../../../../hooks/store'
import { useState } from "react";
import { toast } from "sonner";

export const Create = () => {
    const [open, setOpen] = useState(false)
    const {mutate, isPending} = usePostAdmins()
    const {mutate:mutateAdmin, isPending:isPendingAdmin} = usePostRegister()

 const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = (data) => {
    mutate(data, {
        onSuccess: () => {
          toast.success('Admin added successfully')
          setOpen(false)
          queryclient.invalidateQueries(['get-admin'])
        }
    })
  }
    return (
        <>
        <div>
            <span onClick={handleClickOpen} className='text-[30px] cursor-pointer font-normal text-gray-400'>+</span>
            <AddingModal handleClose={handleClose} title={'Create'} btnTitle={'Create'} open={open} submit={submit} />
        </div>
        </>
    )
}
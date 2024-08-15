import { useState } from "react";
import { DeletIcon } from "../../../../components/svgs";
import { useDeletAdmin } from "../../../../utilities/requests";
import { queryclient } from "../../../../hooks/store";
import { Dialog, DialogContent } from "@mui/material";
import { toast } from "sonner";


export const Delete = ({id}) => {
    const [open, setOpen] = useState(false);
    const {mutate, isPending} = useDeletAdmin()
    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const deletAdmin = (id) => {
        mutate(id, {
            onSuccess: () => {
                toast.success('Admin deleted successfully')
                setOpen(false)
                queryclient.invalidateQueries(['get-admin'])
            }
        })
    }

    return (
        <>
         <div>
            <div onClick={handleClickOpen}>
                <DeletIcon />
            </div>
            <div>
                <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
           <div className='w-[50vh] h-auto flex flex-col gap-[30px] items-center justify-center'>
              <span className='text-[20px] font-medium text-center text-black'>Are You Sure You Want To Delete This Admin</span>
              <div className='flex items-center justify-center gap-[30px]'>
                <span className='cursor-pointer px-[20px] py-[10px] rounded-[14px] bg-red-600 text-white font-medium' onClick={handleClose}>Cancel</span>
                 <button className='cursor-pointer px-[20px] py-[10px] rounded-[14px] bg-btnBlue text-white font-medium' onClick={() => deletAdmin(id)}>Delete</button>
              </div>
           </div>
        </DialogContent>
      </Dialog>
            </div>
         </div>
        </>
    )
}
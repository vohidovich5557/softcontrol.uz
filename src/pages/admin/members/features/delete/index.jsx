import {useDeletMembers} from '../../../../../utilities/requests'
import {queryclient} from '../../../../../hooks/store'
import { DeletIcon } from '../../../../../components/svgs';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { toast } from 'sonner';


export const Delete = ({id}) => {
    const [open, setOpen] = useState(false);
    const {mutate, isLoading} = useDeletMembers()
    const deletMember = (id) => {
        mutate(id, {
            onSuccess: () => {
                toast.success('Member deleted successfully')
                setOpen(false)
                queryclient.invalidateQueries(['get-member'])

            }
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const hadleClickClose = () => {
        setOpen(false);
    }

    return (
        <>
         <div>
            <div onClick={handleClickOpen}>
                <DeletIcon />
            </div>
             <Dialog
        open={open}
        onClose={hadleClickClose}
      >
        <DialogContent>
           <div className='w-[50vh] h-auto flex flex-col gap-[30px] items-center justify-center'>
              <span className='text-[20px] font-medium text-center text-black'>Are You Sure You Want To Delete This Member</span>
              <div className='flex items-center justify-center gap-[30px]'>
                <span className='cursor-pointer px-[20px] py-[10px] rounded-[14px] bg-red-600 text-white font-medium' onClick={hadleClickClose}>Cancel</span>
                 <button className='cursor-pointer px-[20px] py-[10px] rounded-[14px] bg-btnBlue text-white font-medium' onClick={() => deletMember(id)}>Delete</button>
              </div>
           </div>
        </DialogContent>
      </Dialog>
         </div>
        </>
    )
}
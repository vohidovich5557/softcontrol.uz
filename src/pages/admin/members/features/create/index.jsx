import * as React from 'react';
import { usePostMember } from '../../../../../utilities/requests';
import { toast } from 'sonner';
import { MemberModal } from '../../components/membersModal';
import { queryclient } from '../../../../../hooks/store';

export const Create = () => {
  const [open, setOpen] = React.useState(false);
  const {mutate, isPending} = usePostMember()

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
            queryclient.invalidateQueries(['get-member'])
        },
    })
  }

    return (
        <>
         <div>
            <span onClick={handleClickOpen} className='text-[30px] cursor-pointer font-normal text-gray-400'>+</span>
            <MemberModal handleClose={handleClose} title={'Create'} open={open} submit={submit} />
         </div>
        </>
    )
}
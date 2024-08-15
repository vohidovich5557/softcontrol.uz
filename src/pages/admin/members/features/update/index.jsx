import { useState } from "react";
import { EditIcon } from "../../../../../components/svgs"
import { useGetMembers, usePutMembers } from "../../../../../utilities/requests";
import { MemberModal } from "../../components/membersModal";
import { toast } from "sonner";
import { queryclient } from "../../../../../hooks/store"


export const Update = ({id}) => {
const [open, setOpen] = useState(false);
const {data:getValue, isLoading} = useGetMembers()
const {mutate, isPending} = usePutMembers(id)
const result = getValue?.find(item => item.id === id)

 const handleClickOpen = () => {
    setOpen(true);
  };

 const handleClose = () => {
    setOpen(false);
  };

 const submit = (data) => {
    mutate(data, {
        onSuccess: () => {
            setOpen(false)
            toast.success('Member updated successfully')
            queryclient.invalidateQueries(['get-member'])
        }
    })
  }

    return (
        <>
         <div onClick={handleClickOpen}>
            <EditIcon />
         </div>
         <MemberModal handleClose={handleClose} title={'Update'} open={open} submit={submit} initialValues={result} />
        </>
    )
}
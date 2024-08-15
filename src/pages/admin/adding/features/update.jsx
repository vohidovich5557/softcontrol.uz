import { useState } from "react"
import { EditIcon } from "../../../../components/svgs"
import AddingModal from "../components/addingModal"
import { useGetAdmins, usePostAdmins, usePutAdmins } from "../../../../utilities/requests"
import { toast } from "sonner"
import { queryclient } from "../../../../hooks/store"


export const Update = ({id}) => {
    const {data, isLoading} = useGetAdmins()
    const result = data?.find(item => item.id === id)
    const [open, setOpen] = useState(false)
    const {mutate, isPending} = usePutAdmins(id)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const submit = (data) => {
        mutate(data, {
            onSuccess: () => {
                toast.success('Admin updated successfully')
                setOpen(false)
                queryclient.invalidateQueries(['get-admin'])
            }
        })
    }
    return (
        <>
         <div>
            <div onClick={handleOpen}>
                <EditIcon />
            </div>
            <AddingModal title={"Update"} handleClose={handleClose} btnTitle={"Update"} open={open} submit={submit} initalValue={result} />
         </div>
        </>
    )
}
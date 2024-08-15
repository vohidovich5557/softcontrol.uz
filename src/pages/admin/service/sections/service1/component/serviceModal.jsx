import Dialog from '@mui/material/Dialog';
import z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import React from 'react';

const schema = z.object({
  file: z.any(),
  title: z.string().min(2, {message: 'Title is  must not be less then 4'}).max(20, {message: 'Title is too long'}),
  description: z.string().min(9, {message: 'Description number is is must not be less then 9'}).max(50, {message: 'Description number is too long'}),

})

export const HomeServiceModal = ({handleClose, open, submit, title, initialValues}) => {
    const {
      register, 
      handleSubmit, 
      reset, 
      formState: {errors}} = useForm({resolver: zodResolver(schema)});
    return (
        <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{title} Home Service</DialogTitle>
        <DialogContent>
              <div className='w-[50vh] h-auto flex flex-col items-center justify-center'>
              <form className='w-[100%] flex flex-col items-center gap-[10px]' action='' onSubmit={handleSubmit(submit)}>
                <div className='flex w-[100%] flex-col items-start gap-[10px]'>
                    <label>Icon:</label>
                    <input type="file" {...register('file', {required: true})} placeholder='Select Icon for the service' defaultValue={initialValues?.name} className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors?.file && <p className='text-red-500 text-[12px]'>{errors.file.message}</p>}
                </div>
                <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>Title:</label>
                    <input type="text" {...register('title', {required: true})} placeholder="enter title for the service" defaultValue={initialValues?.age} className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.title && <p className='text-red-500 text-[12px]'>{errors.age.message}</p>}
                </div>
                 <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>Description:</label>
                    <textarea type="text" {...register('description', {required: true})} placeholder="Enter description for the service" defaultValue={initialValues?.idnumber} className='w-[100%] h-[20vh] outline-none px-[20px] py-[10px] border rounded-[14px]'></textarea>
                    {errors.description && <p className='text-red-500 text-[12px]'>{errors.description.message}</p>}
                </div>
               <div className='flex items-center justify-center gap-[20px]'>
                 <span className='cursor-pointer px-[20px] py-[10px] rounded-[14px] bg-red-600 text-white font-medium' onClick={handleClose}>Cancel</span>
                 <button className='cursor-pointer px-[20px] py-[10px] rounded-[14px] bg-btnBlue text-white font-medium' type='submit'>{title}</button>
               </div>
              </form>
           </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
    )
}
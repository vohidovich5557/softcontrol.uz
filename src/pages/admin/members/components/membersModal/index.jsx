import Dialog from '@mui/material/Dialog';
import z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import React from 'react';

const schema = z.object({
  name: z.string().min(5, {message: 'F.I.SH is must not be less then 5'}).max(50, {message: 'F.I.SH is too long'}),
  age: z.string().min(2, {message: 'Age is  must not be less then 1'}).max(3, {message: 'Age is too long'}),
  idnumber: z.string().min(9, {message: 'ID number is is must not be less then 9'}).max(10, {message: 'ID number is too long'}),
  jshshr: z.string().min(14, {message: 'JSHSHR is is must not be less then 14'}).max(15, {message: 'JSHSHR is too long'}),
  role: z.string().min(3, {message: 'Position is is must not be less then 10'}).max(30, {message: 'Position is too long'}),

})

export const MemberModal = ({handleClose, open, submit, title, initialValues}) => {
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
        <DialogTitle>{title} Member</DialogTitle>
        <DialogContent>
              <div className='w-[50vh] h-auto flex flex-col items-center justify-center'>
              <form className='w-[100%] flex flex-col items-center gap-[10px]' action='' onSubmit={handleSubmit(submit)}>
                <div className='flex w-[100%] flex-col items-start gap-[10px]'>
                    <label>F.I.SH:</label>
                    <input type="text" {...register('name', {required: true})} placeholder='F.I.SH' defaultValue={initialValues?.name} className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors?.name && <p className='text-red-500 text-[12px]'>{errors.name.message}</p>}
                </div>
                <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>Age:</label>
                    <input type="text" {...register('age', {required: true})} placeholder='**' defaultValue={initialValues?.age} className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.age && <p className='text-red-500 text-[12px]'>{errors.age.message}</p>}
                </div>
                 <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>ID Number:</label>
                    <input type="text" {...register('idnumber', {required: true})} placeholder='*********' defaultValue={initialValues?.idnumber} className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.idnumber && <p className='text-red-500 text-[12px]'>{errors.idnumber.message}</p>}
                </div>
                 <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>JSHSHR:</label>
                    <input type="text" {...register('jshshr', {required: true})} placeholder='**************' defaultValue={initialValues?.jshshr} className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.jshshr && <p className='text-red-500 text-[12px]'>{errors.jshshr.message}</p>}
                </div>
                <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>Role:</label>
                    <input type="text" {...register('role', {required: true})} placeholder='who is here' defaultValue={initialValues?.role} className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.role && <p className='text-red-500 text-[12px]'>{errors.role.message}</p>}
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
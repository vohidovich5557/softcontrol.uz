import * as React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Dialog, DialogContent, DialogTitle } from '@mui/material';


const schema = z.object({
  username: z.string().min(5, {message: 'Username is must not be less then 5'}).max(50, {message: 'Username is too long'}),
  email: z.string().min(5, {message: 'Email is must not be less then 5'}).max(50, {message: 'Email is too long'}),
  usertpye: z.string().min(5, {message: 'Usertpye is must not be less then 5'}).max(50, {message: 'Usertpye is too long'}),
  password: z.string().min(5, {message: 'Password is must not be less then 5'}).max(50, {message: 'Password is too long'}),
})

export default function AddingModal({handleClose, open, submit, btnTitle, title, initalValue}) {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: zodResolver(schema)
  });

  return (
    
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{title} Admin</DialogTitle>
        <DialogContent>
           <div className='w-[50vh] h-auto flex flex-col items-center justify-center'>
              <form className='w-[100%] flex flex-col items-center gap-[10px]' onSubmit={handleSubmit(submit)}>
                <div className='flex w-[100%] flex-col items-start gap-[10px]'>
                    <label>username:</label>
                    <input type="text" {...register('username', {required: true})} defaultValue={initalValue?.username} placeholder='only your first name' className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.username && <p className='text-red-500 text-[12px]'>{errors.username.message}</p>}
                </div>
                <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>email:</label>
                    <input type="email" {...register('email', {required: true})} defaultValue={initalValue?.email} placeholder='your active email' className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.email && <p className='text-red-500 text-[12px]'>{errors.email.message}</p>}
                </div>
                 <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>userType:</label>
                    <input type="text" {...register('usertpye', {required: true})} defaultValue={initalValue?.usertpye} placeholder='kind of admin' className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.usertpye && <p className='text-red-500 text-[12px]'>{errors.usertpye.message}</p>}
                </div>
                 <div className='flex flex-col w-[100%] items-start gap-[10px]'>
                    <label>password:</label>
                    <input type="password" {...register('password', {required: true})} defaultValue={initalValue?.password} placeholder='*****' className='w-[100%] h-auto outline-none px-[20px] py-[10px] border rounded-[14px]' />
                    {errors.password && <p className='text-red-500 text-[12px]'>{errors.password.message}</p>}
                </div>
               <div className='flex items-center justify-center gap-[20px]'>
                 <span className='cursor-pointer px-[20px] py-[10px] rounded-[14px] bg-red-600 text-white font-medium' onClick={handleClose}>Cancel</span>
                 <button className='cursor-pointer px-[20px] py-[10px] rounded-[14px] bg-btnBlue text-white font-medium' type='submit'>{btnTitle}</button>
               </div>
              </form>
           </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

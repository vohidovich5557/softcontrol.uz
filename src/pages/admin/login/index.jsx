import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import Logo from '../../../images/logo2.png'
import { usePostLogin } from "../../../utilities/requests";


export const AdminLogin = () => {
  const navigate = useNavigate();
  const {mutate, isPending} = usePostLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        console.log(res);
        Cookies.set('admin-token', res.accessToken);
        if(res.user) {
          localStorage.setItem('user', JSON.stringify(res.user))
        }
        
        navigate("/admin");
      },
      onError: (res) => {
        console.log(res);
        
      }
    })
  };
  return (
    <>
      <div className="w-[100%] flex items-center justify-center  h-[100vh] bg-gray-200">
        <div className=" flex flex-col justify-between bg-white py-[20px]  items-center gap-[20px] w-[40%] translate-y-[40px] lg:translate-y-0 md:w-[60%] lg:w-[30%] h-[400px]">
            <span className="text-[25px] whitespace-nowrap font-medium text-gray-500">Admin Soft</span>
            <div className="w-[100%]  px-[20px] h-[80%]">
                <form className="flex flex-col items-center justify-between h-[100%] pb-[20px] w-[100%]" onSubmit={handleSubmit(submit)}>
                    <div className="flex flex-col w-[100%] items-center gap-[10px]">
                        <div className="flex flex-col w-[100%] items-start gap-[10px]">
                        <label className="text-[16px] font-normal text-slate-600">username</label>
                        <input type="email" {...register('email', {required: 'Please enter (correct) username'})} className="w-[100%] h-auto py-[10px] text-center outline-none shadow-md focus:shadow-gray-400 border border-gray-200 rounded-[5px]" />
                    </div>
                     <div className="flex flex-col w-[100%] items-start gap-[10px]">
                        <label className="text-[16px] font-normal text-slate-600">password</label>
                        <input type="text" {...register('password', {required: 'Please enter (correct) password'})} className="w-[100%] h-auto py-[10px] text-center outline-none shadow-md focus:shadow-gray-400 border border-gray-200 rounded-[5px]" />
                    </div>
                    </div>
                    <button className="w-[100%] h-auto py-[12px] shadow-md shadow-white rounded-[5px] bg-btnBlue/60 text-white">Enter Page</button>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};
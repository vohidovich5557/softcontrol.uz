import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"


export const AdminMain = () => {
    const userType = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    if(!Cookies.get('admin-token')) return <Navigate to='/login' replace />

    const navigateout = () => {
        Cookies.remove('admin-token')
        localStorage.clear()
        navigate('/login')
    }
    return (
        <>
         <div className="flex w-[100%] h-[100vh]  items-center justify-center">
            <div className="w-[20%] bg-btnWhite flex flex-col pt-[100px] pb-[20px] items-center justify-between gap-[40px] h-[100%]">
               <div className="flex flex-col items-start gap-[40px]">
                 <div className="flex items-center justify-center gap-[10px]">
                    <Link to='/admin'><span className="text-[20px] active:text-red-400 cursor-pointer font-medium text-black">Home Editior</span></Link>
                </div>
                <div className="flex items-center justify-center gap-[10px]">
                    <Link to="/admin/team"><span className="text-[20px] active:text-red-400 font-medium text-black">Team Editor</span></Link>
                </div>
                 <div className="flex items-center justify-center gap-[10px]">
                    <Link to="/admin/service"><span className="text-[20px] active:text-red-400 font-medium text-black">Service Editor</span></Link>
                </div>
                {userType && userType.usertpye === 'adminMain' ? (
                    <>
                      <div className="flex items-center justify-center gap-[10px]">
                    <Link to="/admin/addingAdmin"><span className="text-[20px] active:text-red-400 font-medium text-black">Adding Admin</span></Link>
                </div>
                <div className="flex items-center justify-center gap-[10px]">
                    <Link to="/admin/members"><span className="text-[20px] active:text-red-400 font-medium text-black">Members List</span></Link>
                </div>
                    </>
                ) : null}
               </div>
               <div>
                <span onClick={navigateout} className="text-[20px] cursor-pointer font-medium text-red-500">Log Out</span>
               </div>
            </div>
            <div className="w-[80%] py-[20px] bg-gray-100 px-[30px] h-[100%] ">
                <Outlet />
            </div>
         </div>
        </>
    )
}
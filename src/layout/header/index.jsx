import { useState, useEffect } from 'react'
import { Burger, CloseBtn } from '../../components/svgs'
import { navData } from '../../utilities/data'
import { Link, NavLink } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import LangSelector from '../../components/common/langSelector'
import Logo from '../../images/logo2.png'

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const {t} = useTranslation()

    const handleScroll = () => {
        if (window.scrollY > 89) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <div className={`bg-white z-40 flex w-[100%] items-center justify-between transition-all duration-500 ${isScrolled ? 'fixed w-[100%] z-50 top-0 left-0 right-0 transition-all duration-700 shadow-md' : ''}`}>
                <div className={`container bg-white z-30 flex py-[20px] items-center justify-between transition-all duration-500`}>
                <div onClick={() => setOpen(!open)} className='flex md:hidden transition-all duration-500'>
                    {open ? <CloseBtn /> : <Burger />}
                </div>
                <div className={`w-[30%] flex lg:hidden items-center gap-[10px]`}>
                    <Link to="/">
                        <span className='text-[23px] font-medium text-black'>SoftControl</span>
                    </Link>
                </div>
                <div className={`w-[20%] h-[50px] hidden lg:flex items-center gap-[10px]`}>
                   <Link to='/' className='flex items-center gap-[3px]'>
                       <div className='w-[100px] h-auto'>
                        <img src={Logo} alt="img of the logo" className='w-[100%] h-[100%] object-contain' />
                       </div>
                       <span className='text-[23px] font-medium text-black'>SoftControl</span>
                   </Link>
                </div>
                <div className="hidden md:flex items-center mr-[20px] justify-evenly w-[70%] gap-[20px]">
                    <div className='md:flex hidden gap-[30px] lg:gap-[70px] items-center'>
                        {navData?.map((i) => (
                            <NavLink
                                key={i.id}
                                to={i.path}
                                className={({ isActive }) => isActive ? 'flex flex-col items-center relative justify-center gap-[20px] text-blue-500' : 'flex flex-col items-center relative justify-center gap-[20px] text-navColor'}
                            >
                                <span className='text-[14px] lg:text-[17px] hover:text-btnBlue transition-all duration-500 font-normal'>{i.name(t)}</span>
                            </NavLink>
                        ))}
                    </div>
                    <button className='w-[120px] rounded-[14px] hover:text-white transition-all duration-300 h-[40px] text-btnWhite bg-btnBlue'>{t('header.touch')}</button>
                </div>
                <div>
                    <LangSelector />
                </div>
            </div>
            </div>
            <div className={`${open ? 'translate-y-0' : 'translate-y-[-100%]'} overflow-hidden fixed pt-[20px] z-50 w-[100%] h-[100vh] px-[20px] transition-all items-center duration-700 top-0 left-0 bottom-0 right-0 bg-gray-300`}>
                <div className='w-[100%] h-auto flex items-center justify-between'>
                    <div className='w-[200px]'>
                        <Link onClick={() => setOpen(!open)} to="/">
                            <span className='text-[20px] font-medium text-black'>SoftControl</span>
                        </Link>
                    </div>
                    <div onClick={() => setOpen(!open)}>
                        <CloseBtn />
                    </div>
                </div>
                <div className='flex flex-col h-[50vh] gap-[30px] items-center justify-center'>
                    {navData?.map((item) => (
                        <Link onClick={() => setOpen(!open)} key={item.id} to={item.path}>
                            <span className='text-navColor hover:text-black transition-all duration-700'>{item.name(t)}</span>
                        </Link>
                    ))}
                    <button className='w-[150px] rounded-[14px] hover:text-white transition-all duration-300 h-[50px] text-btnWhite bg-btnBlue'>{t('header.touch' )}</button>
                </div>
            </div>
        </>
    )
}

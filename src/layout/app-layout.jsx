import {Header} from './header'
import {Footer} from './footer'
import { Outlet } from 'react-router-dom'
import { useRef } from 'react'

export const AppLayout = () => {
    return (
        <>
        <div className="flex w-[100%] flex-col items-center justify-between h-[100%]">
            <div className="flex w-[100%] justify-between flex-col">
                <header>
                    <Header />
                </header>
                <main>
                    <div>
                        <Outlet />
                    </div>
                </main>
            </div>
            <footer className='w-[100%] bg-bgBlack'>
                <Footer />
            </footer>
        </div>
        </>
    )
}
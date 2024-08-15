import { Routes, Route } from "react-router-dom"
import { AppLayout } from "./layout/app-layout"
import {Home} from './pages/home'
import {About} from './pages/about'
import {Contact} from './pages/contact'
import {Services} from './pages/service'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners"
import {AdminMain} from './pages/admin'
import {AdminHome} from './pages/admin/home'
import { AdminLogin } from "./pages/admin/login"
import {AdminTeam} from './pages/admin/team'
import {AdminService} from './pages/admin/service'
import { AddingAdmin } from "./pages/admin/adding"
import {Members} from './pages/admin/members'
import { useGetLogins } from "./utilities/requests"

function App() {
  const userType = JSON.parse(localStorage.getItem('user'))
  const [loading, setLoading] = useState(false);

  console.log(userType && userType.usertpye);
  
  

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration (in milliseconds)
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: false,
    });
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, [])

  return (
    <> 
    <div className="relative w-[100%] h-[100%]">
      {loading ? (
      <div className="w-[100%] h-[100vh] flex items-center justify-center">
        <PropagateLoader size={21} color="#b3b3b3"  />
      </div>
    ) : (
      <Routes>
      <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="services" element={<Services />}/>
      </Route>
      <Route path="login" element={<AdminLogin />} />
       <Route path="/admin" element={<AdminMain />}>
        <Route index element={<AdminHome />} />
        <Route path="team" element={<AdminTeam />} />
        <Route path="service" element={<AdminService />} />
        {userType &&userType.usertpye === "adminMain" ? (
          <>
           <Route path="addingAdmin" element={<AddingAdmin />}/>
        <Route path="members" element={<Members />}/>
          </>
        ) : (null)}

      </Route>
    </Routes>
    ) }
    </div>
    </>
  )
}

export default App

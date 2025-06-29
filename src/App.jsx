import { useEffect, useState } from 'react'
import {useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import services from './appwrite/configuration'
import {login,logout} from './store/authSlice'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
      dispatch(login({userData}));}
    else {
      dispatch(logout());
    }
    })
    .catch((error)=>{console.log("Login Logout error: ",error)})
    .finally(()=> setLoading(false))
  },[])


  return !loading?(<div className='min-h-screen flex flex-wrap content-between bg-gray-50'>
    <div className="w-full block">
      <Header/>
      <main>
       <Outlet/> 
      </main>
      <Footer/>
    </div>
    </div>
    ):(<div className='min-h-screen text-orange-500'>Loading</div>)

}
export default App

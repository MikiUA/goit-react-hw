import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { Provider} from 'react-redux'
import {store}from './redux/store'
import { useCheckUserQuery } from './redux/userApi'

import ContactsPage from './pages/ContactsPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Loader from 'generalComponents/Loader'

export default function App() {
  return (
    <Provider store={store}>
      <SubApp/>
    </Provider>
  )
}

const routes=(isUserLoggedIn)=>{
  if (isUserLoggedIn) return (
    
    <Routes>
      <Route path='/' element={<ContactsPage/>}/>
      <Route path="/*" element={<Navigate to="./" replace/>}/> 
    </Routes>
  )
  else return(
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path="/*" element={<Navigate to='./login' replace/>}/> 
    </Routes>
  )
}

function SubApp(){
  let {data:user,status}=useCheckUserQuery();
  if (status==='pending') return <Loader/>;
  if (status==='rejected') return routes(null);
  return routes(user);
}

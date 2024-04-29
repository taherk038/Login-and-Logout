import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import Login from './components/Login'
import Regist from './components/Regist'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  const [name,setName]=useState('')
  const [username,setUsername]=useState('')
  const [password,setpassword]=useState('')
  const [cpassword,setCpassword]=useState('')

  let c=(e)=>{
    setName(e.target.value);
  }

  let c1=(e)=>{
    setUsername(e.target.value);
  }

  let c2=(e)=>{
    setpassword(e.target.value);
  }

  let c3=(e)=>{
    setCpassword(e.target.value);
  }

  return (
    <>
   
    <BrowserRouter>


<Routes>
 
<Route path="/" element={<Login username={username}  password={password}  c1={c1}  c2={c2} />}  />
  <Route path='/Page'  element={ <Page username={username} name={name}/> } />
  <Route path='/Regist' element={<Regist name={name} username={username}  password={password} cpassword={cpassword} c={c} c1={c1}  c2={c2} c3={c3}  />} />
    
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App

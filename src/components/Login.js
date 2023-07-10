import React from 'react'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import '../styles/Login.css'

const Login = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        // console.log(email,password)
        try {
            const result = await auth.signInWithEmailAndPassword(email,password)
            window.alert(`welcome ${result.user.email}`)
            navigate('/')
        } catch (error) {
            window.alert(`${error.message}`)
        }

    }

  return (
    <>
    <div className='login1'>
        <h1 className='login2'>You Need To Login First</h1>
    </div>
    <div className='login'>
        <h3 className='text-lg'>Please Login!</h3>
        <form onSubmit={(e)=>handleSubmit(e)} >
            <div>
                <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder='enter your email' value={password} onChange={(e)=>setPassword(e.target.value)} />

            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
    </>
  )
}

export default Login
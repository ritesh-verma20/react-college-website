import React from 'react'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import '../styles/Signup.css'

const Signup = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(email,password)
        try {
            const result = await auth.createUserWithEmailAndPassword(email,password)
            window.alert(`Welcome Account has been created ${result.user.email}`)
            navigate('')
            setEmail('')
            setPassword('')
        } catch (error) {
            window.alert(`${error.message}`)
        }
        
    }

  return (
    <div className='signup'>
        <h3 className='text-lg'>Please Signup!</h3>
        <form onSubmit={(e)=>handleSubmit(e)} >
            <div>
                <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder='enter your email' value={password} onChange={(e)=>setPassword(e.target.value)} />

            </div>
            <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}

export default Signup
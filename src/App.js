import "./App.css";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from "./components/Signup";
import React, {useState , useEffect} from "react";
import {auth} from './firebase'

import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
function App() {
  const [user , setUser] = useState(null)
    useEffect(()=>{
     auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
     })
    },[])



  return (
    <>
    <Router>
    <Navbar user={user}/>
    <Routes>
      <Route path="/" element={<Home user={user}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;

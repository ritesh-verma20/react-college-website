import "./App.css";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cake from './components/Cake'
import Categories from "./components/Categories";
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Home/>
    <Cake/>
    <Categories/>
    <Services/>
    <Contact/>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
